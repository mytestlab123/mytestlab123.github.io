---
title: Multi-Source Security Operator
description: How one SecCop operator experience can correlate server, stored-artifact, and container findings without pretending they share the same remediation capability.
---

## 🎯 Problem

Operators often need one place to understand findings across multiple asset types, but a unified UI can accidentally imply that every source is equally trusted or equally remediable.

## 🧠 Key idea

Unify the **operator story**, not the authority model.

<div class="diagram-preview">
  <img src="/diagrams/d2/seccop-multi-source-operator.svg" alt="D2 SecCop multi-source operator flow showing EC2 live remediation and S3/ECR read-only suggestion lanes" />
</div>
<div class="diagram-links">
  <span>🔎 Click the diagram to zoom.</span>
  <a href="/diagrams/d2/seccop-multi-source-operator.svg" target="_blank" rel="noopener">Open full SVG ↗</a>
</div>

The documented operator POC checks one CVE across three source categories:

- **Server package** — can open the separate live proposal/approval path.
- **Stored artifact** — suggestion/read-only lane in the operator POC.
- **Container image** — suggestion/read-only lane in the operator POC.

The UI should not show fake approval controls or claim successful mutation for a lane whose backend contract is read-only.

## 🤖 Where the agent fits

The current unified story allows a no-tool model to explain **source-bound sanitized facts**. It does not authorize the target, action, approval, or verification result.

Provider facts and the exact proposal remain deterministic.

## 🔐 Capability is per source

This is the reusable design pattern:

```text
one finding model
+ one operator surface
+ capability flags per source
+ separate approval/mutation contracts
```

The common UI improves comprehension without flattening security boundaries.

## 💡 Reusable lessons

- Keep “Found” separate from “Can remediate.”
- Make unsupported mutation visibly read-only.
- Use the same source-bound evidence before and after any real change.
- Let the model explain evidence, not grant authority.

## 🔗 Source / evidence

Last reviewed: **2026-09-15**.

- [SecCop operator demo](https://github.com/mytestlab123/agentic-ai-cybersecurity-lab/blob/main/docs/SECCOP_OPERATOR_DEMO.md)
- [Repository README](https://github.com/mytestlab123/agentic-ai-cybersecurity-lab/blob/main/README.md)
- [D2 source](https://github.com/mytestlab123/mytestlab123.github.io/blob/main/diagrams/d2/seccop-multi-source-operator.d2)
