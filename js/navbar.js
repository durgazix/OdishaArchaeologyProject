// Toggle mobile menu
function toggleMenu() {
  const navList = document.getElementById("navList");
  const menuToggle = document.getElementById("menuToggle");
  const closeBtn = document.getElementById("closeMenuBtn");
  
  navList.classList.toggle("active");
  
  // Toggle button visibility
  if (navList.classList.contains("active")) {
    menuToggle.style.display = "none";
    closeBtn.style.display = "block";
  } else {
    menuToggle.style.display = "block";
    closeBtn.style.display = "none";
  }
}

// Handle dropdown clicks on mobile
document.addEventListener("DOMContentLoaded", function () {
  const dropdowns = document.querySelectorAll(".dropdown");

  dropdowns.forEach((dropdown) => {
    dropdown.addEventListener("click", function (e) {
      // Check if device is mobile
      if (window.innerWidth <= 992) {
        e.preventDefault();
        this.classList.toggle("active");
      }
    });
  });

  // Close menu when a link is clicked
  const navLinks = document.querySelectorAll(".nav-list a");
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      if (window.innerWidth <= 992) {
        const navList = document.getElementById("navList");
        // Only close if it's not a dropdown toggle
        if (!this.parentElement.classList.contains("dropdown")) {
          navList.classList.remove("active");
          document.getElementById("menuToggle").style.display = "block";
          document.getElementById("closeMenuBtn").style.display = "none";
        }
      }
    });
  });

  // Close menu when clicking outside
  document.addEventListener("click", function (e) {
    const navList = document.getElementById("navList");
    const menuToggle = document.getElementById("menuToggle");
    const closeBtn = document.getElementById("closeMenuBtn");
    const mobileIcons = document.querySelector(".mobile-icons");
    const mainNavbar = document.querySelector(".main-navbar");

    if (
      !navList.contains(e.target) &&
      !menuToggle.contains(e.target) &&
      !closeBtn.contains(e.target) &&
      !mobileIcons.contains(e.target) &&
      !mainNavbar.contains(e.target) &&
      navList.classList.contains("active")
    ) {
      navList.classList.remove("active");
      menuToggle.style.display = "block";
      closeBtn.style.display = "none";
    }
  });

  // Handle window resize
  window.addEventListener("resize", function () {
    const navList = document.getElementById("navList");
    if (window.innerWidth > 992) {
      navList.classList.remove("active");
      document.getElementById("menuToggle").style.display = "block";
      document.getElementById("closeMenuBtn").style.display = "none";
    }
  });
});

// Global function to show Gallery page
// Called when Gallery link is clicked in navbar
window.showGalleryPage = function () {
  // Close About detail page if it's open
  if (typeof window.closeDetailPage === "function") {
    window.closeDetailPage();
  }

  // Get all sections
  const heroSection = document.getElementById("hero");
  const newsAboutSection = document.getElementById("news-about");
  const monumentSection = document.querySelector(".monuments-section");
  const monumentsCentralSection = document.getElementById("monuments-central");
  const stateProtectedSection = document.getElementById("state-protected");
  const unprotectedMonumentsSection = document.getElementById("unprotected");
  const archaeologyLibrarySection = document.getElementById("archaeology-library");
  const activitiesNoticeLinksSection = document.getElementById("activities-notice-links");
  const gallerySection = document.getElementById("gallery");
  const aboutDetailSection = document.getElementById("about-detail");
  const staffingPatternSection = document.getElementById("staffing-pattern");
  const newsPageSection = document.getElementById("news-page");
  const contactUsSection = document.getElementById("contact-us");
  const actRulesSection = document.getElementById("act-rules");
  const rtiSection = document.getElementById("rti");
  const footerSection = document.getElementById("footer");
    const libraryDetailSection = document.getElementById("library-detail");
    if (libraryDetailSection) {
    libraryDetailSection.style.display = "none";
  }
  
  const booksJournalsSection = document.getElementById("books-journals");
  if (booksJournalsSection) {
    booksJournalsSection.style.display = "none";
  }
  

  // Hide sections that should not be visible
  const galleryBreadcrumb = document.getElementById("gallery-breadcrumb");
  if (galleryBreadcrumb) {
    galleryBreadcrumb.style.display = "none";
  }
  if (heroSection) {
    heroSection.style.display = "none";
  }
  if (newsAboutSection) {
    newsAboutSection.style.display = "none";
  }
  if (monumentSection) {
    monumentSection.style.display = "none";
  }
  if(monumentsCentralSection) { 
    monumentsCentralSection.style.display = "none";
  }
  if (stateProtectedSection) {
    stateProtectedSection.style.display = "none";
  }
  if (unprotectedMonumentsSection) {
    unprotectedMonumentsSection.style.display = "none";
  }
  if (archaeologyLibrarySection) {
    archaeologyLibrarySection.style.display = "none";
  }
  if (activitiesNoticeLinksSection) {
    activitiesNoticeLinksSection.style.display = "none";
  }
  if (aboutDetailSection) {
    aboutDetailSection.style.display = "none";
    aboutDetailSection.classList.remove("active");
  }
  if (staffingPatternSection) {
    staffingPatternSection.style.display = "none";
    staffingPatternSection.classList.remove("active");
  }
  if (newsPageSection) {
    newsPageSection.style.display = "none";
    newsPageSection.classList.remove("active");
  }
  if (contactUsSection) {
    contactUsSection.style.display = "none";
  }
  if (actRulesSection) {
    actRulesSection.style.display = "none";
  }
  if (rtiSection) {
    rtiSection.style.display = "none";
  }
  // Show Gallery breadcrumb and Footer sections
  if (galleryBreadcrumb) {
    galleryBreadcrumb.style.display = "block";
  }
  if (gallerySection) {
    gallerySection.style.display = "block";
  }
  if (footerSection) {
    footerSection.style.display = "block";
  }

  // Scroll to gallery section below navbar
  setTimeout(() => {
    if (gallerySection) {
      const navbar = document.querySelector(".main-navbar");
      const navbarHeight = navbar ? navbar.offsetHeight : 0;
      const header = document.getElementById("header");
      const headerHeight = header ? header.offsetHeight : 0;
      const midNavbar = document.getElementById("mid-navbar");
      const midNavbarHeight = midNavbar ? midNavbar.offsetHeight : 0;
      
      const totalOffset = navbarHeight + headerHeight + midNavbarHeight;
      const galleryPosition = gallerySection.getBoundingClientRect().top + window.pageYOffset - totalOffset;
      
      window.scrollTo({
        top: galleryPosition,
        behavior: "smooth",
      });
    }
  }, 100);
};

