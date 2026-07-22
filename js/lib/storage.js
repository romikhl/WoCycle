const STORAGE_KEY = "wocycle-v1";

export const DEFAULT_SETTINGS = {
  periodLength: 5,
  lutealLength: 14,
  defaultCycleLength: 28,
};

export const DEFAULT_PREFERENCES = {
  nutritionStyle: "keine_angabe",
  preferredSports: [],
};

function defaultState() {
  return {
    onboarded: false,
    entries: [],
    settings: { ...DEFAULT_SETTINGS },
    preferences: { ...DEFAULT_PREFERENCES },
  };
}

export function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultState();
    const parsed = JSON.parse(raw);
    return {
      ...defaultState(),
      ...parsed,
      settings: { ...DEFAULT_SETTINGS, ...(parsed.settings || {}) },
      preferences: { ...DEFAULT_PREFERENCES, ...(parsed.preferences || {}) },
    };
  } catch {
    return defaultState();
  }
}

export function saveState(state) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}
