
document.getElementById("search-btn").addEventListener("click", function () {
    const searchInput = document.getElementById("search-name");
    const searchValue = searchInput.value.trim();
    updateTable(searchValue);
});

function updateTable(searchValue) {
              let table = document.querySelector("#students-table tbody");
              table.innerHTML = "";
              
              const matching = students.filter(student => student.name.includes(searchValue));
              
              if (matching.length === 0) {
                  const noRow = document.createElement("tr");
                  const noCell = document.createElement("td");
                  noCell.textContent = "No students were found";
                  noCell.colSpan = 2;
                  noRow.appendChild(noResultsCell);
                  table.appendChild(noResultsRow);
              } else {
                  matching.forEach(student => {
                      const row = document.createElement("tr");
                      const sectionCell = document.createElement("td");
                      sectionCell.textContent = student.section;
                      const nameCell = document.createElement("td");
                      nameCell.textContent = student.name;
                      row.appendChild(sectionCell);
                      row.appendChild(nameCell);
                      tableBody.appendChild(row);
                  });
              }
          }
  
         
  
          updateTable("");