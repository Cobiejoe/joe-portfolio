---
layout: default
title: Lesson 2 – How AWS Supports Business Workflows
---
# Lesson 2: How AWS Supports Business Workflows

In Lesson 1, we focused on building a shared vocabulary for cloud conversations. That foundation makes it easier to follow discussions about systems, but it doesn’t always explain *how* cloud decisions unfold over time.

In practice, most cloud-related work is not a single technical event. It is a sequence of decisions that begin with a business need and continue long after a system is deployed. Understanding that lifecycle—and where influence actually exists—can make cloud discussions far more productive for non-technical stakeholders.

This lesson looks at how cloud-based systems typically move from idea to operation, and why questions about cost, reliability, security, and ownership tend to resurface again and again.

---

## From idea to running system

Most cloud initiatives start the same way: with a problem to solve or an opportunity to pursue. That initial need is translated into a proposed solution, built and tested by a technical team, deployed into an environment, and then operated over time.

While the tools and services involved may vary widely, the overall shape of the workflow is remarkably consistent. Systems don’t simply “go live” and disappear into the background. They evolve, accumulate data, incur cost, and require ongoing attention.

This is where non-technical stakeholders often have more leverage than they realize—particularly early in the process, when assumptions are still being formed, and later, when systems must be supported in the real world.

---

## Reading the lifecycle diagram

The diagram below shows a simplified lifecycle for a cloud-based system, from initial idea through ongoing operation.

![Cloud delivery lifecycle from business need to operating and improving a system, with cost, reliability, security, and ownership considerations across phases](../../assets/diagrams/cloud-delivery-lifecycle.svg)

The boxes across the top represent stages the system moves through. Beneath them are horizontal swim lanes that represent decision lenses—areas of concern that span multiple stages rather than appearing at a single point in time.

Cost, reliability, security, and ownership don’t show up once and disappear. They influence decisions early, resurface during implementation, and continue to matter long after deployment.

---

## Architecture as a record of decisions

When teams talk about “architecture,” they are often describing the outcome of many small decisions layered over time. Choices about how components are separated, how they communicate, and how they scale tend to reflect business priorities, even when those priorities aren’t stated explicitly.

For example, a system designed for rapid delivery may trade long-term efficiency for speed. A system designed for stability may accept slower iteration in exchange for predictability. These tradeoffs are not inherently good or bad, but they do have consequences.

Understanding architecture at this level allows stakeholders to ask better questions—not about specific services, but about inte
