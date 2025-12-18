// Dynamic Visitor Counter
document.addEventListener("DOMContentLoaded", function () {
  const visitorCountElement = document.querySelector(".visitor-count");
  
  if (visitorCountElement) {
    // Get current visitor count from localStorage
    let visitorCount = localStorage.getItem("visitorCount");
    
    // If no count exists, initialize it
    if (!visitorCount) {
      visitorCount = 0;
    } else {
      visitorCount = parseInt(visitorCount);
    }
    
    // Increment visitor count
    visitorCount++;
    
    // Save updated count to localStorage
    localStorage.setItem("visitorCount", visitorCount);
    
    // Update the display
    visitorCountElement.textContent = visitorCount;
  }
});
