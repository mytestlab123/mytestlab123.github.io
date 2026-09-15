---
title: Bedrock API Keys — Scope, Lifecycle, and Proof
description: Lessons from a native Bedrock API-key POC that allowed one model, denied another, and preserved an auditable credential lifecycle.
---

## 🎯 Problem

A developer may need Bedrock access without receiving a normal AWS access-key pair, console login, or broad AWS identity.

## ✅ What the POC proved

The public proof used one native Bedrock API key and observed:

- an approved Nova Lite request returning **HTTP 200**;
- a restricted Nova Pro request returning **HTTP 403** from AWS IAM;
- CloudTrail evidence for the successful and denied runtime calls;
- no general AWS access key or console login delivered to the client.

The tested credential was a **long-term Bedrock service-specific credential** with a bounded lifetime for repeat demonstrations. The source explicitly says this is a learning POC, not a production credential-distribution design.

## 🔑 Short-term vs long-term

The repository distinguishes two AWS mechanisms:

| Type | Useful property | Design direction |
|---|---|---|
| Short-term Bedrock key | Bound to the source session and short lifetime | Preferred production direction |
| Long-term Bedrock key | Individually managed service-specific credential | Exploration / repeat demonstrations |

The important abstraction is not “API key = unrestricted Bedrock.” IAM still governs usable Bedrock operations and model resources.

## 🔐 Secret lifecycle

The POC keeps the full key outside Git, uses protected local files, avoids putting the bearer value in process arguments, and separates normal retention from explicit cleanup/revocation.

A successful retained run requires an explicit TTL/review state. Failed runs attempt targeted cleanup.

## 🧾 Evidence is layered

CloudTrail proves AWS API activity, but the observed denied event did not contain every field needed to identify the target model. The local sanitized denial record preserves the missing request context without publishing the secret.

This is a useful general lesson: **one audit source may not contain every fact required to explain an authorization decision.**

## 🚫 What this does not prove

- production key distribution;
- non-expiring credentials as a good design;
- general AWS service access from a Bedrock key;
- production multi-user authorization.

## 🔗 Source / evidence

Last reviewed: **2026-09-15**.

- [Native Bedrock API Keys POC](https://github.com/mytestlab123/AgentCore/blob/main/docs/ISSUE_9_BEDROCK_API_KEYS.md)
