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
- Detailed extraction is live for all six featured project lanes: AWS Compliance Agent, AgentGuard, ChatGPT AWS Lab, AgentCore AI Platform, SecCop, and Nextflow Offline.
- Diagram policy is selective: **D2 for maintainable documentation diagrams** and **AWS Architecture Diagram v3.1 / draw.io style for showcase architecture**.
- Nine KB pages use D2; D2 reusable-skill triage remains owned by `amitkarpe/skills#6`.
- `starlight-image-zoom` provides compact diagram zoom/full-SVG access.
- `starlight-view-modes` provides the visible View Modes control and **Ctrl+Shift+Z** Zen shortcut; the right-side TOC remains useful in normal reading mode.

## Active Work

- Issue #19 — AI/discoverability layer: `llms.txt`, per-page Markdown actions, and lightweight tags.
- Branch: `issue-19-ai-discoverability`.
- KISS implementation uses `starlight-llm-actions` for both per-page Markdown + llms indexes, plus `starlight-tags` for taxonomy.
- Open-in-AI providers and PDF actions remain disabled; the site stays static-only.
- Initial taxonomy is applied to the six KB project landing pages plus one representative detailed page per project.
- Blocker: none; validate the PR build next.

## Next Action

- Open the PR for Issue #19 and validate Astro/Starlight compatibility on Node 22.
- Verify `/llms.txt`, `/llms-small.txt`, `/llms-full.txt`, `/tags/`, and one per-page `.md` route.
- If clean, merge and verify GitHub Pages deployment before any work on `amitkarpe.github.io`.

## Restart

`@GitHub Read AGENTS.md, CONTEXT.md and the latest active Issue/PR in mytestlab123/mytestlab123.github.io, then continue.`
