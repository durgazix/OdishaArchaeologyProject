window.showAboutPage = function () {
  // Hide all sections using the global function
  hideAllSections();

  const aboutDetailSection = document.getElementById("about-detail");
  const footerSection = document.getElementById("footer");

  // Show About Detail section
  if (aboutDetailSection) {
    aboutDetailSection.style.display = "block";
    aboutDetailSection.classList.add("active");
  }
  
  // Show Footer
  if (footerSection) {
    footerSection.style.display = "block";
  }

  // Scroll to about detail section
  setTimeout(() => {
    if (aboutDetailSection && aboutDetailSection.classList.contains("active")) {
      const navbar = document.querySelector(".main-navbar");
      const navbarHeight = navbar ? navbar.offsetHeight : 0;
      const header = document.getElementById("header");
      const headerHeight = header ? header.offsetHeight : 0;
      const midNavbar = document.getElementById("mid-navbar");
      const midNavbarHeight = midNavbar ? midNavbar.offsetHeight : 0;
      
      const totalOffset = navbarHeight + headerHeight + midNavbarHeight;
      const aboutPosition = aboutDetailSection.getBoundingClientRect().top + window.pageYOffset - totalOffset;
      
      window.scrollTo({
        top: aboutPosition,
        behavior: "smooth",
      });
    }
  }, 100);
};

window.closeDetailPage = function() {
  const aboutDetailSection = document.getElementById("about-detail");
  
  if (aboutDetailSection) {
    aboutDetailSection.style.display = "none";
    aboutDetailSection.classList.remove("active");
  }
  
  // Return to home
  goHome();
};