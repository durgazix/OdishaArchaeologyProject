const pdfFiles = {
  act1: {
    title: "Odisha Development Authorities (Planning and Building Standards) Act & Rules 2020",
    file: "assets/act-rule-pdfs/Act&Rules_1.pdf"
  },
  act2: {
    title: "Orissa Ancient Monuments Preservation Rule, 1958",
    file: "assets/act-rule-pdfs/Act&Rules_1.pdf"
  },
  act3: {
    title: "Orissa Ancient Monuments Preservation Act, 1956",
    file: "assets/act-rule-pdfs/Act&Rules_1.pdf"
  }
};

window.openPDFViewer = function (id) {
  const modal = document.getElementById("pdfViewerModal");
  document.getElementById("pdfTitle").textContent = pdfFiles[id].title;
  document.getElementById("pdfFrame").src = pdfFiles[id].file;
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
};

window.closePDFViewer = function () {
  document.getElementById("pdfViewerModal").classList.remove("active");
  document.getElementById("pdfFrame").src = "";
  document.body.style.overflow = "";
};

window.downloadPDF = function (id) {
  const a = document.createElement("a");
  a.href = pdfFiles[id].file;
  a.download = pdfFiles[id].file.split("/").pop();
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};
