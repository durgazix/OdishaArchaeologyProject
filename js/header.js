function initTopBarLanguageToggle() {
  const langBtn = document.getElementById("langToggleBtn");

  // Safety check
  if (!langBtn) return;

  let currentLang = localStorage.getItem("lang") || "en";

  function applyTopBarLanguage(lang) {
    // Button label should reflect the CURRENT language
    // en  -> "English"
    // od  -> "ଓଡ଼ିଆ"
    langBtn.innerText = lang === "en" ? "English" : "ଓଡ଼ିଆ";

    const supportText = document.querySelector(".support");
    if (supportText) {
      supportText.childNodes[0].nodeValue =
        lang === "en" ? "📞 Support: " : "📞 ସହଯୋଗ: ";
    }

    localStorage.setItem("lang", lang);
    currentLang = lang;
  }

  // Initial apply
  applyTopBarLanguage(currentLang);

  // Toggle on click
  langBtn.addEventListener("click", function () {
    const newLang = currentLang === "en" ? "od" : "en";
    applyTopBarLanguage(newLang);
  });
}

// Global handler to return to the home view
// Called from the Home icon in the navbar
window.goHome = function () {
  // If the About detail page is open, close it
  if (typeof window.closeDetailPage === "function") {
    window.closeDetailPage();
  }

  // Scroll to the top of the page (home section)
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

// Wait for header component to be loaded, then initialize language toggle
document.addEventListener("DOMContentLoaded", () => {
  const headerContainer = document.getElementById("header");

  if (!headerContainer) {
    // Fallback: try to init once in case header is already in DOM
    if (typeof initTopBarLanguageToggle === "function") {
      initTopBarLanguageToggle();
    }
    return;
  }

  const headerObserver = new MutationObserver(() => {
    const langBtn = document.getElementById("langToggleBtn");
    if (langBtn && typeof initTopBarLanguageToggle === "function") {
      initTopBarLanguageToggle();
      headerObserver.disconnect();
    }
  });

  headerObserver.observe(headerContainer, { childList: true, subtree: true });
});