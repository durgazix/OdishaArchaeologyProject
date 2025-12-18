function openVirtualTour() {
  document.getElementById("virtualModal").style.display = "block";
}

function closeVirtualTour() {
  const modal = document.getElementById("virtualModal");
  modal.style.display = "none";
  modal.querySelector("video").pause();
}
