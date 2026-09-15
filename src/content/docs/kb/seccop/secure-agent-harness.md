---
title: Secure-Agent Harness
description: Why model plans stay untrusted until a deterministic contract, policy, and allow-listed tool registry validate the complete request.
---

## 🎯 Problem

A model can propose one safe read and one unsafe action in the same plan. Executing the safe call first and discovering the unsafe call later creates partial execution.

## 🧠 Key idea

The harness validates the **entire proposed plan before the first tool executes**.

```text
User request
  -> model proposes plan                 (untrusted)
  -> runtime plan validation             (deterministic contract)
  -> policy authorizes every tool call   (default deny)
  -> tool registry executes              (allow-listed readers)
  -> typed result + audit evidence
```

If plan validation fails, or any proposed tool is denied, **zero tools execute**.

## 🔐 Trust boundary

The early experiment intentionally uses a local `ScriptedModel`, not a real LLM. That keeps the model boundary runnable without requiring a paid service while still proving the deterministic control pattern.

Model output is not trusted merely because it resembles the user's request or matches a type annotation. Runtime validation and policy decisions are separate gates.

## 🧹 Sanitization is part of the harness

The synthetic AWS-shaped instance reader keeps raw instance/network/tag data inside the tool boundary. The model-visible result contains only a typed alias, environment, normalized state, and coarse size class.

That is more useful than “redact before logging”: the sensitive representation never needs to become model-visible in the first place.

## 💡 Reusable lessons

- Validate complete plans before side effects.
- Use stable reason codes for denied decisions.
- Do not copy raw model output into audit evidence.
- Approval should never manufacture a capability absent from the tool registry.

## 🔗 Source / evidence

Last reviewed: **2026-09-15**.

- [Architecture](https://github.com/mytestlab123/agentic-ai-cybersecurity-lab/blob/main/docs/ARCHITECTURE.md)
