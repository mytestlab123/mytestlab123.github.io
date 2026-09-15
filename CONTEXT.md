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
- Six real KB pages now use D2: AWS Compliance Agent architecture; AWS Compliance Agent remediation & verification; AgentGuard trust model; AgentGuard decision model; ChatGPT AWS operating model; and ChatGPT AWS GitHub OIDC.
- GitHub Actions installs pinned D2 v0.9.0, verifies its SHA-256, renders local SVGs, then builds Astro/Starlight. No remote diagram service is required at runtime.
- `starlight-image-zoom` 0.16.0 is enabled for documentation images.
- Current diagram UX: compact centered inline preview, click-to-zoom/lightbox, plus explicit `Open full SVG` link for detailed inspection.
- AWS Compliance Agent architecture also includes a reviewed draw.io-style showcase SVG plus a canonical JSON diagram spec.
- Repeated D2 evidence is now sufficient for Skills Factory intake. Skill Request: `amitkarpe/skills#6` — D2 documentation diagrams.
- AgentCore AI Platform, SecCop, and Nextflow Offline remain staged for a later detailed extraction pass.

## Active Work

- Issue #10 — completed: 3 additional real D2 documentation diagrams and Skills Factory evidence handoff.
- PR #11 — merged (`28a5641f740b34cb2cb1db031a47550efeb2a6b6`).
- Skills follow-up: `https://github.com/amitkarpe/skills/issues/6` awaits Skills Factory triage (`ACCEPT` / `MERGE` / `DEFER` / `REJECT`).
- Current milestone: Amit visual review of all six D2 documentation uses; no further Skill implementation should be started from this repo unless the Skills Factory requests it.
- Blocker: none.

## Next Action

- Review the three newest D2 pages. If accepted, continue KB extraction for AgentCore AI Platform, SecCop, and Nextflow Offline while `amitkarpe/skills#6` owns D2 Skill triage/design.

## Restart

`@GitHub Read AGENTS.md, CONTEXT.md and the latest active Issue/PR in mytestlab123/mytestlab123.github.io, then continue.`
