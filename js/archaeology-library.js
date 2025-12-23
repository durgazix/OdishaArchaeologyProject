document.addEventListener("DOMContentLoaded", () => {
  const sliderTrack = document.getElementById("archSliderTrack");
  const slides = document.querySelectorAll(".arch-slider-slide");
  const dots = document.querySelectorAll(".arch-dot");
  const prevBtn = document.getElementById("archPrevSlide");
  const nextBtn = document.getElementById("archNextSlide");
  const pausePlayBtn = document.getElementById("archPausePlayBtn");
  const readMoreBtn = document.getElementById("archLibraryReadMore");

  if (!sliderTrack || slides.length === 0) return;

  let currentSlide = 0;
  let autoPlayInterval;
  let isPlaying = true;

  // Function to show specific slide
  function showSlide(index) {
    if (index >= slides.length) {
      currentSlide = 0;
    } else if (index < 0) {
      currentSlide = slides.length - 1;
    } else {
      currentSlide = index;
    }

    const offset = -currentSlide * 100;
    sliderTrack.style.transform = `translateX(${offset}%)`;

    // Update dots
    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === currentSlide);
    });
  }

  // Next slide
  function nextSlide() {
    showSlide(currentSlide + 1);
  }

  // Previous slide
  function prevSlide() {
    showSlide(currentSlide - 1);
  }

  // Auto play
  function startAutoPlay() {
    autoPlayInterval = setInterval(nextSlide, 4000);
    isPlaying = true;
    pausePlayBtn.innerHTML = '<i class="fa fa-pause"></i>';
  }

  function stopAutoPlay() {
    clearInterval(autoPlayInterval);
    isPlaying = false;
    pausePlayBtn.innerHTML = '<i class="fa fa-play"></i>';
  }

  // Event listeners
  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      nextSlide();
      stopAutoPlay();
      startAutoPlay();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      prevSlide();
      stopAutoPlay();
      startAutoPlay();
    });
  }

  // Dots click
  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      const slideIndex = parseInt(dot.getAttribute("data-slide"));
      showSlide(slideIndex);
      stopAutoPlay();
      startAutoPlay();
    });
  });

  // Pause/Play button
  if (pausePlayBtn) {
    pausePlayBtn.addEventListener("click", () => {
      if (isPlaying) {
        stopAutoPlay();
      } else {
        startAutoPlay();
      }
    });
  }

  // Read More button - redirect to library detail page
  if (readMoreBtn) {
    readMoreBtn.addEventListener("click", () => {
      showLibraryDetailPage(); // Call the library detail page function
    });
  }

  // Initialize
  showSlide(0);
  startAutoPlay();

  // Pause on hover
  sliderTrack.addEventListener("mouseenter", stopAutoPlay);
  sliderTrack.addEventListener("mouseleave", () => {
    if (!isPlaying) return;
    startAutoPlay();
  });
});