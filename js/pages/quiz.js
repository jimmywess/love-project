document.addEventListener("DOMContentLoaded", () => {
  const questionEl = document.getElementById("quiz-question");
  const answerEl = document.getElementById("quiz-answer");
  const progressEl = document.getElementById("quiz-progress");
  const nextBtn = document.getElementById("quiz-next");

  const QUESTIONS = [
    "What’s the first thing you think of when you see my name?",
    "What kind of moments between us stay in your mind the longest?",
    "What part of yourself do you show me that you don’t show others?",
    "What makes you feel valued when you’re with me?",
    "What do you hope we never lose between us?",
    "What do you feel when you think about “us”?",
    "What’s one small thing about me that makes you smile?",
    "What kind of presence do you feel I have in your life?",
    "What do you enjoy the most when we talk for a long time?",
    "What do you feel when you imagine us moving forward together?"
  ];

  let index = 0;

  const loadAnswer = () => {
    return localStorage.getItem(`quiz-answer-${index}`) || "";
  };

  const saveAnswer = () => {
    localStorage.setItem(`quiz-answer-${index}`, answerEl.value.trim());
  };

  const render = () => {
    questionEl.textContent = QUESTIONS[index];
    progressEl.textContent = `Question ${index + 1} of ${QUESTIONS.length}`;
    answerEl.value = loadAnswer();
  };

  nextBtn.addEventListener("click", () => {
    saveAnswer();

    if (index < QUESTIONS.length - 1) {
      index++;
      render();
    } else {
      localStorage.setItem("quizCompleted", "true");
      navigateTo("login.html");
    }
  });

  render();
});
