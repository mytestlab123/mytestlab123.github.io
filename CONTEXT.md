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
- Three real KB pages currently use D2: AWS Compliance Agent architecture, AgentGuard trust model, and ChatGPT AWS operating model.
- GitHub Actions installs pinned D2 v0.9.0, verifies its SHA-256, renders local SVGs, then builds Astro/Starlight. No remote diagram service is required at runtime.
- `starlight-image-zoom` 0.16.0 is enabled for documentation images.
- Current diagram UX: compact centered inline preview, click-to-zoom/lightbox, plus explicit `Open full SVG` link for detailed inspection.
- AWS Compliance Agent architecture also includes a reviewed draw.io-style showcase SVG plus a canonical JSON diagram spec.
- D2 usage-learning count: **3 real documentation uses**. After 4–5 real uses, summarize lessons and create a D2-skill intake issue in `amitkarpe/skills`.
- AgentCore AI Platform, SecCop, and Nextflow Offline remain staged for a later detailed extraction pass.

## Active Work

- Issue #8 — completed: compact diagram previews + click-to-zoom.
- PR #9 — merged (`fdf24340cfa2729ec43575b0668d27a0ad7b38d8`).
- Current milestone: visual review of the new compact/zoom diagram UX.
- Blocker: none.

## Next Action

- Review the three live diagram pages. If the UX is accepted, add D2 to 1–2 more genuine KB pages to reach 4–5 real uses, summarize the lessons, then create the planned reusable D2-skill intake issue in `amitkarpe/skills`.

## Restart

`@GitHub Read AGENTS.md, CONTEXT.md and the latest active Issue/PR in mytestlab123/mytestlab123.github.io, then continue.`
