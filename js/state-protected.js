document.addEventListener("DOMContentLoaded", () => {
  const tableBody = document.getElementById("monumentsTableBody");
  if (!tableBody) return;

  let allMonuments = [];
  let displayedCount = 20;
  const incrementCount = 20;

  async function loadMonumentsData() {
    try {
      const response = await fetch("assets/state-monuments/state_protected_monuments.xlsx");
      const buffer = await response.arrayBuffer();

      const workbook = XLSX.read(buffer, { type: "array" });
      const sheet = workbook.Sheets[workbook.SheetNames[0]];
      const data = XLSX.utils.sheet_to_json(sheet);

      allMonuments = data.map((row, index) => ({
        sl: index + 1,
        district: row["District"] || "",
        name: row["Monument Name"] || "",
        location: row["Location"] || "",
        period: row["Period"] || "",
        remarks: row["Remarks"] || "State Protected"
      }));

      renderMonuments();
    } catch (err) {
      console.error(err);
      tableBody.innerHTML = `
        <tr>
          <td colspan="6" class="loading-message">
            Failed to load monuments data.
          </td>
        </tr>
      `;
    }
  }

  function renderMonuments() {
    tableBody.innerHTML = "";

    const slice = allMonuments.slice(0, displayedCount);

    slice.forEach(m => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${m.sl}</td>
        <td>${m.district}</td>
        <td>${m.name}</td>
        <td>${m.location}</td>
        <td>${m.period}</td>
        <td>${m.remarks}</td>
      `;
      tableBody.appendChild(row);
    });

    if (displayedCount < allMonuments.length) {
      const row = document.createElement("tr");
      row.className = "view-more-row";
      row.innerHTML = `
        <td colspan="6" class="view-more-cell">
          <button class="view-more-btn" id="viewMoreBtn">
            View More
          </button>
          <span class="monuments-count">
            Showing ${displayedCount} of ${allMonuments.length}
          </span>
        </td>
      `;
      tableBody.appendChild(row);

      document.getElementById("viewMoreBtn").onclick = () => {
        displayedCount += incrementCount;
        renderMonuments();
      };
    }
  }

  loadMonumentsData();
});
