# Context

Status: ACTIVE

> `CONTEXT.md` is current-only restart state. Keep completed history in Git history and closed Issues/PRs.

## Project Identity

- Project: MyTestLab Engineering Lab
- Primary Repository: `mytestlab123/mytestlab123.github.io`
- Live Target: `https://mytestlab123.github.io/`
- Context: PERSONAL
- Environment: LAB

## Current Truth

- This repository is the safe learning/prototype site for Astro + Starlight.
- The real `amitkarpe.github.io` portal remains untouched during this experiment.
- Astro + Starlight build and GitHub Pages deployment are proven on `main`.
- The polished portfolio design is the current visual baseline.
- `/kb/` is a first-class Starlight navigation area with curated project knowledge.
- Detailed KB extraction is live for AWS Compliance Agent, AgentGuard, and ChatGPT AWS Lab: four articles per project, 12 detailed articles total.
- Diagram policy is selective: **D2 for maintainable documentation diagrams** and **AWS Architecture Diagram v3.1 / draw.io style for showcase architecture**.
- Six real KB pages use D2; repeated evidence is tracked in `amitkarpe/skills#6` for Skills Factory triage.
- GitHub Actions installs pinned D2 v0.9.0, verifies its SHA-256, renders local SVGs, then builds Astro/Starlight.
- `starlight-image-zoom` 0.16.0 is enabled for compact diagram preview + click-to-zoom + full SVG access.
- AgentCore AI Platform, SecCop, and Nextflow Offline remain staged for a later detailed extraction pass.

## Active Work

- Issue #12 — add Zen focus mode for distraction-free KB reading.
- PR #13 — `issue-12-zen-focus-mode`.
- Chosen implementation: `starlight-view-modes` 0.13.1 with `Ctrl+Shift+Z` Zen-mode shortcut; avoid custom Starlight layout forks unless compatibility requires them.
- Blocker: none; awaiting PR build validation.

## Next Action

- Validate PR #13 build.
- If clean, merge, validate GitHub Pages deployment, then close Issue #12.

## Restart

`@GitHub Read AGENTS.md, CONTEXT.md and the latest active Issue/PR in mytestlab123/mytestlab123.github.io, then continue.`
