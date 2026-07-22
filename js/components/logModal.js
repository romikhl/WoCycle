import { formatDate } from "../lib/cycleCalculations.js";

export function renderLogModal(state, ui) {
  if (!ui.logModalOpen) return "";
  const editingEntry = ui.editingEntryId ? state.entries.find((e) => e.id === ui.editingEntryId) : null;
  const today = formatDate(new Date());

  return `
    <div class="modal-backdrop">
      <div class="modal" data-stop-propagation>
        <h2>${editingEntry ? "Eintrag bearbeiten" : "Periode eintragen"}</h2>
        <form data-form="log-entry">
          <div class="field">
            <label for="log-period-start">Periodenbeginn</label>
            <input type="date" id="log-period-start" name="periodStart" max="${today}"
              value="${editingEntry ? editingEntry.periodStart : today}" required />
          </div>
          <div class="field">
            <label for="log-period-end">Periodenende (optional)</label>
            <input type="date" id="log-period-end" name="periodEnd" max="${today}"
              value="${editingEntry && editingEntry.periodEnd ? editingEntry.periodEnd : ""}" />
          </div>
          <div class="modal-actions">
            <button type="button" class="btn ghost" data-action="close-log-modal">Abbrechen</button>
            <button type="submit" class="btn">Speichern</button>
          </div>
        </form>
      </div>
    </div>
  `;
}
