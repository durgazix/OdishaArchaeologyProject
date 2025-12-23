document.addEventListener("DOMContentLoaded", () => {
  const sliderContainer = document.getElementById("librarySliderContainer");
  const slides = document.querySelectorAll(".slider-slide");
  const prevArrow = document.getElementById("prevArrow");
  const nextArrow = document.getElementById("nextArrow");

  if (!sliderContainer || slides.length === 0) return;

  let currentSlide = 0;
  let autoSlideInterval;
  const autoSlideDelay = 4000; // 4 seconds

  // Function to show specific slide
  function showSlide(index) {
    // Remove active class from all slides
    slides.forEach((slide) => {
      slide.classList.remove("active");
    });

    // Handle wraparound
    if (index >= slides.length) {
      currentSlide = 0;
    } else if (index < 0) {
      currentSlide = slides.length - 1;
    } else {
      currentSlide = index;
    }

    // Add active class to current slide
    slides[currentSlide].classList.add("active");
  }

  // Next slide function
  function nextSlide() {
    showSlide(currentSlide + 1);
  }

  // Previous slide function
  function prevSlide() {
    showSlide(currentSlide - 1);
  }

  // Start auto sliding
  function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, autoSlideDelay);
  }

  // Stop auto sliding
  function stopAutoSlide() {
    clearInterval(autoSlideInterval);
  }

  // Reset auto slide (stop and start again)
  function resetAutoSlide() {
    stopAutoSlide();
    startAutoSlide();
  }

  // Event listener for next arrow
  if (nextArrow) {
    nextArrow.addEventListener("click", () => {
      nextSlide();
      resetAutoSlide();
    });
  }

  // Event listener for previous arrow
  if (prevArrow) {
    prevArrow.addEventListener("click", () => {
      prevSlide();
      resetAutoSlide();
    });
  }

  // Pause auto slide on hover
  if (sliderContainer) {
    sliderContainer.addEventListener("mouseenter", stopAutoSlide);
    sliderContainer.addEventListener("mouseleave", startAutoSlide);
  }

  // Touch/Swipe support for mobile
  let touchStartX = 0;
  let touchEndX = 0;

  if (sliderContainer) {
    sliderContainer.addEventListener("touchstart", (e) => {
      touchStartX = e.changedTouches[0].screenX;
    });

    sliderContainer.addEventListener("touchend", (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    });
  }

  function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        // Swipe left - next slide
        nextSlide();
      } else {
        // Swipe right - previous slide
        prevSlide();
      }
      resetAutoSlide();
    }
  }

  // Keyboard navigation
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") {
      prevSlide();
      resetAutoSlide();
    } else if (e.key === "ArrowRight") {
      nextSlide();
      resetAutoSlide();
    }
  });

  // Initialize
  showSlide(0);
  startAutoSlide();
});