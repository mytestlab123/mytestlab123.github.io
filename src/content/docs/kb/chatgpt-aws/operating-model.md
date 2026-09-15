---
title: Operating Model — Fast Inspection, Durable Delivery
description: The hybrid ChatGPT + AWS pattern: MCP for live inspection and verification, Git/IaC for desired state, and OIDC CI/CD for controlled application.
---

## 🎯 Problem

Forcing every AWS investigation through Terraform is slow. Making every durable infrastructure change directly through an AI-connected API creates drift and weakens review/rebuild discipline.

The lab tests a hybrid model that uses each path for what it does best.

## 🧠 Core rule

> **MCP discovers and verifies; Git/IaC declares; OIDC CI/CD applies.**

```text
ChatGPT / agent
  ├─ AWS MCP → inspect / diagnose / verify
  └─ Git → IaC → PR → GitHub Actions → OIDC → AWS
                                             ↓
                                       MCP readback
```

## ⚡ Fast path — AWS MCP

Use the live MCP path for questions where current provider state matters:

- inventory and discovery;
- failure diagnosis;
- logs and CloudTrail review;
- IAM investigation;
- cross-service comparison;
- bounded/reversible experiments;
- independent verification after deployment.

The advantage is feedback speed: you do not need to create a branch and deployment just to learn **why something is broken now**.

## 🧱 Durable path — Git + IaC + OIDC

Use the repository path for state expected to persist:

- IAM roles and policies;
- networking;
- queues, databases, state machines, buckets;
- repeatable application/infrastructure deployment;
- reviewed production-style changes;
- drift detection and disaster recovery.

The durable chain is:

```text
reviewed source
   + declarative IaC
   + controlled CI identity
   = repeatable desired state
```

OIDC supplies short-lived AWS credentials rather than a stored access key.

## 🔄 Recommended hybrid loop

```text
1. MCP      → inspect / diagnose / test
2. Decide   → should this change remain?
3. Git/IaC  → encode the durable state
4. OIDC CI  → apply through the controlled path
5. MCP      → independently verify actual AWS state
```

The lab also demonstrated drift detection: a live-state change can be observed by Terraform as drift, reconciled through Git/IaC/OIDC, then independently verified again.

## 🔐 Authentication is not portable knowledge

Git can preserve architecture decisions, experiments, troubleshooting patterns, and evidence. It should **not** be treated as a carrier of active authentication state.

A new session still needs to re-establish:

- current AWS identity;
- current GitHub access;
- intended Region/environment;
- active repository authority;
- available MCP/tool surface.

## 💡 Reusable lessons

- Use live APIs for live questions; use declarative state for retained infrastructure.
- Separate discovery/verification from durable delivery.
- Independently read back the provider after CI/CD says success.
- Write lessons to Git so the next session does not depend on chat memory.

## 🔗 Source / evidence

Last reviewed: **2026-09-15**.

- [AWS Control Paths](https://github.com/mytestlab123/chatgpt-aws/blob/main/docs/CONTROL_PATHS.md)
- [Portable AWS MCP knowledge](https://github.com/mytestlab123/chatgpt-aws/blob/main/docs/PORTABLE_AWS_MCP_KNOWLEDGE.md)
- [Public repository](https://github.com/mytestlab123/chatgpt-aws)
