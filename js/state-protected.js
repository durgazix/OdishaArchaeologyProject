document.addEventListener("DOMContentLoaded", () => {
  const tableBody = document.getElementById("monumentsTableBody");

  if (!tableBody) return;

  let allMonuments = [];
  let displayedCount = 20;
  const incrementCount = 20;

  // Function to read Excel file
  async function loadMonumentsData() {
    try {
      const response = await fetch("assets/state-monuments/state_protected_monuments.xlsx");
      const arrayBuffer = await response.arrayBuffer();
      
      // Parse Excel using SheetJS
      const workbook = XLSX.read(arrayBuffer, { type: "array" });
      const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
      const jsonData = XLSX.utils.sheet_to_json(firstSheet);

      // Transform data
      allMonuments = jsonData.map((row, index) => ({
        sl: index + 1,
        district: row["District"] || row["DISTRICT"] || "",
        name: row["Monument Name"] || row["NAME"] || row["Monument"] || "",
        location: row["Location"] || row["LOCATION"] || row["Place"] || "",
        period: row["Period"] || row["PERIOD"] || row["Age"] || "",
        remarks: row["Remarks"] || row["REMARKS"] || row["Status"] || ""
      }));

      renderMonuments();

    } catch (error) {
      console.error("Error loading monuments data:", error);
      tableBody.innerHTML = `
        <tr>
          <td colspan="6" class="loading-message">
            Failed to load monuments data. Please try refreshing the page.
          </td>
        </tr>
      `;
    }
  }

  // Function to render monuments
  function renderMonuments() {
    const monumentsToShow = allMonuments.slice(0, displayedCount);
    
    tableBody.innerHTML = monumentsToShow.map(monument => `
      <tr>
        <td>${monument.sl}</td>
        <td>${monument.district}</td>
        <td>${monument.name}</td>
        <td>${monument.location}</td>
        <td>${monument.period}</td>
        <td>${monument.remarks}</td>
      </tr>
    `).join("");

    // Add View More button if there are more monuments to show
    if (displayedCount < allMonuments.length) {
      const viewMoreRow = document.createElement("tr");
      viewMoreRow.className = "view-more-row";
      viewMoreRow.innerHTML = `
        <td colspan="6" class="view-more-cell">
          <button id="viewMoreBtn" class="view-more-btn">
            View More <i class="fa fa-chevron-down"></i>
          </button>
          <span class="monuments-count">(Showing ${displayedCount} of ${allMonuments.length} monuments)</span>
        </td>
      `;
      tableBody.appendChild(viewMoreRow);

      // Add event listener to View More button
      const viewMoreBtn = document.getElementById("viewMoreBtn");
      viewMoreBtn.addEventListener("click", () => {
        displayedCount += incrementCount;
        renderMonuments();
      });
    } else if (allMonuments.length > incrementCount) {
      // Show "All monuments displayed" message
      const allDisplayedRow = document.createElement("tr");
      allDisplayedRow.className = "view-more-row";
      allDisplayedRow.innerHTML = `
        <td colspan="6" class="view-more-cell">
          <span class="monuments-count">All ${allMonuments.length} monuments displayed</span>
        </td>
      `;
      tableBody.appendChild(allDisplayedRow);
    }
  }

  // Initialize
  loadMonumentsData();
});