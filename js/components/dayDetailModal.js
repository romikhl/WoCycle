import { getPhaseForDate, parseDate, formatDate } from "../lib/cycleCalculations.js";
import { PHASE_CONTENT } from "../content/recommendations.js";

const DATE_FMT = new Intl.DateTimeFormat("de-DE", { weekday: "long", day: "numeric", month: "long", year: "numeric" });

export function renderDayDetailModal(state, ui) {
  if (!ui.selectedDate) return "";
  const date = parseDate(ui.selectedDate);
  const info = state.entries.length ? getPhaseForDate(date, state.entries, state.settings) : null;
  const existingEntry = state.entries.find((e) => e.periodStart === ui.selectedDate);

  return `
    <div class="modal-backdrop">
      <div class="modal">
        <h2>${DATE_FMT.format(date)}</h2>
        ${
          info
            ? `
          <span class="phase-badge ${info.phase}">${PHASE_CONTENT[info.phase].emoji} ${PHASE_CONTENT[info.phase].label}</span>
          <p class="note" style="margin-top:10px">Zyklustag ${info.dayInCycle} von ca. ${info.cycleLength}</p>
        `
            : `<p class="note">Für diesen Tag liegt noch keine Phase vor, da noch kein Zyklus erfasst ist.</p>`
        }

        ${
          existingEntry
            ? `<p class="note">Für diesen Tag ist bereits ein Periodenbeginn erfasst.</p>`
            : ""
        }

        <div class="modal-actions">
          <button type="button" class="btn ghost" data-action="close-day-detail">Schließen</button>
          ${
            existingEntry
              ? `<button type="button" class="btn" data-action="edit-entry" data-id="${existingEntry.id}">Bearbeiten</button>`
              : `<button type="button" class="btn" data-action="quick-log-period" data-date="${ui.selectedDate}">Periode hier eintragen</button>`
          }
        </div>
      </div>
    </div>
  `;
}
