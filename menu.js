document.addEventListener("DOMContentLoaded", () => {
  const menuButtons = document.querySelectorAll(".menu-button");
  const sections = document.querySelectorAll(".menu-section");

  if (menuButtons.length === 0 || sections.length === 0) return;

  const getStoredSection = () => {
    if (typeof window.storage?.get === "function") {
      return window.storage.get("menuLastSection");
    }
    try {
      return localStorage.getItem("menuLastSection");
    } catch (_) {
      return null;
    }
  };

  const storeSection = (sectionKey) => {
    if (typeof window.storage?.set === "function") {
      window.storage.set("menuLastSection", sectionKey);
    } else {
      try {
        localStorage.setItem("menuLastSection", sectionKey);
      } catch (_) {}
    }
  };

  const clearStoredSection = () => {
    if (typeof window.storage?.set === "function") {
      window.storage.set("menuLastSection", "");
    } else {
      try {
        localStorage.removeItem("menuLastSection");
      } catch (_) {}
    }
  };

  const closeAllSections = () => {
    sections.forEach(section => {
      section.classList.remove("is-open");
    });
    menuButtons.forEach(button => {
      button.classList.remove("is-active");
    });
  };

  const openSection = (sectionKey) => {
    const targetSection = document.querySelector(
      `.menu-section[data-section-content="${sectionKey}"]`
    );
    const targetButton = document.querySelector(
      `.menu-button[data-section="${sectionKey}"]`
    );

    if (!targetSection || !targetButton) return;

    targetSection.classList.add("is-open");
    targetButton.classList.add("is-active");
    storeSection(sectionKey);
  };

  menuButtons.forEach(button => {
    button.addEventListener("click", () => {
      const sectionKey = button.getAttribute("data-section");
      if (!sectionKey) return;

      const targetSection = document.querySelector(
        `.menu-section[data-section-content="${sectionKey}"]`
      );

      if (!targetSection) return;

      const isOpen = targetSection.classList.contains("is-open");

      closeAllSections();

      if (!isOpen) {
        openSection(sectionKey);
      } else {
        clearStoredSection();
      }
    });
  });

  const lastSection = getStoredSection();
  if (lastSection) {
    openSection(lastSection);
  }
});
