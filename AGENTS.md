<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Cloud Agent

Install with `npm ci`. Start the dev server with `npm run dev -- --hostname 0.0.0.0 --port 43123`. The manual is at `/` and the one-page sheet is at `/resumo`. `allowedDevOrigins` includes `127.0.0.1`, so client features work at both `http://localhost:43123` and `http://127.0.0.1:43123`.
