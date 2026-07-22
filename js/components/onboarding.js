import { NUTRITION_STYLE_OPTIONS } from "../content/nutritionStyles.js";
import { SPORT_OPTIONS } from "../content/sportOptions.js";
import { SOCIAL_STYLE_OPTIONS, SELF_CARE_OPTIONS } from "../content/socialStyles.js";

function renderPillGroup(options, activeCheck, action, dataAttr) {
  return `
    <div class="pill-group">
      ${options
        .map(
          (opt) => `
        <button type="button" class="pill-btn ${activeCheck(opt.id) ? "active" : ""}"
          data-action="${action}" data-${dataAttr}="${opt.id}">${opt.label}</button>`
        )
        .join("")}
    </div>
  `;
}

export function renderOnboarding(ui) {
  const { nutritionStyle, preferredSports, socialStyle, selfCareStyle } = ui.onboardingPrefs;

  return `
    <div class="onboarding">
      <div class="card">
        <h2>Willkommen bei WoCycle</h2>
        <p class="intro">
          Ein kurzer Vorlieben-Test, damit deine Empfehlungen wirklich zu dir passen. Deine Angaben
          bleiben ausschließlich lokal auf diesem Gerät gespeichert – es gibt kein Konto und keinen Server.
        </p>

        <div class="onboarding-section" style="border-top:none;margin-top:8px;padding-top:0">
          <h3>Dein Ernährungsstil</h3>
          <p class="section-hint">Optional – damit Ernährungstipps besser zu dir passen.</p>
          ${renderPillGroup(NUTRITION_STYLE_OPTIONS, (id) => id === nutritionStyle, "set-onboarding-nutrition", "style")}
        </div>

        <div class="onboarding-section">
          <h3>Deine bevorzugten Sportarten</h3>
          <p class="section-hint">Optional, Mehrfachauswahl möglich – für konkrete Trainingsvorschläge.</p>
          ${renderPillGroup(SPORT_OPTIONS, (id) => preferredSports.includes(id), "toggle-onboarding-sport", "sport")}
        </div>

        <div class="onboarding-section">
          <h3>Wie lädst du deine Energie am liebsten auf?</h3>
          <p class="section-hint">Optional – beeinflusst die Tipps zu Sozialem &amp; Kontakten.</p>
          ${renderPillGroup(SOCIAL_STYLE_OPTIONS, (id) => id === socialStyle, "set-onboarding-social", "style")}
        </div>

        <div class="onboarding-section">
          <h3>Was hilft dir an anstrengenden Tagen am meisten?</h3>
          <p class="section-hint">Optional – für einen zusätzlichen persönlichen Tipp.</p>
          ${renderPillGroup(SELF_CARE_OPTIONS, (id) => id === selfCareStyle, "set-onboarding-selfcare", "style")}
        </div>

        <button type="button" class="btn" style="width:100%;margin-top:8px" data-action="finish-onboarding">Los geht's</button>
      </div>
    </div>
  `;
}
