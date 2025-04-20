Hooks.once("init", () => {
  CONFIG.DND5E.toolTypes.otov = "OTOV Tools";

  const otovTools = {
    animalcarekit: "wis",
    brewerssupplies: "wis",
    calligraphersupplies: "int",
    cartographerstools: "int",
    chemistrykit: "int",
    climbinggear: "str",
    cookingkit: "wis",
    disguisekit: "cha",
    explosiveskit: "int",
    farmerstools: "wis",
    fishingtackle: "wis",
    forensickit: "int",
    gunsmithtools: "dex",
    hackingtools: "int",
    herbalismkit: "wis",
    jewelersTools: "dex",
    leatherworkingtools: "dex",
    mechanicstools: "int",
    minerstools: "str",
    navigatorsTools: "int",
    paintersTools: "dex",
    poisonerskit: "int",
    potterstools: "int",
    radiationdetector: "int",
    scrungekit: "dex",
    sewingkit: "dex",
    signalbooster: "int",
    smithstools: "str",
    surveyorstools: "wis",
    tinkerstools: "int",
    trapperstools: "wis"
  };

  for (const [toolId, ability] of Object.entries(otovTools)) {
    CONFIG.DND5E.tools[toolId] = {
      ability,
      type: "otov",
      identifier: `dnd5e.tools.${toolId}`
    };
  }
});
