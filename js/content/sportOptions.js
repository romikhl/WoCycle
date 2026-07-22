import { PHASES } from "../lib/cycleCalculations.js";

export const SPORT_OPTIONS = [
  { id: "yoga", label: "Yoga" },
  { id: "laufen", label: "Laufen" },
  { id: "kraft", label: "Krafttraining" },
  { id: "pilates", label: "Pilates" },
  { id: "schwimmen", label: "Schwimmen" },
  { id: "radfahren", label: "Radfahren" },
  { id: "tanzen", label: "Tanzen" },
  { id: "wandern", label: "Wandern" },
  { id: "hiit", label: "HIIT" },
];

export const SPORT_SUGGESTIONS = {
  yoga: {
    [PHASES.MENSTRUATION]: "Yin Yoga oder Restorative Yoga mit Fokus auf Hüftöffnern lindert Krämpfe.",
    [PHASES.FOLLIKELPHASE]: "Vinyasa oder Power Yoga – der Körper verträgt jetzt mehr Fluss und Tempo.",
    [PHASES.OVULATION]: "Intensiveres Ashtanga oder Power Yoga mit Fokus auf Balance und Kraft.",
    [PHASES.LUTEALPHASE]: "Ruhigeres Hatha Yoga, gegen Ende der Phase gerne mit sanftem Flow und Atemübungen.",
  },
  laufen: {
    [PHASES.MENSTRUATION]: "Statt Laufen lieber lockeres Gehen oder ganz kurze, langsame Einheiten.",
    [PHASES.FOLLIKELPHASE]: "Lockere Laufeinheiten, Umfang und Tempo langsam steigern.",
    [PHASES.OVULATION]: "Guter Zeitpunkt für Intervalle oder Tempoläufe – die Leistungsfähigkeit ist am höchsten.",
    [PHASES.LUTEALPHASE]: "Gleichmäßige, moderate Läufe statt Intervallen, gegen Ende der Phase Tempo rausnehmen.",
  },
  kraft: {
    [PHASES.MENSTRUATION]: "Leichteres Krafttraining mit weniger Gewicht und mehr Wiederholungen, auf den Körper hören.",
    [PHASES.FOLLIKELPHASE]: "Guter Zeitpunkt, um Gewichte oder Trainingsvolumen zu steigern.",
    [PHASES.OVULATION]: "Höchste Kraftleistung – guter Zeitpunkt für schwere Sätze oder neue Bestleistungen.",
    [PHASES.LUTEALPHASE]: "Moderates Krafttraining, gegen Ende der Phase Gewichte reduzieren und auf Technik fokussieren.",
  },
  pilates: {
    [PHASES.MENSTRUATION]: "Sanftes Mat-Pilates mit Fokus auf Atmung und Beckenboden.",
    [PHASES.FOLLIKELPHASE]: "Klassisches Pilates-Training steigern, gerne mit mehr Wiederholungen.",
    [PHASES.OVULATION]: "Intensiveres Reformer- oder Power-Pilates passt gut zur hohen Energie.",
    [PHASES.LUTEALPHASE]: "Ruhigeres Pilates mit Fokus auf Stabilität, gegen Ende der Phase kürzere Einheiten.",
  },
  schwimmen: {
    [PHASES.MENSTRUATION]: "Lockeres, kurzes Schwimmen oder Wassergymnastik tut oft gut.",
    [PHASES.FOLLIKELPHASE]: "Schwimmumfang oder Bahnenzahl langsam steigern.",
    [PHASES.OVULATION]: "Guter Zeitpunkt für Intervall- oder Streckenschwimmen mit höherem Tempo.",
    [PHASES.LUTEALPHASE]: "Ruhiges, gleichmäßiges Schwimmen statt Intervallen.",
  },
  radfahren: {
    [PHASES.MENSTRUATION]: "Kurze, lockere Radtouren ohne Leistungsdruck.",
    [PHASES.FOLLIKELPHASE]: "Umfang und Intensität beim Radfahren langsam steigern.",
    [PHASES.OVULATION]: "Guter Zeitpunkt für Intervalltraining oder anspruchsvollere Strecken.",
    [PHASES.LUTEALPHASE]: "Gleichmäßige, moderate Touren, gegen Ende der Phase kürzer und entspannter fahren.",
  },
  tanzen: {
    [PHASES.MENSTRUATION]: "Langsamer, ausdrucksstarker Tanz statt hoher Intensität.",
    [PHASES.FOLLIKELPHASE]: "Guter Zeitpunkt, neue Choreografien oder Tanzstile auszuprobieren.",
    [PHASES.OVULATION]: "Energiegeladene Tanzstile wie Zumba oder schnelle Choreografien passen gut.",
    [PHASES.LUTEALPHASE]: "Ruhigere Tanzformen, gegen Ende der Phase auf sanftere Bewegung umsteigen.",
  },
  wandern: {
    [PHASES.MENSTRUATION]: "Kurze, ruhige Spaziergänge an der frischen Luft.",
    [PHASES.FOLLIKELPHASE]: "Längere Wanderungen oder Spaziergänge mit mehr Tempo sind gut machbar.",
    [PHASES.OVULATION]: "Anspruchsvollere Wanderungen mit mehr Höhenmetern passen zur hohen Energie.",
    [PHASES.LUTEALPHASE]: "Moderate Spaziergänge, gegen Ende der Phase eher kürzer und ruhiger.",
  },
  hiit: {
    [PHASES.MENSTRUATION]: "HIIT eher pausieren oder durch sehr sanfte Bewegung ersetzen.",
    [PHASES.FOLLIKELPHASE]: "Erste HIIT-Einheiten wieder langsam einbauen und steigern.",
    [PHASES.OVULATION]: "Bester Zeitpunkt im Zyklus für intensives HIIT-Training.",
    [PHASES.LUTEALPHASE]: "HIIT reduzieren oder durch moderates Training ersetzen, besonders gegen Ende der Phase.",
  },
};
