---
title: Offline Nextflow Architecture
description: A text-first architecture for preparing pinned nf-core dependencies online and proving a relocated no-pull, no-network runtime.
---

## 🎯 Problem

A pipeline that runs once on a connected build host is not evidence that it can run later without internet access. Hidden plugin downloads, remote test data, container pulls, or path-local state can make an “offline” test misleading.

## 🧠 Key idea

Prepare exact dependencies **before isolation**, then move the prepared state and prove execution from a different location.

<div class="diagram-preview">
  <img src="/diagrams/d2/nextflow-offline-architecture.svg" alt="D2 Nextflow offline-emulation architecture from descriptor and discovery through private ECR and relocated Podman runtime" />
</div>
<div class="diagram-links">
  <span>🔎 Click the diagram to zoom.</span>
  <a href="/diagrams/d2/nextflow-offline-architecture.svg" target="_blank" rel="noopener">Open full SVG ↗</a>
</div>

The canonical repository flow is:

```text
pipeline descriptor
  -> online workflow/data/plugin discovery
  -> exact image manifest
  -> Skopeo copy to private ECR
  -> generated Nextflow ECR overrides
  -> relocated Podman offline-emulation runtime
```

## 📋 Descriptor before scripting

The repository registers pipelines in a descriptor table. Adding a new pipeline starts with a row, not a copy of a pipeline-specific shell script.

That keeps the control path reusable and makes revision/profile differences data rather than duplicated logic.

## 🔐 Claim boundary

The final runtime uses an online server with task networking disabled. The project explicitly calls this **offline emulation** rather than physical air-gap proof.

## 💡 Reusable lesson

A strong offline architecture is less about one “offline flag” and more about **dependency inventory + transfer + relocation + runtime denial of fallback paths**.

## 🔗 Source / evidence

Last reviewed: **2026-09-15**.

- [Repository README](https://github.com/amitkarpe/nextflow-offline/blob/main/README.md)
- [D2 source](https://github.com/mytestlab123/mytestlab123.github.io/blob/main/diagrams/d2/nextflow-offline-architecture.d2)
