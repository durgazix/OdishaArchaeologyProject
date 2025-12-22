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
  const activitiesNoticeLinksSection = document.getElementById("activities-notice-links");
  const gallerySection = document.getElementById("gallery");
  const aboutDetailSection = document.getElementById("about-detail");
  const staffingPatternSection = document.getElementById("staffing-pattern");
  const newsPageSection = document.getElementById("news-page");
  const contactUsSection = document.getElementById("contact-us");
  const actRulesSection = document.getElementById("act-rules");
  const rtiSection = document.getElementById("rti");
  const footerSection = document.getElementById("footer");

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
  const activitiesNoticeLinksSection = document.getElementById("activities-notice-links");
  const gallerySection = document.getElementById("gallery");
  const aboutDetailSection = document.getElementById("about-detail");
  const staffingPatternSection = document.getElementById("staffing-pattern");
  const newsPageSection = document.getElementById("news-page");
  const contactUsSection = document.getElementById("contact-us");
  const actRulesSection = document.getElementById("act-rules");
  const rtiSection = document.getElementById("rti");
  const footerSection = document.getElementById("footer");

  // Hide sections that should not be visible
  if (heroSection) {
    heroSection.style.display = "none";
  }
  if (newsAboutSection) {
    newsAboutSection.style.display = "none";
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


// window.showAboutPage = function () {

//   // Close any inner detail page
//   if (typeof window.closeDetailPage === "function") {
//     window.closeDetailPage();
//   }

//   // 🔥 RESET EVERYTHING FIRST
//   hideAllSections();

//   // 🔥 THEN SHOW ABOUT DETAIL
//   const aboutDetailSection = document.getElementById("about-detail");
//   const footerSection = document.getElementById("footer");

//   // Show About Detail
//   if (aboutDetailSection) {
//     aboutDetailSection.style.display = "block";
//     aboutDetailSection.classList.add("active");
//   }

//   // Footer always visible
//   if (footerSection) {
//     footerSection.style.display = "block";
//   }

//   // Scroll correctly below header + navbars
//   setTimeout(() => {
//     const navbar = document.querySelector(".main-navbar");
//     const header = document.getElementById("header");
//     const midNavbar = document.getElementById("mid-navbar");

//     const offset =
//       (navbar?.offsetHeight || 0) +
//       (header?.offsetHeight || 0) +
//       (midNavbar?.offsetHeight || 0);

//     if (aboutDetailSection) {
//       const top =
//         aboutDetailSection.getBoundingClientRect().top +
//         window.pageYOffset -
//         offset;

//       window.scrollTo({
//         top,
//         behavior: "smooth",
//       });
//     }
//   }, 100);
// };


// Global function to show Staffing Pattern page
// Called when Staffing Pattern link is clicked in navbar
window.showStaffingPatternPage = function () {
  // Get all sections
  const heroSection = document.getElementById("hero");
  const newsAboutSection = document.getElementById("news-about");
  const activitiesNoticeLinksSection = document.getElementById("activities-notice-links");
  const gallerySection = document.getElementById("gallery");
  const aboutDetailSection = document.getElementById("about-detail");
  const staffingPatternSection = document.getElementById("staffing-pattern");
  const newsPageSection = document.getElementById("news-page");
  const contactUsSection = document.getElementById("contact-us");
  const actRulesSection = document.getElementById("act-rules");
  const rtiSection = document.getElementById("rti");
  const footerSection = document.getElementById("footer");

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

// Global function to show News page
// Called when News link is clicked in navbar or "More.." is clicked in news section
window.showNewsPage = function () {
  // Get all sections
  const heroSection = document.getElementById("hero");
  const newsAboutSection = document.getElementById("news-about");
  const activitiesNoticeLinksSection = document.getElementById("activities-notice-links");
  const gallerySection = document.getElementById("gallery");
  const aboutDetailSection = document.getElementById("about-detail");
  const staffingPatternSection = document.getElementById("staffing-pattern");
  const newsPageSection = document.getElementById("news-page");
  const contactUsSection = document.getElementById("contact-us");
  const actRulesSection = document.getElementById("act-rules");
  const rtiSection = document.getElementById("rti");
  const footerSection = document.getElementById("footer");

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

// Global function to show Contact Us page
// Called when Contact Us link is clicked in navbar
window.showContactUsPage = function () {
  // Close About detail page if it's open
  if (typeof window.closeDetailPage === "function") {
    window.closeDetailPage();
  }

  // Get all sections
  const heroSection = document.getElementById("hero");
  const newsAboutSection = document.getElementById("news-about");
  const activitiesNoticeLinksSection = document.getElementById("activities-notice-links");
  const gallerySection = document.getElementById("gallery");
  const aboutDetailSection = document.getElementById("about-detail");
  const staffingPatternSection = document.getElementById("staffing-pattern");
  const newsPageSection = document.getElementById("news-page");
  const contactUsSection = document.getElementById("contact-us");
  const actRulesSection = document.getElementById("act-rules");
  const rtiSection = document.getElementById("rti");
  const footerSection = document.getElementById("footer");

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

// Global function to show Act & Rules page
// Called when Act & Rules link is clicked in navbar
window.showActRulesPage = function () {
  // Close About detail page if it's open
  if (typeof window.closeDetailPage === "function") {
    window.closeDetailPage();
  }

  // Get all sections
  const heroSection = document.getElementById("hero");
  const newsAboutSection = document.getElementById("news-about");
  const activitiesNoticeLinksSection = document.getElementById("activities-notice-links");
  const gallerySection = document.getElementById("gallery");
  const aboutDetailSection = document.getElementById("about-detail");
  const staffingPatternSection = document.getElementById("staffing-pattern");
  const newsPageSection = document.getElementById("news-page");
  const contactUsSection = document.getElementById("contact-us");
  const actRulesSection = document.getElementById("act-rules");
  const rtiSection = document.getElementById("rti");
  const footerSection = document.getElementById("footer");

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


// Global function to show RTI page
// Called when RTI link is clicked in navbar
window.showRTIPage = function () {
  // Close About detail page if it's open
  if (typeof window.closeDetailPage === "function") {
    window.closeDetailPage();
  }

  // Get all sections
  const heroSection = document.getElementById("hero");
  const newsAboutSection = document.getElementById("news-about");
  const activitiesNoticeLinksSection = document.getElementById("activities-notice-links");
  const gallerySection = document.getElementById("gallery");
  const aboutDetailSection = document.getElementById("about-detail");
  const staffingPatternSection = document.getElementById("staffing-pattern");
  const newsPageSection = document.getElementById("news-page");
  const contactUsSection = document.getElementById("contact-us");
  const actRulesSection = document.getElementById("act-rules");
  const rtiSection = document.getElementById("rti");
  const footerSection = document.getElementById("footer");

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