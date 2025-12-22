document.addEventListener("DOMContentLoaded", () => {
  // NEW RTI DATA TO APPEND
  const newRtiData = [
    {
      sl: "4.",
      rti: "Right to Information Act, 2005",
      officer: "Mr. Satyabrata Nayak",
      designation: "Assistant Public Information Officer",
      address: "Odisha State Archaeology, Bhubaneswar",
      contact: "0674-2390456",
    },
    {
      sl: "5.",
      rti: "Odisha Transparency in Public Service Act, 2012",
      officer: "Ms. Anjali Mishra",
      designation: "Public Information Officer",
      address: "Directorate of Archaeology, Odisha",
      contact: "0674-2390789",
    },
  ];

  // Select existing table body (DO NOT CLEAR IT)
  const tableBody = document.querySelector(".acts-table tbody");

  if (!tableBody) return;

  // APPEND rows only
  newRtiData.forEach((item) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${item.sl}</td>
      <td>${item.rti}</td>
      <td>${item.officer}</td>
      <td>${item.designation}</td>
      <td>${item.address}</td>
      <td>${item.contact}</td>
    `;

    tableBody.appendChild(row);
  });
});
