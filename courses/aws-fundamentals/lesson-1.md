# Lesson 1: Cloud Concepts You Actually Need

## Why this matters
When “the cloud” feels like a black box, conversations with technical teams often drift into jargon, assumptions, and misalignment.

You don’t need to become an engineer to contribute meaningfully — but you *do* need a shared foundation so you can:
- understand what’s being proposed,
- recognize tradeoffs,
- and ask questions that surface cost, risk, and ownership early.

**Goal of this lesson:** Provide a practical mental model of cloud systems without certification-level depth.

---

## What “the cloud” actually is
At its core, the cloud is **computing resources delivered as services**.

Instead of buying, hosting, and maintaining your own physical servers and data centers, organizations:
- rent compute and storage capacity on demand,
- rely on managed services to reduce operational overhead,
- and scale resources up or down based on real usage.

## Cloud computing at a glance

![Cloud mental model showing users, applications, compute, storage, and networking](../../assets/diagrams/cloud-mental-model.svg)

Use this diagram as a reference point as you read. Most cloud conversations map back to these same building blocks -
no matter how complex they sound.


### A useful mental model
Think of the cloud like utilities:
- You don’t build a power plant to get electricity.
- You pay for what you use.
- A provider maintains the underlying infrastructure.

Cloud computing works similarly — except the “utility” is compute, storage, networking, and managed software services.

---

## The three cloud building blocks you’ll hear most often
Most systems — regardless of complexity — can be explained using three foundational building blocks.

### 1) Compute (running work)
Compute is **where code runs**. Examples include:
- application backends,
- scheduled jobs,
- APIs responding to user requests,
- data processing tasks.

In AWS discussions, you may hear terms like *instances*, *containers*, or *serverless*. You don’t need to know how they’re configured — just remember:  
**Compute is responsible for executing work.**

---

### 2) Storage (saving data)
Storage is **where data lives**. This can include:
- files (documents, images, logs),
- databases (structured business data),
- backups and archives.

Storage choices often affect:
- long-term cost,
- performance and access speed,
- compliance and retention requirements.

As a stakeholder, storage discussions are a good place to ask about cost behavior over time.

---

### 3) Networking (connecting systems)
Networking is **how components communicate**:
- users accessing applications,
- applications talking to databases,
- services communicating internally or externally.

Networking decisions frequently connect to:
- security boundaries,
- access control,
- system reliability.

Even at a high level, understanding *where* data flows is valuable for risk and compliance conversations.

> **Checkpoint**  
> If you’re unsure where something fits in a cloud discussion, ask yourself:  
> Is this about running work (compute), storing data (storage), or connecting systems (networking)?

---

## What “managed service” really means
A managed service is one where the cloud provider handles **some portion of setup, scaling, patching, backups, or infrastructure maintenance**.

<details>
<summary><strong>Why teams choose managed services</strong></summary>

Teams often choose managed services to:
- reduce operational overhead,
- shift maintenance responsibility,
- and standardize common infrastructure patterns.

The tradeoff is usually reduced flexibility in exchange for speed and reliability.
</details>


Helpful stakeholder questions include:
- “What operational work does this service remove for our team?”
- “What responsibilities remain with us?”
- “How does cost scale as usage grows?”

---

## Shared responsibility (business perspective)
A common misconception is: *“If it’s in the cloud, AWS handles it.”*

In reality, responsibility is shared:
- **AWS** is responsible for the security *of* the cloud (physical data centers, hardware, foundational services).
- **Your organization** is responsible for security *in* the cloud (access controls, configuration, data handling, and application behavior).

### Why this matters
Many real-world issues stem from:
- misconfiguration,
- overly broad permissions,
- unclear ownership,
- or lack of ongoing governance.

A strong planning question:
> “Who owns configuration, access, and ongoing review — and how is that enforced?”

---

## Common misconceptions (and better questions)

### “Cloud is automatically cheaper.”
Better questions:
- “What usage assumptions drive our cost estimate?”
- “How does cost change if usage doubles?”
- “Do we have monitoring and alerts in place?”

### “AWS manages everything.”
Better questions:
- “Which responsibilities stay with our team?”
- “Who owns access, backups, and incident response?”

### “We can fix architecture later.”
Better questions:
- “What decisions are expensive to change later?”
- “Which choices affect long-term cost or complexity?”

---

## Quick check (reflection)
Answer these briefly:

1. In your own words, what is “the cloud”?
2. Name the three building blocks and give one example of each.
3. What’s the difference between AWS responsibilities and your organization’s responsibilities?
4. What’s one question you can now ask to clarify cost or ownership in a technical discussion?

---

## Next lesson
Continue to: **[Lesson 2: How AWS Supports Business Workflows](lesson-2.md)**
