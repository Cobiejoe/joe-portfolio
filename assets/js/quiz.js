(function () {
  function renderQuiz(root) {
    const questions = [
      {
        prompt: "Which building blocks are described? “The app runs logic and saves results for reporting.”",
        choices: ["Compute + Storage", "Networking + Storage", "Compute + Networking", "Storage only"],
        answerIndex: 0,
        explanation: "Compute runs the logic; storage persists the results."
      },
      {
        prompt: "Best follow-up to: “Cloud is automatically cheaper.”",
        choices: [
          "What usage assumptions drive the estimate?",
          "Which programming language will we use?",
          "How many engineers are on the team?",
          "Can we make it multi-region?"
        ],
        answerIndex: 0,
        explanation: "Cloud cost is usage-based; assumptions determine the estimate."
      }
    ];

    const state = { score: 0, answered: 0 };

    root.innerHTML = `
      <div class="quiz-card">
        <h3>Knowledge Check</h3>
        <p class="quiz-subtitle">Select an answer for each question. You’ll get immediate feedback.</p>
        <div class="quiz-questions"></div>
        <div class="quiz-footer">
          <button class="quiz-reset" type="button">Reset</button>
          <span class="quiz-score" aria-live="polite"></span>
        </div>
      </div>
    `;

    const qWrap = root.querySelector(".quiz-questions");
    const scoreEl = root.querySelector(".quiz-score");
    const resetBtn = root.querySelector(".quiz-reset");

    function updateScore() {
      scoreEl.textContent = `Score: ${state.score}/${questions.length}`;
    }

    function makeQuestion(q, idx) {
      const container = document.createElement("section");
      container.className = "quiz-question";
      container.innerHTML = `
        <p><strong>Q${idx + 1}.</strong> ${q.prompt}</p>
        <div class="quiz-choices" role="group" aria-label="Question ${idx + 1} choices"></div>
        <p class="quiz-feedback" aria-live="polite"></p>
      `;

      const choicesEl = container.querySelector(".quiz-choices");
      const feedbackEl = container.querySelector(".quiz-feedback");
      let locked = false;

      q.choices.forEach((label, choiceIdx) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "quiz-choice";
        btn.textContent = label;

        btn.addEventListener("click", () => {
          if (locked) return;
          locked = true;

          const correct = choiceIdx === q.answerIndex;
          btn.classList.add(correct ? "correct" : "incorrect");
          feedbackEl.innerHTML = correct
            ? `✅ Correct. <em>${q.explanation}</em>`
            : `❌ Not quite. <em>${q.explanation}</em>`;

          // mark correct choice if incorrect selected
          if (!correct) {
            const correctBtn = choicesEl.children[q.answerIndex];
            correctBtn.classList.add("correct");
          }

          state.answered += 1;
          if (correct) state.score += 1;
          updateScore();
        });

        choicesEl.appendChild(btn);
      });

      return container;
    }

    questions.forEach((q, i) => qWrap.appendChild(makeQuestion(q, i)));

    resetBtn.addEventListener("click", () => renderQuiz(root));
    updateScore();
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
