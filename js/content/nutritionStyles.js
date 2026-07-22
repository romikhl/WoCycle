import { PHASES } from "../lib/cycleCalculations.js";

export const NUTRITION_STYLE_OPTIONS = [
  { id: "omnivor", label: "Omnivor (Alles)" },
  { id: "vegetarisch", label: "Vegetarisch" },
  { id: "vegan", label: "Vegan" },
  { id: "pescetarisch", label: "Pescetarisch" },
  { id: "low_carb", label: "Low-Carb" },
  { id: "keine_angabe", label: "Keine Angabe" },
];

export const NUTRITION_STYLE_TIPS = {
  [PHASES.MENSTRUATION]: {
    omnivor: "Rotes Fleisch, Leber oder Eigelb liefern gut verwertbares Eisen für den Blutverlust.",
    vegetarisch: "Eier, Linsen und grünes Blattgemüse mit etwas Vitamin C (z. B. Paprika) kombinieren – das verbessert die Eisenaufnahme.",
    vegan: "Linsen, Kichererbsen und Kürbiskerne mit Vitamin-C-reichem Obst kombinieren, um die pflanzliche Eisenaufnahme zu verbessern.",
    pescetarisch: "Muscheln, Sardinen oder Lachs sind gute Eisen- und Omega-3-Quellen in dieser Phase.",
    low_carb: "Eisenreiches Gemüse (Spinat, Mangold) mit hochwertigem Eiweiß kombinieren, dabei trotzdem auf ausreichend Ballaststoffe achten.",
  },
  [PHASES.FOLLIKELPHASE]: {
    omnivor: "Mageres Geflügel und frisches Gemüse liefern Energie für das steigende Trainingspensum.",
    vegetarisch: "Fermentiertes wie Joghurt oder Kimchi unterstützt die Darmflora, dazu Vollkorn für nachhaltige Energie.",
    vegan: "Fermentiertes wie Sauerkraut oder Tempeh für die Darmgesundheit, kombiniert mit Vollkorngetreide für Energie.",
    pescetarisch: "Fisch zwei- bis dreimal die Woche liefert Omega-3 für die steigende Trainingsintensität.",
    low_carb: "Nicht-stärkehaltiges Gemüse und magere Proteinquellen priorisieren, Energie kommt vor allem aus guten Fetten.",
  },
  [PHASES.OVULATION]: {
    omnivor: "Mageres Fleisch oder Fisch mit viel ballaststoffreichem Gemüse kombinieren, das unterstützt den Abbau des Östrogen-Peaks.",
    vegetarisch: "Hülsenfrüchte und Vollkornprodukte liefern Ballaststoffe, die den Östrogenstoffwechsel unterstützen.",
    vegan: "Bohnen, Linsen und Vollkorn liefern reichlich Ballaststoffe für den Östrogen-Stoffwechsel.",
    pescetarisch: "Fetter Fisch wie Lachs liefert Omega-3, dazu viel Gemüse für Ballaststoffe.",
    low_carb: "Ballaststoffreiches Gemüse (Brokkoli, Blumenkohl) statt Getreide für die Unterstützung des Östrogenabbaus.",
  },
  [PHASES.LUTEALPHASE]: {
    omnivor: "Mageres Rind oder Huhn mit Vollkornbeilagen, dazu Nüsse für Magnesium gegen PMS-Symptome.",
    vegetarisch: "Vollkorn, Nüsse und dunkle Schokolade liefern Magnesium, das PMS-Symptome mildern kann.",
    vegan: "Kürbiskerne, Mandeln und dunkle Schokolade sind gute pflanzliche Magnesiumquellen für diese Phase.",
    pescetarisch: "Lachs liefert Vitamin B6, kombiniert mit Vollkorn und Nüssen für Magnesium.",
    low_carb: "Nüsse, Samen und grünes Blattgemüse für Magnesium, Heißhunger mit Eiweiß und guten Fetten abfangen.",
  },
};
