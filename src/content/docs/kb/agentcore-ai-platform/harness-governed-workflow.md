---
title: Harness and Governed Workflow
description: Separate lessons from a managed AgentCore Harness lifecycle proof and a bounded governed MCP remediation path.
---

## 🎯 Problem

“AgentCore is working” can mean very different things: creating a managed Harness, invoking a model, authorizing a tool, executing AWS mutation, or proving cleanup. These should not be collapsed into one claim.

## 🧪 Harness MVP — what is proven

The Harness MVP proves one short lifecycle:

```text
preflight -> create role -> create Harness -> invoke Nova 2 Lite
-> verify answer -> delete -> verify absence
```

The run has no tool, skill, browser, Gateway, or memory configured. It proves a managed Harness invocation and cleanup — **not** production readiness, private networking, scale, multi-user authorization, or persistent deployment.

## 🛡️ Governed MCP workflow — a different proof

<div class="diagram-preview">
  <img src="/diagrams/d2/agentcore-governed-workflow.svg" alt="D2 governed AgentCore workflow showing approval, Gateway policy, exact remediation tool, and provider verification" />
</div>
<div class="diagram-links">
  <span>🔎 Click the diagram to zoom.</span>
  <a href="/diagrams/d2/agentcore-governed-workflow.svg" target="_blank" rel="noopener">Open full SVG ↗</a>
</div>

The governed workflow source documents a bounded path:

- a read action can be native **ALLOW**;
- remediation is **ASK** and stops if the human rejects;
- the MCP server requires the retained Gateway to return **ALLOW** before the exact Security Group change;
- `prod` remains default-deny;
- provider state is re-read immediately after the allowed change;
- a missing prerequisite produces **BLOCKED**, not invented success.

The runtime uses its own EC2 role; it does not copy the operator's local AWS profile.

## 🧰 Future Harness tool contract

The same source also contains an offline contract for one inline Harness tool/resume message pair. That contract records `AWS_CALLS=0`. A **live Harness tool invocation still needs separate approval** and is not claimed by that document.

## 💡 Reusable lesson

Keep each proof sentence precise:

- Harness lifecycle proof;
- policy authorization proof;
- backend mutation proof;
- provider verification proof;
- cleanup proof.

One does not automatically imply the others.

## 🔗 Source / evidence

Last reviewed: **2026-09-15**.

- [Harness MVP guide](https://github.com/mytestlab123/AgentCore/blob/main/docs/HARNESS_MVP_GUIDE.md)
- [Governed workflow](https://github.com/mytestlab123/AgentCore/blob/main/docs/ISSUE40_GOVERNED_WORKFLOW.md)
- [D2 source](https://github.com/mytestlab123/mytestlab123.github.io/blob/main/diagrams/d2/agentcore-governed-workflow.d2)
