# AGENTS.md

## Bootstrap / Recovery Order

Use this order for cold start, recovery, materially changed governing context, or stale/incomplete/contradictory state. For warm continuation, use the named Issue/PR, latest relevant authorized delta, and current HEAD; do not reread the full context set on every handoff.

1. `AGENTS.md`
2. `CONTEXT.md`
3. `INIT.md` only when repository initialization is incomplete
4. `CHATGPT.md` when ChatGPT/Codex/GitHub collaboration or connector safety matters
5. `ENV.md` when runtime, host, tool, or hosting facts matter
6. `SPEC.md` before implementation, deployment, publication-model changes, cleanup, or trusted-contract changes

## Repository Role

This repository is the **MyTestLab Astro + Starlight prototype/learning site**. It is not the production `amitkarpe.github.io` engineering portal.

## Rules

- Follow KISS: one useful site milestone, a few related changes, one usable outcome.
- Preserve existing work and the proven GitHub Pages deployment.
- Keep `CONTEXT.md` current-only; history belongs in Git and closed Issues/PRs.
- Use the owning Issue/PR for implementation, corrections and validation.
- Keep public content sanitized; source project repositories remain authoritative for implementation/runtime evidence.
- Do not treat a successful prototype feature as automatic authorization to migrate it to `amitkarpe/amitkarpe.github.io`.
- Use proportional validation and verify the actual Pages result before declaring a publishing milestone complete.
- Agent OS and repo-starter are reusable guidance, not automatic project authority.

## Continuation

When the objective is known, short continuation such as `go`, `g`, `.`, `Y`, or `yes` continues the named Issue/PR within existing authority unless Amit explicitly selected plan/review/discussion mode.
