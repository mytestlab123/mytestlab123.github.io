---
title: Approval and Provider Verification
description: Why human approval and provider verification are separate controls in a secure remediation workflow.
---

## 🎯 Problem

An approval button can look reassuring while still approving a vague action, an expired proposal, or a different target than the one originally reviewed.

## 🔒 Proposal-bound approval

The SecCop operator material describes approval as **exact, expiring, one-time, and proposal-bound** on the server remediation lane.

That means the human is approving an already-bound action rather than granting open-ended “fix this somehow” authority.

## ✅ Verification is a separate responsibility

After an approved change, the workflow should show:

```text
Before -> Action -> After
```

The model does not decide that the change succeeded. Provider/package state is re-read after the executor runs.

Scanner evidence such as Inspector can converge later, so the page should not wait for or invent an immediate scanner refresh when the provider already supplies the direct state needed for the immediate result.

## 🚫 Reject and blocked states are real outcomes

A secure operator flow needs explicit non-success outcomes:

- **Reject** — human chose not to run the action;
- **Blocked** — prerequisite, scope, target, or policy gate failed;
- **Unknown** — evidence is insufficient to assert success.

These states are better than forcing every workflow into success/failure when the evidence does not support either claim.

## 🧾 Evidence boundary

Browser/model-visible evidence should stay sanitized. Raw provider identifiers and private runtime configuration remain server-side or in protected local evidence.

## 💡 Reusable lessons

- Human approval is not tool authorization by itself.
- Bind approval to exact proposal content and target scope.
- Separate executor response from provider verification.
- Preserve uncertainty instead of inventing a successful outcome.

## 🔗 Source / evidence

Last reviewed: **2026-09-15**.

- [SecCop operator demo](https://github.com/mytestlab123/agentic-ai-cybersecurity-lab/blob/main/docs/SECCOP_OPERATOR_DEMO.md)
- [SecCop live demo](https://github.com/mytestlab123/agentic-ai-cybersecurity-lab/blob/main/docs/SECCOP_LIVE_DEMO.md)
