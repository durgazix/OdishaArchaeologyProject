function initTopBarLanguageToggle() {
  const langBtn = document.getElementById("langToggleBtn");

  // Safety check
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

  // Initial apply
  applyTopBarLanguage(currentLang);

  // Toggle on click
  langBtn.addEventListener("click", function () {
    const newLang = currentLang === "en" ? "od" : "en";
    applyTopBarLanguage(newLang);
  });
}
