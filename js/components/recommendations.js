import { PHASES } from "../lib/cycleCalculations.js";
import { PHASE_CONTENT, DISCLAIMER } from "../content/recommendations.js";
import { NUTRITION_STYLE_TIPS, MEAL_SUGGESTIONS, TIME_OF_DAY_OPTIONS } from "../content/nutritionStyles.js";
import { SPORT_OPTIONS, SPORT_SUGGESTIONS } from "../content/sportOptions.js";
import { SOCIAL_STYLE_TIPS, SELF_CARE_TIPS } from "../content/socialStyles.js";

const PHASE_ORDER = [PHASES.MENSTRUATION, PHASES.FOLLIKELPHASE, PHASES.OVULATION, PHASES.LUTEALPHASE];
const SPORT_LABELS = Object.fromEntries(SPORT_OPTIONS.map((s) => [s.id, s.label]));
const TIME_OF_DAY_LABELS = Object.fromEntries(TIME_OF_DAY_OPTIONS.map((t) => [t.id, t.label]));

function renderTipList(items) {
  return `<ul>${items
    .map((item) => `<li class="${item.personalized ? "personalized" : ""}">${item.text}</li>`)
    .join("")}</ul>`;
}

function renderMealPlan(activePhase, nutritionStyle) {
  const style = nutritionStyle && nutritionStyle !== "keine_angabe" ? nutritionStyle : "omnivor";
  const meals = MEAL_SUGGESTIONS[activePhase];
  return `
    <ul class="meal-plan">
      ${TIME_OF_DAY_OPTIONS.map(
        (t) => `<li><strong>${TIME_OF_DAY_LABELS[t.id]}:</strong> ${meals[t.id][style]}</li>`
      ).join("")}
    </ul>
  `;
}

export function renderRecommendations(state, ui) {
  const activePhase = ui.recPhase;
  const content = PHASE_CONTENT[activePhase];
  const { nutritionStyle, preferredSports, socialStyle, selfCareStyle } = state.preferences;

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

  const sozialesItems = content.soziales.map((text) => ({ text, personalized: false }));
  if (socialStyle && socialStyle !== "keine_angabe") {
    const tip = SOCIAL_STYLE_TIPS[activePhase][socialStyle];
    if (tip) sozialesItems.push({ text: tip, personalized: true });
  }

  const selfCareTip =
    selfCareStyle && selfCareStyle !== "keine_angabe" ? SELF_CARE_TIPS[activePhase][selfCareStyle] : null;

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

      <div class="body-explanation">
        <h3 style="margin-top:0">Was in dieser Phase passiert</h3>
        <p style="margin:0;font-weight:400">${content.bodyExplanation}</p>
      </div>

      <div class="rec-section">
        <h3>🏃 Sport &amp; Bewegung</h3>
        ${renderTipList(sportItems)}
      </div>
      <div class="rec-section">
        <h3>🥗 Ernährung</h3>
        ${renderTipList(ernaehrungItems)}
        <p class="note" style="margin-bottom:6px">Mahlzeiten-Ideen für heute${nutritionStyle && nutritionStyle !== "keine_angabe" ? "" : " (Omnivor als Basis)"}:</p>
        ${renderMealPlan(activePhase, nutritionStyle)}
      </div>
      <div class="rec-section">
        <h3>💬 Soziales &amp; Kontakte</h3>
        ${renderTipList(sozialesItems)}
      </div>

      ${
        selfCareTip
          ? `<div class="rec-section">
              <h3>✨ Extra für dich</h3>
              ${renderTipList([{ text: selfCareTip, personalized: true }])}
            </div>`
          : ""
      }

      <div class="disclaimer">${DISCLAIMER}</div>
    </div>
  `;
}
