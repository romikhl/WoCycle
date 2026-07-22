import { PHASES } from "../lib/cycleCalculations.js";

export const DISCLAIMER =
  "Diese Hinweise geben eine allgemeine, forschungsbasierte Orientierung zu typischen Hormonverläufen im Zyklus. " +
  "Sie ersetzen keine ärztliche oder ernährungsmedizinische Beratung. Jeder Körper reagiert unterschiedlich – " +
  "höre auf dein eigenes Empfinden.";

export const PHASE_CONTENT = {
  [PHASES.MENSTRUATION]: {
    label: "Menstruation",
    emoji: "🩸",
    summary:
      "Östrogen und Progesteron sind auf ihrem Tiefpunkt. Energie und Schmerztoleranz sind oft niedriger – Ruhe und sanfte Bewegung stehen im Vordergrund.",
    sport: ["Sanfte Bewegung wie Spazierengehen, Dehnen oder Yin-Yoga – auf Signale des Körpers hören, Pausen sind völlig in Ordnung"],
    ernaehrung: ["Eisenreiche Lebensmittel zum Ausgleich des Blutverlusts, dazu ausreichend Flüssigkeit und warme, leicht verdauliche Mahlzeiten"],
    soziales: [
      "Ein erhöhtes Ruhebedürfnis und Rückzug sind normal – das muss nicht gerechtfertigt werden",
      "Ruhigere, planbare Treffen statt vollem Terminkalender",
      "Zeit für dich einplanen, bevor der Kalender sich wieder füllt",
    ],
  },
  [PHASES.FOLLIKELPHASE]: {
    label: "Follikelphase",
    emoji: "🌱",
    summary:
      "Der Östrogenspiegel steigt kontinuierlich an. Energie, Motivation und Aufnahmefähigkeit nehmen spürbar zu.",
    sport: ["Guter Zeitpunkt, um Trainingsintensität und -umfang zu steigern – die Lernfähigkeit für neue Bewegungsformen ist hoch"],
    ernaehrung: ["Frisches Gemüse, fermentierte Lebensmittel und ausreichend Protein unterstützen die steigende Energie und Darmgesundheit"],
    soziales: [
      "Guter Zeitpunkt für neue Kontakte, Projekte und Verabredungen",
      "Offenheit und Extraversion sind oft erhöht – Netzwerken fällt leichter",
      "Ideen sammeln und Pläne für aktivere Phasen schmieden",
    ],
  },
  [PHASES.OVULATION]: {
    label: "Ovulation",
    emoji: "☀️",
    summary:
      "Östrogen und LH erreichen ihren Höhepunkt. Energie, Kraft und Selbstbewusstsein sind meist am höchsten.",
    sport: ["Höchste Leistungsfähigkeit – guter Zeitpunkt für intensive Einheiten, dabei auf gutes Aufwärmen achten"],
    ernaehrung: ["Ballaststoffreiche Kost sowie antioxidantienreiches Obst und Gemüse unterstützen den Abbau des Östrogen-Peaks"],
    soziales: [
      "Kommunikationsfähigkeit und Selbstvertrauen sind oft am höchsten – guter Moment für wichtige Gespräche",
      "Netzwerken, Präsentationen oder soziale Events gut planbar",
      "Energie nutzen, aber auf ausreichend Erholung danach achten",
    ],
  },
  [PHASES.LUTEALPHASE]: {
    label: "Lutealphase",
    emoji: "🌙",
    summary:
      "Progesteron dominiert zunächst, fällt gegen Ende stark ab. Frühe Lutealphase oft noch stabil, späte Phase (PMS-Fenster) bringt oft weniger Energie und mehr Reizbarkeit.",
    sport: ["Früh in der Phase moderates bis intensives Training, spät eher Ausdauer/Mobility mit längerem Warm-up"],
    ernaehrung: ["Magnesium- und Vitamin-B6-reiche Lebensmittel sowie komplexe Kohlenhydrate können PMS-Symptome und Heißhunger lindern"],
    soziales: [
      "Rückzugsbedürfnis und geringere Reizschwelle gegen Ende der Phase sind normal",
      "Wichtige/anstrengende Gespräche eher in die erste Zyklushälfte legen, wenn möglich",
      "Feste Routinen und ruhigere Kontakte tun in dieser Phase oft gut",
    ],
  },
};
