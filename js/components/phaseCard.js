import { getCurrentCycleInfo, formatDate } from "../lib/cycleCalculations.js";
import { PHASE_CONTENT } from "../content/recommendations.js";

const WEEKDAY_MONTH_FMT = new Intl.DateTimeFormat("de-DE", { weekday: "long", day: "numeric", month: "long" });

export function renderPhaseCard(state) {
  const info = getCurrentCycleInfo(state.entries, state.settings);

  if (!info.phase) {
    return `
      <div class="card">
        <h2>Noch keine Periode erfasst</h2>
        <p style="font-size:14px;line-height:1.5;color:var(--color-text-muted);font-weight:400;margin-top:0">
          Trag deinen letzten Periodenbeginn ein, damit dir WoCycle deine aktuelle Phase, eine Prognose
          und passende Empfehlungen zeigen kann. Tipp: Du kannst dazu auch direkt auf einen Tag im
          Kalender unten tippen.
        </p>
        <button class="btn" data-action="open-log-modal">Periode eintragen</button>
      </div>
    `;
  }

  const content = PHASE_CONTENT[info.phase];
  const daysText =
    info.daysUntilNextPeriod === null
      ? ""
      : info.daysUntilNextPeriod === 0
      ? "heute erwartet"
      : info.daysUntilNextPeriod > 0
      ? `in ${info.daysUntilNextPeriod} Tag${info.daysUntilNextPeriod === 1 ? "" : "en"}`
      : `${Math.abs(info.daysUntilNextPeriod)} Tag${Math.abs(info.daysUntilNextPeriod) === 1 ? "" : "e"} überfällig`;

  return `
    <div class="card">
      <div class="phase-header">
        <h2>Aktuelle Phase</h2>
        <span class="phase-badge ${info.phase}">${content.emoji} ${content.label}</span>
      </div>
      <p style="margin:0 0 4px;font-size:14px;color:var(--color-text-muted)">
        Zyklustag ${info.dayInCycle} von ca. ${info.cycleLength}
      </p>
      <p style="font-size:14px;line-height:1.5;margin:8px 0 0">${content.summary}</p>

      <div class="prediction-row">
        <div class="prediction-item">
          <div class="label">Nächste Periode</div>
          <div class="value">${info.nextPeriodStart ? WEEKDAY_MONTH_FMT.format(info.nextPeriodStart) : "–"}</div>
          ${daysText ? `<div class="note">${daysText}</div>` : ""}
        </div>
      </div>

      ${
        !info.hasEnoughData
          ? `<p class="note">Prognose basiert noch auf Standardwerten. Sie wird genauer, je mehr Zyklen du einträgst.</p>`
          : ""
      }

      <div style="margin-top:16px">
        <button class="btn secondary" data-action="open-log-modal">+ Periode eintragen</button>
      </div>
    </div>
  `;
}
