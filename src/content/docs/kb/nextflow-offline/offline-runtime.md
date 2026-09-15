---
title: Offline Runtime Contract
description: The runtime controls that make a relocated Nextflow/Podman execution a meaningful offline-emulation proof.
---

## 🎯 Problem

An offline test is weak if the runtime can quietly fall back to its original path, existing Podman cache, plugin autoinstall, public container pulls, or network access.

## 🧠 Key idea

The runtime proof deliberately removes those fallbacks.

After online preparation and private image distribution, the test:

1. copies the prepared bundle to a **different absolute path**;
2. verifies source checksums;
3. uses a **fresh Podman store**;
4. preloads only mapped private images before Nextflow starts;
5. points `NXF_HOME` into the bundle;
6. sets `NXF_OFFLINE=true`;
7. disables plugin autoinstall;
8. invokes explicit Nextflow offline mode;
9. runs tasks with `--network none --pull=never`.

## 🔐 Why relocation matters

Relocation catches hidden assumptions such as absolute paths, references back to a build workspace, or accidental reuse of local runtime state.

The fresh Podman store serves the same purpose for containers: success should come from the prepared private images, not an old developer cache.

## 🧰 Runtime hardening

The separate ops handoff also nulls known remote configuration/test-data bases and disables parameter validation where that validation would otherwise trigger remote assumptions.

## 🚫 What this does not prove

It does not prove the host is physically disconnected or operating in a production air-gapped enclave. The host can still be an online server while the workflow runtime is constrained.

## 💡 Reusable lesson

For isolation tests, **remove fallback paths deliberately**. A passing test is meaningful only if the system had no hidden way to reach the network or an old cache.

## 🔗 Source / evidence

Last reviewed: **2026-09-15**.

- [Repository README](https://github.com/amitkarpe/nextflow-offline/blob/main/README.md)
- [Validation strategy](https://github.com/amitkarpe/nextflow-offline/blob/main/docs/validation-strategy.md)
