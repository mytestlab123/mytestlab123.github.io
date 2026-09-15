---
title: Internal AI Platform Architecture
description: How the AgentCore POC separates a simple developer experience from AWS credentials, model policy, and audit evidence.
---

## 🎯 Problem

A developer-facing AI platform should not require every application to understand AWS credentials, Bedrock authorization, and audit plumbing just to call an approved model.

## 🧠 Key idea

The smallest useful platform boundary is:

```text
Developer application
  -> platform key
  -> internal API
  -> model authorization
  -> approved Bedrock model
  -> request decision + log
```

The original MVP keeps the UI intentionally small: **Project, Playground, Logs**.

## 🏗️ Minimal proven AWS shape

The public README records this live-demo architecture:

```text
React / TypeScript UI
        |
        v
API Gateway -> Lambda -> Amazon Nova Lite inference profile
                  |
                  +-> DynamoDB (key hash + request logs)
```

The first Project-page key is returned once to the browser and only its SHA-256 hash is stored in DynamoDB. The demo is intentionally short-lived and single-project; it is not a production credential lifecycle.

## 🔐 What the MVP deliberately does not include

The source explicitly excludes Cognito, AgentCore Runtime, container hosting, CloudFront, a second provider, analytics, and a multi-project framework from the original MVP.

That matters because the repository name can otherwise tempt readers to assume that every AgentCore service is required. **AgentCore Runtime is not required for this MVP.**

## ✅ What the proof demonstrates

- one application-facing platform key;
- one approved model call;
- one disallowed model decision;
- one audit/log view;
- no general AWS credentials delivered to the application user.

## 🚫 What it does not prove

- production multi-tenancy;
- SSO or enterprise identity lifecycle;
- quotas/billing across teams;
- multi-provider routing;
- production secret distribution.

## 💡 Reusable lesson

Start with the **platform contract** before adding platform breadth: who calls, what credential they receive, which model is allowed, what is denied, and where the evidence appears.

## 🔗 Source / evidence

Last reviewed: **2026-09-15**.

- [AgentCore README](https://github.com/mytestlab123/AgentCore/blob/main/README.md)
- [Future architecture](https://github.com/mytestlab123/AgentCore/blob/main/docs/POC_ARCHITECTURE.md)
