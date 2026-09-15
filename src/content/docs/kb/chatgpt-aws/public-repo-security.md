---
title: Building a Safe Public AWS Repository
description: Credential-free PRs, guarded live workflows, exact repository binding, minimal Actions permissions, OIDC trust, and publication review.
---

## 🎯 Problem

A public repository can safely hold IaC, workflows, tests, and documentation, but **repository visibility is not an AWS security boundary**.

The security model has to come from workflow design, identity, IAM, repository settings, and publication discipline.

## 🧠 Reference model

```text
PUBLIC PR
  → no AWS credentials
  → tests / validation / docs build

REVIEWED main
  → deliberate live workflow
  → short-lived GitHub OIDC
  → AWS
  → independent MCP verification
```

## 🔒 Controls that can live in Git

The reference lab records these code-level controls:

- public PR checks do not request AWS OIDC;
- live AWS workflow is deliberately triggered;
- live jobs require the intended branch/ref;
- live jobs bind to the configured repository identity;
- account/role relationship is checked before AWS work;
- default workflow permission stays minimal and OIDC is job-scoped;
- third-party Actions are pinned to full commit SHAs;
- checkout does not persist credentials unnecessarily;
- Terraform PR validation is backend-free and credential-free;
- tracked files are scanned for common credential/state/plan patterns;
- documentation deployment records the source commit so live Pages can be tied back to Git.

## ⚙️ Controls outside Git still matter

Repository code cannot prove every platform setting.

### GitHub settings

For shared or sensitive repositories:

- keep default Actions token permissions minimal;
- protect `main` / use rulesets;
- require reviewed validation before merge;
- use GitHub Actions as the explicit Pages source when appropriate;
- review organization-level Actions policies.

### AWS settings

- create a repository/purpose-specific OIDC role;
- scope trust to the intended repo and ref/environment;
- grant only required service/resource permissions;
- keep Terraform state in a protected remote backend;
- review SCPs, permission boundaries, and resource policies separately.

## 🌐 Publication review is broader than the current tree

A tracked-file scanner helps, but does not replace a publication audit.

Before exposing a formerly private repository, separately review:

- Git history;
- releases and artifacts;
- Issues and PR comments;
- Actions logs;
- screenshots;
- external systems that may have copied repository data.

## ♻️ Reuse architecture, recreate identity

The strongest reuse rule from the lab is:

> **Reuse the architecture and tests. Recreate the identities, trust, state, and resource names.**

Do not copy account IDs, role ARNs, Terraform state keys, or retained lab names into a new repository just because the workflow structure is reusable.

## 💡 Reusable lessons

- Public PR validation should remain useful without cloud credentials.
- Live cloud authority should be a separate, explicit path.
- GitHub OIDC reduces stored-secret risk but still requires narrow trust.
- Repository settings and AWS organization controls are part of the design even though they are not represented by normal source files.
- Publication safety includes history and collaboration metadata, not only `main`.

## 🔗 Source / evidence

Last reviewed: **2026-09-15**.

- [Public Repository Template Security](https://github.com/mytestlab123/chatgpt-aws/blob/main/docs/PUBLIC_TEMPLATE_SECURITY.md)
- [Public repository](https://github.com/mytestlab123/chatgpt-aws)
