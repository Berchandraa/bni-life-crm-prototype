const monthLabel = document.querySelector("#month-label");
const firstWeekGrid = document.querySelector("#first-week-grid");
const prevMonthButton = document.querySelector("#prev-month");
const nextMonthButton = document.querySelector("#next-month");

let currentDate = new Date(2026, 2, 1);

function renderCalendarPreview() {
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const firstDay = new Date(year, month, 1).getDay();

  monthLabel.textContent = currentDate.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  firstWeekGrid.replaceChildren();

  for (let column = 0; column < 7; column += 1) {
    const cell = document.createElement("div");
    cell.className = "day-cell";

    if (column === firstDay) {
      cell.classList.add("day-cell--muted");
      cell.textContent = "1";
      cell.setAttribute("aria-label", `${monthLabel.textContent} 1`);
    } else {
      cell.setAttribute("aria-hidden", "true");
    }

    firstWeekGrid.appendChild(cell);
  }
}

prevMonthButton.addEventListener("click", () => {
  currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1);
  renderCalendarPreview();
});

nextMonthButton.addEventListener("click", () => {
  currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1);
  renderCalendarPreview();
});

renderCalendarPreview();
