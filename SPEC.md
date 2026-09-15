# Specification

Status: ACTIVE
Context: `PERSONAL`
Environment: `LAB`

## Objective

Use `mytestlab123.github.io` as a safe Astro + Starlight learning and knowledge portal before changing the real `amitkarpe.github.io` portal.

## Outcome

A public GitHub Pages site with a polished portfolio homepage, Starlight navigation/search, curated project knowledge, a Feature Lab, and a working GitHub Actions build/deploy path.

## Authorized

- Modify only this repository for the current milestone.
- Add/update Astro, Starlight, Markdown/MDX, CSS, and GitHub Actions files required for the prototype.
- Curate and rewrite knowledge from public source repositories into sanitized KB articles.
- Build, validate, deploy, and fix routine compatibility issues inside this PERSONAL/LAB scope.
- Update repo control files so future sessions can continue from GitHub truth.

## MUST

- Preserve the root URL `https://mytestlab123.github.io/`.
- Keep the implementation static-first and GitHub Pages compatible.
- Prefer Astro + Starlight built-ins before plugins.
- Demonstrate portfolio + KB structure, not just a generic docs starter.
- Keep source project repositories authoritative for implementation/evidence.
- Rewrite and sanitize public KB content; do not bulk-copy source repositories.
- Keep public content free of secrets, private identifiers, internal/customer material, and raw operational evidence.
- Validate the PR build and the deployed site.

## MUST NOT

- Modify `amitkarpe/amitkarpe.github.io` during this experiment.
- Publish secrets, internal/customer material, private infrastructure identifiers, raw logs, or copied repositories.
- Add optional blog, comments, AI assistant, MCP backend, analytics, or large plugin stacks without a demonstrated need.
- Introduce a server runtime for the GitHub Pages milestone.

## Phases / Milestones

- Phase 1: Astro + Starlight foundation and GitHub Pages workflow.
- Phase 2: portfolio-style homepage + Feature Lab using core components.
- Phase 3: visual polish + real public project portfolio.
- Phase 4: curated KB structure + first source-grounded project articles.
- Later: evaluate Mermaid, taxonomy/tags, and AI-friendly static outputs only after the KB authoring model is proven.

## Verification

- GitHub Actions PR build succeeds.
- `astro build` produces the static site through CI.
- After merge, Pages deployment succeeds and `https://mytestlab123.github.io/` loads.
- Homepage, Projects, Knowledge Base, and Feature Lab routes are generated.
- Project cards resolve to internal curated pages.
- KB source/evidence links point back to public authoritative repositories.

## Stop Gates

Stop only if repository identity changes, GitHub Pages requires unsupported administrative access, a public-safety concern appears, or the framework requires a material architecture change outside this static LAB scope.

## Acceptance

- Current owning Issue/PR defines the active cohesive milestone.
- PR build passes.
- Live site works at the root organization Pages URL.
- Amit can visually evaluate the portfolio and curated KB before any migration work begins on `amitkarpe.github.io`.
