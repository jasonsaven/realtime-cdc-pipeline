// Reusable multiple-choice quiz widget.
//
// Markup:
//   <div class="quiz">
//     <div class="quiz-q" data-answer="2">           <!-- 0-based index of correct option -->
//       <p class="q">Question text</p>
//       <button>Option</button> ... (one per option)
//       <p class="feedback" data-explain="Why the right answer is right."></p>
//     </div>
//     <p class="quiz-score"></p>
//   </div>
//
// Gives instant feedback per question and a running score.
document.querySelectorAll(".quiz").forEach((quiz) => {
  const questions = quiz.querySelectorAll(".quiz-q");
  const score = quiz.querySelector(".quiz-score");
  let answered = 0;
  let correct = 0;

  const updateScore = () => {
    if (score) score.textContent = `${correct} / ${answered} correct (of ${questions.length})`;
  };

  questions.forEach((q) => {
    const answer = Number(q.dataset.answer);
    const buttons = q.querySelectorAll("button");
    const feedback = q.querySelector(".feedback");

    buttons.forEach((btn, i) => {
      btn.addEventListener("click", () => {
        const isRight = i === answer;
        btn.classList.add(isRight ? "right" : "wrong");
        buttons[answer].classList.add("right");
        buttons.forEach((b) => (b.disabled = true));
        answered += 1;
        if (isRight) correct += 1;
        if (feedback) {
          feedback.textContent = (isRight ? "Correct. " : "Not quite. ") + (feedback.dataset.explain || "");
        }
        updateScore();
      });
    });
  });

  updateScore();
});
