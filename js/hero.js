function initializeHeroSlider() {
  let currentSlide = 0;
  let isAnimating = false;

  const slides = document.querySelectorAll(".hero-slide");
  const dots = document.querySelectorAll(".dot");
  const totalSlides = slides.length;
  const intervalTime = 5000;
  let autoSlide;

  // Exit if no slides found
  if (totalSlides === 0) {
    console.warn("No hero slides found");
    return;
  }

  function resetSlideClasses(slide) {
    slide.classList.remove(
      "exit-left",
      "exit-right",
      "from-left",
      "from-right"
    );
  }

  function showSlide(nextIndex, direction) {
    if (isAnimating || nextIndex === currentSlide || totalSlides === 0) return;
    isAnimating = true;

    const current = slides[currentSlide];
    const next = slides[nextIndex];

    // Reset classes
    slides.forEach(resetSlideClasses);

    // Prepare next slide position
    next.classList.add(direction === "next" ? "from-right" : "from-left");
    next.style.opacity = "1";

    // Force reflow
    next.offsetHeight;

    // Animate current out
    current.classList.add(direction === "next" ? "exit-left" : "exit-right");
    current.classList.remove("active");

    // Animate next in
    next.classList.remove("from-right", "from-left");
    next.classList.add("active");

    // Update dots
    dots[currentSlide].classList.remove("active");
    dots[nextIndex].classList.add("active");

    currentSlide = nextIndex;

    // Unlock animation
    setTimeout(() => {
      isAnimating = false;
    }, 800);
  }

  function nextSlide() {
    showSlide((currentSlide + 1) % totalSlides, "next");
  }

  function prevSlide() {
    showSlide((currentSlide - 1 + totalSlides) % totalSlides, "prev");
  }

  function startAuto() {
    autoSlide = setInterval(nextSlide, intervalTime);
  }

  function resetAuto() {
    clearInterval(autoSlide);
    startAuto();
  }

  // Arrow controls
  document.querySelector(".hero-arrow.next")?.addEventListener("click", () => {
    nextSlide();
    resetAuto();
  });

  document.querySelector(".hero-arrow.prev")?.addEventListener("click", () => {
    prevSlide();
    resetAuto();
  });

  // Dots
  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      showSlide(i, i > currentSlide ? "next" : "prev");
      resetAuto();
    });
  });

  // Pause on hover
  const hero = document.querySelector(".hero");
  hero?.addEventListener("mouseenter", () => clearInterval(autoSlide));
  hero?.addEventListener("mouseleave", startAuto);

  startAuto();
}

// Wait for hero component to be loaded
const heroObserver = new MutationObserver(() => {
  if (document.querySelector(".hero-slide")) {
    initializeHeroSlider();
    heroObserver.disconnect();
  }
});

// Start observing when document is ready
document.addEventListener("DOMContentLoaded", () => {
  const heroContainer = document.getElementById("hero");
  if (heroContainer) {
    heroObserver.observe(heroContainer, { childList: true, subtree: true });
  }
});
