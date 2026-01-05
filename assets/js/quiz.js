(function () {
  function renderQuiz(root) {
    const quizTitle = "Knowledge Check";
    const quizSubtitle =
      "Scenario-based questions to reinforce the key concepts from Lessons 1 and 2.";

    const questions = [
      {
        prompt:
          "In a design review, the team says: “Requests hit our API, we run some business logic, and we save the results so they can be used in a weekly report.” Which cloud building blocks are clearly involved?",
        choices: [
          "Compute and Storage (with Networking implied)",
          "Networking and Storage (compute is optional)",
          "Compute only (storage is handled automatically by AWS)",
          "Storage only (the API is just a routing layer)"
        ],
        answerIndex: 0,
        explanation:
          "Running logic is compute; saving results is storage. Networking is typically involved for requests, but the statement most directly describes compute + storage."
      },
      {
        prompt:
          "A proposal claims: “Moving this workload to the cloud will reduce costs.” What is the most useful follow-up to surface cost assumptions early?",
        choices: [
          "“What usage pattern are we assuming (steady, seasonal, spiky), and how does cost change as usage grows?”",
          "“Which AWS services will we use?”",
          "“How quickly can we build it?”",
          "“Can we make it multi-region?”"
        ],
        answerIndex: 0,
        explanation:
          "Cloud cost is usage-based. The same architecture can be cheap or expensive depending on frequency, scale, data volumes, and growth assumptions."
      },
      {
        prompt:
          "A stakeholder says: “Since it’s on AWS, security is covered.” Which response best reflects the shared responsibility model at a business level?",
        choices: [
          "“AWS secures the underlying infrastructure; we still own access controls, configuration choices, and how data is handled.”",
          "“That’s correct—AWS is responsible for end-to-end security.”",
          "“Security only becomes important after launch.”",
          "“Security is primarily a networking concern, so we can defer it.”"
        ],
        answerIndex: 0,
        explanation:
          "AWS handles security *of* the cloud. Teams remain responsible for security *in* the cloud—permissions, configuration, and data governance are common failure points."
      },
      {
        prompt:
          "In the lifecycle diagram, the swim lanes represent “decision lenses.” What is the best interpretation of that idea?",
        choices: [
          "Cost, reliability, security, and ownership need attention across multiple phases—not just at a single moment.",
          "Each swim lane is a separate team’s workflow that runs in parallel.",
          "The swim lanes indicate steps that happen after deployment only.",
          "The swim lanes are optional considerations for non-critical systems."
        ],
        answerIndex: 0,
        explanation:
          "The lanes are cross-cutting concerns. They show where stakeholder questions and decisions remain relevant across time."
      },
      {
        prompt:
          "A team says: “AWS makes this highly reliable by default.” What question best clarifies expectations and drives the right design tradeoffs?",
        choices: [
          "“What level of downtime and data loss is acceptable for this system?”",
          "“Which programming language are we using?”",
          "“How many engineers are assigned?”",
          "“Which AWS region is the best?”"
        ],
        answerIndex: 0,
        explanation:
          "Reliability is an expectation-setting and design problem. Acceptable downtime/data loss informs architecture, monitoring, and incident response planning."
      },
      {
        prompt:
          "The system has launched successfully. Which operational ownership question is most important to answer to avoid gaps in support?",
        choices: [
          "“Who owns monitoring, on-call response, and ongoing cost/security reviews?”",
          "“How many features shipped in v1?”",
          "“How fast was the initial build?”",
          "“What tool did we use to deploy?”"
        ],
        answerIndex: 0,
        explanation:
          "Cloud reduces operational burden in some areas, but accountability remains. Clear ownership prevents ‘nobody owns it’ failures after launch."
      }
    ];

    const state = {
      score: 0,
      answered: 0,
      locked: Array(questions.length).fill(false)
    };

    root.innerHTML = `
      <div class="quiz-card" role="region" aria-label="${quizTitle}">
        <div class="quiz-header">
          <h3 class="quiz-title">${quizTitle}</h3>
          <p class="quiz-subtitle">${quizSubtitle}</p>
        </div>

        <div class="quiz-meta">
          <span class="quiz-progress" aria-live="polite"></span>
          <span class="quiz-score" aria-live="polite"></span>
        </div>

        <ol class="quiz-questions"></ol>

        <div class="quiz-footer">
          <button class="quiz-reset" type="button">Reset</button>
          <span class="quiz-hint">Tip: If you miss a question, revisit the relevant lesson section and try again.</span>
        </div>
      </div>
    `;

    const qWrap = root.querySelector(".quiz-questions");
    const scoreEl = root.querySelector(".quiz-score");
    const progressEl = root.querySelector(".quiz-progress");
    const resetBtn = root.querySelector(".quiz-reset");

    function updateMeta() {
      scoreEl.textContent = `Score: ${state.score}/${questions.length}`;
      progressEl.textContent = `Answered: ${state.answered}/${questions.length}`;
    }

    function makeQuestion(q, idx) {
      const li = document.createElement("li");
      li.className = "quiz-question";
      li.innerHTML = `
        <p class="quiz-prompt"><strong>Q${idx + 1}.</strong> ${q.prompt}</p>
        <div class="quiz-choices" role="group" aria-label="Question ${idx + 1} choices"></div>
        <div class="quiz-feedback" aria-live="polite"></div>
      `;

      const choicesEl = li.querySelector(".quiz-choices");
      const feedbackEl = li.querySelector(".quiz-feedback");

      q.choices.forEach((label, choiceIdx) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "quiz-choice";
        btn.textContent = label;

        btn.addEventListener("click", () => {
          if (state.locked[idx]) return;
          state.locked[idx] = true;

          const correct = choiceIdx === q.answerIndex;

          // mark selected
          btn.classList.add(correct ? "correct" : "incorrect");
          btn.setAttribute("aria-pressed", "true");

          // mark correct option if incorrect selected
          if (!correct) {
            const correctBtn = choicesEl.children[q.answerIndex];
            if (correctBtn) correctBtn.classList.add("correct");
          }

          // disable all buttons after answer
          Array.from(choicesEl.children).forEach((b) => {
            b.disabled = true;
            b.classList.add("locked");
          });

          feedbackEl.innerHTML = correct
            ? `<div class="feedback ok"><strong>Correct.</strong> ${q.explanation}</div>`
            : `<div class="feedback no"><strong>Not quite.</strong> ${q.explanation}</div>`;

          state.answered += 1;
          if (correct) state.score += 1;
          updateMeta();
        });

        choicesEl.appendChild(btn);
      });

      return li;
    }

    questions.forEach((q, i) => qWrap.appendChild(makeQuestion(q, i)));

    resetBtn.addEventListener("click", () => renderQuiz(root));

    updateMeta();
  }

  function boot() {
    document.querySelectorAll("[data-quiz='aws-fundamentals']").forEach(renderQuiz);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
