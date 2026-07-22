import { formatDate } from "../lib/cycleCalculations.js";
import { DEFAULT_SETTINGS } from "../lib/storage.js";
import { NUTRITION_STYLE_OPTIONS } from "../content/nutritionStyles.js";
import { SPORT_OPTIONS } from "../content/sportOptions.js";

export function renderOnboarding(ui) {
  const today = formatDate(new Date());
  const { nutritionStyle, preferredSports } = ui.onboardingPrefs;

  return `
    <div class="onboarding">
      <div class="card">
        <h2>Willkommen bei WoCycle</h2>
        <p class="intro">
          Trage den Start deiner letzten Periode ein, um loszulegen. Deine Daten bleiben
          ausschließlich lokal auf diesem Gerät gespeichert – es gibt kein Konto und keinen Server.
        </p>
        <form data-form="onboarding">
          <div class="field">
            <label for="ob-period-start">Letzter Periodenbeginn</label>
            <input type="date" id="ob-period-start" name="periodStart" value="${today}" max="${today}" required />
          </div>
          <div class="field-row">
            <div class="field">
              <label for="ob-period-length">Periodenlänge (Tage)</label>
              <input type="number" id="ob-period-length" name="periodLength" min="1" max="14" value="${DEFAULT_SETTINGS.periodLength}" required />
            </div>
            <div class="field">
              <label for="ob-cycle-length">Übliche Zykluslänge (Tage)</label>
              <input type="number" id="ob-cycle-length" name="cycleLength" min="15" max="60" value="${DEFAULT_SETTINGS.defaultCycleLength}" required />
            </div>
          </div>

          <div class="onboarding-section">
            <h3>Dein Ernährungsstil</h3>
            <p class="section-hint">Optional – damit Ernährungstipps besser zu dir passen.</p>
            <div class="pill-group">
              ${NUTRITION_STYLE_OPTIONS.map(
                (opt) => `
                <button type="button" class="pill-btn ${opt.id === nutritionStyle ? "active" : ""}"
                  data-action="set-onboarding-nutrition" data-style="${opt.id}">${opt.label}</button>`
              ).join("")}
            </div>
          </div>

          <div class="onboarding-section">
            <h3>Deine bevorzugten Sportarten</h3>
            <p class="section-hint">Optional, Mehrfachauswahl möglich – für konkrete Trainingsvorschläge.</p>
            <div class="pill-group">
              ${SPORT_OPTIONS.map(
                (opt) => `
                <button type="button" class="pill-btn ${preferredSports.includes(opt.id) ? "active" : ""}"
                  data-action="toggle-onboarding-sport" data-sport="${opt.id}">${opt.label}</button>`
              ).join("")}
            </div>
          </div>

          <button type="submit" class="btn" style="width:100%;margin-top:8px">Los geht's</button>
        </form>
      </div>
    </div>
  `;
}

export function attachOnboarding(root, dispatch) {
  const form = root.querySelector('[data-form="onboarding"]');
  if (!form) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(form);
    dispatch({
      type: "ONBOARD",
      payload: {
        periodStart: data.get("periodStart"),
        periodLength: Number(data.get("periodLength")),
        cycleLength: Number(data.get("cycleLength")),
      },
    });
  });
}
