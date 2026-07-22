export const PHASES = {
  MENSTRUATION: "menstruation",
  FOLLIKELPHASE: "follikelphase",
  OVULATION: "ovulation",
  LUTEALPHASE: "lutealphase",
};

export const PHASE_LABELS = {
  [PHASES.MENSTRUATION]: "Menstruation",
  [PHASES.FOLLIKELPHASE]: "Follikelphase",
  [PHASES.OVULATION]: "Ovulation",
  [PHASES.LUTEALPHASE]: "Lutealphase",
};

const MS_PER_DAY = 86400000;

export function parseDate(dateStr) {
  const [y, m, d] = dateStr.split("-").map(Number);
  return new Date(y, m - 1, d);
}

export function formatDate(date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

export function startOfDay(date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

export function addDays(date, days) {
  const d = new Date(date);
  d.setDate(d.getDate() + days);
  return d;
}

export function diffDays(a, b) {
  return Math.round((startOfDay(a).getTime() - startOfDay(b).getTime()) / MS_PER_DAY);
}

function sortedEntries(entries) {
  return [...entries]
    .map((e) => ({ ...e, startDate: parseDate(e.periodStart) }))
    .sort((a, b) => a.startDate - b.startDate);
}

export function getCycleLengths(entries) {
  const sorted = sortedEntries(entries);
  const lengths = [];
  for (let i = 1; i < sorted.length; i++) {
    lengths.push(diffDays(sorted[i].startDate, sorted[i - 1].startDate));
  }
  return lengths.slice(-6);
}

export function getAverageCycleLength(entries, settings) {
  const lengths = getCycleLengths(entries).filter((l) => l >= 10 && l <= 90);
  if (lengths.length === 0) return settings.defaultCycleLength;
  const avg = lengths.reduce((sum, l) => sum + l, 0) / lengths.length;
  return Math.round(avg);
}

export function getLastEntry(entries) {
  const sorted = sortedEntries(entries);
  return sorted[sorted.length - 1] || null;
}

export function getPhaseForDayInCycle(dayInCycle, cycleLength, periodLength, lutealLength) {
  const ovulationDay = Math.max(periodLength + 1, cycleLength - lutealLength);
  const windowStart = Math.max(periodLength + 1, ovulationDay - 1);
  const windowEnd = ovulationDay + 1;

  if (dayInCycle <= periodLength) return PHASES.MENSTRUATION;
  if (dayInCycle < windowStart) return PHASES.FOLLIKELPHASE;
  if (dayInCycle <= windowEnd) return PHASES.OVULATION;
  return PHASES.LUTEALPHASE;
}

/**
 * Resolves phase + cycle context for an arbitrary calendar date, projecting
 * future cycles beyond the last logged entry using the average cycle length.
 */
export function getPhaseForDate(date, entries, settings) {
  const sorted = sortedEntries(entries);
  if (sorted.length === 0) return null;

  const target = startOfDay(date);
  if (target < sorted[0].startDate) return null;

  const avgCycleLength = getAverageCycleLength(entries, settings);
  let anchor = sorted[0].startDate;
  let cycleLength = avgCycleLength;
  let isProjected = false;

  for (let i = 0; i < sorted.length; i++) {
    const isLast = i === sorted.length - 1;
    const currentStart = sorted[i].startDate;
    const nextStart = isLast ? null : sorted[i + 1].startDate;

    if (!isLast && target >= currentStart && target < nextStart) {
      anchor = currentStart;
      cycleLength = diffDays(nextStart, currentStart);
      isProjected = false;
      break;
    }
    if (isLast) {
      anchor = currentStart;
      cycleLength = avgCycleLength;
      while (diffDays(target, anchor) >= cycleLength) {
        anchor = addDays(anchor, cycleLength);
        isProjected = true;
      }
    }
  }

  const dayInCycle = diffDays(target, anchor) + 1;
  const phase = getPhaseForDayInCycle(dayInCycle, cycleLength, settings.periodLength, settings.lutealLength);

  return {
    phase,
    dayInCycle,
    cycleLength,
    anchorDate: anchor,
    isProjectedPeriod: isProjected && dayInCycle <= settings.periodLength,
  };
}

export function predictNextPeriodStart(entries, settings) {
  const lastEntry = getLastEntry(entries);
  if (!lastEntry) return null;
  const avgCycleLength = getAverageCycleLength(entries, settings);
  return addDays(lastEntry.startDate, avgCycleLength);
}

export function getOvulationDateForCurrentCycle(entries, settings) {
  const lastEntry = getLastEntry(entries);
  if (!lastEntry) return null;
  const avgCycleLength = getAverageCycleLength(entries, settings);
  const ovulationDay = Math.max(settings.periodLength + 1, avgCycleLength - settings.lutealLength);
  return addDays(lastEntry.startDate, ovulationDay - 1);
}

export function getFertileWindow(entries, settings) {
  const ovulationDate = getOvulationDateForCurrentCycle(entries, settings);
  if (!ovulationDate) return null;
  return { start: addDays(ovulationDate, -5), end: ovulationDate };
}

export function getCurrentCycleInfo(entries, settings, today = new Date()) {
  const info = getPhaseForDate(today, entries, settings);
  const nextPeriodStart = predictNextPeriodStart(entries, settings);
  const hasEnoughData = getCycleLengths(entries).length >= 1;
  return {
    ...info,
    nextPeriodStart,
    daysUntilNextPeriod: nextPeriodStart ? diffDays(nextPeriodStart, startOfDay(today)) : null,
    hasEnoughData,
  };
}
