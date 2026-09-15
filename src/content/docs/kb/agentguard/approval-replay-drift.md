---
title: Approval Binding, Replay Protection, and Drift
description: AgentGuard uses immutable proposal identity, expiring one-time approval, exact revalidation, and drift checks so approval cannot become a reusable write capability.
---

## 🎯 Problem

A human approval button is weak if the approved action can later be changed, replayed, or applied after provider state has drifted.

The security requirement is stronger:

> **Approve this exact proposal, once, while its assumptions still match.**

## 🔗 Bind approval to the proposal

The deterministic policy core introduced **immutable proposal hashing**. Approval is associated with that exact proposal rather than a vague session-level permission.

Retained regression cases include:

- target or action substitution;
- malformed runtime values;
- approval mismatch;
- expired approval;
- replay;
- missing approval;
- provider-state drift.

These cases fail closed.

## ⏳ One-time and expiring

Approval is intentionally **one-time** and has an expiry boundary.

That prevents a valid decision from becoming an indefinitely reusable write token.

The browser proof also retains an explicit replay test: repeating the approval does not create another execution.

## 🧭 Revalidate before execution

The designed sequence does not jump directly from approval to provider mutation:

```text
approved proposal
     ↓
exact proposal revalidation
     ↓
current-state / drift check
     ↓
narrow executor
     ↓
verification
```

The early synthetic WAF flow includes lock-token drift checks to model the idea that provider state may change between observation and execution.

## 🧱 Keep authority out of the browser

The project moved the authoritative decision state from a browser-local simulation into a Python policy/controller boundary.

The browser uses fixed action routes. Unexpected fields, unknown actions, direct replay, approval without a proposal, and missing human-UI intent are retained as regression cases.

This prevents the UI from becoming a second policy engine.

## ✅ Verification and audit are separate stages

A valid approval means the action is allowed to proceed. It does not mean the provider changed successfully.

The synthetic journey separately records:

- policy decision;
- approval validity;
- actual before/after state;
- verification;
- audit state.

## 💡 Reusable lessons

- Bind human approval to immutable action data.
- Make approval one-time and time-bounded.
- Revalidate assumptions immediately before mutation.
- Test replay and drift as normal security cases, not edge cases.
- Keep policy authority server-side even when the UI is highly interactive.

## 🔗 Source / evidence

Last reviewed: **2026-09-15**.

- [Learning log — deterministic policy core and browser/API progression](https://github.com/mytestlab123/agentguard/blob/main/docs/LEARNING_LOG.md)
- [AgentGuard v1 UX](https://github.com/mytestlab123/agentguard/blob/main/docs/AGENTGUARD_V1_UX.md)
