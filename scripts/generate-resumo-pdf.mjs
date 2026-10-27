#!/usr/bin/env node
/**
 * Back-compat wrapper: generate the 1-page resumo PDF.
 * Prefer: npm run pdf:resumo  (or pdf:all)
 */
import { spawnSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const baseUrl = process.argv[2] || "http://127.0.0.1:43123";
const script = path.join(__dirname, "generate-pdfs.mjs");

const result = spawnSync(process.execPath, [script, baseUrl, "resumo"], {
  stdio: "inherit",
});
process.exit(result.status ?? 1);
