document.addEventListener("DOMContentLoaded", function () {
  const visitorCountElement = document.querySelector(".visitor-count");

  if (visitorCountElement) {
    let visitorCount = localStorage.getItem("visitorCount");

    visitorCount = visitorCount ? parseInt(visitorCount) : 0;
    visitorCount++;

    localStorage.setItem("visitorCount", visitorCount);
    visitorCountElement.textContent = visitorCount;
  }
});
