/* ===== MONUMENT IMAGE VIEWER ===== */

const monumentImages = [
  "assets/central-monuments/img_1.jpg",
  "assets/central-monuments/img_2.jpg",
  "assets/central-monuments/img_3.jpg",
  "assets/central-monuments/img_4.jpg",
  "assets/central-monuments/img_5.jpg",
  "assets/central-monuments/img_6.jpg",
  "assets/central-monuments/img_7.jpg",
  "assets/central-monuments/img_8.jpg"
];

let currentIndex = 0;

function openImageViewer(index) {
  currentIndex = index;
  updateViewer();
  document.getElementById("monumentsViewer").classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeImageViewer() {
  document.getElementById("monumentsViewer").classList.remove("active");
  document.body.style.overflow = "";
}

function nextImage() {
  currentIndex = (currentIndex + 1) % monumentImages.length;
  updateViewer();
}

function prevImage() {
  currentIndex =
    (currentIndex - 1 + monumentImages.length) % monumentImages.length;
  updateViewer();
}

function updateViewer() {
  document.getElementById("viewerImage").src = monumentImages[currentIndex];
  document.getElementById("viewerCurrent").textContent = currentIndex + 1;
  document.getElementById("viewerTotal").textContent = monumentImages.length;
}

/* ===== NAVIGATION ===== */
window.showMonumentsCentralPage = function () {
  hideAllSections();
  document.getElementById("monuments-central").style.display = "block";
  document.getElementById("footer").style.display = "block";
  window.scrollTo({ top: 0, behavior: "smooth" });
};
