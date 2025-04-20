// STEP 1: Register tools first
Hooks.once("init", () => {
  console.log("[OTOV] 🛠️ Registering OTOV Tools into CONFIG.DND5E.tools");

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

  for (const [id, ability] of Object.entries(otovTools)) {
    if (!CONFIG.DND5E.tools[id]) {
      CONFIG.DND5E.tools[id] = { ability, id: "" }; // No type set, falls under "Other"
      console.log(`[OTOV] ✅ Registered tool '${id}' with ability '${ability}'`);
    } else {
      console.warn(`[OTOV] ⚠️ Tool '${id}' already exists in CONFIG.DND5E.tools`);
    }
  }

  console.log("[OTOV] ✅ OTOV tool registration complete.");
});
