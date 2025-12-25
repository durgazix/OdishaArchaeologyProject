/* ===============================
   GALLERY INITIALIZATION
================================ */

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

  /* ================= PHOTO DATA ================= */
  const photoData = [
    { src: "assets/gallery/gallery_1.jpg", cap: "Ancient Temple" },
    { src: "assets/gallery/gallery_2.jpg", cap: "Architecture" },
    { src: "assets/gallery/gallery_3.jpg", cap: "Painting" },
    { src: "assets/gallery/gallery_4.jpg", cap: "Historic Site" },
    { src: "assets/gallery/gallery_5.jpeg", cap: "Cultural Heritage" },
    { src: "assets/gallery/gallery_1.jpg", cap: "Monument" },
    { src: "assets/gallery/gallery_2.jpg", cap: "Sculpture" },
    { src: "assets/gallery/gallery_3.jpg", cap: "Artifact" }
  ];

  /* ================= RENDER ================= */

  function renderPhotos(limit) {
    galleryItems.innerHTML = "";
    photoData.slice(0, limit).forEach(item => {
      galleryItems.innerHTML += `
        <div class="col-12 col-sm-6 col-lg-3">
          <div class="gallery-item">
            <img src="${item.src}" class="img-fluid">
            <div class="gallery-caption">${item.cap}</div>
          </div>
        </div>`;
    });
  }

  function showPreviewPhotos() {
    renderPhotos(4);
    photoViewMore.classList.remove("d-none");
    photoViewLess.classList.add("d-none");
  }

  function showAllPhotos() {
    renderPhotos(photoData.length);
    photoViewMore.classList.add("d-none");
    photoViewLess.classList.remove("d-none");
  }

  /* ================= INITIAL STATE ================= */
  showPreviewPhotos();
  photoGallery.classList.remove("d-none");
  videoGallery.classList.add("d-none");

  /* ================= TAB SWITCH ================= */

  photoTab.onclick = () => {
    photoTab.classList.add("active");
    videoTab.classList.remove("active");

    photoGallery.classList.remove("d-none");
    videoGallery.classList.add("d-none");

    showPreviewPhotos();
  };

  videoTab.onclick = () => {
    videoTab.classList.add("active");
    photoTab.classList.remove("active");

    videoGallery.classList.remove("d-none");
    photoGallery.classList.add("d-none");

    extraVideos.forEach(v => v.classList.add("d-none"));
    videoViewMore.classList.remove("d-none");
    videoViewLess.classList.add("d-none");
  };

  /* ================= PHOTO VIEW MORE / LESS ================= */

  photoViewMore.onclick = () => {
    showGalleryPage("photo");
  };

  photoViewLess.onclick = () => {
    showPreviewPhotos();
    scrollToGallery();
  };

  /* ================= VIDEO VIEW MORE / LESS ================= */

  videoViewMore.onclick = () => {
    showGalleryPage("video");
  };

  videoViewLess.onclick = () => {
    extraVideos.forEach(v => v.classList.add("d-none"));
    videoViewLess.classList.add("d-none");
    videoViewMore.classList.remove("d-none");
    scrollToGallery();
  };
};

/* ===============================
   FULL GALLERY PAGE HANDLER
================================ */

window.showGalleryPage = function (type) {

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
  const extraVideos = document.querySelectorAll(".extra-video");

  if (type === "photo") {
    photoTab.classList.add("active");
    videoTab.classList.remove("active");

    photoGallery.classList.remove("d-none");
    videoGallery.classList.add("d-none");

    galleryItems.innerHTML = "";
    [
      "gallery_1.jpg",
      "gallery_2.jpg",
      "gallery_3.jpg",
      "gallery_4.jpg",
      "gallery_5.jpeg",
      "gallery_1.jpg",
      "gallery_2.jpg",
      "gallery_3.jpg"
    ].forEach(img => {
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

  if (type === "video") {
    videoTab.classList.add("active");
    photoTab.classList.remove("active");

    videoGallery.classList.remove("d-none");
    photoGallery.classList.add("d-none");

    extraVideos.forEach(v => v.classList.remove("d-none"));

    videoViewMore.classList.add("d-none");
    videoViewLess.classList.remove("d-none");
  }

  scrollToGallery();
};

/* ===============================
   SCROLL
================================ */

function scrollToGallery() {
  document.getElementById("gallery")
    .scrollIntoView({ behavior: "smooth", block: "start" });
}

document.addEventListener("DOMContentLoaded", () => {
  initGallery();
});
