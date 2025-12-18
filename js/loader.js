// Show loader on page load and hide when fully loaded
document.addEventListener("DOMContentLoaded", function () {
  const pageLoader = document.getElementById("pageLoader");
  
  // Show loader on initial page load
  if (pageLoader) {
    pageLoader.classList.add("active");
  }
});

// Hide loader when page and all resources are fully loaded
window.addEventListener("load", function () {
  const pageLoader = document.getElementById("pageLoader");
  if (pageLoader) {
    setTimeout(function () {
      pageLoader.classList.remove("active");
    }, 500);
  }
});

// Show loader on home-icon click
document.addEventListener("DOMContentLoaded", function () {
  const homeIcon = document.querySelector(".home-icon a");
  const pageLoader = document.getElementById("pageLoader");

  if (homeIcon) {
    homeIcon.addEventListener("click", function (e) {
      e.preventDefault();

      // Show loader
      if (pageLoader) {
        pageLoader.classList.add("active");
      }

      // Reload page after delay
      setTimeout(function () {
        window.location.href = window.location.pathname;
      }, 1500);
    });
  }
});
