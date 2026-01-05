---
layout: default
title: Page Title
---

# Lab Walkthrough: Reading a Simple AWS Architecture

## Purpose
This walkthrough is designed to help learners practice **interpreting a basic cloud architecture** rather than building or configuring resources.

The goal is to reinforce the ability to:
- identify cloud building blocks,
- understand how components interact,
- and reason about cost, reliability, security, and ownership at a high level.

This lab is intentionally read-only and does not require an AWS account.

---

## Scenario
A small internal web application allows employees to:
- submit a request,
- store the request data,
- and view aggregated results in a dashboard.

The system is expected to:
- support moderate usage,
- remain available during business hours,
- and store data for reporting purposes.

---

## Architecture overview
At a conceptual level, the system includes:

- A web-based application interface
- Compute resources to process requests
- Storage for submitted data
- Networking to connect users and services
- AWS-managed infrastructure underneath

Refer back to the **cloud mental model** from Lesson 1 as you read.

---

## Step 1: Identify the building blocks
Before thinking about tools or services, identify the core components.

**Questions to consider:**
- Where does compute occur?
- Where is data stored?
- How do users reach the application?
- Which components must communicate internally?

**Key idea:**  
Most architectures can be understood without naming a single AWS service.

---

## Step 2: Understand data flow
Next, trace how data moves through the system.

1. A user submits a request through the application
2. The application processes the request
3. Data is written to storage
4. Aggregated data is retrieved for reporting

**Why this matters:**  
Understanding data flow helps surface:
- potential performance bottlenecks,
- security boundaries,
- and cost drivers.

---

## Step 3: Consider cost implications
Even without service-level detail, cost questions can be explored.

**Discussion prompts:**
- Which components run continuously?
- Which components run only when requests occur?
- How might storage costs change over time?
- Where could unexpected data transfer costs appear?

**Key takeaway:**  
Cost behavior is shaped by usage patterns and architecture decisions, not just provider pricing.

---

## Step 4: Consider reliability and failure
Now consider how the system behaves under stress or failure.

**Questions to ask:**
- What happens if the compute layer becomes unavailable?
- Can the system tolerate partial outages?
- Is the application critical, or can brief downtime be accepted?

**Key idea:**  
Reliability is an outcome of design choices, not a default cloud feature.

---

## Step 5: Consider security and access
Without diving into configuration, security considerations still apply.

**Discussion prompts:**
- Who can access the application?
- Who can access stored data?
- Where are access controls enforced?
- What happens if credentials are compromised?

**Reminder:**  
AWS secures the underlying infrastructure, but access and configuration remain the team’s responsibility.

---

## Step 6: Clarify ownership
Finally, consider ongoing ownership once the system is live.

**Questions to answer:**
- Who monitors system health?
- Who reviews cost and usage?
- Who responds to incidents?
- Who approves access changes?

**Key takeaway:**  
Cloud shifts *how* systems are operated, not *who* is accountable.

---

## Reflection
Based on this walkthrough:

1. Which part of the system would you want the most visibility into as a stakeholder?
2. Which decision lens (cost, reliability, security, ownership) feels easiest to overlook?
3. What question would you ask first in a real architecture review?
