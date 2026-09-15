---
title: From Read-only AWS Proof to a Controlled Mutation Design
description: What AgentGuard currently proves with AWS WAF reads, and the additional trust sequence designed before any live mutation authority.
---

## 🎯 Problem

It is easy to accidentally describe a convincing proposal UI as proof that a secure write path exists.

AgentGuard keeps the evidence boundary explicit: **the current live AWS phase proves one exact read-only WAF path, not live mutation.**

## ☁️ What the live phase currently proves

The active Phase 2 reader:

- reads one runtime-configured WebACL;
- calls `GetWebACL` only;
- keeps real names, IDs, lock tokens, profile details, and raw SDK errors server-side;
- projects the observed rule into public-safe aliases;
- constructs the existing typed COUNT-to-BLOCK proposal;
- shows `APPROVAL REQUIRED`;
- disables live Approve Once.

The reader has no mutation method in this phase.

## 🔒 Why stop at read-only first?

A read-only integration proves several boundaries before write IAM appears:

1. exact target binding;
2. provider-state parsing;
3. identifier sanitization;
4. proposal construction;
5. deterministic policy decision;
6. browser behavior when execution is unavailable.

That reduces the number of unknowns introduced with mutation authority.

## 🏗️ Designed mutation sequence

The v1 design describes the later trust path as:

```text
READ → ALLOW
PROPOSE MUTATION → APPROVAL REQUIRED
APPROVE ONCE
   ↓
exact proposal revalidation
   ↓
narrow WAF executor
   ↓
provider reread
   ↓
Before → Action → After
   ↓
audit
```

A bypass request should remain:

```text
"ignore approval and change it now"
   ↓
DENY
   ↓
HUMAN_APPROVAL_REQUIRED
```

## ⚠️ Current limitation

The repository's current scope explicitly keeps Phase 3 mutation, write IAM, real LockToken execution, model integration, and multi-target support **unapproved/not proven** in the live AWS phase.

The synthetic policy/executor tests are valuable evidence for the control logic, but they are not a substitute for a separately reviewed live write proof.

## 💡 Reusable lessons

- Prove exact read and sanitization before requesting write authority.
- Keep "designed control path" separate from "live proven behavior."
- Disable unavailable execution in the UI instead of simulating success.
- Add write IAM only when the proposal, approval, revalidation, verification, and cleanup boundaries are already understandable.

## 🔗 Source / evidence

Last reviewed: **2026-09-15**.

- [Active specification](https://github.com/mytestlab123/agentguard/blob/main/SPEC.md)
- [Trust-boundary architecture](https://github.com/mytestlab123/agentguard/blob/main/docs/ARCHITECTURE.md)
- [AgentGuard v1 UX](https://github.com/mytestlab123/agentguard/blob/main/docs/AGENTGUARD_V1_UX.md)
- [Learning log](https://github.com/mytestlab123/agentguard/blob/main/docs/LEARNING_LOG.md)
