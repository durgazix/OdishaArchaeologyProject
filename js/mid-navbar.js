function openVirtualTour() {
  document.getElementById("virtualModal").style.display = "block";
}

function closeVirtualTour() {
  const modal = document.getElementById("virtualModal");
  modal.style.display = "none";
  modal.querySelector("video").pause();
}

function closeVirtualTour() {
  const modal = document.getElementById("virtualModal");
  const video = document.getElementById("virtualTourVideo");
  
  modal.style.display = "none";
  
  // Pause and reset video
  if (video) {
    video.pause();
    video.currentTime = 0;
  }
}

// Optional: Close modal when clicking outside the video
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("virtualModal");
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        closeVirtualTour();
      }
    });
  }
});