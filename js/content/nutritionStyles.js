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

export const TIME_OF_DAY_OPTIONS = [
  { id: "morgens", label: "Morgens" },
  { id: "mittags", label: "Mittags" },
  { id: "nachmittags", label: "Nachmittags" },
  { id: "abends", label: "Abends" },
];

export const MEAL_SUGGESTIONS = {
  [PHASES.MENSTRUATION]: {
    morgens: {
      omnivor: "Porridge mit Beeren und einem weichgekochten Ei",
      vegetarisch: "Porridge mit Beeren, Leinsamen und griechischem Joghurt",
      vegan: "Porridge mit Beeren, Leinsamen und Sojajoghurt",
      pescetarisch: "Vollkorntoast mit Räucherlachs und Avocado",
      low_carb: "Rührei mit Spinat und Avocado",
    },
    mittags: {
      omnivor: "Linsen-Rindfleisch-Eintopf mit Paprika (Vitamin C für die Eisenaufnahme)",
      vegetarisch: "Linseneintopf mit Paprika und etwas Feta",
      vegan: "Kichererbsen-Spinat-Curry mit Paprika",
      pescetarisch: "Sardinen-Salat mit Linsen und Paprika",
      low_carb: "Linsen-Gemüse-Suppe mit extra Blattgemüse statt Reis",
    },
    nachmittags: {
      omnivor: "Kürbiskerne und ein Stück dunkle Schokolade",
      vegetarisch: "Kürbiskerne und dunkle Schokolade",
      vegan: "Kürbiskerne und vegane dunkle Schokolade",
      pescetarisch: "Kürbiskerne und ein paar Walnüsse",
      low_carb: "Kürbiskerne und Mandeln",
    },
    abends: {
      omnivor: "Gebratene Rinderleber oder mageres Rind mit Ofengemüse",
      vegetarisch: "Ofenkürbis mit Linsen und Feta",
      vegan: "Ofengemüse mit Kichererbsen und Tahin-Soße",
      pescetarisch: "Gebratener Lachs mit grünem Blattgemüse",
      low_carb: "Gebratenes Rind mit viel grünem Gemüse statt Kartoffeln",
    },
  },
  [PHASES.FOLLIKELPHASE]: {
    morgens: {
      omnivor: "Naturjoghurt mit frischem Obst und Granola",
      vegetarisch: "Naturjoghurt mit frischem Obst und Granola",
      vegan: "Kokosjoghurt mit frischem Obst und Granola",
      pescetarisch: "Rührei mit Räucherlachs und frischen Kräutern",
      low_carb: "Chia-Pudding mit frischen Beeren",
    },
    mittags: {
      omnivor: "Bowl mit Hähnchen, Quinoa und viel frischem Gemüse",
      vegetarisch: "Bowl mit Halloumi, Quinoa und frischem Gemüse",
      vegan: "Bowl mit Tofu, Quinoa und frischem Gemüse",
      pescetarisch: "Bowl mit Garnelen, Quinoa und frischem Gemüse",
      low_carb: "Hähnchen-Salat mit viel frischem Gemüse statt Quinoa",
    },
    nachmittags: {
      omnivor: "Naturjoghurt mit etwas Kimchi oder einem fermentierten Snack",
      vegetarisch: "Kimchi oder Sauerkraut mit Vollkorncracker",
      vegan: "Sauerkraut oder Kimchi mit Vollkorncracker",
      pescetarisch: "Räucherfisch-Häppchen mit Gurke",
      low_carb: "Sauerkraut mit Frischkäse-Röllchen",
    },
    abends: {
      omnivor: "Gebratenes Hähnchen mit buntem Ofengemüse und Vollkornreis",
      vegetarisch: "Gebackener Tofu oder Tempeh mit Ofengemüse und Vollkornreis",
      vegan: "Tempeh-Pfanne mit Ofengemüse und Vollkornreis",
      pescetarisch: "Gebratener Fisch mit Ofengemüse und Vollkornreis",
      low_carb: "Hähnchenpfanne mit viel Gemüse statt Reis",
    },
  },
  [PHASES.OVULATION]: {
    morgens: {
      omnivor: "Beeren-Smoothie-Bowl mit Chiasamen und Nüssen",
      vegetarisch: "Beeren-Smoothie-Bowl mit Chiasamen und Joghurt",
      vegan: "Beeren-Smoothie-Bowl mit Chiasamen und Hafermilch",
      pescetarisch: "Vollkornbrot mit Avocado und pochiertem Ei",
      low_carb: "Beeren mit griechischem Joghurt und Nüssen",
    },
    mittags: {
      omnivor: "Vollkornsalat mit Hähnchen, Brokkoli und Kichererbsen",
      vegetarisch: "Vollkornsalat mit Kichererbsen, Brokkoli und Feta",
      vegan: "Vollkornsalat mit Kichererbsen und Brokkoli",
      pescetarisch: "Lachs-Salat mit Brokkoli und Vollkorn",
      low_carb: "Brokkoli-Blumenkohl-Salat mit Hähnchen statt Vollkorn",
    },
    nachmittags: {
      omnivor: "Frisches Obst mit einer Handvoll Mandeln",
      vegetarisch: "Frisches Obst mit Mandeln",
      vegan: "Frisches Obst mit Mandeln",
      pescetarisch: "Frisches Obst mit Walnüssen",
      low_carb: "Beeren mit Mandeln statt zuckerreichem Obst",
    },
    abends: {
      omnivor: "Gegrillter Fisch oder Hähnchen mit viel Ofengemüse (Brokkoli, Blumenkohl)",
      vegetarisch: "Gebackener Blumenkohl mit Kichererbsen und Tahin",
      vegan: "Gebackener Blumenkohl mit Kichererbsen und Tahin",
      pescetarisch: "Gegrillter Lachs mit Brokkoli und Blumenkohl",
      low_carb: "Gegrilltes Hähnchen mit Brokkoli und Blumenkohl",
    },
  },
  [PHASES.LUTEALPHASE]: {
    morgens: {
      omnivor: "Vollkorntoast mit Erdnussbutter und Banane",
      vegetarisch: "Vollkorntoast mit Erdnussbutter und Banane",
      vegan: "Vollkorntoast mit Erdnussbutter und Banane",
      pescetarisch: "Porridge mit Walnüssen und Banane",
      low_carb: "Griechischer Joghurt mit Nüssen und etwas Banane",
    },
    mittags: {
      omnivor: "Vollkornpasta mit magerem Rind, Spinat und Kürbiskernen",
      vegetarisch: "Vollkornpasta mit Linsen, Spinat und Kürbiskernen",
      vegan: "Vollkornpasta mit Linsen, Spinat und Kürbiskernen",
      pescetarisch: "Vollkornpasta mit Lachs und Spinat",
      low_carb: "Zucchini-Nudeln mit magerem Rind und Spinat",
    },
    nachmittags: {
      omnivor: "Dunkle Schokolade mit einer Handvoll Mandeln",
      vegetarisch: "Dunkle Schokolade mit Mandeln",
      vegan: "Vegane dunkle Schokolade mit Mandeln",
      pescetarisch: "Dunkle Schokolade mit Walnüssen",
      low_carb: "Dunkle Schokolade (hoher Kakaoanteil) mit Nüssen",
    },
    abends: {
      omnivor: "Ofenkartoffel mit magerem Hähnchen und grünem Gemüse",
      vegetarisch: "Ofenkartoffel mit Bohnen und grünem Gemüse",
      vegan: "Ofenkartoffel mit Bohnen und grünem Gemüse",
      pescetarisch: "Gebratener Fisch mit Süßkartoffel und grünem Gemüse",
      low_carb: "Gebratenes Hähnchen mit viel grünem Gemüse statt Kartoffel",
    },
  },
};
