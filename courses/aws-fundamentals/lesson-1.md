---
layout: default
title: Lesson 1 – Cloud Concepts You Actually Need
---
# Lesson 1: Cloud Concepts You Actually Need

When people talk about “the cloud,” they often mean very different things. For some, it’s a place where applications run. For others, it’s a billing model, a security boundary, or a source of both flexibility and confusion.

For non-technical stakeholders, this ambiguity can make cloud conversations feel opaque or overly abstract. The goal of this lesson is not to turn you into an engineer, but to establish a **shared mental model**—one that makes cloud discussions easier to follow and more productive to participate in.

By the end of this lesson, you should be able to listen to a technical discussion about cloud systems and roughly understand *what is happening*, *where decisions are being made*, and *why those decisions matter*.

---

## What “the cloud” means in practice

At a practical level, cloud computing is about accessing computing resources as services instead of owning and operating physical infrastructure yourself.

Rather than purchasing servers, networking equipment, and storage hardware—and then maintaining them over time—organizations rent these capabilities from a provider. Those resources can be provisioned quickly, scaled up or down as needed, and paid for based on usage.

A common analogy is utilities. Most organizations don’t generate their own electricity or treat their own water. They rely on a provider that specializes in operating that infrastructure at scale. Cloud computing applies a similar idea to computing resources.

That comparison isn’t perfect, but it’s useful. It highlights two important ideas:  
first, that someone else is operating the underlying infrastructure, and second, that usage and design choices directly influence cost and reliability.

---

## The building blocks that show up everywhere

Even though cloud platforms offer hundreds of services, most systems can be understood using a small set of recurring building blocks. These concepts appear whether you’re discussing a simple internal tool or a large customer-facing application.

### Compute: where work happens

Compute refers to the resources that run code. This might be an application backend, a scheduled job, or a service responding to user requests.

You’ll often hear teams describe compute in different ways—virtual machines, containers, serverless functions—but those distinctions matter less at this level. What matters is that compute is responsible for executing logic. If something “runs,” it’s running on compute.

From a stakeholder perspective, compute decisions tend to influence performance, cost during active use, and operational complexity.

### Storage: where data lives

Storage is where information is kept so it can be retrieved later. This includes files, databases, logs, and backups.

Storage decisions are often long-lived. Data tends to accumulate over time, which means storage choices frequently have a larger impact on long-term cost and compliance than on day-to-day performance.

When teams discuss retention, reporting, or historical analysis, they are usually talking—implicitly or explicitly—about storage.

### Networking: how components communicate

Networking connects users to applications and applications to each other. It defines how traffic flows, which systems can talk to one another, and where boundaries exist.

Although networking details can be highly technical, the high-level questions are accessible:  
Who can reach this system? From where? And under what conditions?

Networking decisions often surface in conversations about security, access control, and reliability.

---

## Seeing the system as a whole

The diagram below brings these building blocks together into a single view. As you continue through this course, refer back to it whenever a discussion starts to feel fragmented or overly detailed.

![Cloud mental model showing users, applications, compute, storage, and networking](../../assets/diagrams/cloud-mental-model.svg)

Most cloud conversations—regardless of how complex they sound—can be mapped back to some combination of these elements and how they interact.

---

## What people usually mean by “managed services”

You’ll often hear teams describe a service as “managed.” In general, this means the cloud provider takes responsibility for certain operational tasks such as infrastructure maintenance, scaling, patching, or backups.

Managed services can reduce the amount of hands-on operational work required from a team, but they don’t eliminate responsibility altogether. They shift it.

From a decision-making perspective, managed services usually involve tradeoffs. Teams gain speed and reduced operational burden, but may give up some flexibility or accept different cost dynamics as usage grows.

Good stakeholder questions in these discussions focus less on implementation and more on implications:  
What work does this remove from the team? What responsibilities remain? And how does this choice affect cost and risk over time?

---

## Understanding shared responsibility

A common assumption is that moving to the cloud transfers responsibility entirely to the provider. In reality, responsibility is shared.

Cloud providers are responsible for the security *of* the cloud—physical data centers, hardware, and foundational infrastructure. Organizations using the cloud remain responsible for security *in* the cloud, including access controls, configuration choices, and how data is handled.

Many real-world issues stem not from failures in underlying infrastructure, but from misconfiguration, overly broad permissions, or unclear ownership. Understanding where responsibility lies helps surface these risks earlier, when they are easier to address.

In the system diagram above, the provider owns the infrastructure layer, while teams own how applications and data are configured and accessed on top of it.

---

## Common misconceptions that slow teams down

Cloud conversations often stall because of a few recurring misconceptions.

One is the belief that cloud systems are automatically cheaper. In practice, cloud cost depends heavily on usage patterns and design decisions. Two systems that look similar can behave very differently from a cost perspective once real usage is applied.

Another misconception is that reliability and security are default properties of the platform. Cloud platforms make these outcomes possible, but they still require intentional design choices.

A useful way to reframe these moments is to ask clarifying questions rather than challenge assumptions directly. Questions about usage, ownership, and acceptable risk tend to move discussions forward more effectively than debates about tools.

---

## Applying the concepts

Before moving on, take a moment to reflect:

- When you hear a system described, can you identify where compute, storage, and networking are involved?
- Which parts of a system are likely to influence long-term cost or operational effort?
- Where would you expect responsibility to remain with the team, even when using managed services?

You don’t need precise answers. The goal is to build comfort recognizing the shape of the system and the kinds of decisions being made.

---

## Next lesson

In **Lesson 2**, we’ll look at how these concepts show up over time—how systems move from idea to deployment to ongoing operation, and where non-technical stakeholders can have the most impact.

Continue to: **[Lesson 2: How AWS Supports Business Workflows](lesson-2.md)**
