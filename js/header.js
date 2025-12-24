function initTopBarLanguageToggle() {
  const langBtn = document.getElementById("langToggleBtn");
  if (!langBtn) return;

  let currentLang = localStorage.getItem("lang") || "en";

  function applyTopBarLanguage(lang) {
    langBtn.innerText = lang === "en" ? "ଓଡ଼ିଆ" : "English";

    const supportText = document.querySelector(".support");
    if (supportText) {
      supportText.childNodes[0].nodeValue =
        lang === "en" ? "📞 Support: " : "📞 ସହଯୋଗ: ";
    }

    localStorage.setItem("lang", lang);
    currentLang = lang;
  }

  applyTopBarLanguage(currentLang);

  langBtn.addEventListener("click", () => {
    const newLang = currentLang === "en" ? "od" : "en";
    applyTopBarLanguage(newLang);
  });
}

/* ---------- GLOBAL HOME HANDLER (UNCHANGED LOGIC) ---------- */
function hideAllSections() {
  const sections = [
    "hero","news-about","activities-notice-links","gallery","about-detail",
    "staffing-pattern","news-page","contact-us","act-rules","rti",
    "state-protected","monuments-central","monuments-section",
    "unprotected","archaeology-library","library-detail","books-journals"
  ];

  sections.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.style.display = "none";
      el.classList.remove("active");
    }
  });
}

window.goHome = function () {
  hideAllSections();

  ["hero","news-about","activities-notice-links","gallery","footer"]
    .forEach(id => {
      const el = document.getElementById(id);
      if (el) el.style.display = "block";
    });

  window.scrollTo({ top: 0, behavior: "smooth" });
};

/* Init after header load */
document.addEventListener("DOMContentLoaded", () => {
  const headerContainer = document.getElementById("header");

  if (!headerContainer) {
    initTopBarLanguageToggle();
    return;
  }

  const observer = new MutationObserver(() => {
    if (document.getElementById("langToggleBtn")) {
      initTopBarLanguageToggle();
      observer.disconnect();
    }
  });

  observer.observe(headerContainer, { childList: true, subtree: true });
});
