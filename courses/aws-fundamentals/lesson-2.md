# Lesson 2: How AWS Supports Business Workflows

## Why this matters
In many organizations, cloud discussions jump quickly from ideas to tools, skipping over how work actually flows from concept to production.

For non-technical stakeholders, understanding **where decisions are made** — and **where tradeoffs appear** — is far more valuable than knowing specific services.

**Goal of this lesson:** Build a high-level mental model for how cloud-based systems move from idea to operation, and where business input has the most impact.

---

## From idea to running system (high-level view)

Most cloud-based initiatives follow a similar lifecycle:

1. A business need or opportunity is identified  
2. A technical solution is proposed  
3. The system is built and deployed  
4. The system is monitored, scaled, and maintained  

![Cloud delivery lifecycle from business need to operating and improving a system, with cost, reliability, security, and ownership considerations across phases](../../assets/diagrams/cloud-delivery-lifecycle.svg)

The boxes across the top show the typical lifecycle of a cloud-based system, from an initial business need through ongoing operation and improvement.

The horizontal swim lanes beneath the lifecycle represent **decision lenses** — areas of concern that span multiple phases rather than appearing at a single point in time:

- **Cost** influences decisions from initial proposal through ongoing operation.
- **Reliability** becomes relevant once systems are built and remains critical in production.
- **Security & Access** must be considered early and revisited continuously.
- **Ownership** is most visible after deployment, when systems require monitoring and support.

These lenses help illustrate why many cloud decisions are not “one-and-done” and why stakeholder input is valuable at multiple stages of the process.

The technical details vary, but the **decision points** remain consistent.

If you refer back to the diagram in Lesson 1, this flow still maps to the same building blocks:
- compute runs the work,
- storage holds the data,
- networking connects everything.

---

## Where architecture decisions show up
Architecture is simply the set of choices that define:
- how components are separated,
- how they communicate,
- and how they scale or fail.

These choices affect:
- delivery speed,
- long-term cost,
- reliability,
- and operational complexity.

> **Key takeaway**  
> Architecture decisions are rarely “purely technical.” They encode business priorities.

---

## Cost: how cloud spending actually behaves
Unlike traditional infrastructure, cloud cost is typically:
- usage-based,
- variable over time,
- and influenced by design decisions.

Common cost drivers include:
- how often systems run,
- how much data is stored,
- how much data moves between components,
- and how long resources remain active.

> **Why this matters**  
> Two systems with the same functionality can have very different cost profiles depending on design.

Good stakeholder questions:
- “What usage pattern is assumed here?”
- “What happens to cost as adoption grows?”
- “Which parts of this system run continuously vs only when needed?”

---

## Scale and reliability (what “scalable” really means)
When teams talk about “scaling,” they may mean:
- handling more users,
- processing more data,
- or maintaining performance during spikes.

Cloud platforms make scaling *possible*, but not *automatic*.  
Systems still need to be designed to:
- tolerate failure,
- recover gracefully,
- and scale predictably.

> ⚠️ **Common misconception**  
> “AWS makes systems reliable by default.”  
> In practice, reliability comes from design choices layered on top of cloud infrastructure.

Stakeholder value here comes from clarifying expectations:
- “What level of downtime is acceptable?”
- “What happens if a component fails?”
- “Is this system critical or best-effort?”

---

## Ownership and ongoing operations
Once a system is live, work does not stop.

Operational responsibilities typically include:
- monitoring and alerting,
- access management,
- cost review,
- security updates,
- and responding to incidents.

Even when teams use managed services, **ownership never disappears** — it shifts.

> **Key takeaway**  
> Cloud reduces *how* work is done, not *who* is accountable.

A useful framing question:
> “Who is responsible for this system six months after launch?”

---

## Scenario: Proposal review
A team proposes a new internal application and says:
> “We can build this quickly using AWS, and it should scale automatically.”

Before approving, consider asking:
- What assumptions are being made about usage?
- Which parts of the system run continuously?
- Who owns monitoring, cost review, and access control?
- What would be expensive to change later?

These questions help surface hidden tradeoffs early.

---

## Putting it all together
For non-technical stakeholders, value comes from:
- recognizing where decisions have long-term impact,
- asking questions that clarify assumptions,
- and aligning technical choices with business priorities.

You don’t need to design systems — but you *do* need to understand how decisions ripple through cost, scale, and ownership.

---

## Next step
Continue to: **[Knowledge Check](knowledge-check.md)**  
Or revisit: **[Lesson 1: Cloud Concepts You Actually Need](lesson-1.md)**
