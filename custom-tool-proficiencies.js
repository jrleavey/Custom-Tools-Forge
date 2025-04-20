Hooks.once("init", () => {
  const toolLabels = {
    animalcarekit: "Animal Care Kit",
    brewerssupplies: "Brewer’s Supplies",
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
    jewelersTools: "Jeweler’s Tools",
    leatherworkingtools: "Leatherworking Tools",
    mechanicstools: "Mechanic’s Tools",
    minerstools: "Miner’s Tools",
    navigatorsTools: "Navigator’s Tools",
    paintersTools: "Painter’s Tools",
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
    CONFIG.DND5E.toolProficiencies[toolId] = {
      label,
      tools: [toolId]
    };
  }
});
