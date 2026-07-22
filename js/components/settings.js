import { parseDate } from "../lib/cycleCalculations.js";
import { NUTRITION_STYLE_OPTIONS } from "../content/nutritionStyles.js";
import { SPORT_OPTIONS } from "../content/sportOptions.js";

const DATE_FMT = new Intl.DateTimeFormat("de-DE", { day: "2-digit", month: "2-digit", year: "numeric" });

export function renderSettingsView(state) {
  const sortedEntries = [...state.entries].sort((a, b) => parseDate(b.periodStart) - parseDate(a.periodStart));

  return `
    <div class="card">
      <div class="section-title-row">
        <h2>Deine Einträge</h2>
        <button class="btn secondary" data-action="open-log-modal">+ Neu</button>
      </div>
      ${
        sortedEntries.length === 0
          ? `<p class="note">Noch keine Einträge vorhanden.</p>`
          : `<ul class="entry-list">
              ${sortedEntries
                .map(
                  (e) => `
                <li>
                  <span>${DATE_FMT.format(parseDate(e.periodStart))}${e.periodEnd ? ` – ${DATE_FMT.format(parseDate(e.periodEnd))}` : ""}</span>
                  <span>
                    <button class="icon-btn" data-action="edit-entry" data-id="${e.id}">Bearbeiten</button>
                    <button class="icon-btn" data-action="delete-entry" data-id="${e.id}">Löschen</button>
                  </span>
                </li>`
                )
                .join("")}
            </ul>`
      }
    </div>

    <div class="card">
      <h2>Deine Vorlieben</h2>
      <p class="note" style="margin-top:0">Beeinflusst die personalisierten Empfehlungen auf der Heute-Seite.</p>
      <div class="onboarding-section" style="margin-top:12px;padding-top:0;border-top:none">
        <h3>Ernährungsstil</h3>
        <div class="pill-group">
          ${NUTRITION_STYLE_OPTIONS.map(
            (opt) => `
            <button type="button" class="pill-btn ${opt.id === state.preferences.nutritionStyle ? "active" : ""}"
              data-action="set-preference-nutrition" data-style="${opt.id}">${opt.label}</button>`
          ).join("")}
        </div>
      </div>
      <div class="onboarding-section" style="padding-top:14px">
        <h3>Bevorzugte Sportarten</h3>
        <div class="pill-group">
          ${SPORT_OPTIONS.map(
            (opt) => `
            <button type="button" class="pill-btn ${state.preferences.preferredSports.includes(opt.id) ? "active" : ""}"
              data-action="toggle-preference-sport" data-sport="${opt.id}">${opt.label}</button>`
          ).join("")}
        </div>
      </div>
    </div>

    <div class="card">
      <h2>Einstellungen</h2>
      <form data-form="settings">
        <div class="field">
          <label for="set-period-length">Periodenlänge (Tage)</label>
          <input type="number" id="set-period-length" name="periodLength" min="1" max="14" value="${state.settings.periodLength}" required />
        </div>
        <div class="field">
          <label for="set-luteal-length">Lutealphasenlänge (Tage)</label>
          <input type="number" id="set-luteal-length" name="lutealLength" min="8" max="20" value="${state.settings.lutealLength}" required />
        </div>
        <div class="field">
          <label for="set-default-cycle">Standard-Zykluslänge (Tage, falls zu wenig Daten)</label>
          <input type="number" id="set-default-cycle" name="defaultCycleLength" min="15" max="60" value="${state.settings.defaultCycleLength}" required />
        </div>
        <button type="submit" class="btn">Speichern</button>
      </form>
    </div>

    <div class="card">
      <h2>Datenschutz</h2>
      <p style="font-size:14px;line-height:1.5;color:var(--color-text-muted)">
        Alle Daten werden ausschließlich lokal in deinem Browser gespeichert (localStorage). Es gibt kein
        Konto, keinen Server und keine Synchronisierung. Wenn du diese App mit Freundinnen teilst, sehen sie
        nur die App selbst – nicht deine Daten. Jede Person hat ihre eigenen, privaten Einträge auf ihrem
        eigenen Gerät.
      </p>
    </div>
  `;
}
