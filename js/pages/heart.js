document.addEventListener("DOMContentLoaded", () => {
  const MAX_CLICKS = 30;

  const heart = document.getElementById("heart");
  const progress = document.getElementById("heart-progress");

  if (!heart || !progress) return;

  let clicks = 0;

  const updateProgress = () => {
    progress.textContent = `${clicks} / ${MAX_CLICKS}`;
  };

  const completeHeart = () => {
    try {
      localStorage.setItem("heartCompleted", "true");
    } catch (_) {}

    heart.classList.add("is-complete");

    setTimeout(() => {
      window.location.href = "quiz.html";
    }, 800);
  };

  heart.addEventListener("click", () => {
    if (clicks >= MAX_CLICKS) return;

    clicks += 1;
    updateProgress();

    if (clicks === MAX_CLICKS) {
      completeHeart();
    }
  });

  updateProgress();
});
