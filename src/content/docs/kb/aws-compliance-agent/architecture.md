---
title: Architecture — From Config to Verified Remediation
description: How the AWS Compliance Agent separates detection, reasoning, approval, policy, execution, and provider verification.
---

## 🎯 Problem

A compliance finding answers **what looks non-compliant**. It does not answer who may change AWS, what exact scope is allowed, or how success should be proven.

The project therefore separates the workflow into independent layers instead of treating one model response as the security boundary.

## 🧠 Key idea

**Reasoning, authorization, execution, and verification are different responsibilities.**

```text
AWS Config
   ↓ compliance evidence
AWS Compliance Agent
   ↓ read / explain / plan
Server-owned planner + retained manifests
   ↓ exact family + immutable batch
Human Approve / Reject
   ↓ approved exact intent
AgentCore Gateway
   ↓
AgentCore Policy — ALLOW / DENY
   ↓
Exact family tool
   ↓
AWS API
   ↓
Direct provider readback
```

AWS Config then converges independently after the provider state changes.

## 🏗️ Responsibility by layer

| Layer | Owns | Does not own |
|---|---|---|
| AWS Config | compliance evidence | remediation authorization |
| Agent | explanation and planning | arbitrary mutation scope |
| Server planner | supported controls, retained scope, readiness | model-selected targets |
| Human approval | accept/reject an exact family | proof of success |
| Gateway | bounded tool entry point | replacement for Policy/IAM |
| Policy | independent ALLOW/DENY | trust in model confidence |
| Exact tool | one narrow remediation family | generic AWS administration |
| Provider readback | current AWS state | Config convergence timing |

## 🔐 Scope is an intersection

Detection can be broader than remediation. The eligible execution set is deliberately constrained by three inputs:

```text
AWS Config finding
      + retained server-owned manifest
      + current provider safety guards
      = eligible exact remediation family
```

A resource identifier supplied by a model is not enough to widen execution scope.

The current Demo v1 planner is even more conservative: it prepares a supported family only when the **complete retained family** passes readiness/eligibility checks. It does not claim arbitrary-subset remediation.

## ✅ Verification has two clocks

After a mutation, **direct provider readback** is the immediate truth for the remediation result.

AWS Config is still valuable independent evidence, but it can converge later. The design therefore distinguishes:

- **Provider verified** — current AWS state was reread and matches the approved target.
- **Config status** — asynchronous compliance evaluation.

This avoids turning eventual compliance reporting into an execution-success signal.

## 💡 Reusable lessons

- Detection and remediation scope should not automatically be the same.
- The model should not manufacture execution scope.
- Human approval should bind a concrete action, not a vague session.
- Policy should independently evaluate the exact invocation.
- Completion should come from provider evidence, not model confidence.

## 🔗 Source / evidence

Last reviewed: **2026-09-15**.

- [Architecture](https://github.com/amitkarpe/aws-secops/blob/main/docs/architecture.md)
- [Governance](https://github.com/amitkarpe/aws-secops/blob/main/docs/governance.md)
- [Public repository](https://github.com/amitkarpe/aws-secops)
