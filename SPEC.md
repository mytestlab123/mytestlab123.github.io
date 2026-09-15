# Specification

Status: ACTIVE
Context: `PERSONAL`
Environment: `LAB`

## Objective

Use `mytestlab123.github.io` as a safe Astro + Starlight learning portal before changing the real `amitkarpe.github.io` knowledge portal.

## Outcome

A public GitHub Pages site with a minimal portfolio-style homepage, Starlight navigation/search, one Feature Lab page, and a working GitHub Actions build/deploy path.

## Authorized

- Modify only this repository for the current milestone.
- Add/update Astro, Starlight, Markdown/MDX, CSS, and GitHub Actions files required for the prototype.
- Build, validate, deploy, and fix routine compatibility issues inside this PERSONAL/LAB scope.
- Update repo control files so future sessions can continue from GitHub truth.

## MUST

- Preserve the root URL `https://mytestlab123.github.io/`.
- Keep the implementation static-first and GitHub Pages compatible.
- Prefer Astro + Starlight built-ins before plugins.
- Demonstrate portfolio + KB structure, not just a generic docs starter.
- Keep public content sanitized and generic.
- Validate the PR build and the deployed site.

## MUST NOT

- Modify `amitkarpe/amitkarpe.github.io` during this experiment.
- Publish secrets, internal/customer material, private infrastructure identifiers, raw logs, or copied repositories.
- Add optional blog, comments, AI assistant, MCP backend, analytics, or large plugin stacks in v1.
- Introduce a server runtime for the GitHub Pages milestone.

## Phases / Milestones

- Phase 1: Astro + Starlight foundation and GitHub Pages workflow.
- Phase 2: portfolio-style homepage + Feature Lab using core components.
- Phase 3: validate CI and live deployment; record lessons for the final portal decision.

## Verification

- GitHub Actions PR build succeeds.
- `astro build` produces the static site through CI.
- After merge, Pages deployment succeeds and `https://mytestlab123.github.io/` loads.
- Homepage and Feature Lab routes are reachable.

## Stop Gates

Stop only if repository identity changes, GitHub Pages requires unsupported administrative access, a public-safety concern appears, or the framework requires a material architecture change outside this static LAB scope.

## Acceptance

- Issue #1 has one cohesive implementation PR.
- PR build passes.
- Live site works at the root organization Pages URL.
- Amit can visually evaluate the homepage and Feature Lab before any work begins on `amitkarpe.github.io`.
