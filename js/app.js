import { loadState, saveState } from "./lib/storage.js";
import { parseDate, getCurrentCycleInfo, PHASES } from "./lib/cycleCalculations.js";
import { renderOnboarding } from "./components/onboarding.js";
import { renderPhaseCard } from "./components/phaseCard.js";
import { renderCalendar } from "./components/calendar.js";
import { renderRecommendations } from "./components/recommendations.js";
import { renderSettingsView } from "./components/settings.js";
import { renderLogModal } from "./components/logModal.js";
import { renderDayDetailModal } from "./components/dayDetailModal.js";

const root = document.getElementById("app");

let state = loadState();
let ui = {
  activeTab: "heute",
  calendarMonth: { year: new Date().getFullYear(), month: new Date().getMonth() },
  logModalOpen: false,
  editingEntryId: null,
  selectedDate: null,
  recPhase: null,
  onboardingPrefs: {
    nutritionStyle: "keine_angabe",
    preferredSports: [],
    socialStyle: "keine_angabe",
    selfCareStyle: "keine_angabe",
  },
};

function genId() {
  return typeof crypto !== "undefined" && crypto.randomUUID
    ? crypto.randomUUID()
    : `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function getEffectiveRecPhase() {
  if (ui.recPhase) return ui.recPhase;
  const info = getCurrentCycleInfo(state.entries, state.settings);
  return info.phase || PHASES.MENSTRUATION;
}

function dispatch(action) {
  switch (action.type) {
    case "ONBOARD": {
      state = {
        ...state,
        onboarded: true,
        preferences: { ...ui.onboardingPrefs },
      };
      saveState(state);
      break;
    }
    case "SET_TAB": {
      ui = { ...ui, activeTab: action.payload };
      break;
    }
    case "CALENDAR_PREV":
    case "CALENDAR_NEXT": {
      const delta = action.type === "CALENDAR_PREV" ? -1 : 1;
      let { year, month } = ui.calendarMonth;
      month += delta;
      if (month < 0) { month = 11; year -= 1; }
      if (month > 11) { month = 0; year += 1; }
      ui = { ...ui, calendarMonth: { year, month } };
      break;
    }
    case "OPEN_LOG_MODAL": {
      ui = { ...ui, logModalOpen: true, editingEntryId: action.payload?.editingEntryId || null, selectedDate: null };
      break;
    }
    case "CLOSE_LOG_MODAL": {
      ui = { ...ui, logModalOpen: false, editingEntryId: null };
      break;
    }
    case "SELECT_DAY": {
      ui = { ...ui, selectedDate: action.payload, logModalOpen: false };
      break;
    }
    case "CLOSE_DAY_DETAIL": {
      ui = { ...ui, selectedDate: null };
      break;
    }
    case "SAVE_ENTRY": {
      const { id, periodStart, periodEnd } = action.payload;
      const cleanEnd = periodEnd && parseDate(periodEnd) >= parseDate(periodStart) ? periodEnd : undefined;
      if (id) {
        state = {
          ...state,
          entries: state.entries.map((e) => (e.id === id ? { ...e, periodStart, periodEnd: cleanEnd } : e)),
        };
      } else {
        state = { ...state, entries: [...state.entries, { id: genId(), periodStart, periodEnd: cleanEnd }] };
      }
      saveState(state);
      ui = { ...ui, logModalOpen: false, editingEntryId: null, selectedDate: null };
      break;
    }
    case "DELETE_ENTRY": {
      state = { ...state, entries: state.entries.filter((e) => e.id !== action.payload.id) };
      saveState(state);
      break;
    }
    case "SELECT_REC_PHASE": {
      ui = { ...ui, recPhase: action.payload };
      break;
    }
    case "UPDATE_SETTINGS": {
      state = { ...state, settings: { ...state.settings, ...action.payload } };
      saveState(state);
      break;
    }
    case "SET_ONBOARDING_NUTRITION": {
      ui = { ...ui, onboardingPrefs: { ...ui.onboardingPrefs, nutritionStyle: action.payload } };
      break;
    }
    case "TOGGLE_ONBOARDING_SPORT": {
      const current = ui.onboardingPrefs.preferredSports;
      const next = current.includes(action.payload)
        ? current.filter((s) => s !== action.payload)
        : [...current, action.payload];
      ui = { ...ui, onboardingPrefs: { ...ui.onboardingPrefs, preferredSports: next } };
      break;
    }
    case "SET_ONBOARDING_SOCIAL": {
      ui = { ...ui, onboardingPrefs: { ...ui.onboardingPrefs, socialStyle: action.payload } };
      break;
    }
    case "SET_ONBOARDING_SELFCARE": {
      ui = { ...ui, onboardingPrefs: { ...ui.onboardingPrefs, selfCareStyle: action.payload } };
      break;
    }
    case "SET_PREFERENCE_NUTRITION": {
      state = { ...state, preferences: { ...state.preferences, nutritionStyle: action.payload } };
      saveState(state);
      break;
    }
    case "TOGGLE_PREFERENCE_SPORT": {
      const current = state.preferences.preferredSports;
      const next = current.includes(action.payload)
        ? current.filter((s) => s !== action.payload)
        : [...current, action.payload];
      state = { ...state, preferences: { ...state.preferences, preferredSports: next } };
      saveState(state);
      break;
    }
    case "SET_PREFERENCE_SOCIAL": {
      state = { ...state, preferences: { ...state.preferences, socialStyle: action.payload } };
      saveState(state);
      break;
    }
    case "SET_PREFERENCE_SELFCARE": {
      state = { ...state, preferences: { ...state.preferences, selfCareStyle: action.payload } };
      saveState(state);
      break;
    }
    default:
      return;
  }
  render();
}

function renderTabs() {
  const tabs = [
    { id: "heute", label: "📅 Heute" },
    { id: "verlauf", label: "⚙️ Verlauf" },
  ];
  return `
    <div class="tabs">
      ${tabs
        .map(
          (t) => `<button class="tab-btn ${ui.activeTab === t.id ? "active" : ""}" data-action="set-tab" data-tab="${t.id}">${t.label}</button>`
        )
        .join("")}
    </div>
  `;
}

function renderMain() {
  if (ui.activeTab === "heute") {
    const uiWithEffectivePhase = { ...ui, recPhase: getEffectiveRecPhase() };
    return renderPhaseCard(state) + renderCalendar(state, ui) + renderRecommendations(state, uiWithEffectivePhase);
  }
  return renderSettingsView(state);
}

function render() {
  if (!state.onboarded) {
    root.innerHTML = renderOnboarding(ui);
    return;
  }

  root.innerHTML = `
    ${renderTabs()}
    <main>${renderMain()}</main>
    ${renderLogModal(state, ui)}
    ${renderDayDetailModal(state, ui)}
    <footer class="app-footer">Alle Daten bleiben lokal auf diesem Gerät.</footer>
  `;
}

root.addEventListener("click", (e) => {
  const backdrop = e.target.closest(".modal-backdrop");
  if (backdrop && e.target === backdrop) {
    dispatch({ type: ui.selectedDate ? "CLOSE_DAY_DETAIL" : "CLOSE_LOG_MODAL" });
    return;
  }

  const actionEl = e.target.closest("[data-action]");
  if (!actionEl) return;
  const action = actionEl.dataset.action;

  switch (action) {
    case "set-tab":
      dispatch({ type: "SET_TAB", payload: actionEl.dataset.tab });
      break;
    case "calendar-prev":
      dispatch({ type: "CALENDAR_PREV" });
      break;
    case "calendar-next":
      dispatch({ type: "CALENDAR_NEXT" });
      break;
    case "open-log-modal":
      dispatch({ type: "OPEN_LOG_MODAL" });
      break;
    case "close-log-modal":
      dispatch({ type: "CLOSE_LOG_MODAL" });
      break;
    case "edit-entry":
      dispatch({ type: "OPEN_LOG_MODAL", payload: { editingEntryId: actionEl.dataset.id } });
      break;
    case "delete-entry":
      if (confirm("Diesen Eintrag wirklich löschen?")) {
        dispatch({ type: "DELETE_ENTRY", payload: { id: actionEl.dataset.id } });
      }
      break;
    case "select-day":
      dispatch({ type: "SELECT_DAY", payload: actionEl.dataset.date });
      break;
    case "close-day-detail":
      dispatch({ type: "CLOSE_DAY_DETAIL" });
      break;
    case "quick-log-period":
      dispatch({ type: "SAVE_ENTRY", payload: { id: null, periodStart: actionEl.dataset.date, periodEnd: undefined } });
      break;
    case "select-rec-phase":
      dispatch({ type: "SELECT_REC_PHASE", payload: actionEl.dataset.phase });
      break;
    case "set-onboarding-nutrition":
      dispatch({ type: "SET_ONBOARDING_NUTRITION", payload: actionEl.dataset.style });
      break;
    case "toggle-onboarding-sport":
      dispatch({ type: "TOGGLE_ONBOARDING_SPORT", payload: actionEl.dataset.sport });
      break;
    case "set-onboarding-social":
      dispatch({ type: "SET_ONBOARDING_SOCIAL", payload: actionEl.dataset.style });
      break;
    case "set-onboarding-selfcare":
      dispatch({ type: "SET_ONBOARDING_SELFCARE", payload: actionEl.dataset.style });
      break;
    case "finish-onboarding":
      dispatch({ type: "ONBOARD" });
      break;
    case "set-preference-nutrition":
      dispatch({ type: "SET_PREFERENCE_NUTRITION", payload: actionEl.dataset.style });
      break;
    case "toggle-preference-sport":
      dispatch({ type: "TOGGLE_PREFERENCE_SPORT", payload: actionEl.dataset.sport });
      break;
    case "set-preference-social":
      dispatch({ type: "SET_PREFERENCE_SOCIAL", payload: actionEl.dataset.style });
      break;
    case "set-preference-selfcare":
      dispatch({ type: "SET_PREFERENCE_SELFCARE", payload: actionEl.dataset.style });
      break;
  }
});

root.addEventListener("submit", (e) => {
  const form = e.target;
  if (form.dataset.form === "log-entry") {
    e.preventDefault();
    const data = new FormData(form);
    dispatch({
      type: "SAVE_ENTRY",
      payload: {
        id: ui.editingEntryId,
        periodStart: data.get("periodStart"),
        periodEnd: data.get("periodEnd") || undefined,
      },
    });
  } else if (form.dataset.form === "settings") {
    e.preventDefault();
    const data = new FormData(form);
    dispatch({
      type: "UPDATE_SETTINGS",
      payload: {
        periodLength: Number(data.get("periodLength")),
        lutealLength: Number(data.get("lutealLength")),
        defaultCycleLength: Number(data.get("defaultCycleLength")),
      },
    });
  }
});

render();
