---
title: Remediation and Verification Pattern
description: How the Demo v1 S3 and Security Group action families move from detection through exact approval to provider-verified completion.
---

## 🎯 Problem

A remediation demo is easy to overstate: an API call can return successfully while the wrong target was changed, a partial batch failed, or compliance evidence has not converged.

The project makes the **operator journey and the verification source explicit**.

## 🧪 Demo scope

The recorded Demo v1 uses retained lab resources for two control families:

- **S3 Block Public Access** across a retained S3 demo family.
- **Restricted SSH** for retained unattached Security Groups with unrestricted TCP/22 ingress.

The recorded demo used **100 S3 buckets and 10 Security Groups**. This is a bounded personal-lab proof, not a generic fleet-remediation claim.

## 🔄 Five-step operator flow

<div class="diagram-preview">
  <img src="/diagrams/d2/aws-compliance-remediation-verification.svg" alt="D2 remediation and verification flow for AWS Compliance Agent" />
</div>
<div class="diagram-links">
  <span>🔎 Click the diagram to zoom.</span>
  <a href="/diagrams/d2/aws-compliance-remediation-verification.svg" target="_blank" rel="noopener">Open full SVG ↗</a>
</div>

**D2 documentation view** — generated during the Pages build from [the `.d2` source](https://github.com/mytestlab123/mytestlab123.github.io/blob/main/diagrams/d2/aws-compliance-remediation-verification.d2). It emphasizes that S3 and Security Group families remain independently approved before the exact path converges on provider verification.

### 1. Detect

AWS Config shows the compliance signal. Config can observe resources beyond the retained demo scope.

### 2. Bind exact scope

The server-owned retained manifest and readiness guards determine what can become a remediation batch.

### 3. Read before writing

A read-only operator request can summarize compliance without calling an executor or showing an approval card.

### 4. Request remediation explicitly

An explicit fix request can prepare the supported families. S3 and Security Group actions remain independent:

- S3 batch → S3 Approve / Reject → S3 exact path.
- Security Group batch → SG Approve / Reject → SG exact path.

### 5. Verify progress and outcome

The workflow tracks completed, running, pending, failed, and unknown states. Completion depends on provider evidence rather than the agent saying the task is done.

## ✅ What counts as evidence?

Different questions have different sources:

| Question | Useful evidence |
|---|---|
| Did AWS receive an API call? | CloudTrail |
| What did the executor record? | CloudWatch Logs |
| What does the rule report? | AWS Config |
| What is the resource state now? | Direct provider readback |
| What did the workflow approve/track? | Durable batch/approval state |
| What did Policy decide? | Gateway/Policy evidence |

The operator surface correlates these sources; it does not replace them.

## ⏱️ Immediate truth vs eventual compliance

Direct readback determines the immediate remediation result. AWS Config can update later.

That means **provider verified** and **Config compliant** are related but not identical events.

## 🚫 What this does not prove

The project does not claim:

- production readiness;
- multi-account remediation;
- arbitrary resource or arbitrary-subset remediation;
- generic autonomous AWS administration;
- complete host-wide least privilege.

## 💡 Reusable lessons

- Demonstrate a read-only path before a write path.
- Keep different action families independently approved.
- Track `UNKNOWN` rather than inventing success after uncertainty.
- Show the operator where each piece of evidence comes from.

## 🔗 Source / evidence

Last reviewed: **2026-09-15**.

- [Demo v1](https://github.com/amitkarpe/aws-secops/blob/main/docs/demo-v1.md)
- [Architecture](https://github.com/amitkarpe/aws-secops/blob/main/docs/architecture.md)
- [Governance](https://github.com/amitkarpe/aws-secops/blob/main/docs/governance.md)
