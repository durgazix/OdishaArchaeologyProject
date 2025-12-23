/* ===== CENTRAL PROTECTED MONUMENTS - PDF VIEWER ===== */

// Open PDF Viewer
function openPDFViewer(pdfPath, pdfTitle) {
  const modal = document.getElementById("pdfViewerModal");
  const iframe = document.getElementById("pdfViewerFrame");
  const title = document.getElementById("pdfViewerTitle");
  const downloadBtn = document.getElementById("pdfDownloadBtn");

  // Set the PDF path and title
  iframe.src = pdfPath;
  title.textContent = pdfTitle;
  downloadBtn.href = pdfPath;
  downloadBtn.download = pdfTitle + ".pdf";

  // Show modal
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

// Close PDF Viewer
function closePDFViewer() {
  const modal = document.getElementById("pdfViewerModal");
  const iframe = document.getElementById("pdfViewerFrame");

  // Clear iframe source
  iframe.src = "";

  // Hide modal
  modal.classList.remove("active");
  document.body.style.overflow = "";
}

// Close on background click
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("pdfViewerModal");
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        closePDFViewer();
      }
    });
  }

  // Close on ESC key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("active")) {
      closePDFViewer();
    }
  });
});

/* ===== NAVIGATION FUNCTION ===== */
// This function will be called from navbar.js
window.showMonumentsCentralPage = function () {
  // Hide all sections first
  hideAllSections();

  // Show only monuments-central section
  const monumentsCentralSection = document.getElementById("monuments-central");
  if (monumentsCentralSection) {
    monumentsCentralSection.style.display = "block";
  }

  // Show footer
  const footerSection = document.getElementById("footer");
  if (footerSection) {
    footerSection.style.display = "block";
  }

  // Scroll to top
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};