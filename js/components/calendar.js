import { getPhaseForDate, formatDate, startOfDay } from "../lib/cycleCalculations.js";
import { PHASE_CONTENT } from "../content/recommendations.js";

const MONTH_NAMES = [
  "Januar", "Februar", "März", "April", "Mai", "Juni",
  "Juli", "August", "September", "Oktober", "November", "Dezember",
];
const WEEKDAYS = ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"];

function getMonthCells(year, month) {
  const firstDay = new Date(year, month, 1);
  const startWeekday = (firstDay.getDay() + 6) % 7;
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const cells = [];
  for (let i = 0; i < startWeekday; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(new Date(year, month, d));
  while (cells.length % 7 !== 0) cells.push(null);
  return cells;
}

export function renderCalendar(state, ui) {
  const { year, month } = ui.calendarMonth;
  const cells = getMonthCells(year, month);
  const today = startOfDay(new Date());
  const todayStr = formatDate(today);

  const dayCells = cells
    .map((date) => {
      if (!date) return `<div class="calendar-day empty"></div>`;
      const info = state.entries.length ? getPhaseForDate(date, state.entries, state.settings) : null;
      const isToday = formatDate(date) === todayStr;
      const predicted = info && info.isProjectedPeriod;
      const dotClass = info ? `phase-dot ${info.phase} ${predicted ? "predicted" : ""}` : "phase-dot";
      return `<div class="calendar-day ${isToday ? "today" : ""}">
        <span class="daynum">${date.getDate()}</span>
        <span class="${dotClass}"></span>
      </div>`;
    })
    .join("");

  return `
    <div class="card">
      <div class="calendar-nav">
        <button data-action="calendar-prev" aria-label="Vorheriger Monat">‹</button>
        <span class="month-label">${MONTH_NAMES[month]} ${year}</span>
        <button data-action="calendar-next" aria-label="Nächster Monat">›</button>
      </div>
      <div class="calendar-grid">
        ${WEEKDAYS.map((w) => `<div class="calendar-weekday">${w}</div>`).join("")}
        ${dayCells}
      </div>
      <div class="legend">
        ${Object.values(PHASE_CONTENT)
          .map(
            (c, i) =>
              `<span class="legend-item"><span class="legend-dot ${Object.keys(PHASE_CONTENT)[i]}"></span>${c.label}</span>`
          )
          .join("")}
        <span class="legend-item">○ Ring = Prognose</span>
      </div>
    </div>
  `;
}
