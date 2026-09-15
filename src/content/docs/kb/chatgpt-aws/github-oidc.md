---
title: GitHub OIDC for AWS — Repository-scoped Identity
description: Short-lived GitHub Actions identity, narrow trust, STS verification, and CloudTrail-based federation troubleshooting without stored AWS access keys.
---

## 🎯 Problem

A CI/CD pipeline needs AWS authority, but storing a long-lived AWS access key in GitHub creates an unnecessary credential lifecycle and blast radius.

## 🧠 Key idea

Use **GitHub OIDC + a repository-specific AWS role** so the workflow receives short-lived credentials only when its trust conditions match.

<div class="diagram-preview">
  <img src="/diagrams/d2/chatgpt-aws-github-oidc.svg" alt="D2 flow for GitHub Actions OIDC federation into AWS STS and a repository-scoped role" />
</div>
<div class="diagram-links">
  <span>🔎 Click the diagram to zoom.</span>
  <a href="/diagrams/d2/chatgpt-aws-github-oidc.svg" target="_blank" rel="noopener">Open full SVG ↗</a>
</div>

**D2 documentation view** — generated from [the `.d2` source](https://github.com/mytestlab123/mytestlab123.github.io/blob/main/diagrams/d2/chatgpt-aws-github-oidc.d2). It separates federation claims, role trust, temporary credentials, identity verification, the exact AWS action, and CloudTrail evidence.

No static AWS access key is required by that path.

## 🔐 Trust policy matters as much as permissions

A role can have narrow service permissions and still be unsafe if its federation trust is broad.

Reusable trust rules from the lab:

- create a **new role per repository/purpose**;
- scope trust to the intended repository and ref/environment;
- avoid widening to an organization wildcard just to make a failing login work;
- keep the execution policy limited to the service/resources required by that workflow.

## ✅ Verify identity before doing work

The workflow should call STS identity first and fail if the assumed role does not match the expected repository-specific path.

That turns identity into an explicit precondition rather than an assumption hidden inside later deployment steps.

## 🕵️ Debug federation with evidence

One lab OIDC attempt failed even though the intended configuration looked reasonable. The durable troubleshooting procedure was:

1. verify the GitHub OIDC provider;
2. run the smallest STS identity test;
3. inspect CloudTrail `AssumeRoleWithWebIdentity` events when it fails;
4. compare the observed legitimate subject/claims with the role trust;
5. adjust only to the observed repository identity;
6. rerun and verify the assumed role before provisioning.

The reusable lesson is **inspect the actual federation evidence instead of broadening trust blindly**.

## ⏳ Expect IAM propagation

The CodeBuild experiment also captured an eventual-consistency lesson: immediately using a newly created service role can temporarily fail even when the trust policy is correct. A short propagation delay and retry succeeded.

Bootstrap automation should distinguish a propagation delay from a genuinely incorrect trust relationship.

## 🧱 Terraform least privilege includes reads

Another retained lesson: Terraform permissions are not only mutation APIs. The provider may need read/refresh calls to inspect existing state.

A narrow deployment role therefore needs:

- required create/update/delete actions;
- provider read/refresh actions;
- remote-state access when used;
- nothing broader merely for convenience.

## 💡 Reusable lessons

- Prefer OIDC to long-lived CI access keys.
- Bind trust to repository/purpose, not only to an organization.
- Verify STS identity before provisioning.
- Use CloudTrail to diagnose federation failures.
- Model IAM propagation as a bootstrap concern.
- Include provider refresh permissions without turning the role into admin.

## 🔗 Source / evidence

Last reviewed: **2026-09-15**.

- [Dedicated OIDC + MCP CodeBuild lab](https://github.com/mytestlab123/chatgpt-aws/blob/main/docs/OIDC_MCP_CODEBUILD_LAB.md)
- [Portable AWS MCP knowledge — OIDC lessons](https://github.com/mytestlab123/chatgpt-aws/blob/main/docs/PORTABLE_AWS_MCP_KNOWLEDGE.md)
- [Public repository security](https://github.com/mytestlab123/chatgpt-aws/blob/main/docs/PUBLIC_TEMPLATE_SECURITY.md)
