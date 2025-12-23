document.addEventListener("DOMContentLoaded", () => {
  const monumentSection = document.querySelector(".monuments-section");
  if (monumentSection) {
    monumentSection.style.display = "none";
  }
});
document.addEventListener("DOMContentLoaded", () => {
  // Get all monument items
  const items = document.querySelectorAll(".monuments-item");
  const viewer = document.getElementById("monumentsViewer");
  const viewerImg = document.getElementById("monumentsViewerImg");
  const closeBtn = document.getElementById("monumentsClose");
  const prevBtn = document.getElementById("monumentsPrev");
  const nextBtn = document.getElementById("monumentsNext");
  const currentImageSpan = document.getElementById("currentImage");
  const totalImagesSpan = document.getElementById("totalImages");
  const viewMoreBtn = document.getElementById("viewMoreBtn");
  const viewMoreContainer = document.getElementById("viewMoreContainer");

  let currentIndex = 0;
  let allImages = [];

  // Update images array
  function updateImagesArray() {
    const visibleItems = document.querySelectorAll(
      ".monuments-item:not(.hidden)"
    );
    allImages = Array.from(visibleItems).map((item) =>
      item.querySelector("img").src
    );
    totalImagesSpan.textContent = allImages.length;
  }

  // Initialize
  updateImagesArray();

  // View More functionality
  viewMoreBtn.addEventListener("click", () => {
    const hiddenItems = document.querySelectorAll(".monuments-item.hidden");
    hiddenItems.forEach((item) => {
      item.classList.remove("hidden");
    });
    viewMoreContainer.classList.add("hidden");
    updateImagesArray();
  });

  // Open viewer
  function openViewer(index) {
    currentIndex = index;
    updateViewer();
    viewer.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  // Close viewer
  function closeViewer() {
    viewer.classList.remove("active");
    document.body.style.overflow = "";
  }

  // Update viewer image
  function updateViewer() {
    viewerImg.src = allImages[currentIndex];
    currentImageSpan.textContent = currentIndex + 1;
  }

  // Next image
  function showNext() {
    currentIndex = (currentIndex + 1) % allImages.length;
    updateViewer();
  }

  // Previous image
  function showPrev() {
    currentIndex = (currentIndex - 1 + allImages.length) % allImages.length;
    updateViewer();
  }

  // Add click event to all monument items
  items.forEach((item, index) => {
    item.addEventListener("click", () => {
      // Find the actual index in visible items
      const visibleItems = document.querySelectorAll(
        ".monuments-item:not(.hidden)"
      );
      const visibleIndex = Array.from(visibleItems).indexOf(item);
      if (visibleIndex !== -1) {
        openViewer(visibleIndex);
      }
    });
  });

  // Event listeners
  closeBtn.addEventListener("click", closeViewer);
  nextBtn.addEventListener("click", showNext);
  prevBtn.addEventListener("click", showPrev);

  // Keyboard navigation
  document.addEventListener("keydown", (e) => {
    if (viewer.classList.contains("active")) {
      if (e.key === "Escape") closeViewer();
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
    }
  });

  // Close on background click
  viewer.addEventListener("click", (e) => {
    if (e.target === viewer) closeViewer();
  });
});