document.addEventListener("DOMContentLoaded", () => {
  const sliderTrack = document.getElementById("archSliderTrack");
  const slides = document.querySelectorAll(".arch-slider-slide");
  const dots = document.querySelectorAll(".arch-dot");
  const prevBtn = document.getElementById("archPrevSlide");
  const nextBtn = document.getElementById("archNextSlide");
  const pausePlayBtn = document.getElementById("archPausePlayBtn");
  const readMoreBtn = document.getElementById("archLibraryReadMore");

  // ✅ SAFETY CHECK (important after layout changes)
  if (!sliderTrack || slides.length === 0) return;

  let currentSlide = 0;
  let autoPlayInterval = null;
  let isPlaying = true;

  /* =====================================
     SHOW SLIDE
  ===================================== */
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

  /* =====================================
     NAVIGATION
  ===================================== */
  function nextSlide() {
    showSlide(currentSlide + 1);
  }

  function prevSlide() {
    showSlide(currentSlide - 1);
  }

  /* =====================================
     AUTOPLAY
  ===================================== */
  function startAutoPlay() {
    stopAutoPlay(); // prevent multiple intervals
    autoPlayInterval = setInterval(nextSlide, 4000);
    isPlaying = true;

    if (pausePlayBtn) {
      pausePlayBtn.innerHTML = '<i class="fa fa-pause"></i>';
    }
  }

  function stopAutoPlay() {
    if (autoPlayInterval) {
      clearInterval(autoPlayInterval);
      autoPlayInterval = null;
    }
    isPlaying = false;

    if (pausePlayBtn) {
      pausePlayBtn.innerHTML = '<i class="fa fa-play"></i>';
    }
  }

  /* =====================================
     EVENTS
  ===================================== */
  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      nextSlide();
      startAutoPlay();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      prevSlide();
      startAutoPlay();
    });
  }

  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      const slideIndex = Number(dot.dataset.slide);
      showSlide(slideIndex);
      startAutoPlay();
    });
  });

  if (pausePlayBtn) {
    pausePlayBtn.addEventListener("click", () => {
      isPlaying ? stopAutoPlay() : startAutoPlay();
    });
  }

  if (readMoreBtn) {
    readMoreBtn.addEventListener("click", () => {
      showLibraryDetailPage();
    });
  }

  /* =====================================
     HOVER PAUSE
  ===================================== */
  sliderTrack.addEventListener("mouseenter", stopAutoPlay);
  sliderTrack.addEventListener("mouseleave", () => {
    if (isPlaying) startAutoPlay();
  });

  /* =====================================
     INIT
  ===================================== */
  showSlide(0);
  startAutoPlay();
});
