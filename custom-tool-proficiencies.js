Hooks.once("init", () => {
  console.log("[OTOV] 📚 Registering tool proficiencies in CONFIG.DND5E.toolProficiencies");

  const toolLabels = {
    animalcarekit: "Animal Care Kit",
    brewersupplies: "Brewer’s Supplies",
    calligraphersupplies: "Calligrapher’s Supplies",
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

  for (const [toolId, label] of Object.entries(toolLabels)) {
    if (!CONFIG.DND5E.toolProficiencies[toolId]) {
      CONFIG.DND5E.toolProficiencies[toolId] = {
        label,
        tools: [toolId]
      };
      console.log(`[OTOV] ✅ Proficiency registered: ${label} (${toolId})`);
    } else {
      console.warn(`[OTOV] ⚠️ Proficiency '${toolId}' already exists — skipping.`);
    }
  }

  console.log("[OTOV] ✅ Tool proficiency registration complete.");
});
