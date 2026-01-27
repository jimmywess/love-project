document.addEventListener("DOMContentLoaded", () => {
  const riddleTextEl = document.getElementById("riddle-text");
  const form = document.getElementById("riddle-form");
  const input = document.getElementById("riddle-input");
  const hintEl = document.getElementById("riddle-hint");

  const RIDDLE = `
It hurts the most when lost,
yet also when not had at all.
I'm sometimes the hardest to express,
but the easiest to ignore.

You can’t see me, yet I’m always there.
I bind two souls beyond compare.
Through time and space, I never part,
Guess What Am I?
`;

  const ANSWER = "love";
  const HINTS = [
    "It isn’t a place.",
    "It isn’t a memory.",
    "You feel it more than you say it."
  ];

  let attempt = 0;
  let charIndex = 0;

  /* Typewriter effect */
  function typeText() {
    if (charIndex < RIDDLE.length) {
      riddleTextEl.textContent += RIDDLE.charAt(charIndex);
      charIndex++;
      setTimeout(typeText, 35);
    }
  }

  typeText();

  /* Answer handling */
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const value = input.value.trim().toLowerCase();
    if (!value) return;

    if (value === ANSWER) {
      hintEl.textContent = "That’s it.";

      setTimeout(() => {
        navigateTo("main.html");
      }, 800);
    } else {
      attempt++;
      input.value = "";

      if (attempt <= HINTS.length) {
        hintEl.textContent = HINTS[attempt - 1];
      } else {
        hintEl.textContent = "Take your time.";
      }
    }
  });
});
