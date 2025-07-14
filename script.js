const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  const priceCells = document.querySelectorAll(".price");
  let total = 0;

  priceCells.forEach(cell => {
    const value = parseFloat(cell.textContent.trim());
    if (!isNaN(value)) {
      total += value;
    }
  });

  const table = document.querySelector("table");

  const existingAnsRow = document.querySelector("#ans")?.parentElement?.parentElement;
  if (existingAnsRow) {
    existingAnsRow.remove();
  }

  const newRow = document.createElement("tr");
  const newCell = document.createElement("td");
  newCell.setAttribute("colspan", "2");

  const span = document.createElement("span");
  span.id = "ans";
  span.textContent = total;

  newCell.append("Total Price: Rs ", span);
  newCell.style.fontWeight = "bold";
  newCell.style.textAlign = "right";

  newRow.appendChild(newCell);
  table.appendChild(newRow);

  getSumBtn.disabled = true;
};

getSumBtn.addEventListener("click", getSum);
