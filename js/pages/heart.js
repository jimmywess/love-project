document.addEventListener("DOMContentLoaded", () => {
  const heart = document.getElementById("heart");
  const text = document.getElementById("heart-progress");

  if (!heart || !text) return;

  const MAX_TAPS = 100;
  let taps = 0;

  let targetScale = 1.02;
  let targetSpeed = 3.0;

  let currentScale = targetScale;
  let currentSpeed = targetSpeed;

  const LINES = [
    "Ohh Wait....<br>I Can Feel Your Presence Here.",
    "My HeartRate Is Increasing,<br>I Guess I'm Falling in Love Already",
    "I Could Feel My Heart<br>Starting To Like Your Gentle Touches",
    "AGHHHHHHHHHHHHH......<br>I Want You To Touch Me Even More 🫢<br>Uhhhhh I Mean My Heart, Not Anything Else",
    "I'm Getting Addicted Now.",
    "Now i Can't Stay Without YOUUUU."
  ];

  function animate() {
    currentScale += (targetScale - currentScale) * 0.04;
    currentSpeed += (targetSpeed - currentSpeed) * 0.04;

    // CLAMP values (important)
    currentScale = Math.min(1.12, currentScale);
    currentSpeed = Math.max(1.4, currentSpeed);

    heart.style.setProperty("--beat-scale", currentScale.toFixed(3));
    heart.style.setProperty("--beat-speed", `${currentSpeed.toFixed(2)}s`);

    requestAnimationFrame(animate);
  }

  function updateText(html) {
    text.innerHTML = html;
    text.style.animation = "none";
    void text.offsetWidth;
    text.style.animation = "textFade 0.6s ease";
  }

  heart.addEventListener("click", () => {
    if (taps >= MAX_TAPS) return;

    taps++;
    const ratio = taps / MAX_TAPS;

    targetScale = 1.02 + ratio * 0.12;
    targetSpeed = 3.0 - ratio * 1.9;


    const index = Math.min(
    LINES.length - 1,
    Math.floor((taps / MAX_TAPS) * LINES.length * 1.15)
    );

    updateText(LINES[index]);

    if (taps >= MAX_TAPS) {
      heart.classList.add("complete");
      updateText("I LOVE YOU SO MUCH BABY");

      setTimeout(() => {
        navigateTo("quiz.html");
      }, 1400);
    }
  });

  updateText("Wish Someone Can Make My heart Feel Good");
  animate();
});
