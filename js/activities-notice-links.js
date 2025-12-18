// Infinite scroll animation for Important Links
document.addEventListener("DOMContentLoaded", function () {
  const linksContent = document.querySelector(".links-content");
  
  if (linksContent) {
    // Duplicate the content for seamless infinite scroll
    const originalHTML = linksContent.innerHTML;
    linksContent.innerHTML += originalHTML;
  }
});

// Optional: Pause animation on hover
document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".links-scroll-container");
  const content = document.querySelector(".links-content");
  
  if (container && content) {
    container.addEventListener("mouseenter", function () {
      content.style.animationPlayState = "paused";
    });
    
    container.addEventListener("mouseleave", function () {
      content.style.animationPlayState = "running";
    });
  }
});
