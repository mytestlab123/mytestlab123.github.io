---
title: Image Discovery and Private Mirroring
description: Why exact image discovery and explicit Skopeo distribution are separate stages in an offline pipeline workflow.
---

## 🎯 Problem

Hard-coding a guessed list of containers is fragile. Modern workflows can reference images through process configuration, plugins, profiles, and nested pipeline logic.

## 🔎 Discover first

The online discovery stage materializes the pinned workflow/data state, prepares bundle-local plugin state, runs `nextflow inspect`, and writes an **exact image manifest** plus generated private-registry overrides.

Discovery does not run the Podman tasks. Its job is to answer: **what must exist before isolation?**

## 📦 Distribute explicitly

Image distribution is a separate, approved step. The canonical path uses **Skopeo** to copy from source registries to private ECR.

Why Skopeo fits this pattern:

- registry-to-registry copy;
- no Docker daemon required;
- no pull/tag/save cycle on an operator workstation;
- explicit source list generated from discovery.

The ops handoff also supports archive mode, where Skopeo writes portable image archives for later Podman load.

## 🔐 No accidental mutation

Planning/discovery and distribution are separate. Repository documentation keeps execution flags explicit so a descriptor check or discovery run does not silently perform registry mutation.

## 🧾 What to retain

Useful durable outputs include:

- pipeline + pinned revision;
- exact image manifest;
- checksums;
- generated private-registry mapping;
- bundle-local plugin state.

Generated bundles and environment files are operational artifacts, not Git content.

## 💡 Reusable lesson

**Inventory is evidence. Distribution is mutation. Runtime is a third stage.** Keeping those stages separate makes offline failures easier to explain and safer to retry.

## 🔗 Source / evidence

Last reviewed: **2026-09-15**.

- [Repository README](https://github.com/amitkarpe/nextflow-offline/blob/main/README.md)
- [Ops handoff](https://github.com/amitkarpe/nextflow-offline/blob/main/docs/ops/README.md)
