---
title: AWS MCP vs CI/CD — Capability Is Not Authorization Policy
description: Why the lab keeps MCP powerful for inspection while selected execution actions can be reserved for GitHub OIDC CI/CD.
---

## 🎯 Problem

It is tempting to say either:

- "MCP is read-only," or
- "if MCP can technically call an API, it should be allowed to execute it."

The lab showed that both statements are too simple.

## 🧠 Key idea

**Technical capability and governance policy are separate.**

With sufficient IAM permission, an MCP request path may be able to call mutation APIs. An organization can still choose to deny selected execution actions specifically for MCP-originated requests while leaving read/diagnose capability intact.

## 🛣️ Two control paths

### Direct MCP path

```text
ChatGPT → AWS MCP → AWS APIs
```

Best for:

- inspection;
- diagnosis;
- logs and CloudTrail;
- permission investigation;
- provider readback;
- bounded reversible experiments.

### CI/CD path

```text
ChatGPT → Git → IaC → PR → Actions → OIDC → AWS
```

Best for:

- durable state;
- retained infrastructure;
- controlled execution;
- repeatability and review;
- drift reconciliation.

## 🔐 Path-specific IAM boundary

The AWS-managed MCP request context can support policy choices that distinguish MCP-originated calls.

The lab tested patterns where:

```text
GitHub OIDC → selected execution action = ALLOW
AWS MCP     → same execution action      = DENY
AWS MCP     → read / diagnose / verify   = ALLOW
```

The durable lesson is not the name of one service. It is that **the AI can retain strong observability without receiving every execution capability**.

## 🧪 What the experiments demonstrated

Two classes of proof were retained:

- a CI/CD build action that GitHub OIDC could initiate while MCP could inspect the project/build/logs but was denied from starting it;
- a workflow execution path where CI/CD executed and MCP independently verified the final state.

One test even caught IAM propagation behavior: before the new deny had propagated, an MCP execution succeeded; after propagation, the same request was explicitly denied. That reinforced the difference between **capability** and **effective policy at a point in time**.

## 🧱 Avoid silent drift

Even when direct MCP mutation is permitted, it should not silently replace Terraform/CloudFormation/CDK for infrastructure intended to persist.

A direct change can leave live AWS state ahead of Git desired state. The next plan may then detect drift.

## 💡 Reusable decision rule

Ask:

> **Is this primarily learning/operating against live AWS, or defining state we want to keep?**

- learning, diagnosis, readback, reversible test → **MCP**;
- state to keep/rebuild/review → **Git + IaC + OIDC**;
- both → use the hybrid loop and verify independently.

## 🔗 Source / evidence

Last reviewed: **2026-09-15**.

- [AWS Control Paths](https://github.com/mytestlab123/chatgpt-aws/blob/main/docs/CONTROL_PATHS.md)
- [Dedicated OIDC + MCP CodeBuild lab](https://github.com/mytestlab123/chatgpt-aws/blob/main/docs/OIDC_MCP_CODEBUILD_LAB.md)
- [Portable AWS MCP knowledge](https://github.com/mytestlab123/chatgpt-aws/blob/main/docs/PORTABLE_AWS_MCP_KNOWLEDGE.md)
