#!/usr/bin/env node
/**
 * Back-compat wrapper — prefer `npm run pdf:resumo` / `pdf:all`.
 * Delegates to scripts/generate-pdfs.mjs for the 1-page resumo PDF.
 */
import { spawnSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const baseUrl = process.argv[2] || "http://127.0.0.1:43123";
const result = spawnSync(
  process.execPath,
  [path.join(__dirname, "generate-pdfs.mjs"), baseUrl, "resumo"],
  { stdio: "inherit" }
);
process.exit(result.status ?? 1);
