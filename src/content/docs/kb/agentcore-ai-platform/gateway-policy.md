---
title: AgentCore Gateway and Policy
description: How a narrow Gateway/Policy proof separates transport, deterministic Cedar authorization, backend execution, and evidence.
---

## 🎯 Problem

A policy response saying “denied” is not enough to prove that a backend tool did not execute.

## 🧠 Key idea

Treat the managed control plane and the verifier as different responsibilities:

- **AgentCore CLI/CDK** owns Gateway, target, Policy Engine, Cedar policy, and generated execution role.
- A **thin repository verifier** handles identity gates, invokes the managed path, measures backend evidence, and publishes only sanitized results.

The verifier should not reimplement the AgentCore policy engine.

## 🔐 Deterministic authorization

The recorded proof uses an IAM-protected Gateway and Cedar policy enforcement. The reusable test shape is:

- `dev` request → **ALLOW** → backend Lambda invocation delta exactly one;
- `prod` request → **DENY** → backend Lambda invocation delta exactly zero.

Backend metrics matter because a response body alone cannot prove the target was untouched.

## 🧱 Bootstrap is part of the trust boundary

The AgentCore CLI deployment path can require CDK bootstrap. The source highlights a material review point: a standard bootstrap template can use broad CloudFormation execution permissions when no narrower execution policy is supplied.

So “deploy the Gateway” starts with reviewing the bootstrap template, trust, execution policy, encryption choice, synthesized resources, and retained cost.

## 🧾 Evidence rules

Strong proof checks more than names:

- compare the exact Cedar statement, not a substring;
- verify live Gateway → Policy Engine linkage;
- verify target → backend linkage;
- parse the complete MCP JSON-RPC envelope;
- observe backend metrics after the denied request;
- keep resolved ARNs, URLs, signatures, and raw responses private.

## 💡 Reusable lessons

- Transport permission is not the same thing as tool authorization.
- Default-deny policy is only useful when the backend is also observed.
- A control-plane deployment can introduce broader permissions than the application proof itself, so bootstrap deserves explicit review.

## 🔗 Source / evidence

Last reviewed: **2026-09-15**.

- [Gateway/Policy learnings](https://github.com/mytestlab123/AgentCore/blob/main/docs/AGENTCORE_CLI_GATEWAY_POLICY_LEARNINGS.md)
