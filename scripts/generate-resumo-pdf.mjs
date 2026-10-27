#!/usr/bin/env node
/**
 * Generate public/KATA_UDE_UKE_RESUMO.pdf from the /resumo print layout
 * using headless Chromium. Requires the Next.js dev/prod server to be up.
 *
 * Usage: node scripts/generate-resumo-pdf.mjs [baseUrl]
 * Default baseUrl: http://127.0.0.1:43123
 */
import { spawnSync } from "node:child_process";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const outPdf = path.join(root, "public", "KATA_UDE_UKE_RESUMO.pdf");
const baseUrl = process.argv[2] || "http://127.0.0.1:43123";
const targetUrl = `${baseUrl.replace(/\/$/, "")}/resumo`;

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

console.log(`Using ${chrome}`);
console.log(`Printing ${targetUrl} → ${outPdf}`);

const result = spawnSync(
  chrome,
  [
    "--headless=new",
    "--disable-gpu",
    "--no-sandbox",
    "--disable-dev-shm-usage",
    "--hide-scrollbars",
    "--no-pdf-header-footer",
    "--print-to-pdf-no-header",
    `--print-to-pdf=${outPdf}`,
    targetUrl,
  ],
  { encoding: "utf8" }
);

if (result.stdout) process.stdout.write(result.stdout);
if (result.stderr) process.stderr.write(result.stderr);

if (result.status !== 0 || !existsSync(outPdf)) {
  console.error("PDF generation failed.");
  process.exit(result.status || 1);
}

console.log(`Wrote ${outPdf}`);
