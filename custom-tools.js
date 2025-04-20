Hooks.once("init", () => {
  console.log("[OTOV] 🔧 Registering OTOV tools to CONFIG.DND5E.tools");

  const otovTools = {
    animalcarekit: "wis",
    brewersupplies: "wis",
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
    if (!CONFIG.DND5E.tools[toolId]) {
      CONFIG.DND5E.tools[toolId] = {
        ability,
        // type omitted to ensure they fall into the "Other" category
      };
      console.log(`[OTOV] ✅ Registered: ${toolId} → ${ability}`);
    } else {
      console.warn(`[OTOV] ⚠️ Tool ID '${toolId}' already exists — skipping.`);
    }
  }

  console.log(`[OTOV] 🧰 Total tools registered: ${Object.keys(otovTools).length}`);
});
