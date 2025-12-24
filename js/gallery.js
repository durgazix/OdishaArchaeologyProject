// ===================================
// GALLERY INITIALIZATION
// ===================================

window.initGallery = function () {
  const photoTab = document.getElementById("photoTab");
  const videoTab = document.getElementById("videoTab");

  const photoGallery = document.getElementById("photoGallery");
  const videoGallery = document.getElementById("videoGallery");

  const galleryItems = document.getElementById("galleryItems");

  const photoViewMore = document.getElementById("photoViewMore");
  const photoViewLess = document.getElementById("photoViewLess");

  const videoViewMore = document.getElementById("videoViewMore");
  const videoViewLess = document.getElementById("videoViewLess");
  const extraVideos = document.querySelectorAll(".extra-video");

  /* ---------------- PHOTO DATA ---------------- */
  const photoData = [
    { src: "assets/gallery/gallery_1.jpg", cap: "Ancient Temple" },
    { src: "assets/gallery/gallery_2.jpg", cap: "Architecture" },
    { src: "assets/gallery/gallery_3.jpg", cap: "Painting" },
    { src: "assets/gallery/gallery_4.jpg", cap: "Historic Site" },
    { src: "assets/gallery/gallery_5.jpeg", cap: "Cultural Heritage" },
    { src: "assets/gallery/gallery_1.jpg", cap: "Monument" },
    { src: "assets/gallery/gallery_2.jpg", cap: "Sculpture" },
    { src: "assets/gallery/gallery_3.jpg", cap: "Artifact" },
  ];

  /* ---------------- PHOTO RENDER ---------------- */
  function renderPhotos(limit) {
    galleryItems.innerHTML = "";
    photoData.slice(0, limit).forEach((p) => {
      galleryItems.innerHTML += `
        <div class="col-12 col-sm-6 col-lg-3">
          <div class="gallery-item">
            <img src="${p.src}" class="img-fluid">
            <div class="gallery-caption">${p.cap}</div>
          </div>
        </div>`;
    });
  }

  /* ---------------- INITIAL STATE ---------------- */
  renderPhotos(4);
  photoGallery.classList.remove("d-none");
  videoGallery.classList.add("d-none");

  /* ---------------- TAB SWITCHING ---------------- */
  photoTab.onclick = () => {
    photoGallery.classList.remove("d-none");
    videoGallery.classList.add("d-none");

    photoTab.classList.add("active");
    videoTab.classList.remove("active");
  };

  videoTab.onclick = () => {
    photoGallery.classList.add("d-none");
    videoGallery.classList.remove("d-none");

    videoTab.classList.add("active");
    photoTab.classList.remove("active");
  };

  /* ---------------- PHOTO VIEW MORE ---------------- */
  photoViewMore.onclick = () => {
    showGalleryPage("photo");
  };

  photoViewLess.onclick = () => {
    renderPhotos(4);
    photoViewLess.classList.add("d-none");
    photoViewMore.classList.remove("d-none");
  };

  /* ---------------- VIDEO VIEW MORE ---------------- */
  videoTab.onclick = () => {
    photoGallery.classList.add("d-none");
    videoGallery.classList.remove("d-none");

    // 🔥 ENSURE VIDEO VIEW MORE BUTTON IS VISIBLE
    if (document.getElementById("videoViewMore")) {
      document.getElementById("videoViewMore").classList.remove("d-none");
    }

    videoTab.classList.add("active");
    photoTab.classList.remove("active");
  };
};

/* ===================================
   GALLERY PAGE NAVIGATION
   =================================== */

window.showGalleryPage = function (type = "photo") {
  hideAllSections();

  const gallery = document.getElementById("gallery");
  const breadcrumb = document.getElementById("gallery-breadcrumb");

  gallery.style.display = "block";
  breadcrumb.classList.remove("d-none");

  const photoTab = document.getElementById("photoTab");
  const videoTab = document.getElementById("videoTab");

  const photoGallery = document.getElementById("photoGallery");
  const videoGallery = document.getElementById("videoGallery");

  const galleryItems = document.getElementById("galleryItems");
  const photoViewMore = document.getElementById("photoViewMore");
  const photoViewLess = document.getElementById("photoViewLess");

  if (type === "photo") {
    photoTab.classList.add("active");
    videoTab.classList.remove("active");

    photoGallery.classList.remove("d-none");
    videoGallery.classList.add("d-none");

    const allPhotos = [
      "gallery_1.jpg",
      "gallery_2.jpg",
      "gallery_3.jpg",
      "gallery_4.jpg",
      "gallery_5.jpeg",
      "gallery_1.jpg",
      "gallery_2.jpg",
      "gallery_3.jpg",
    ];

    galleryItems.innerHTML = "";
    allPhotos.forEach((img) => {
      galleryItems.innerHTML += `
        <div class="col-12 col-sm-6 col-lg-3">
          <div class="gallery-item">
            <img src="assets/gallery/${img}" class="img-fluid">
          </div>
        </div>`;
    });

    photoViewMore.classList.add("d-none");
    photoViewLess.classList.remove("d-none");
  }

  scrollToGallery();
};

/* ===================================
   HELPERS
   =================================== */

function scrollToGallery() {
  document
    .getElementById("gallery")
    .scrollIntoView({ behavior: "smooth", block: "start" });
}

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    if (document.getElementById("gallery")) {
      initGallery();
    }
  }, 300);
});
