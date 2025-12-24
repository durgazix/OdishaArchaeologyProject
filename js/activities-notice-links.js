document.addEventListener("DOMContentLoaded", function () {
  const linksContent = document.querySelector(".links-content");
  if (linksContent) {
    linksContent.innerHTML += linksContent.innerHTML;
  }

  const container = document.querySelector(".links-scroll-container");
  if (container) {
    container.addEventListener("mouseenter", () => {
      linksContent.style.animationPlayState = "paused";
    });
    container.addEventListener("mouseleave", () => {
      linksContent.style.animationPlayState = "running";
    });
  }
});
