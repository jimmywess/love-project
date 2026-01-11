document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("login-form");
  const usernameInput = document.getElementById("login-username");
  const passwordInput = document.getElementById("login-password");
  const feedbackElement = document.getElementById("login-feedback");

  if (!loginForm || !usernameInput || !passwordInput) return;

  const VALID_USERNAME = "rizzie";
  const VALID_SECRET = "forever";

  const isAlreadyLoggedIn = () => {
    try {
      return localStorage.getItem("loginCompleted") === "true";
    } catch (_) {
      return false;
    }
  };

  const saveLoginState = () => {
    try {
      localStorage.setItem("loginCompleted", "true");
    } catch (_) {}
  };

  const showMessage = (message) => {
    if (feedbackElement) {
      feedbackElement.textContent = message;
    }
  };

  if (isAlreadyLoggedIn()) {
    navigateTo("main.html");
    return;
  }

  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const username = usernameInput.value.trim().toLowerCase();
    const password = passwordInput.value.trim().toLowerCase();

    if (!username || !password) {
      showMessage("Take a moment — fill in both fields.");
      return;
    }

    if (username === VALID_USERNAME && password === VALID_SECRET) {
      saveLoginState();
      showMessage("Welcome. I’m glad you’re here.");

      setTimeout(() => {
        navigateTo("main.html");
      }, 900);
    } else {
      showMessage("That didn’t feel quite right. Try again.");
    }
  });
});
