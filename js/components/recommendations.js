import { PHASES } from "../lib/cycleCalculations.js";
import { PHASE_CONTENT, DISCLAIMER } from "../content/recommendations.js";
import { NUTRITION_STYLE_TIPS } from "../content/nutritionStyles.js";
import { SPORT_OPTIONS, SPORT_SUGGESTIONS } from "../content/sportOptions.js";

const PHASE_ORDER = [PHASES.MENSTRUATION, PHASES.FOLLIKELPHASE, PHASES.OVULATION, PHASES.LUTEALPHASE];
const SPORT_LABELS = Object.fromEntries(SPORT_OPTIONS.map((s) => [s.id, s.label]));

function renderTipList(items) {
  return `<ul>${items
    .map((item) => `<li class="${item.personalized ? "personalized" : ""}">${item.text}</li>`)
    .join("")}</ul>`;
}

export function renderRecommendations(state, ui) {
  const activePhase = ui.recPhase;
  const content = PHASE_CONTENT[activePhase];
  const { nutritionStyle, preferredSports } = state.preferences;

  const ernaehrungItems = content.ernaehrung.map((text) => ({ text, personalized: false }));
  if (nutritionStyle && nutritionStyle !== "keine_angabe") {
    const tip = NUTRITION_STYLE_TIPS[activePhase][nutritionStyle];
    if (tip) ernaehrungItems.push({ text: tip, personalized: true });
  }

  const sportItems =
    preferredSports && preferredSports.length > 0
      ? preferredSports.map((sportId) => ({
          text: `<strong>${SPORT_LABELS[sportId] || sportId}:</strong> ${SPORT_SUGGESTIONS[sportId]?.[activePhase] || ""}`,
          personalized: true,
        }))
      : content.sport.map((text) => ({ text, personalized: false }));

  return `
    <div class="card">
      <h2>Empfehlungen</h2>
      <div class="phase-picker">
        ${PHASE_ORDER.map(
          (p) => `
          <button data-action="select-rec-phase" data-phase="${p}" class="${p === activePhase ? `active ${p}` : ""}">
            ${PHASE_CONTENT[p].emoji} ${PHASE_CONTENT[p].label}
          </button>`
        ).join("")}
      </div>

      <p style="font-size:14px;line-height:1.5;color:var(--color-text-muted);margin-top:0;font-weight:400">${content.summary}</p>

      <div class="rec-section">
        <h3>🏃 Sport &amp; Bewegung</h3>
        ${renderTipList(sportItems)}
      </div>
      <div class="rec-section">
        <h3>🥗 Ernährung</h3>
        ${renderTipList(ernaehrungItems)}
      </div>
      <div class="rec-section">
        <h3>💬 Soziales &amp; Kontakte</h3>
        ${renderTipList(content.soziales.map((text) => ({ text, personalized: false })))}
      </div>

      <div class="disclaimer">${DISCLAIMER}</div>
    </div>
  `;
}
