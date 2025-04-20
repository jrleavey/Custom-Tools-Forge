// STEP 2: Register labels after tools exist
Hooks.once("init", () => {
  console.log("[OTOV] 🖋️ Prefixing OTOV tool labels");

  const otovLabels = {
    animalcarekit: "Animal Care Kit",
    brewerssupplies: "Brewer’s Supplies",
    calligrapherssupplies: "Calligrapher’s Supplies",
    cartographerstools: "Cartographer’s Tools",
    chemistrykit: "Chemistry Kit",
    climbinggear: "Climbing Gear",
    cookingkit: "Cooking Kit",
    disguisekit: "Disguise Kit",
    explosiveskit: "Explosives Kit",
    farmerstools: "Farmer’s Tools",
    fishingtackle: "Fishing Tackle",
    forensickit: "Forensic Kit",
    gunsmithtools: "Gunsmith’s Tools",
    hackingtools: "Hacking Tools",
    herbalismkit: "Herbalism Kit",
    jewelerstools: "Jeweler’s Tools",
    leatherworkingtools: "Leatherworking Tools",
    mechanicstools: "Mechanic’s Tools",
    minerstools: "Miner’s Tools",
    navigatorstools: "Navigator’s Tools",
    painterstools: "Painter’s Tools",
    poisonerskit: "Poisoner’s Kit",
    potterstools: "Potter’s Tools",
    radiationdetector: "Radiation Detector",
    scrungekit: "Scrunge Kit",
    sewingkit: "Sewing Kit",
    signalbooster: "Signal Booster",
    smithstools: "Smith’s Tools",
    surveyorstools: "Surveyor’s Tools",
    tinkerstools: "Tinker’s Tools",
    trapperstools: "Trapper’s Tools"
  };

  for (const [id, label] of Object.entries(otovLabels)) {
    // Register the proficiency entry if it doesn't exist
    if (!CONFIG.DND5E.toolProficiencies[id]) {
      CONFIG.DND5E.toolProficiencies[id] = {
        label: `OTOV - ${label}`,
        tools: [id]
      };
      console.log(`[OTOV] ✅ Created and labeled tool proficiency '${id}'`);
    } else {
      // Otherwise, just overwrite the label safely
      CONFIG.DND5E.toolProficiencies[id].label = `OTOV - ${label}`;
      console.log(`[OTOV] ✏️ Updated label for '${id}' → OTOV - ${label}`);
    }
  }

  console.log("[OTOV] ✅ Tool proficiency labeling complete.");
});
