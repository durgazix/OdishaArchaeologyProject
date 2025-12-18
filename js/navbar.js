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
