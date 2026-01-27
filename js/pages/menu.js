document.addEventListener("DOMContentLoaded", () => {
  const gentleBtn = document.querySelector("[data-open-gentle]");
  const gentleOverlay = document.getElementById("gentle-overlay");
  const gentlePanel = gentleOverlay?.querySelector(".gentle-panel");
  const gentleLines = gentleOverlay?.querySelectorAll(".gentle-line");

  const memoriesBtn = document.querySelector("[data-open-memories]");
  const memoriesOverlay = document.getElementById("memories-overlay");
  const memoriesPanel = memoriesOverlay?.querySelector(".gentle-panel");
  const memoryCards = memoriesOverlay?.querySelectorAll(".memory-card");

  const futureBtn = document.querySelector("[data-open-future]");
  const futureOverlay = document.getElementById("future-overlay");
  const futurePanel = futureOverlay?.querySelector(".gentle-panel");
  const futureLines = futureOverlay?.querySelectorAll(".future-line");

  let timeouts = [];

  function clearTimers() {
    timeouts.forEach(t => clearTimeout(t));
    timeouts = [];
  }

  /* Gentle */
  gentleBtn?.addEventListener("click", () => {
    gentleOverlay.classList.remove("hidden");
    gentleLines.forEach(l => l.classList.remove("visible"));
    clearTimers();
    gentleLines.forEach((line, i) => {
      timeouts.push(setTimeout(() => line.classList.add("visible"), i * 700));
    });
  });

  gentleOverlay?.addEventListener("click", e => {
    if (!gentlePanel.contains(e.target)) {
      gentleOverlay.classList.add("hidden");
      clearTimers();
    }
  });

  /* Memories */
  memoriesBtn?.addEventListener("click", () => {
    memoriesOverlay.classList.remove("hidden");
    memoryCards.forEach(c => c.classList.remove("visible", "expanded"));
    clearTimers();
    memoryCards.forEach((card, i) => {
      timeouts.push(setTimeout(() => card.classList.add("visible"), i * 450));
    });
  });

  memoryCards?.forEach(card => {
    card.addEventListener("click", () => {
      card.classList.toggle("expanded");
    });
  });

  memoriesOverlay?.addEventListener("click", e => {
    if (!memoriesPanel.contains(e.target)) {
      memoriesOverlay.classList.add("hidden");
      clearTimers();
    }
  });

  /* Future */
  futureBtn?.addEventListener("click", () => {
    futureOverlay.classList.remove("hidden");
    futureLines.forEach(l => l.classList.remove("visible"));
    clearTimers();
    futureLines.forEach((line, i) => {
      timeouts.push(setTimeout(() => line.classList.add("visible"), i * 700));
    });
  });

  futureOverlay?.addEventListener("click", e => {
    if (!futurePanel.contains(e.target)) {
      futureOverlay.classList.add("hidden");
      clearTimers();
    }
  });
});
