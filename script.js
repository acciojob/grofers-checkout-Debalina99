const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

 const getSum = () => {
      const priceCells = document.querySelectorAll(".price");
      let total = 0;

      priceCells.forEach(cell => {
        total += parseFloat(cell.textContent);
      });

      const table = document.querySelector("table");
      const newRow = document.createElement("tr");
      const newCell = document.createElement("td");

      newCell.setAttribute("colspan", "2");
      newCell.textContent = `Total Price: Rs ${total}`;
      newCell.style.fontWeight = "bold";
      newCell.style.textAlign = "right";

      newRow.appendChild(newCell);
      table.appendChild(newRow);
      getSumBtn.disabled = true;
    };


getSumBtn.addEventListener("click", getSum);

