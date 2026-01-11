document.addEventListener("DOMContentLoaded", () => {
  const quizForm = document.getElementById("quiz-form");
  const feedbackElement = document.getElementById("quiz-feedback");
  const questionBlocks = document.querySelectorAll(".question-block");

  if (!quizForm || questionBlocks.length === 0) return;

  const correctAnswers = {
    1: "a",
    2: "b",
    3: "c"
  };

  const getSelectedAnswers = () => {
    const answers = {};
    questionBlocks.forEach(block => {
      const questionId = block.getAttribute("data-question-id");
      const selected = block.querySelector("input[type='radio']:checked");
      if (questionId && selected) {
        answers[questionId] = selected.value;
      }
    });
    return answers;
  };

  const allQuestionsAnswered = (answers) =>
    questionBlocks.length === Object.keys(answers).length;

  const calculateScore = (answers) => {
    let score = 0;
    Object.keys(correctAnswers).forEach(id => {
      if (answers[id] === correctAnswers[id]) {
        score += 1;
      }
    });
    return score;
  };

  const saveCompletion = () => {
    try {
      localStorage.setItem("quizCompleted", "true");
    } catch (_) {}
  };

  const showMessage = (message) => {
    if (feedbackElement) {
      feedbackElement.textContent = message;
    }
  };

  quizForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const answers = getSelectedAnswers();

    if (!allQuestionsAnswered(answers)) {
      showMessage("Take a moment and answer all the questions.");
      return;
    }

    const score = calculateScore(answers);
    const totalQuestions = Object.keys(correctAnswers).length;
    const passThreshold = Math.ceil(totalQuestions * 0.7);

    if (score >= passThreshold) {
      saveCompletion();
      showMessage("That felt right. Let’s continue.");

      setTimeout(() => {
        navigateTo("login.html");
      }, 1000);
    } else {
      showMessage("It’s okay. Try again — there’s no rush.");
    }
  });
});
