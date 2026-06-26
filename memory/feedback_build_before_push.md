---
name: Build before push
description: Always run npm run build locally on Windows before git push
type: feedback
---

Always run `npm run build` in the Windows working directory before pushing.

**Why:** User got burned by lint/TS errors discovered only after push, causing extra fix commits.

**How to apply:** After staging and before `git push`, run `npm run build` via PowerShell. Only push if it exits with code 0.
