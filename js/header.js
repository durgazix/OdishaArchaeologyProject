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

  // Get all sections
  const heroSection = document.getElementById("hero");
  const newsAboutSection = document.getElementById("news-about");
  const activitiesNoticeLinksSection = document.getElementById("activities-notice-links");
  const gallerySection = document.getElementById("gallery");
  const aboutDetailSection = document.getElementById("about-detail");
  const footerSection = document.getElementById("footer");

  // Hide about detail section if it was shown
  if (aboutDetailSection) {
    aboutDetailSection.style.display = "none";
    aboutDetailSection.classList.remove("active");
  }

  const staffingPatternSection = document.getElementById("staffing-pattern");
  // Hide staffing pattern section if it was shown
  if (staffingPatternSection) {
    staffingPatternSection.style.display = "none";
    staffingPatternSection.classList.remove("active");
  }

  const newsPageSection = document.getElementById("news-page");
  // Hide news page section if it was shown
  if (newsPageSection) {
    newsPageSection.style.display = "none";
    newsPageSection.classList.remove("active");
  }

  // Hide close button
  const closeBtn = document.querySelector(".close-detail-btn");
  if (closeBtn) {
    closeBtn.classList.remove("active");
  }

  // Show all home sections
  if (heroSection) {
    heroSection.style.display = "block";
  }
  if (newsAboutSection) {
    newsAboutSection.style.display = "block";
  }
  if (activitiesNoticeLinksSection) {
    activitiesNoticeLinksSection.style.display = "block";
  }
  if (gallerySection) {
    gallerySection.style.display = "block";
  }
  if (footerSection) {
    footerSection.style.display = "block";
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