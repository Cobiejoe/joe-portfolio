---
layout: default
title: Page Title
---

# Case Study: AWS Fundamentals for Non-Technical Stakeholders

## Overview
This case study documents the design and development of a short, documentation-style training experience intended to help non-technical business stakeholders engage more effectively in cloud-related discussions.

The project was created as a representative portfolio artifact. All content is non-proprietary and was designed to reflect real-world constraints common in enterprise learning environments.

---

## The problem
As organizations adopt cloud-native platforms, non-technical stakeholders are increasingly expected to participate in discussions about architecture, cost, security, and reliability.

In practice, many business partners:
- feel disconnected from technical conversations,
- rely on oversimplified assumptions (e.g., “cloud is cheaper,” “AWS handles security”),
- or disengage entirely due to perceived complexity.

This gap often leads to:
- misaligned expectations,
- late-stage surprises around cost or ownership,
- and reduced confidence on both sides of the business–engineering partnership.

The core problem was not a lack of technical documentation, but a lack of **accessible, decision-oriented context**.

---

## Target audience
The primary audience for this training includes:
- Product and Program Managers
- Business Analysts
- Operations and Finance partners
- Non-technical people leaders working with engineering teams

These learners do not need configuration-level depth. They need:
- shared vocabulary,
- mental models,
- and guidance on *where* and *when* to ask the right questions.

---

## Design goals
The project was guided by four primary goals:

1. **Reduce cognitive overload**  
   Avoid certification-style depth and focus on foundational concepts that recur across systems.

2. **Support better decision-making**  
   Emphasize cost, reliability, security, and ownership as ongoing considerations rather than one-time choices.

3. **Respect real-world constraints**  
   Assume limited learner time, mixed technical confidence, and asynchronous consumption.

4. **Demonstrate technical credibility**  
   Use tooling and structure familiar to engineering teams while remaining accessible to non-technical learners.

---

## Instructional approach

### Documentation-style learning
Rather than a slide deck or video-first approach, the course was structured as documentation-style content hosted on GitHub Pages.

This choice:
- mirrors how many engineering teams already consume information,
- supports self-paced exploration,
- and allows content to remain lightweight, versioned, and maintainable.

### Conceptual framing over tool training
Lessons focus on:
- cloud building blocks (compute, storage, networking),
- system lifecycles,
- and cross-cutting decision lenses.

Specific AWS services are intentionally de-emphasized to keep the content durable and transferable.

---

## Content structure
The course consists of three components:

- **Lesson 1:** Cloud Concepts You Actually Need  
  Introduces foundational mental models and clarifies common misconceptions.

- **Lesson 2:** How AWS Supports Business Workflows  
  Explores system lifecycles, decision points, and stakeholder leverage.

- **Knowledge Check:** Interactive, scenario-based assessment  
  Reinforces judgment and interpretation rather than factual recall.

---

## Visual and interaction design

### Diagrams as anchors
Each lesson includes a small number of conceptual diagrams designed to:
- reduce perceived text density,
- provide visual reference points,
- and support systems-level thinking.

Diagrams avoid service-level detail and instead emphasize relationships and flow.

### Interactive knowledge check
An interactive knowledge check was implemented using lightweight JavaScript embedded within Markdown pages.

This approach:
- works within static site constraints,
- provides immediate feedback,
- and demonstrates how interactivity can be layered onto documentation-style learning without a full LMS.

---

## Tooling decisions

| Tool | Rationale |
|----|----|
| GitHub Pages | Free, public hosting with strong alignment to technical documentation workflows |
| Markdown | Lightweight, readable, and easy to maintain |
| Custom JavaScript | Enables interactivity without external dependencies |
| SVG diagrams | Scalable visuals that render reliably across environments |

These choices reflect common tradeoffs in enterprise learning teams, where tooling must balance capability, cost, and maintainability.

---

## Use of AI-assisted workflows

AI tools were intentionally incorporated into the design and development process as **assistive mechanisms**, not as content generators or replacements for instructional judgment.

The goal was to accelerate routine tasks, explore alternatives, and reduce friction—while retaining full ownership over learning design decisions, tone, and technical accuracy.

### Where AI added value

AI tools were used selectively to support:

- **Early ideation and outlining**  
  Rapidly exploring lesson structures, sequencing options, and alternative framings before committing to a final instructional approach.

- **Language refinement**  
  Drafting and revising explanatory text to improve clarity, tone, and accessibility for non-technical audiences, while preserving technical correctness.

- **Scenario generation**  
  Brainstorming realistic workplace scenarios and question stems for the knowledge check, which were then edited and validated to align with learning objectives.

- **Code scaffolding**  
  Generating initial JavaScript and CSS scaffolds for the interactive knowledge check, followed by manual refinement, debugging, and styling to meet functional and accessibility expectations.

### Where human judgment remained essential

AI assistance was deliberately *not* used for:

- Defining learning objectives or success criteria  
- Making instructional tradeoffs (what to include vs exclude)  
- Determining conceptual depth or audience assumptions  
- Validating technical correctness or business relevance  

All final decisions regarding content scope, structure, and instructional intent were made by the author.

### Why this matters in practice

In real-world learning teams, AI tools can meaningfully improve speed and throughput—but only when paired with strong instructional judgment and domain expertise.

This project demonstrates an approach to AI integration that:
- enhances productivity without compromising quality,
- keeps accountability with the designer,
- and supports scalable, maintainable learning development workflows.

The intent was not to showcase AI usage itself, but to model how AI can responsibly support modern technical training design.

---

## Tradeoffs and constraints
Several deliberate tradeoffs were made:

- No LMS tracking or completion data  
- No video or narration  
- Limited visual polish in favor of clarity and portability  

These constraints were accepted to prioritize:
- accessibility,
- reuse,
- and ease of iteration.

---

## Outcomes
The finished artifact demonstrates:

- A clear instructional throughline from concept to application
- Technical fluency without unnecessary complexity
- The ability to design learning within realistic platform constraints
- End-to-end ownership, from content design to delivery mechanism

---

## Key takeaway
Effective technical training for non-technical audiences is less about simplifying technology and more about **clarifying decisions**.

This project was designed to demonstrate how foundational concepts, visual models, and well-framed questions can meaningfully improve cross-functional collaboration in cloud-enabled organizations.

---

## Explore the artifacts

- **View the course:** [AWS Fundamentals for Non-Technical Stakeholders](../courses/aws-fundamentals/)
- **Review the lab:** [Architecture walkthrough](../labs/aws-architecture-walkthrough.md)
- **Back to case studies:** [All case studies](index.md)
