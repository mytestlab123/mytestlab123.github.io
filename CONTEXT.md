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
- `/kb/` is the curated public reading layer; source project repositories remain authoritative for implementation and evidence.
- Detailed extraction is implemented for all six featured project lanes: AWS Compliance Agent, AgentGuard, ChatGPT AWS Lab, AgentCore AI Platform, SecCop, and Nextflow Offline.
- Diagram policy is selective: **D2 for maintainable documentation diagrams** and **AWS Architecture Diagram v3.1 / draw.io style for showcase architecture**.
- Nine KB pages use D2 after Issue #14: the original six plus AgentCore governed workflow, SecCop multi-source operator, and Nextflow offline architecture.
- GitHub Actions installs pinned D2 v0.9.0, verifies its SHA-256, renders local SVGs, then builds Astro/Starlight.
- `starlight-image-zoom` 0.16.0 provides compact preview + click-to-zoom + full SVG access.
- `starlight-view-modes` 0.13.1 provides the visible View Modes control and **Ctrl+Shift+Z** Zen shortcut; the right-side TOC remains useful in normal reading mode.
- D2 reusable-skill triage remains owned by `amitkarpe/skills#6`.

## Active Work

- Issue #14 — complete remaining KB projects and reading polish.
- Branch: `issue-14-complete-remaining-kb`.
- Current implementation slice: 12 new detailed articles, 3 new D2 documentation diagrams, expanded sidebar, and stale placeholder cleanup.
- No new draw.io showcase was added because no page required a second representation of the same technical flow.
- Blocker: none; validate PR build next.

## Next Action

- Open the PR for Issue #14 and validate the Astro/Starlight build.
- If clean, merge and verify GitHub Pages deployment.
- Then visually review one page from each new project lane before migrating patterns to `amitkarpe.github.io`.

## Restart

`@GitHub Read AGENTS.md, CONTEXT.md and the latest active Issue/PR in mytestlab123/mytestlab123.github.io, then continue.`
