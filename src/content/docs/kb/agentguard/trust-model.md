---
title: Trust Model — Why an AI Agent Can Be Constrained
description: AgentGuard separates observed AWS evidence, typed proposals, deterministic policy, human approval, exact execution, and verification.
---

## 🎯 Problem

A convincing AI explanation is not a security control. For a sensitive cloud action, the real question is:

> **What prevents the agent from changing the wrong thing, skipping approval, or leaking provider identifiers?**

## 🧠 Key idea

AgentGuard treats the model as a proposer. **Trusted deterministic components own target selection, proposal construction, policy, approval state, execution, and verification.**

## 🏗️ Active live read path

The current live AWS phase is intentionally read-only:

```text
Fixed browser review action
        ↓
Local Python API
        ↓
Server-side exact target allowlist
        ↓
AWS WAF GetWebACL only
        ↓
Alias-only observed state
        ↓
Typed COUNT → BLOCK proposal
        ↓
Deterministic policy
        ↓
APPROVAL REQUIRED
```

Real resource identifiers and raw SDK errors stay server-side. The browser cannot choose AWS resources.

## 🕵️ Alias before model-visible context

The live reader reduces the provider result to public-safe aliases and the minimum observed state needed for the proposal.

That implements a general security pattern:

```text
provider identity / raw payload
          ↓ trusted boundary
sanitized alias + typed evidence
          ↓
model-visible / browser-visible context
```

The goal is not only secrecy. Alias-based boundaries also make it harder for untrusted input to redirect the action toward another resource.

## 🧱 Proposal authority stays server-side

The project later made the trust transition before proposal creation explicit: untrusted intent is parsed into a small schema, then a trusted proposal builder combines that intent with **allowlisted observed state and server-owned metadata**.

Authority-field injection, target/rule/action swaps, malformed schemas, and invalid observed state are retained as fail-closed regression cases.

## 🔐 What is trusted?

In the current lab model, trust sits in:

- the local server-side reader and exact target configuration;
- the deterministic proposal/policy core;
- one-time approval state;
- narrow action routes;
- verification and audit logic.

The browser and model-visible content do not get raw provider identity or generic target selection.

:::caution[Scope]
This is a learning POC, not a production identity or hostile multi-tenant security system.
:::

## 💡 Reusable lessons

- Convert raw provider state to a narrow typed view before model exposure.
- Keep target resolution and authority fields out of untrusted input.
- Treat generated text as explanation, not authorization.
- Retain security failures as regression cases.

## 🔗 Source / evidence

Last reviewed: **2026-09-15**.

- [Trust-boundary architecture](https://github.com/mytestlab123/agentguard/blob/main/docs/ARCHITECTURE.md)
- [Specification](https://github.com/mytestlab123/agentguard/blob/main/SPEC.md)
- [Learning log](https://github.com/mytestlab123/agentguard/blob/main/docs/LEARNING_LOG.md)
