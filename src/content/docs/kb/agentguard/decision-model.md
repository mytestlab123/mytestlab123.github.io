---
title: ALLOW, DENY, APPROVAL REQUIRED
description: The AgentGuard decision model makes read-only work, sensitive proposals, and approval bypass attempts visually and programmatically distinct.
---

## 🎯 Problem

A chat interface can blur important security states. "The agent can do this" is very different from "the agent may do this now."

AgentGuard makes the decision explicit.

## 🚦 Three states

### `ALLOW`

Used for a safe read operation in the designed flow.

```text
Decision: ALLOW
Reason: READ_ONLY_OPERATION
```

### `APPROVAL REQUIRED`

Used when the proposal requests a sensitive change.

```text
Decision: APPROVAL REQUIRED
Risk: HIGH
Target: public-safe alias
Before: COUNT
After: BLOCK
```

### `DENY`

Used when the request violates the policy boundary, including an attempt to bypass human approval.

```text
Decision: DENY
Reason: HUMAN_APPROVAL_REQUIRED
Mutation performed: NO
```

## 🧠 Why the UI matters

The project deliberately uses a browser Decision Panel rather than hiding security state in a terminal or chat transcript.

The panel is designed to expose the manager-relevant chain:

```text
user request
   ↓
agent proposal
   ↓
typed action
   ↓
policy decision
   ↓
human approval
   ↓
AWS action
   ↓
verification
   ↓
audit
```

That makes a blocked or incomplete stage visually different from a successful one.

## 🔐 Policy does not trust free-form action text

The designed mutation path is narrow:

```text
LLM recommendation
      ↓
typed proposal validation
      ↓
deterministic policy
      ├─ DENY
      ├─ ALLOW (read only)
      └─ APPROVAL REQUIRED
              ↓
         human approval
              ↓
     proposal revalidation
              ↓
        narrow executor
```

The model is specifically not allowed to send arbitrary WebACL JSON directly to a mutation executor.

## ✅ What the synthetic proof showed

The retained local tests/browser proof demonstrate the decision semantics without requiring AWS mutation:

- proposal → `APPROVAL REQUIRED`;
- exact synthetic approval → approved/verified state;
- reject → no mutation;
- bypass request → `DENY / HUMAN_APPROVAL_REQUIRED` and no mutation.

## 💡 Reusable lessons

- Security state should be machine-readable and visually obvious.
- "Approval required" is its own state, not a friendly warning attached to an executable action.
- A rejection path should prove **no mutation**, not merely show a red message.
- The UI should reflect the authoritative policy state rather than invent a second authorization model.

## 🔗 Source / evidence

Last reviewed: **2026-09-15**.

- [AgentGuard v1 UX](https://github.com/mytestlab123/agentguard/blob/main/docs/AGENTGUARD_V1_UX.md)
- [Learning log](https://github.com/mytestlab123/agentguard/blob/main/docs/LEARNING_LOG.md)