// Global function to show About page
// Called when About Us link is clicked in navbar
window.showAboutPage = function () {
  // Close About detail page if it's open (to reset state)
  if (typeof window.closeDetailPage === "function") {
    window.closeDetailPage();
  }

  // Get all sections
  const heroSection = document.getElementById("hero");
  const newsAboutSection = document.getElementById("news-about");
  const monumentSection = document.querySelector(".monuments-section");
  const monumentsCentralSection = document.getElementById("monuments-central");
  const stateProtectedSection = document.getElementById("state-protected");
  const unprotectedMonumentsSection = document.getElementById("unprotected");
  const archaeologyLibrarySection = document.getElementById("archaeology-library");
  const activitiesNoticeLinksSection = document.getElementById("activities-notice-links");
  const gallerySection = document.getElementById("gallery");
  const aboutDetailSection = document.getElementById("about-detail");
  const staffingPatternSection = document.getElementById("staffing-pattern");
  const newsPageSection = document.getElementById("news-page");
  const contactUsSection = document.getElementById("contact-us");
  const actRulesSection = document.getElementById("act-rules");
  const rtiSection = document.getElementById("rti");
  const footerSection = document.getElementById("footer");
    const libraryDetailSection = document.getElementById("library-detail");
    if (libraryDetailSection) {
    libraryDetailSection.style.display = "none";
  }
  
  const booksJournalsSection = document.getElementById("books-journals");
  if (booksJournalsSection) {
    booksJournalsSection.style.display = "none";
  }
  

  // Hide sections that should not be visible
  if (heroSection) {
    heroSection.style.display = "none";
  }
  if (newsAboutSection) {
    newsAboutSection.style.display = "none";
  }
  if (monumentSection) {
    monumentSection.style.display = "none";
  }
  if(monumentsCentralSection) { 
    monumentsCentralSection.style.display = "none";
  }
  if (stateProtectedSection) {
    stateProtectedSection.style.display = "none";
  }
  if (unprotectedMonumentsSection) {
    unprotectedMonumentsSection.style.display = "none";
  }
  if (archaeologyLibrarySection) {
    archaeologyLibrarySection.style.display = "none";
  }
  if (activitiesNoticeLinksSection) {
    activitiesNoticeLinksSection.style.display = "none";
  }
  if (gallerySection) {
    gallerySection.style.display = "none";
  }
  if (staffingPatternSection) {
    staffingPatternSection.style.display = "none";
    staffingPatternSection.classList.remove("active");
  }
  if (newsPageSection) {
    newsPageSection.style.display = "none";
    newsPageSection.classList.remove("active");
  }
  if (contactUsSection) {
    contactUsSection.style.display = "none";
  }
  if (actRulesSection) {
    actRulesSection.style.display = "none";
  }
  if (rtiSection) {
    rtiSection.style.display = "none";
  }

  // Show About Detail and Footer sections
  if (aboutDetailSection) {
    // Remove any inline display styles that might have been set by other functions
    aboutDetailSection.style.display = "";
    aboutDetailSection.style.visibility = "";
    aboutDetailSection.classList.add("active");
  }
  if (footerSection) {
    footerSection.style.display = "block";
  }

  // Scroll to about detail section below navbar
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

window.showStaffingPatternPage = function () {
  // Get all sections
  const heroSection = document.getElementById("hero");
  const newsAboutSection = document.getElementById("news-about");
  const monumentSection = document.querySelector(".monuments-section");
  const monumentsCentralSection = document.getElementById("monuments-central");
  const stateProtectedSection = document.getElementById("state-protected");
  const unprotectedMonumentsSection = document.getElementById("unprotected");
  const archaeologyLibrarySection = document.getElementById("archaeology-library");
  const activitiesNoticeLinksSection = document.getElementById("activities-notice-links");
  const gallerySection = document.getElementById("gallery");
  const aboutDetailSection = document.getElementById("about-detail");
  const staffingPatternSection = document.getElementById("staffing-pattern");
  const newsPageSection = document.getElementById("news-page");
  const contactUsSection = document.getElementById("contact-us");
  const actRulesSection = document.getElementById("act-rules");
  const rtiSection = document.getElementById("rti");
  const footerSection = document.getElementById("footer");
    const libraryDetailSection = document.getElementById("library-detail");
    if (libraryDetailSection) {
    libraryDetailSection.style.display = "none";
  }
  
  const booksJournalsSection = document.getElementById("books-journals");
  if (booksJournalsSection) {
    booksJournalsSection.style.display = "none";
  }
  

  // Hide sections that should not be visible
  const galleryBreadcrumb = document.getElementById("gallery-breadcrumb");
  if (galleryBreadcrumb) {
    galleryBreadcrumb.style.display = "none";
  }
  if (heroSection) {
    heroSection.style.display = "none";
  }
  if (newsAboutSection) {
    newsAboutSection.style.display = "none";
  }
  if (monumentSection) {
    monumentSection.style.display = "none";
  }
    if(monumentsCentralSection) { 
    monumentsCentralSection.style.display = "none";
  }
  if (stateProtectedSection) {
    stateProtectedSection.style.display = "none";
  }
  if (unprotectedMonumentsSection) {
    unprotectedMonumentsSection.style.display = "none";
  }
  if (archaeologyLibrarySection) {
    archaeologyLibrarySection.style.display = "none";
  }
  if (activitiesNoticeLinksSection) {
    activitiesNoticeLinksSection.style.display = "none";
  }
  if (gallerySection) {
    gallerySection.style.display = "none";
  }
  if (aboutDetailSection) {
    aboutDetailSection.classList.remove("active");
    aboutDetailSection.style.display = "none";
  }
  if (newsPageSection) {
    newsPageSection.style.display = "none";
    newsPageSection.classList.remove("active");
  }
  if (contactUsSection) {
    contactUsSection.style.display = "none";
  }
  if (actRulesSection) {
    actRulesSection.style.display = "none";
  }
  if (rtiSection) {
    rtiSection.style.display = "none";
  }

  // Show Staffing Pattern and Footer sections
  if (staffingPatternSection) {
    staffingPatternSection.style.display = "block";
    staffingPatternSection.classList.add("active");
  }
  if (footerSection) {
    footerSection.style.display = "block";
  }

  // Show close button
  const closeBtn = document.querySelector(".close-detail-btn");
  if (closeBtn) {
    closeBtn.classList.add("active");
  }

  // Scroll to staffing pattern section below navbar
  setTimeout(() => {
    if (staffingPatternSection) {
      const navbar = document.querySelector(".main-navbar");
      const navbarHeight = navbar ? navbar.offsetHeight : 0;
      const header = document.getElementById("header");
      const headerHeight = header ? header.offsetHeight : 0;
      const midNavbar = document.getElementById("mid-navbar");
      const midNavbarHeight = midNavbar ? midNavbar.offsetHeight : 0;
      
      const totalOffset = navbarHeight + headerHeight + midNavbarHeight;
      const staffingPosition = staffingPatternSection.getBoundingClientRect().top + window.pageYOffset - totalOffset;
      
      window.scrollTo({
        top: staffingPosition,
        behavior: "smooth",
      });
    }
  }, 100);
};

window.showNewsPage = function () {
  // Get all sections
  const heroSection = document.getElementById("hero");
  const newsAboutSection = document.getElementById("news-about");
  const monumentSection = document.querySelector(".monuments-section");
  const monumentsCentralSection = document.getElementById("monuments-central");
  const stateProtectedSection = document.getElementById("state-protected");
  const unprotectedMonumentsSection = document.getElementById("unprotected");
  const archaeologyLibrarySection = document.getElementById("archaeology-library");
  const activitiesNoticeLinksSection = document.getElementById("activities-notice-links");
  const gallerySection = document.getElementById("gallery");
  const aboutDetailSection = document.getElementById("about-detail");
  const staffingPatternSection = document.getElementById("staffing-pattern");
  const newsPageSection = document.getElementById("news-page");
  const contactUsSection = document.getElementById("contact-us");
  const actRulesSection = document.getElementById("act-rules");
  const rtiSection = document.getElementById("rti");
  const footerSection = document.getElementById("footer");
    const libraryDetailSection = document.getElementById("library-detail");
    if (libraryDetailSection) {
    libraryDetailSection.style.display = "none";
  }
  
  const booksJournalsSection = document.getElementById("books-journals");
  if (booksJournalsSection) {
    booksJournalsSection.style.display = "none";
  }
  

  // Hide sections that should not be visible
  const galleryBreadcrumb = document.getElementById("gallery-breadcrumb");
  if (galleryBreadcrumb) {
    galleryBreadcrumb.style.display = "none";
  }
  if (heroSection) {
    heroSection.style.display = "none";
  }
  if (newsAboutSection) {
    newsAboutSection.style.display = "none";
  }
  if (monumentSection) {
    monumentSection.style.display = "none";
  }
    if(monumentsCentralSection) { 
    monumentsCentralSection.style.display = "none";
  }
  if (unprotectedMonumentsSection) {
    unprotectedMonumentsSection.style.display = "none";
  }
  if (stateProtectedSection) {
    stateProtectedSection.style.display = "none";
  }
  if (archaeologyLibrarySection) {
    archaeologyLibrarySection.style.display = "none";
  }
  if (activitiesNoticeLinksSection) {
    activitiesNoticeLinksSection.style.display = "none";
  }
  if (gallerySection) {
    gallerySection.style.display = "none";
  }
  if (aboutDetailSection) {
    aboutDetailSection.style.display = "none";
    aboutDetailSection.classList.remove("active");
  }
  if (staffingPatternSection) {
    staffingPatternSection.style.display = "none";
    staffingPatternSection.classList.remove("active");
  }
  if (contactUsSection) {
    contactUsSection.style.display = "none";
  }
  if (actRulesSection) {
    actRulesSection.style.display = "none";
  }
  if (rtiSection) {
    rtiSection.style.display = "none";
  }

  // Show News Page and Footer sections
  if (newsPageSection) {
    newsPageSection.style.display = "block";
    newsPageSection.classList.add("active");
  }
  if (footerSection) {
    footerSection.style.display = "block";
  }

  // Show close button
  const closeBtn = document.querySelector(".close-detail-btn");
  if (closeBtn) {
    closeBtn.classList.add("active");
  }

  // Scroll to news page section below navbar
  setTimeout(() => {
    if (newsPageSection) {
      const navbar = document.querySelector(".main-navbar");
      const navbarHeight = navbar ? navbar.offsetHeight : 0;
      const header = document.getElementById("header");
      const headerHeight = header ? header.offsetHeight : 0;
      const midNavbar = document.getElementById("mid-navbar");
      const midNavbarHeight = midNavbar ? midNavbar.offsetHeight : 0;
      
      const totalOffset = navbarHeight + headerHeight + midNavbarHeight;
      const newsPosition = newsPageSection.getBoundingClientRect().top + window.pageYOffset - totalOffset;
      
      window.scrollTo({
        top: newsPosition,
        behavior: "smooth",
      });
    }
  }, 100);
};

window.showContactUsPage = function () {
  // Close About detail page if it's open
  if (typeof window.closeDetailPage === "function") {
    window.closeDetailPage();
  }

  // Get all sections
  const heroSection = document.getElementById("hero");
  const newsAboutSection = document.getElementById("news-about");

  const monumentSection = document.querySelector(".monuments-section"); 
  const monumentsCentralSection = document.getElementById("monuments-central");
  const stateProtectedSection = document.getElementById("state-protected");
  const unprotectedMonumentsSection = document.getElementById("unprotected");
  const archaeologyLibrarySection = document.getElementById("archaeology-library");
  const activitiesNoticeLinksSection = document.getElementById("activities-notice-links");
  const gallerySection = document.getElementById("gallery");
  const aboutDetailSection = document.getElementById("about-detail");
  const staffingPatternSection = document.getElementById("staffing-pattern");
  const newsPageSection = document.getElementById("news-page");
  const contactUsSection = document.getElementById("contact-us");
  const actRulesSection = document.getElementById("act-rules");
  const rtiSection = document.getElementById("rti");
  const footerSection = document.getElementById("footer");
    const libraryDetailSection = document.getElementById("library-detail");
    if (libraryDetailSection) {
    libraryDetailSection.style.display = "none";
  }

  
  const booksJournalsSection = document.getElementById("books-journals");
  if (booksJournalsSection) {
    booksJournalsSection.style.display = "none";
  }
  
  // Hide sections that should not be visible
  const galleryBreadcrumb = document.getElementById("gallery-breadcrumb");
  if (galleryBreadcrumb) {
    galleryBreadcrumb.style.display = "none";
  }
  if (heroSection) {
    heroSection.style.display = "none";
  }
  if (newsAboutSection) {
    newsAboutSection.style.display = "none";
  }
  if (monumentSection) {
    monumentSection.style.display = "none";
  }
  if(monumentsCentralSection) { 
    monumentsCentralSection.style.display = "none";
  }
  if (stateProtectedSection) {
    stateProtectedSection.style.display = "none";
  }
  if (unprotectedMonumentsSection) {
    unprotectedMonumentsSection.style.display = "none";
  }
  if (archaeologyLibrarySection) {
    archaeologyLibrarySection.style.display = "none";
  }
  if (activitiesNoticeLinksSection) {
    activitiesNoticeLinksSection.style.display = "none";
  }
  if (gallerySection) {
    gallerySection.style.display = "none";
  }
  if (aboutDetailSection) {
    aboutDetailSection.style.display = "none";
    aboutDetailSection.classList.remove("active");
  }
  if (staffingPatternSection) {
    staffingPatternSection.style.display = "none";
    staffingPatternSection.classList.remove("active");
  }
  if (newsPageSection) {
    newsPageSection.style.display = "none";
    newsPageSection.classList.remove("active");
  }
  if (actRulesSection) {
    actRulesSection.style.display = "none";
  }
  if (rtiSection) {
    rtiSection.style.display = "none";
  }


  // Show Contact Us and Footer sections
  if (contactUsSection) {
    contactUsSection.style.display = "block";
    contactUsSection.style.visibility = "visible";
  }
  if (footerSection) {
    footerSection.style.display = "block";
  }

  // Scroll to contact us section below navbar
  setTimeout(() => {
    if (contactUsSection && contactUsSection.style.display === "block") {
      const navbar = document.querySelector(".main-navbar");
      const navbarHeight = navbar ? navbar.offsetHeight : 0;
      const header = document.getElementById("header");
      const headerHeight = header ? header.offsetHeight : 0;
      const midNavbar = document.getElementById("mid-navbar");
      const midNavbarHeight = midNavbar ? midNavbar.offsetHeight : 0;
      
      const totalOffset = navbarHeight + headerHeight + midNavbarHeight;
      const contactUsPosition = contactUsSection.getBoundingClientRect().top + window.pageYOffset - totalOffset;
      
      window.scrollTo({
        top: contactUsPosition,
        behavior: "smooth",
      });
    }
  }, 100);
};

window.showActRulesPage = function () {
  // Close About detail page if it's open
  if (typeof window.closeDetailPage === "function") {
    window.closeDetailPage();
  }

  // Get all sections
  const heroSection = document.getElementById("hero");
  const newsAboutSection = document.getElementById("news-about");
  const monumentSection = document.querySelector(".monuments-section"); 
  const monumentsCentralSection = document.getElementById("monuments-central");
  const stateProtectedSection = document.getElementById("state-protected");
  const unprotectedMonumentsSection = document.getElementById("unprotected");
  const archaeologyLibrarySection = document.getElementById("archaeology-library");
  const activitiesNoticeLinksSection = document.getElementById("activities-notice-links");
  const gallerySection = document.getElementById("gallery");
  const aboutDetailSection = document.getElementById("about-detail");
  const staffingPatternSection = document.getElementById("staffing-pattern");
  const newsPageSection = document.getElementById("news-page");
  const contactUsSection = document.getElementById("contact-us");
  const actRulesSection = document.getElementById("act-rules");
  const rtiSection = document.getElementById("rti");
  const footerSection = document.getElementById("footer");
    const libraryDetailSection = document.getElementById("library-detail");
    if (libraryDetailSection) {
    libraryDetailSection.style.display = "none";
  }

  
  const booksJournalsSection = document.getElementById("books-journals");
  if (booksJournalsSection) {
    booksJournalsSection.style.display = "none";
  }
  
  // Hide sections that should not be visible
  const galleryBreadcrumb = document.getElementById("gallery-breadcrumb");
  if (galleryBreadcrumb) {
    galleryBreadcrumb.style.display = "none";
  }
  if (heroSection) {
    heroSection.style.display = "none";
  }
  if (newsAboutSection) {
    newsAboutSection.style.display = "none";
  }
  if (monumentSection) {
    monumentSection.style.display = "none";
  }
  if(monumentsCentralSection) { 
    monumentsCentralSection.style.display = "none";
  }
  if (unprotectedMonumentsSection) {
    unprotectedMonumentsSection.style.display = "none";
  }
  if (stateProtectedSection) {
    stateProtectedSection.style.display = "none";
  }
  if (archaeologyLibrarySection) {
    archaeologyLibrarySection.style.display = "none";
  }
  if (activitiesNoticeLinksSection) {
    activitiesNoticeLinksSection.style.display = "none";
  }
  if (gallerySection) {
    gallerySection.style.display = "none";
  }
  if (aboutDetailSection) {
    aboutDetailSection.style.display = "none";
    aboutDetailSection.classList.remove("active");
  }
  if (staffingPatternSection) {
    staffingPatternSection.style.display = "none";
    staffingPatternSection.classList.remove("active");
  }
  if (newsPageSection) {
    newsPageSection.style.display = "none";
    newsPageSection.classList.remove("active");
  }
  if (rtiSection) {
    rtiSection.style.display = "none";
  }
  if (contactUsSection) {
    contactUsSection.style.display = "none";
  }
  
  // Show Act & Rules and Footer sections
  if (actRulesSection) {
    actRulesSection.style.display = "block";
  }
  if (footerSection) {
    footerSection.style.display = "block";
  }

  // Scroll to act rules section below navbar
  setTimeout(() => {
    if (actRulesSection) {
      const navbar = document.querySelector(".main-navbar");
      const navbarHeight = navbar ? navbar.offsetHeight : 0;
      const header = document.getElementById("header");
      const headerHeight = header ? header.offsetHeight : 0;
      const midNavbar = document.getElementById("mid-navbar");
      const midNavbarHeight = midNavbar ? midNavbar.offsetHeight : 0;
      
      const totalOffset = navbarHeight + headerHeight + midNavbarHeight;
      const actRulesPosition = actRulesSection.getBoundingClientRect().top + window.pageYOffset - totalOffset;
      
      window.scrollTo({
        top: actRulesPosition,
        behavior: "smooth",
      });
    }
  }, 100);
};

window.showRTIPage = function () {
  // Close About detail page if it's open
  if (typeof window.closeDetailPage === "function") {
    window.closeDetailPage();
  }

  // Get all sections
  const heroSection = document.getElementById("hero");
  const newsAboutSection = document.getElementById("news-about");
  const gallerySection = document.getElementById("gallery");
  const aboutDetailSection = document.getElementById("about-detail");
  const monumentSection = document.querySelector(".monuments-section"); 
  const monumentsCentralSection = document.getElementById("monuments-central");
  const unprotectedMonumentsSection = document.getElementById("unprotected");
  const archaeologyLibrarySection = document.getElementById("archaeology-library");
  const stateProtectedSection = document.getElementById("state-protected");
  const activitiesNoticeLinksSection = document.getElementById("activities-notice-links");
  const staffingPatternSection = document.getElementById("staffing-pattern");
  const newsPageSection = document.getElementById("news-page");
  const contactUsSection = document.getElementById("contact-us");
  const actRulesSection = document.getElementById("act-rules");
  const rtiSection = document.getElementById("rti");
  const footerSection = document.getElementById("footer");
    const libraryDetailSection = document.getElementById("library-detail");
    if (libraryDetailSection) {
    libraryDetailSection.style.display = "none";
  }
  
  const booksJournalsSection = document.getElementById("books-journals");
  if (booksJournalsSection) {
    booksJournalsSection.style.display = "none";
  }
  

  // Hide sections that should not be visible
  const galleryBreadcrumb = document.getElementById("gallery-breadcrumb");
  if (galleryBreadcrumb) {
    galleryBreadcrumb.style.display = "none";
  }
  if (heroSection) {
    heroSection.style.display = "none";
  }
  if (newsAboutSection) {
    newsAboutSection.style.display = "none";
  }
  if (monumentSection) {
    monumentSection.style.display = "none";
  }
  if(monumentsCentralSection) { 
    monumentsCentralSection.style.display = "none";
  }
  if (unprotectedMonumentsSection) {
    unprotectedMonumentsSection.style.display = "none";
  }
  if (archaeologyLibrarySection) {
    archaeologyLibrarySection.style.display = "none";
  }
  if (stateProtectedSection) {
    stateProtectedSection.style.display = "none";
  }
  if (activitiesNoticeLinksSection) {
    activitiesNoticeLinksSection.style.display = "none";
  }
  if (gallerySection) {
    gallerySection.style.display = "none";
  }
  if (aboutDetailSection) {
    aboutDetailSection.style.display = "none";
    aboutDetailSection.classList.remove("active");
  }
  if (staffingPatternSection) {
    staffingPatternSection.style.display = "none";
    staffingPatternSection.classList.remove("active");
  }
  if (newsPageSection) {
    newsPageSection.style.display = "none";
    newsPageSection.classList.remove("active");
  }
  if(actRulesSection){
    actRulesSection.style.display = "none";
  }
  if (contactUsSection) {
    contactUsSection.style.display = "none";
  }

  // Show RTI and Footer sections
  if (rtiSection) {
    rtiSection.style.display = "block";
  }
  if (footerSection) {
    footerSection.style.display = "block";
  }

  // Scroll to act rules section below navbar
  setTimeout(() => {
    if (rtiSection) {
      const navbar = document.querySelector(".main-navbar");
      const navbarHeight = navbar ? navbar.offsetHeight : 0;
      const header = document.getElementById("header");
      const headerHeight = header ? header.offsetHeight : 0;
      const midNavbar = document.getElementById("mid-navbar");
      const midNavbarHeight = midNavbar ? midNavbar.offsetHeight : 0;
      
      const totalOffset = navbarHeight + headerHeight + midNavbarHeight;
      const rtiPosition = rtiSection.getBoundingClientRect().top + window.pageYOffset - totalOffset;
      
      window.scrollTo({
        top: rtiPosition,
        behavior: "smooth",
      });
    }
  }, 100);
};

window.showMonumentsPage = function () {
  if (typeof window.closeDetailPage === "function") {
    window.closeDetailPage();
  }

  // Get all sections
  const heroSection = document.getElementById("hero");
  const newsAboutSection = document.getElementById("news-about");
  const monumentSection = document.querySelector(".monuments-section"); // Changed this line
  const monumentsCentralSection = document.getElementById("monuments-central");
  const stateProtectedSection = document.getElementById("state-protected");
  const unprotectedMonumentsSection = document.getElementById("unprotected");
  const archaeologyLibrarySection = document.getElementById("archaeology-library");
  const activitiesNoticeLinksSection = document.getElementById("activities-notice-links");
  const gallerySection = document.getElementById("gallery");
  const aboutDetailSection = document.getElementById("about-detail");
  const staffingPatternSection = document.getElementById("staffing-pattern");
  const newsPageSection = document.getElementById("news-page");
  const contactUsSection = document.getElementById("contact-us");
  const actRulesSection = document.getElementById("act-rules");
  const rtiSection = document.getElementById("rti");
  const footerSection = document.getElementById("footer");
    const libraryDetailSection = document.getElementById("library-detail");
    if (libraryDetailSection) {
    libraryDetailSection.style.display = "none";
  }
  
  const booksJournalsSection = document.getElementById("books-journals");
  if (booksJournalsSection) {
    booksJournalsSection.style.display = "none";
  }
  

  // Hide all other sections
  const galleryBreadcrumb = document.getElementById("gallery-breadcrumb");
  if (galleryBreadcrumb) galleryBreadcrumb.style.display = "none";
  if (heroSection) heroSection.style.display = "none";
  if (newsAboutSection) newsAboutSection.style.display = "none";
  if (activitiesNoticeLinksSection) activitiesNoticeLinksSection.style.display = "none";
  if (gallerySection) gallerySection.style.display = "none";
  if (aboutDetailSection) {
    aboutDetailSection.style.display = "none";
    aboutDetailSection.classList.remove("active");
  }
  if (staffingPatternSection) {
    staffingPatternSection.style.display = "none";
    staffingPatternSection.classList.remove("active");
  }
  if(monumentsCentralSection) { 
    monumentsCentralSection.style.display = "none";
  }
  if (unprotectedMonumentsSection) {
    unprotectedMonumentsSection.style.display = "none";
  }
  if (archaeologyLibrarySection) {
    archaeologyLibrarySection.style.display = "none";
  }
  if (stateProtectedSection) {
    stateProtectedSection.style.display = "none";
  }
  if (newsPageSection) {
    newsPageSection.style.display = "none";
    newsPageSection.classList.remove("active");
  }
  if (actRulesSection) actRulesSection.style.display = "none";
  if (rtiSection) rtiSection.style.display = "none";
  if (contactUsSection) contactUsSection.style.display = "none";

  // Show monuments and footer
  if (monumentSection) monumentSection.style.display = "block";
  if (footerSection) footerSection.style.display = "block";

  // Scroll to monuments section
  setTimeout(() => {
    if (monumentSection) {
      const navbar = document.querySelector(".main-navbar");
      const header = document.getElementById("header");
      const midNavbar = document.getElementById("mid-navbar");
      
      const totalOffset = 
        (navbar?.offsetHeight || 0) + 
        (header?.offsetHeight || 0) + 
        (midNavbar?.offsetHeight || 0);
      
      const monumentPosition = monumentSection.getBoundingClientRect().top + window.pageYOffset - totalOffset;
      
      window.scrollTo({
        top: monumentPosition,
        behavior: "smooth",
      });
    }
  }, 100);
};

window.showMonumentsCentralPage = function () {
  // Close any open detail page safely
  if (typeof window.closeDetailPage === "function") {
    window.closeDetailPage();
  }
    // Get all sections
  const heroSection = document.getElementById("hero");
  const newsAboutSection = document.getElementById("news-about");
  const monumentSection = document.querySelector(".monuments-section");
  const monumentsCentralSection = document.getElementById("monuments-central");
  const stateProtectedSection = document.getElementById("state-protected");
  const unprotectedMonumentsSection = document.getElementById("unprotected");
  const archaeologyLibrarySection = document.getElementById("archaeology-library");
  const activitiesNoticeLinksSection = document.getElementById("activities-notice-links");
  const gallerySection = document.getElementById("gallery");
  const aboutDetailSection = document.getElementById("about-detail");
  const staffingPatternSection = document.getElementById("staffing-pattern");
  const newsPageSection = document.getElementById("news-page");
  const contactUsSection = document.getElementById("contact-us");
  const actRulesSection = document.getElementById("act-rules");
  const rtiSection = document.getElementById("rti");
  const footerSection = document.getElementById("footer");
    const libraryDetailSection = document.getElementById("library-detail");
    if (libraryDetailSection) {
    libraryDetailSection.style.display = "none";
  }

  
  const booksJournalsSection = document.getElementById("books-journals");
  if (booksJournalsSection) {
    booksJournalsSection.style.display = "none";
  }
  
  // Hide all other sections
  const galleryBreadcrumb = document.getElementById("gallery-breadcrumb");
  if (galleryBreadcrumb) galleryBreadcrumb.style.display = "none";
  if (heroSection) heroSection.style.display = "none";
  if (newsAboutSection) newsAboutSection.style.display = "none";
  if (activitiesNoticeLinksSection) activitiesNoticeLinksSection.style.display = "none";
  if (gallerySection) gallerySection.style.display = "none";
  if (aboutDetailSection) {
    aboutDetailSection.style.display = "none";
    aboutDetailSection.classList.remove("active");
  }
  if (staffingPatternSection) {
    staffingPatternSection.style.display = "none";
    staffingPatternSection.classList.remove("active");
  }
  if (newsPageSection) {
    newsPageSection.style.display = "none";
    newsPageSection.classList.remove("active");
  }
  if (actRulesSection) actRulesSection.style.display = "none";
  if (rtiSection) rtiSection.style.display = "none";
  if (contactUsSection) contactUsSection.style.display = "none";
  if (monumentSection) monumentSection.style.display = "none";
  if (stateProtectedSection) stateProtectedSection.style.display = "none";
  if (unprotectedMonumentsSection) unprotectedMonumentsSection.style.display = "none";
  if (archaeologyLibrarySection) archaeologyLibrarySection.style.display = "none";

  // Show monuments-central and footer
  if (monumentsCentralSection) monumentsCentralSection.style.display = "block";
  if (footerSection) footerSection.style.display = "block";


  // 4️⃣ SCROLL WITH OFFSET (same pattern as monuments)
  setTimeout(() => {
    const navbar = document.querySelector(".main-navbar");
    const header = document.getElementById("header");
    const midNavbar = document.getElementById("mid-navbar");

    const totalOffset =
      (navbar?.offsetHeight || 0) +
      (header?.offsetHeight || 0) +
      (midNavbar?.offsetHeight || 0);

    const targetPosition =
      monumentsCentralSection.getBoundingClientRect().top +
      window.pageYOffset -
      totalOffset;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  }, 100);
};

// window.showStateMonumentsPage = function () {
//   // Close About detail page if it's open
//   if (typeof window.closeDetailPage === "function") {
//     window.closeDetailPage();
//   }

//   // Get all sections
//   const heroSection = document.getElementById("hero");
//   const newsAboutSection = document.getElementById("news-about");
//   const activitiesNoticeLinksSection = document.getElementById("activities-notice-links");
//   const gallerySection = document.getElementById("gallery");
//   const aboutDetailSection = document.getElementById("about-detail");
//   const monumentSection = document.querySelector(".monuments-section"); 
//   const monumentsCentralSection = document.getElementById("monuments-central");
//   const stateMonumentsSection = document.getElementById("act-rules");
//   const staffingPatternSection = document.getElementById("staffing-pattern");
//   const newsPageSection = document.getElementById("news-page");
//   const contactUsSection = document.getElementById("contact-us");
//   const actRulesSection = document.getElementById("act-rules");
//   const rtiSection = document.getElementById("rti");
//   const footerSection = document.getElementById("footer");

//   // Hide sections that should not be visible
//   const galleryBreadcrumb = document.getElementById("gallery-breadcrumb");
//   if (galleryBreadcrumb) {
//     galleryBreadcrumb.style.display = "none";
//   }
//   if (heroSection) {
//     heroSection.style.display = "none";
//   }
//   if (newsAboutSection) {
//     newsAboutSection.style.display = "none";
//   }
//   if (monumentSection) {
//     monumentSection.style.display = "none";
//   }
//     if(monumentsCentralSection) { 
//     monumentsCentralSection.style.display = "none";
//   }
//   if (activitiesNoticeLinksSection) {
//     activitiesNoticeLinksSection.style.display = "none";
//   }
//   if (gallerySection) {
//     gallerySection.style.display = "none";
//   }
//   if (aboutDetailSection) {
//     aboutDetailSection.style.display = "none";
//     aboutDetailSection.classList.remove("active");
//   }
//   if (staffingPatternSection) {
//     staffingPatternSection.style.display = "none";
//     staffingPatternSection.classList.remove("active");
//   }
//   if (newsPageSection) {
//     newsPageSection.style.display = "none";
//     newsPageSection.classList.remove("active");
//   }
//   if(actRulesSection){
//     actRulesSection.style.display = "none";
//   }
//   if (contactUsSection) {
//     contactUsSection.style.display = "none";
//   }

//   // Show RTI and Footer sections
//   if (stateMonumentsSection) {
//     stateMonumentsSection.style.display = "block";
//   }
//   if (footerSection) {
//     footerSection.style.display = "block";
//   }

//   // Scroll to act rules section below navbar
//   setTimeout(() => {
//     if (stateMonumentsSection) {
//       const navbar = document.querySelector(".main-navbar");
//       const navbarHeight = navbar ? navbar.offsetHeight : 0;
//       const header = document.getElementById("header");
//       const headerHeight = header ? header.offsetHeight : 0;
//       const midNavbar = document.getElementById("mid-navbar");
//       const midNavbarHeight = midNavbar ? midNavbar.offsetHeight : 0;
      
//       const totalOffset = navbarHeight + headerHeight + midNavbarHeight;
//       const rtiPosition = rtiSection.getBoundingClientRect().top + window.pageYOffset - totalOffset;
      
//       window.scrollTo({
//         top: rtiPosition,
//         behavior: "smooth",
//       });
//     }
//   }, 100);
// };

window.showStateMonumentsPage = function () {
  if (typeof window.closeDetailPage === "function") {
    window.closeDetailPage();
  }

  // Get all sections
  const heroSection = document.getElementById("hero");
  const newsAboutSection = document.getElementById("news-about");
  const activitiesNoticeLinksSection = document.getElementById("activities-notice-links");
  const gallerySection = document.getElementById("gallery");
  const aboutDetailSection = document.getElementById("about-detail");
  const monumentSection = document.querySelector(".monuments-section");
  const monumentsCentralSection = document.getElementById("monuments-central");
  const stateProtectedSection = document.getElementById("state-protected"); 
  const unprotectedMonumentsSection = document.getElementById("unprotected");
  const libraryDetailSection = document.getElementById("library-detail");
  const staffingPatternSection = document.getElementById("staffing-pattern");
  const newsPageSection = document.getElementById("news-page");
  const contactUsSection = document.getElementById("contact-us");
  const actRulesSection = document.getElementById("act-rules");
  const rtiSection = document.getElementById("rti");
  const footerSection = document.getElementById("footer");
  
  const booksJournalsSection = document.getElementById("books-journals");
  if (booksJournalsSection) {
    booksJournalsSection.style.display = "none";
  }
  

  // Hide sections that should not be visible
  const galleryBreadcrumb = document.getElementById("gallery-breadcrumb");
  if (galleryBreadcrumb) {
    galleryBreadcrumb.style.display = "none";
  }
  if (heroSection) {
    heroSection.style.display = "none";
  }
  if (newsAboutSection) {
    newsAboutSection.style.display = "none";
  }
  if (monumentSection) {
    monumentSection.style.display = "none";
  }
    if(monumentsCentralSection) { 
    monumentsCentralSection.style.display = "none";
  }
  if (unprotectedMonumentsSection) {
    unprotectedMonumentsSection.style.display = "none";
  }
  if (libraryDetailSection) {
    libraryDetailSection.style.display = "none";
  }
  if (activitiesNoticeLinksSection) {
    activitiesNoticeLinksSection.style.display = "none";
  }
  if (gallerySection) {
    gallerySection.style.display = "none";
  }
  if (aboutDetailSection) {
    aboutDetailSection.style.display = "none";
    aboutDetailSection.classList.remove("active");
  }
  if (staffingPatternSection) {
    staffingPatternSection.style.display = "none";
    staffingPatternSection.classList.remove("active");
  }
  if (newsPageSection) {
    newsPageSection.style.display = "none";
    newsPageSection.classList.remove("active");
  }
  if(actRulesSection){
    actRulesSection.style.display = "none";
  }
  if (contactUsSection) {
    contactUsSection.style.display = "none";
  }
  if (rtiSection) {
    rtiSection.style.display = "none";
  }

  // Show state protected monuments section
  if (stateProtectedSection) {
    stateProtectedSection.style.display = "block";
  }
  if (footerSection) {
    footerSection.style.display = "block";
  }

  // Scroll to section below navbar
  setTimeout(() => {
    if (stateProtectedSection) {
      const navbar = document.querySelector(".main-navbar");
      const navbarHeight = navbar ? navbar.offsetHeight : 0;
      const header = document.getElementById("header");
      const headerHeight = header ? header.offsetHeight : 0;
      const midNavbar = document.getElementById("mid-navbar");
      const midNavbarHeight = midNavbar ? midNavbar.offsetHeight : 0;
      
      const totalOffset = navbarHeight + headerHeight + midNavbarHeight;
      const sectionPosition = stateProtectedSection.getBoundingClientRect().top + window.pageYOffset - totalOffset;
      
      window.scrollTo({
        top: sectionPosition,
        behavior: "smooth",
      });
    }
  }, 100);
};

window.showUnprotectedMonumentsPage = function () {
  if (typeof window.closeDetailPage === "function") {
    window.closeDetailPage();
  }

  // Get all sections
  const heroSection = document.getElementById("hero");
  const newsAboutSection = document.getElementById("news-about");
  const activitiesNoticeLinksSection = document.getElementById("activities-notice-links");
  const gallerySection = document.getElementById("gallery");
  const aboutDetailSection = document.getElementById("about-detail");
  const monumentSection = document.querySelector(".monuments-section");
  const monumentsCentralSection = document.getElementById("monuments-central");
  const stateProtectedSection = document.getElementById("state-protected"); 
 const archaeologyLibrarySection = document.getElementById("archaeology-library");
 const libraryDetailSection = document.getElementById("library-detail");
  const staffingPatternSection = document.getElementById("staffing-pattern");
  const newsPageSection = document.getElementById("news-page");
  const contactUsSection = document.getElementById("contact-us");
  const actRulesSection = document.getElementById("act-rules");
  const rtiSection = document.getElementById("rti");
  const footerSection = document.getElementById("footer");
  
  const booksJournalsSection = document.getElementById("books-journals");
  if (booksJournalsSection) {
    booksJournalsSection.style.display = "none";
  }
  

  // Hide sections that should not be visible
  const galleryBreadcrumb = document.getElementById("gallery-breadcrumb");
  if (galleryBreadcrumb) {
    galleryBreadcrumb.style.display = "none";
  }
  if (heroSection) {
    heroSection.style.display = "none";
  }
  if (newsAboutSection) {
    newsAboutSection.style.display = "none";
  }
  if (monumentSection) {
    monumentSection.style.display = "none";
  }
    if(monumentsCentralSection) { 
    monumentsCentralSection.style.display = "none";
  }
  if (stateProtectedSection) {
    stateProtectedSection.style.display = "none";
  }
  if (archaeologyLibrarySection) {
    archaeologyLibrarySection.style.display = "none";
  }
  if (activitiesNoticeLinksSection) {
    activitiesNoticeLinksSection.style.display = "none";
  }
  if (gallerySection) {
    gallerySection.style.display = "none";
  }
  if (aboutDetailSection) {
    aboutDetailSection.style.display = "none";
    aboutDetailSection.classList.remove("active");
  }
  if (staffingPatternSection) {
    staffingPatternSection.style.display = "none";
    staffingPatternSection.classList.remove("active");
  }
  if (libraryDetailSection) {
    libraryDetailSection.style.display = "none";
  }
  if (newsPageSection) {
    newsPageSection.style.display = "none";
    newsPageSection.classList.remove("active");
  }
  if(actRulesSection){
    actRulesSection.style.display = "none";
  }
  if (contactUsSection) {
    contactUsSection.style.display = "none";
  }
  if (rtiSection) {
    rtiSection.style.display = "none";
  }

  const unprotectedSection = document.getElementById("unprotected");
  // Show unprotected monuments section
  if (unprotectedSection) {
    unprotectedSection.style.display = "block";
  }
  if (footerSection) {
    footerSection.style.display = "block";
  }

  // Scroll to section below navbar
  setTimeout(() => {
    if (unprotectedSection) {
      const navbar = document.querySelector(".main-navbar");
      const navbarHeight = navbar ? navbar.offsetHeight : 0;
      const header = document.getElementById("header");
      const headerHeight = header ? header.offsetHeight : 0;
      const midNavbar = document.getElementById("mid-navbar");
      const midNavbarHeight = midNavbar ? midNavbar.offsetHeight : 0;
      
      const totalOffset = navbarHeight + headerHeight + midNavbarHeight;
      const sectionPosition = unprotectedSection.getBoundingClientRect().top + window.pageYOffset - totalOffset;
      
      window.scrollTo({
        top: sectionPosition,
        behavior: "smooth",
      });
    }
  }, 100);
};

window.showArchaeologyLibraryPage = function () {
  if (typeof window.closeDetailPage === "function") {
    window.closeDetailPage();
  }

  // Get all sections
  const heroSection = document.getElementById("hero");
  const newsAboutSection = document.getElementById("news-about");
  const gallerySection = document.getElementById("gallery");
  const aboutDetailSection = document.getElementById("about-detail");
  const staffingPatternSection = document.getElementById("staffing-pattern");
  const monumentSection = document.querySelector(".monuments-section");
  const monumentsCentralSection = document.getElementById("monuments-central");
  const stateProtectedSection = document.getElementById("state-protected"); 
  const unprotectedMonumentsSection = document.getElementById("unprotected");
  const libraryDetailSection = document.getElementById("library-detail");
  const activitiesNoticeLinksSection = document.getElementById("activities-notice-links");
  const newsPageSection = document.getElementById("news-page");
  const contactUsSection = document.getElementById("contact-us");
  const actRulesSection = document.getElementById("act-rules");
  const rtiSection = document.getElementById("rti");
  
  const booksJournalsSection = document.getElementById("books-journals");
  if (booksJournalsSection) {
    booksJournalsSection.style.display = "none";
  }
  

  // Hide sections that should not be visible
  const galleryBreadcrumb = document.getElementById("gallery-breadcrumb");
  if (galleryBreadcrumb) {
    galleryBreadcrumb.style.display = "none";
  }
  if (heroSection) {
    heroSection.style.display = "none";
  }
  if (newsAboutSection) {
    newsAboutSection.style.display = "none";
  }
  if (monumentSection) {
    monumentSection.style.display = "none";
  }
    if(monumentsCentralSection) { 
    monumentsCentralSection.style.display = "none";
  }
  if (stateProtectedSection) {
    stateProtectedSection.style.display = "none";
  }
  if (unprotectedMonumentsSection) {
    unprotectedMonumentsSection.style.display = "none";
  }
  if (libraryDetailSection) {
    libraryDetailSection.style.display = "none";
  }
  if (activitiesNoticeLinksSection) {
    activitiesNoticeLinksSection.style.display = "none";
  }
  if (gallerySection) {
    gallerySection.style.display = "none";
  }
  if (aboutDetailSection) {
    aboutDetailSection.style.display = "none";
    aboutDetailSection.classList.remove("active");
  }
  if (staffingPatternSection) {
    staffingPatternSection.style.display = "none";
    staffingPatternSection.classList.remove("active");
  }
  if (newsPageSection) {
    newsPageSection.style.display = "none";
    newsPageSection.classList.remove("active");
  }
  if(actRulesSection){
    actRulesSection.style.display = "none";
  }
  if (contactUsSection) {
    contactUsSection.style.display = "none";
  }
  if (rtiSection) {
    rtiSection.style.display = "none";
  }


  const archaeologyLibrarySection = document.getElementById("archaeology-library");
  const footerSection = document.getElementById("footer");

  // Show archaeology library section
  if (archaeologyLibrarySection) {
    archaeologyLibrarySection.style.display = "block";
  }
  if (footerSection) {
    footerSection.style.display = "block";
  }

  // Scroll to section below navbar
  setTimeout(() => {
    if (archaeologyLibrarySection) {
      const navbar = document.querySelector(".main-navbar");
      const navbarHeight = navbar ? navbar.offsetHeight : 0;
      const header = document.getElementById("header");
      const headerHeight = header ? header.offsetHeight : 0;
      const midNavbar = document.getElementById("mid-navbar");
      const midNavbarHeight = midNavbar ? midNavbar.offsetHeight : 0;
      
      const totalOffset = navbarHeight + headerHeight + midNavbarHeight;
      const sectionPosition = archaeologyLibrarySection.getBoundingClientRect().top + window.pageYOffset - totalOffset;
      
      window.scrollTo({
        top: sectionPosition,
        behavior: "smooth",
      });
    }
  }, 100);
};

window.showLibraryDetailPage = function () {
  if (typeof window.closeDetailPage === "function") {
    window.closeDetailPage();
  }

  // Get all sections
  const heroSection = document.getElementById("hero");
  const newsAboutSection = document.getElementById("news-about");
  const gallerySection = document.getElementById("gallery");
  const aboutDetailSection = document.getElementById("about-detail");
  const staffingPatternSection = document.getElementById("staffing-pattern");
  const monumentSection = document.querySelector(".monuments-section");
  const monumentsCentralSection = document.getElementById("monuments-central");
  const stateProtectedSection = document.getElementById("state-protected"); 
  const unprotectedMonumentsSection = document.getElementById("unprotected");
  const archaeologyLibrarySection = document.getElementById("archaeology-library");
  const activitiesNoticeLinksSection = document.getElementById("activities-notice-links");
  const newsPageSection = document.getElementById("news-page");
  const contactUsSection = document.getElementById("contact-us");
  const actRulesSection = document.getElementById("act-rules");
  const rtiSection = document.getElementById("rti");
  
  const booksJournalsSection = document.getElementById("books-journals");
  if (booksJournalsSection) {
    booksJournalsSection.style.display = "none";
  }
  

  // Hide sections that should not be visible
  const galleryBreadcrumb = document.getElementById("gallery-breadcrumb");
  if (galleryBreadcrumb) {
    galleryBreadcrumb.style.display = "none";
  }
  if (heroSection) {
    heroSection.style.display = "none";
  }
  if (newsAboutSection) {
    newsAboutSection.style.display = "none";
  }
  if (monumentSection) {
    monumentSection.style.display = "none";
  }
    if(monumentsCentralSection) { 
    monumentsCentralSection.style.display = "none";
  }
  if (stateProtectedSection) {
    stateProtectedSection.style.display = "none";
  }
  if (unprotectedMonumentsSection) {
    unprotectedMonumentsSection.style.display = "none";
  } 
  if (archaeologyLibrarySection) {
    archaeologyLibrarySection.style.display = "none";
  }
  if (activitiesNoticeLinksSection) {
    activitiesNoticeLinksSection.style.display = "none";
  }
  if (gallerySection) {
    gallerySection.style.display = "none";
  }
  if (aboutDetailSection) {
    aboutDetailSection.style.display = "none";
    aboutDetailSection.classList.remove("active");
  }
  if (staffingPatternSection) {
    staffingPatternSection.style.display = "none";
    staffingPatternSection.classList.remove("active");
  }
  if (newsPageSection) {
    newsPageSection.style.display = "none";
    newsPageSection.classList.remove("active");
  }
  if(actRulesSection){
    actRulesSection.style.display = "none";
  }
  if (contactUsSection) {
    contactUsSection.style.display = "none";
  }
  if (rtiSection) {
    rtiSection.style.display = "none";
  }

  const libraryDetailSection = document.getElementById("library-detail");
  const footerSection = document.getElementById("footer");

  // Show library detail section
  if (libraryDetailSection) {
    libraryDetailSection.style.display = "block";
  }
  if (footerSection) {
    footerSection.style.display = "block";
  }

  // Scroll to section below navbar
  setTimeout(() => {
    if (libraryDetailSection) {
      const navbar = document.querySelector(".main-navbar");
      const navbarHeight = navbar ? navbar.offsetHeight : 0;
      const header = document.getElementById("header");
      const headerHeight = header ? header.offsetHeight : 0;
      const midNavbar = document.getElementById("mid-navbar");
      const midNavbarHeight = midNavbar ? midNavbar.offsetHeight : 0;
      
      const totalOffset = navbarHeight + headerHeight + midNavbarHeight;
      const sectionPosition = libraryDetailSection.getBoundingClientRect().top + window.pageYOffset - totalOffset;
      
      window.scrollTo({
        top: sectionPosition,
        behavior: "smooth",
      });
    }
  }, 100);
};

window.showBooksJournalsPage = function () {
  if (typeof window.closeDetailPage === "function") {
    window.closeDetailPage();
  }

  // Get all sections
  const heroSection = document.getElementById("hero");
  const newsAboutSection = document.getElementById("news-about");
  const gallerySection = document.getElementById("gallery");
  const aboutDetailSection = document.getElementById("about-detail");
  const staffingPatternSection = document.getElementById("staffing-pattern");
  const monumentSection = document.querySelector(".monuments-section");
  const monumentsCentralSection = document.getElementById("monuments-central");
  const stateProtectedSection = document.getElementById("state-protected"); 
  const unprotectedMonumentsSection = document.getElementById("unprotected");
  const archaeologyLibrarySection = document.getElementById("archaeology-library");
  const libraryDetailSection = document.getElementById("library-detail");
  const activitiesNoticeLinksSection = document.getElementById("activities-notice-links");
  const newsPageSection = document.getElementById("news-page");
  const contactUsSection = document.getElementById("contact-us");
  const actRulesSection = document.getElementById("act-rules");
  const rtiSection = document.getElementById("rti");

  // Hide sections that should not be visible
  const galleryBreadcrumb = document.getElementById("gallery-breadcrumb");
  if (galleryBreadcrumb) {
    galleryBreadcrumb.style.display = "none";
  }
  if (heroSection) {
    heroSection.style.display = "none";
  }
  if (newsAboutSection) {
    newsAboutSection.style.display = "none";
  }
  if (monumentSection) {
    monumentSection.style.display = "none";
  }
    if(monumentsCentralSection) { 
    monumentsCentralSection.style.display = "none";
  }
  if (stateProtectedSection) {
    stateProtectedSection.style.display = "none";
  }
  if (unprotectedMonumentsSection) {
    unprotectedMonumentsSection.style.display = "none";
  } 
  if (archaeologyLibrarySection) {
    archaeologyLibrarySection.style.display = "none";
  }
  if (libraryDetailSection) {
    libraryDetailSection.style.display = "none";
  }
  if (activitiesNoticeLinksSection) {
    activitiesNoticeLinksSection.style.display = "none";
  }
  if (gallerySection) {
    gallerySection.style.display = "none";
  }
  if (aboutDetailSection) {
    aboutDetailSection.style.display = "none";
    aboutDetailSection.classList.remove("active");
  }
  if (staffingPatternSection) {
    staffingPatternSection.style.display = "none";
    staffingPatternSection.classList.remove("active");
  }
  if (newsPageSection) {
    newsPageSection.style.display = "none";
    newsPageSection.classList.remove("active");
  }
  if(actRulesSection){
    actRulesSection.style.display = "none";
  }
  if (contactUsSection) {
    contactUsSection.style.display = "none";
  }
  if (rtiSection) {
    rtiSection.style.display = "none";
  }


  const booksJournalsSection = document.getElementById("books-journals");
  const footerSection = document.getElementById("footer");

  // Show books & journals section
  if (booksJournalsSection) {
    booksJournalsSection.style.display = "block";
  }
  if (footerSection) {
    footerSection.style.display = "block";
  }

  // Scroll to section below navbar
  setTimeout(() => {
    if (booksJournalsSection) {
      const navbar = document.querySelector(".main-navbar");
      const navbarHeight = navbar ? navbar.offsetHeight : 0;
      const header = document.getElementById("header");
      const headerHeight = header ? header.offsetHeight : 0;
      const midNavbar = document.getElementById("mid-navbar");
      const midNavbarHeight = midNavbar ? midNavbar.offsetHeight : 0;
      
      const totalOffset = navbarHeight + headerHeight + midNavbarHeight;
      const sectionPosition = booksJournalsSection.getBoundingClientRect().top + window.pageYOffset - totalOffset;
      
      window.scrollTo({
        top: sectionPosition,
        behavior: "smooth",
      });
    }
  }, 100);
};