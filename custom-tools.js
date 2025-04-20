Hooks.once("init", () => {
  console.log("[OTOV] 🛠️ Registering OTOV tools");

  const otovTools = {
    animalcarekit: "wis",
    brewerssupplies: "wis",
    calligrapherssupplies: "int",
    cartographerstools: "int",
    chemistrykit: "int",
    climbinggear: "str",
    cookingkit: "wis",
    disguisekit: "cha",
    explosiveskit: "int",
    farmerstools: "wis",
    fishingtackle: "wis",
    forensickit: "int",
    gunsmithstools: "dex",
    hackingtools: "int",
    herbalismkit: "wis",
    jewelerstools: "dex",
    leatherworkingtools: "dex",
    mechanicstools: "int",
    minerstools: "str",
    navigatorstools: "int",
    painterstools: "dex",
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
      type: "tool",
      identifier: `dnd5e.tools.${toolId}`
    };
    console.log(`[OTOV] ✅ Registered tool '${toolId}' → ${ability}`);
  }
});
