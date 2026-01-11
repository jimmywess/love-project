document.addEventListener("DOMContentLoaded", () => {
  const continueBtn = document.querySelector("#letter-continue");
  if (!continueBtn) return;

  const saveMainViewed = () => {
    try {
      localStorage.setItem("mainViewed", "true");
    } catch (_) {}
  };

  continueBtn.addEventListener("click", (event) => {
    event.preventDefault();
    saveMainViewed();
    navigateTo("menu.html");
  });
});
