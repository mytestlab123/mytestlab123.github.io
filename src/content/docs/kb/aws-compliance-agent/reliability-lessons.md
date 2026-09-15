---
title: Reliability Lessons — Unknown Is a Real State
description: Bounded Config reads, safe interruption handling, read-only reconciliation, verification timestamps, and fresh approval after uncertainty.
---

## 🎯 Problem

Automation becomes unsafe when it treats **uncertain execution as success** or automatically replays a mutation after an interruption.

The reliability hardening work focuses on honest state rather than automatic continuation.

## 📏 Bound the evidence read

Supported Config rule reads require a healthy recorder and enforce application budgets:

- at most **10 evaluation-page requests**;
- at most **250 results** per rule read;
- valid empty pages can continue within the budget;
- malformed, repeated, or cyclic continuation tokens fail closed;
- a ceiling produces **partial evidence**, not a ready-to-remediate claim.

These are local application budgets, not AWS service quotas.

## 🧯 Safe terminalization after interruption

The chosen recovery model is **do not replay automatically**.

| State at interruption | Recovery state | Old approval reusable? |
|---|---|---|
| `RUNNING` | `UNKNOWN` | No |
| approved but unclaimed | `FAILED` / not dispatched | No |
| already terminal | preserved | No replay |

Why this matters: if a process stops while a provider call may have happened, the system cannot safely infer whether another write is needed.

## 🔎 Reconcile with reads, not retries

`UNKNOWN` is resolved through **read-only provider reconciliation** after active execution stops.

A successful read proves present state. It does not prove who changed the resource.

After uncertainty is resolved, the existing owner-operated full-manifest preview path can create a **new pending batch**. Fresh execution requires a **new human approval** and the same Gateway/Policy route.

There is no automatic "resume all" or arbitrary-subset retry mechanism.

## 🕒 Verification time must mean verification

Successful provider readbacks can persist a `verified_at` timestamp.

The project explicitly avoids using file modification time or batch creation time as a substitute. Old journals keep their historical counts without fabricating a verification timestamp.

A saved verification event also does not prove every resource is still compliant now; it proves what was verified at that event.

## 🧪 Proof boundary

The hardening has offline regression coverage. It is **not** presented as live production interruption-recovery certification.

That distinction is important: a green local regression suite does not retroactively rerun older AWS evidence.

## 💡 Reusable lessons

- Treat uncertainty as a first-class state.
- Do not replay consumed approvals after process failure.
- Reconcile uncertain writes with reads before considering another mutation.
- Require fresh approval for replacement work.
- Use explicit evidence timestamps rather than filesystem metadata.
- Put finite budgets around pagination and evidence collection.

## 🔗 Source / evidence

Last reviewed: **2026-09-15**.

- [Reliability hardening proof](https://github.com/amitkarpe/aws-secops/blob/main/docs/implementation/RELIABILITY_HARDENING_PROOF.md)
- [Architecture reliability section](https://github.com/amitkarpe/aws-secops/blob/main/docs/architecture.md)
- [Demo v1 recovery notes](https://github.com/amitkarpe/aws-secops/blob/main/docs/demo-v1.md)
