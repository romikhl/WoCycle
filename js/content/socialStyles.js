import { PHASES } from "../lib/cycleCalculations.js";

export const SOCIAL_STYLE_OPTIONS = [
  { id: "allein_ruhe", label: "Allein & Ruhe" },
  { id: "austausch", label: "Austausch mit anderen" },
  { id: "bewegung", label: "Bewegung" },
  { id: "kreativ", label: "Kreativ sein" },
  { id: "keine_angabe", label: "Keine Angabe" },
];

export const SELF_CARE_OPTIONS = [
  { id: "bewegung", label: "Bewegung" },
  { id: "ruhe_schlaf", label: "Ruhe & Schlaf" },
  { id: "suesses", label: "Süßes / Comfort Food" },
  { id: "austausch", label: "Austausch mit Freund*innen" },
  { id: "keine_angabe", label: "Keine Angabe" },
];

export const SOCIAL_STYLE_TIPS = {
  [PHASES.MENSTRUATION]: {
    allein_ruhe: "Plane bewusst Alleinzeit ein – Rückzug lädt deine Energie in dieser Phase oft am besten wieder auf.",
    austausch: "Ein ruhiges Gespräch mit einer engen Vertrauten kann guttun, auch wenn große Runden weniger reizen.",
    bewegung: "Ein gemeinsamer, langsamer Spaziergang verbindet Bewegung und sozialen Kontakt, ohne zu fordern.",
    kreativ: "Kreative Zeit für dich allein (Zeichnen, Schreiben, Musik) kann jetzt mehr auftanken als Geselligkeit.",
  },
  [PHASES.FOLLIKELPHASE]: {
    allein_ruhe: "Auch wenn die Energie steigt, darfst du dir Ruhephasen weiterhin bewusst gönnen.",
    austausch: "Guter Zeitpunkt, um Verabredungen zu planen – der Austausch mit anderen fällt jetzt leichter.",
    bewegung: "Sportliche Verabredungen mit Freund*innen verbinden jetzt Bewegung und soziale Energie besonders gut.",
    kreativ: "Die steigende Energie eignet sich gut, um gemeinsam neue kreative Projekte zu starten.",
  },
  [PHASES.OVULATION]: {
    allein_ruhe: "Auch auf dem Energie-Höhepunkt ist es okay, dir bewusst stille Momente zu reservieren.",
    austausch: "Deine Kommunikationsfähigkeit ist oft am höchsten – ein guter Moment für wichtige Gespräche oder Treffen.",
    bewegung: "Gemeinsamer Sport auf hohem Energielevel kann jetzt besonders verbindend wirken.",
    kreativ: "Nutze die hohe Energie, um kreative Ideen mit anderen zu teilen oder gemeinsam umzusetzen.",
  },
  [PHASES.LUTEALPHASE]: {
    allein_ruhe: "Gegen Ende der Phase ist mehr Rückzug normal – plane bewusst Zeit für dich ein.",
    austausch: "Wichtige Gespräche eher in die erste Zyklushälfte legen, jetzt reichen oft ruhigere Kontakte.",
    bewegung: "Ruhige, gemeinsame Bewegung wie ein Spaziergang kann Anspannung besser lösen als intensive Pläne.",
    kreativ: "Kreative Projekte allein zu Ende zu bringen kann jetzt befriedigender sein als neue Gruppenaktivitäten.",
  },
};

export const SELF_CARE_TIPS = {
  [PHASES.MENSTRUATION]: {
    bewegung: "Eine kurze, sanfte Bewegungseinheit (Spaziergang, Dehnen) kann Krämpfe und Anspannung lindern.",
    ruhe_schlaf: "Gönn dir bewusst mehr Schlaf oder eine Ruhepause, dein Körper braucht jetzt mehr Erholung.",
    suesses: "Ein Stück dunkle Schokolade in Maßen ist okay – sie liefert sogar etwas Magnesium.",
    austausch: "Ein kurzer Austausch mit einer engen Freundin kann emotional entlasten, ohne zu fordern.",
  },
  [PHASES.FOLLIKELPHASE]: {
    bewegung: "Nutze die steigende Energie für eine Bewegungseinheit, die dir Spaß macht – das hebt zusätzlich die Stimmung.",
    ruhe_schlaf: "Auch wenn die Energie steigt: ein fester Schlafrhythmus stabilisiert zusätzlich.",
    suesses: "Heißhunger ist hier seltener, aber wenn doch: bewusst genießen statt unterdrücken.",
    austausch: "Ein Treffen mit Freund*innen kann die gute Stimmung dieser Phase zusätzlich verstärken.",
  },
  [PHASES.OVULATION]: {
    bewegung: "Intensive Bewegung kann jetzt zusätzlich Stress abbauen, da die Leistungsfähigkeit hoch ist.",
    ruhe_schlaf: "Auch am Energie-Peak schützt ausreichend Schlaf vor einem Einbruch danach.",
    suesses: "Heißhunger ist hier selten – kleine Naschereien bewusst und ohne schlechtes Gewissen genießen.",
    austausch: "Ein offenes Gespräch kann jetzt besonders klärend wirken, deine Kommunikationsfähigkeit ist hoch.",
  },
  [PHASES.LUTEALPHASE]: {
    bewegung: "Sanfte Bewegung wie Yoga oder Spazieren hilft oft besser gegen PMS-Anspannung als intensives Training.",
    ruhe_schlaf: "Priorisiere Schlaf und Ruhephasen – das mildert oft Reizbarkeit und Erschöpfung.",
    suesses: "Heißhunger ist normal – kombiniere Süßes mit Eiweiß oder Ballaststoffen, um Blutzuckerspitzen abzufedern.",
    austausch: "Ein Gespräch mit einer verständnisvollen Person kann PMS-Stimmungstiefs auffangen, ohne dass du dich erklären musst.",
  },
};
