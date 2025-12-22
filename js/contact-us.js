// Handle contact form submission
document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contactForm");
  
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      
      // Get form values
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const subject = document.getElementById("subject").value;
      const contactNo = document.getElementById("contactNo").value;
      const message = document.getElementById("message").value;
      
      // Basic validation
      if (!name || !email || !contactNo) {
        alert("Please fill in all required fields.");
        return;
      }
      
      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return;
      }
      
      // Here you would typically send the form data to a server
      // For now, we'll just show a success message
      alert("Thank you for your message! We will get back to you soon.");
      
      // Reset form
      contactForm.reset();
    });
  }

  // Handle map link click - redirect to map app
  const viewLargerMapLink = document.getElementById("viewLargerMapLink");
  
  if (viewLargerMapLink) {
    viewLargerMapLink.addEventListener("click", function (e) {
      // The link already has target="_blank" and href to Google Maps
      // This will open in a new tab/window, or redirect to map app on mobile
      // Additional functionality can be added here if needed
    });
  }
});

