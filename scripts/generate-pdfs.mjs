#!/usr/bin/env node
/**
 * Generate public PDF assets from the live Next.js print layouts
 * using headless Chromium.
 *
 * - /resumo                 → public/KATA_UDE_UKE_RESUMO.pdf
 * - /                       → public/KATA_UDE_UKE.pdf
 * - /faixa-amarela/resumo   → public/CINTO_AMARELO_RESUMO.pdf
 *
 * Requires the Next.js server to be up (dev or prod).
 *
 * Usage: node scripts/generate-pdfs.mjs [baseUrl] [which]
 *   which: all | resumo | full | cinto   (default: all)
 * Default baseUrl: http://127.0.0.1:43123
 */
import { spawn } from "node:child_process";
import {
  existsSync,
  mkdirSync,
  readFileSync,
  rmSync,
  statSync,
} from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

/** Reject empty/HTML 404 stubs that look like failed downloads (~9KB). */
function assertValidPdf(filePath, minBytes = 50_000) {
  if (!existsSync(filePath)) {
    throw new Error(`PDF missing: ${filePath}`);
  }
  const size = statSync(filePath).size;
  const head = readFileSync(filePath).subarray(0, 8);
  const magic = head.toString("utf8");
  if (!magic.startsWith("%PDF-")) {
    throw new Error(
      `Invalid PDF at ${filePath}: expected %PDF- header, got ${JSON.stringify(magic)} (${size} bytes)`
    );
  }
  if (size < minBytes) {
    throw new Error(
      `PDF too small at ${filePath}: ${size} bytes (min ${minBytes}). Likely a failed print or HTML error page.`
    );
  }
}

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const baseUrl = (process.argv[2] || "http://127.0.0.1:43123").replace(/\/$/, "");
const which = process.argv[3] || "all";

const chromeCandidates = [
  process.env.CHROME_PATH,
  "/usr/bin/google-chrome-stable",
  "/usr/bin/google-chrome",
  "/usr/local/bin/google-chrome",
  "/usr/bin/chromium-browser",
  "/usr/bin/chromium",
].filter(Boolean);

const chrome = chromeCandidates.find((p) => existsSync(p));
if (!chrome) {
  console.error("No Chromium/Chrome binary found.");
  process.exit(1);
}

const jobs = [];
if (which === "all" || which === "resumo") {
  jobs.push({
    name: "resumo",
    url: `${baseUrl}/resumo`,
    out: path.join(root, "public", "KATA_UDE_UKE_RESUMO.pdf"),
    // Single A4 sheet — shorter settle time
    budgetMs: 15_000,
    timeoutMs: 90_000,
  });
}
if (which === "all" || which === "full") {
  jobs.push({
    name: "full",
    url: `${baseUrl}/`,
    out: path.join(root, "public", "KATA_UDE_UKE.pdf"),
    // Multi-page manual with many images
    budgetMs: 45_000,
    timeoutMs: 180_000,
  });
}
if (which === "all" || which === "cinto") {
  jobs.push({
    name: "cinto",
    url: `${baseUrl}/faixa-amarela/resumo`,
    out: path.join(root, "public", "CINTO_AMARELO_RESUMO.pdf"),
    budgetMs: 15_000,
    timeoutMs: 90_000,
  });
}

if (jobs.length === 0) {
  console.error(`Unknown which="${which}". Use all | resumo | full | cinto.`);
  process.exit(1);
}

console.log(`Using ${chrome}`);
console.log(`Base URL ${baseUrl}`);

/**
 * Chrome sometimes writes the PDF successfully then hangs on shutdown in
 * headless environments. Treat a non-empty output file as success and kill
 * the process after it appears (or after timeout).
 */
function printToPdf({ url, out, budgetMs, timeoutMs }) {
  return new Promise((resolve, reject) => {
    const profileDir = path.join(
      "/tmp",
      `chrome-pdf-profile-${process.pid}-${Date.now()}`
    );
    mkdirSync(profileDir, { recursive: true });

    // Remove stale output so we can detect a fresh write
    try {
      if (existsSync(out)) rmSync(out);
    } catch {
      /* ignore */
    }

    const args = [
      "--headless=new",
      "--disable-gpu",
      "--no-sandbox",
      "--disable-dev-shm-usage",
      "--disable-software-rasterizer",
      `--user-data-dir=${profileDir}`,
      "--no-first-run",
      "--no-default-browser-check",
      "--hide-scrollbars",
      "--no-pdf-header-footer",
      "--print-to-pdf-no-header",
      "--run-all-compositor-stages-before-draw",
      `--virtual-time-budget=${budgetMs}`,
      `--print-to-pdf=${out}`,
      url,
    ];

    console.log(`Printing ${url} → ${out}`);
    const child = spawn(chrome, args, {
      stdio: ["ignore", "pipe", "pipe"],
    });

    let settled = false;
    const finish = (err) => {
      if (settled) return;
      settled = true;
      clearInterval(poll);
      clearTimeout(hardTimeout);
      try {
        child.kill("SIGKILL");
      } catch {
        /* ignore */
      }
      try {
        rmSync(profileDir, { recursive: true, force: true });
      } catch {
        /* ignore */
      }
      if (err) reject(err);
      else resolve(out);
    };

    child.stdout.on("data", (d) => process.stdout.write(d));
    child.stderr.on("data", (d) => process.stderr.write(d));
    child.on("error", (err) => finish(err));
    child.on("exit", (code) => {
      if (existsSync(out) && statSync(out).size > 1000) {
        finish(null);
      } else if (!settled) {
        finish(
          new Error(
            `Chrome exited with code ${code} and PDF missing/empty: ${out}`
          )
        );
      }
    });

    let lastSize = -1;
    let stableTicks = 0;
    const poll = setInterval(() => {
      if (!existsSync(out)) return;
      try {
        const size = statSync(out).size;
        if (size > 1000 && size === lastSize) {
          stableTicks += 1;
          if (stableTicks >= 3) {
            console.log(`Wrote ${out} (${size} bytes)`);
            finish(null);
          }
        } else {
          lastSize = size;
          stableTicks = 0;
        }
      } catch {
        /* ignore transient stat errors */
      }
    }, 500);

    const hardTimeout = setTimeout(() => {
      if (existsSync(out) && statSync(out).size > 1000) {
        console.log(`Wrote ${out} (${statSync(out).size} bytes) [timeout flush]`);
        finish(null);
      } else {
        finish(new Error(`Timed out waiting for PDF: ${out}`));
      }
    }, timeoutMs);
  });
}

for (const job of jobs) {
  await printToPdf(job);
  assertValidPdf(job.out);
}

console.log("Done.");
