Hooks.once("init", () => {
  console.log("[OTOV] 🛠️ Registering OTOV tools...");

  const tools = {
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
    gunsmithtools: "dex",
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

  for (const [id, ability] of Object.entries(tools)) {
    CONFIG.DND5E.tools[id] = {
      ability,
      identifier: `dnd5e.tools.${id}`
    };
    console.log(`[OTOV] ✅ Registered: ${id} → ${ability}`);
  }

  console.log("[OTOV] ✅ Tool registration complete.");
});
