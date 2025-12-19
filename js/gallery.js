// This function will be called from index.html AFTER the gallery HTML
// has been injected into the page.
window.initGallery = function () {
  const photoTab = document.getElementById("photoTab");
  const videoTab = document.getElementById("videoTab");
  const photoGallery = document.getElementById("photoGallery");
  const videoGallery = document.getElementById("videoGallery");
  const galleryItems = document.getElementById("galleryItems");
  const photoViewMoreBtn = document.querySelector(".photo-footer .view-more-btn");
  const photoViewLessBtn = document.querySelector(".photo-footer .view-less-btn");
  const videoGrid = document.querySelector(".video-grid");
  const videoViewMoreBtn = document.querySelector(".video-footer .view-more-btn");
  const videoViewLessBtn = document.querySelector(".video-footer .view-less-btn");

  // If the gallery markup is not present, safely exit
  if (!photoTab || !videoTab || !photoGallery || !videoGallery || !galleryItems) return;

  let showingPhotos = true;
  let showingAllPhotos = false;
  let showingAllVideos = false;

  const photoData = [
    { src: "assets/gallery/gallery_1.jpg", cap: "Ancient Temple" },
    { src: "assets/gallery/gallery_2.jpg", cap: "Architecture" },
    { src: "assets/gallery/gallery_3.jpg", cap: "Painting" },
    { src: "assets/gallery/gallery_4.jpg", cap: "Historic Site" },
    { src: "assets/gallery/gallery_5.jpeg", cap: "Cultural Heritage" }
  ];

  // Render photos, optionally limiting how many are shown
  function renderPhotos(limit = 4) {
    galleryItems.innerHTML = "";
    photoData.slice(0, limit).forEach((item) => {
      galleryItems.innerHTML += `
        <div class="gallery-item">
          <img src="${item.src}" alt="${item.cap}">
          <div class="gallery-caption">${item.cap}</div>
        </div>
      `;
    });
  }

  // Initial state: show first 4 photos, hide videos
  renderPhotos(4);
  photoGallery.style.display = "block";
  videoGallery.style.display = "none";
  photoTab.classList.add("active");
  videoTab.classList.remove("active");

  // Setup photo View More / View Less
  if (photoViewMoreBtn && photoViewLessBtn) {
    // initial buttons state
    photoViewMoreBtn.style.display = photoData.length > 4 ? "inline-block" : "none";
    photoViewLessBtn.style.display = "none";

    photoViewMoreBtn.addEventListener("click", () => {
      if (!showingAllPhotos) {
        renderPhotos(photoData.length);
        showingAllPhotos = true;
        photoViewMoreBtn.style.display = "none";
        photoViewLessBtn.style.display = "inline-block";
      }
    });

    photoViewLessBtn.addEventListener("click", () => {
      if (showingAllPhotos) {
        renderPhotos(4);
        showingAllPhotos = false;
        photoViewMoreBtn.style.display = photoData.length > 4 ? "inline-block" : "none";
        photoViewLessBtn.style.display = "none";
      }
    });
  }

  // VIDEO: limit to first 4 cards with View More / View Less
  if (videoGrid && videoViewMoreBtn && videoViewLessBtn) {
    const videoCards = Array.from(videoGrid.querySelectorAll(".video-card"));

    function applyVideoVisibility(limit = 4) {
      videoCards.forEach((card, index) => {
        card.style.display = index < limit ? "block" : "none";
      });
    }

    // initial
    applyVideoVisibility(4);
    videoViewMoreBtn.style.display = videoCards.length > 3 ? "inline-block" : "none";
    videoViewLessBtn.style.display = "none";

    videoViewMoreBtn.addEventListener("click", () => {
      if (!showingAllVideos) {
        applyVideoVisibility(videoCards.length);
        showingAllVideos = true;
        videoViewMoreBtn.style.display = "none";
        videoViewLessBtn.style.display = "inline-block";
      }
    });

    videoViewLessBtn.addEventListener("click", () => {
      if (showingAllVideos) {
        applyVideoVisibility(4);
        showingAllVideos = false;
        videoViewMoreBtn.style.display = videoCards.length > 4 ? "inline-block" : "none";
        videoViewLessBtn.style.display = "none";
      }
    });
  }

  function activatePhotoTab() {
    showingPhotos = true;
    photoGallery.style.display = "block";
    videoGallery.style.display = "none";
    photoTab.classList.add("active");
    videoTab.classList.remove("active");

    if (photoViewMoreBtn && photoViewLessBtn) {
      if (showingAllPhotos) {
        photoViewMoreBtn.style.display = "none";
        photoViewLessBtn.style.display = "inline-block";
      } else {
        photoViewMoreBtn.style.display = photoData.length > 4 ? "inline-block" : "none";
        photoViewLessBtn.style.display = "none";
      }
    }
  }

  function activateVideoTab() {
    showingPhotos = false;
    photoGallery.style.display = "none";
    videoGallery.style.display = "block";
    photoTab.classList.remove("active");
    videoTab.classList.add("active");

    if (videoViewMoreBtn && videoViewLessBtn && videoGrid) {
      if (showingAllVideos) {
        videoViewMoreBtn.style.display = "none";
        videoViewLessBtn.style.display = "inline-block";
      } else {
        const hasMoreVideos = videoGrid.querySelectorAll(".video-card").length > 4;
        videoViewMoreBtn.style.display = hasMoreVideos ? "inline-block" : "none";
        videoViewLessBtn.style.display = "none";
      }
    }
  }

  photoTab.addEventListener("click", activatePhotoTab);
  videoTab.addEventListener("click", activateVideoTab);
};
