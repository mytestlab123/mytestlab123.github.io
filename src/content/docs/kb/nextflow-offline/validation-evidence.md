---
title: Validation and Evidence
description: A layered validation strategy for offline workflow changes, from descriptor checks to relocated runtime proof and explicit acceptance milestones.
---

## 🎯 Problem

Running the strongest end-to-end test after every small change is expensive and can introduce unnecessary registry, S3, or runtime mutation.

## 🪜 Use the cheapest proof that answers the change

The repository defines layered evidence:

| Level | Proof | Typical use |
|---|---|---|
| 0 | Bash, TSV, JSON, diff checks | every relevant change |
| 1 | descriptor `--plan` | onboarding / descriptor edits |
| 2 | online discovery + optional ECR distribution | asset or image changes |
| 3 | relocated Podman offline emulation | runtime-contract changes |
| 4 | bounded S3 readback or real offline-server run | explicit acceptance milestone |

## ✅ What Level 3 requires

Level 3 is intentionally stronger than “Nextflow exited zero.” It requires:

- a different absolute path;
- fresh Podman state;
- private image preload before execution;
- bundle-local Nextflow state;
- offline mode and disabled plugin autoinstall;
- task network disabled;
- image pull disabled.

## 🧾 Evidence wording matters

A successful Level 3 run supports the claim:

> This prepared pipeline completed under offline-emulation controls on the test host.

It does **not** support the stronger claim:

> This pipeline has been accepted on a physically air-gapped production environment.

That stronger claim needs a stronger acceptance environment and explicit transfer/run evidence.

## 💡 Reusable lessons

- Match test cost to the changed contract.
- Do not repeat registry/S3 mutation when a descriptor or local check answers the question.
- Define evidence levels before a failure occurs; it makes troubleshooting and release decisions clearer.

## 🔗 Source / evidence

Last reviewed: **2026-09-15**.

- [Validation strategy](https://github.com/amitkarpe/nextflow-offline/blob/main/docs/validation-strategy.md)
