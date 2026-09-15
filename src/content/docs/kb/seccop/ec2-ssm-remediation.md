---
title: EC2 and SSM Remediation
description: The bounded SecCop server-remediation lane from exact target checks through one-package SSM update and before/after verification.
---

## 🎯 Problem

A security finding does not authorize patching. Before mutation, the system still needs to prove the intended target, readiness, advisory/package relationship, and exact proposed change.

## 🧭 Server-side target binding

The simple live GUI does not ask the browser for an EC2 instance ID. The server selects one tagged demo target and keeps the browser contract alias-oriented.

Before proposing a fix, the live lane checks:

- exactly one tagged running server;
- SSM online state;
- the advisory is present in package update metadata.

## 🧰 Narrow mutation path

The operator sees a plain-language one-package proposal. **Prepare update** rechecks the same target. **Approve and run fix** is the only path that can call SSM to update that exact package.

No reboot is requested by this demonstration.

## ✅ Verification

The final result reports the package version before and after the action. Inspector refresh is deliberately treated as a later signal because its finding cache is not immediate.

This separates two clocks:

1. **provider/package state now** — direct evidence after SSM;
2. **scanner/compliance convergence later** — Inspector refresh.

## 🔐 Safety boundary

- shared network resources are retained rather than recreated by the SecCop lane;
- browser-visible evidence excludes raw AWS payloads and identifiers;
- read evidence is not treated as authorization to patch;
- cleanup of the disposable target is separate from shared infrastructure ownership.

## 💡 Reusable lesson

Bind a remediation request to **one target, one proposal, one approval, one narrow executor, and one provider readback**.

## 🔗 Source / evidence

Last reviewed: **2026-09-15**.

- [SecCop live demo lane](https://github.com/mytestlab123/agentic-ai-cybersecurity-lab/blob/main/docs/SECCOP_LIVE_DEMO.md)
