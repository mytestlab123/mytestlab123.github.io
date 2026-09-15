---
title: Why the AI Does Not Authorize AWS Changes
description: "The AWS Compliance Agent governance model: server-owned scope, family-specific approval, independent Policy, exact tools, and provider verification."
---

## 🎯 Problem

An AI assistant can be useful for reading findings, explaining risk, and planning a change. Those abilities do **not** make it a trustworthy authorization system.

## 🧠 Key idea

> **The model is an assistant, not the authorization boundary.**

The project keeps several controls independent so a single prompt, agent instruction, or approval cannot silently become full AWS authority.

## 🔎 Read intent is not execution intent

Requests to **read, check, explain, summarize, recommend, or plan** are intended to stay read-only.

Only an explicit request to **fix, apply, or execute** can move into remediation preparation.

That distinction improves behavior, but it is still partly an agent instruction. Hard AWS-change controls remain elsewhere: human approval, Gateway/Policy, exact tools, IAM, and provider verification.

## 🧱 Server-owned scope

The server owns:

- supported controls;
- retained resource manifests;
- eligible-resource intersection;
- exact remediation action;
- immutable batch identity and approval data.

The model cannot widen the blast radius merely by supplying another resource ID.

## 🙋 Human approval is exact and family-specific

S3 and Security Group actions are approved independently.

```text
S3 request → Approve / Reject
SG request → Approve / Reject
```

Even if a UI presents both decisions together, they remain separate decisions rather than one blanket session approval.

Approval means **this exact request may proceed to the next governance layer**. It does not mean the action succeeded.

## 🛡️ Policy is another decision

After approval, the bounded executor calls AgentCore Gateway and Policy independently evaluates the invocation.

The project deliberately separates three statements:

1. **The model recommends the action.**
2. **The human approves the exact action.**
3. **Policy allows the exact invocation.**

None of these statements is equivalent to **AWS successfully changed**.

## ⚙️ Exact tools, not generic mutation

The model-accessible surface exposes only narrow supported actions. It does not expose a generic AWS CLI/API write tool.

Execution-time account, Region, API, action, and target scope are bounded by server configuration and provider guards.

## ✅ Provider verification closes the loop

After mutation, AWS is read again. A job can complete only when provider state matches the approved target. `FAILED` and `UNKNOWN` remain explicit outcomes.

:::caution[Claim boundary]
This is a personal-lab governance model. It does not claim hostile multi-tenant isolation, production identity governance, tamper-proof approval records, or complete host-wide IAM isolation.
:::

## 💡 Reusable lessons

- Prompt instructions are useful, but not a hard authorization mechanism.
- Approval and Policy should answer different questions.
- A model-accessible tool surface should be narrower than the host's theoretical capabilities.
- Execution success requires provider evidence.

## 🔗 Source / evidence

Last reviewed: **2026-09-15**.

- [Governance](https://github.com/amitkarpe/aws-secops/blob/main/docs/governance.md)
- [Architecture](https://github.com/amitkarpe/aws-secops/blob/main/docs/architecture.md)
