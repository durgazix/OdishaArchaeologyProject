/* ===== MONUMENTS - PDF VIEWER ===== */

// Open PDF Viewer
function openPDFViewer(pdfPath, pdfTitle) {
  const modal = document.getElementById("pdfViewerModal");
  const iframe = document.getElementById("pdfViewerFrame");
  const title = document.getElementById("pdfViewerTitle");
  const downloadBtn = document.getElementById("pdfDownloadBtn");

  if (!modal || !iframe || !title || !downloadBtn) return;

  // Set PDF source and title
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

  if (!modal || !iframe) return;

  iframe.src = "";
  modal.classList.remove("active");
  document.body.style.overflow = "";
}

/* ===== MODAL EVENTS ===== */
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("pdfViewerModal");

  // Close on background click
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        closePDFViewer();
      }
    });
  }

  // Close on ESC key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal && modal.classList.contains("active")) {
      closePDFViewer();
    }
  });
});

/* ===== NAVIGATION FUNCTION ===== */
/* Called from navbar.js */
window.showMonumentsPage = function () {
  // Hide all sections
  hideAllSections();

  // Show monuments section
  const monumentsSection = document.getElementById("monuments");
  if (monumentsSection) {
    monumentsSection.style.display = "block";
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
