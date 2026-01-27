document.addEventListener("DOMContentLoaded", () => {
  const paragraphs = document.querySelectorAll(".letter-paragraph");
  const continueBtn = document.getElementById("letter-continue");

  if (!paragraphs.length || !continueBtn) return;

  let pIndex = 0;
  let charIndex = 0;

  function typeParagraph() {
    const p = paragraphs[pIndex];
    const text = p.dataset.text;

    if (charIndex < text.length) {
      p.textContent += text.charAt(charIndex);
      charIndex++;
      setTimeout(typeParagraph, 28);
    } else {
      // paragraph finished
      pIndex++;
      charIndex = 0;

      if (pIndex < paragraphs.length) {
        setTimeout(typeParagraph, 600);
      } else {
        // all paragraphs done
        setTimeout(() => {
          continueBtn.classList.add("visible");
          continueBtn.disabled = false;
        }, 700);
      }
    }
  }

  continueBtn.addEventListener("click", (e) => {
    e.preventDefault();

    try {
      localStorage.setItem("mainViewed", "true");
    } catch (_) {}

    navigateTo("menu.html");
  });

  typeParagraph();
});
