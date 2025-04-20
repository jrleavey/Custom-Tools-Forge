Hooks.once("init", () => {
  console.log("[OTOV] Registering custom tools under 'Other' category.");

  CONFIG.DND5E.tools.animalcarekit = { ability: "wis" };
  CONFIG.DND5E.tools.chemistrykit = { ability: "int" };
  CONFIG.DND5E.tools.climbinggear = { ability: "str" };
  CONFIG.DND5E.tools.explosiveskit = { ability: "int" };
  CONFIG.DND5E.tools.farmerstools = { ability: "wis" };
  CONFIG.DND5E.tools.forensickit = { ability: "int" };
  CONFIG.DND5E.tools.gunsmithtools = { ability: "dex" };
  CONFIG.DND5E.tools.hackingtools = { ability: "int" };
  CONFIG.DND5E.tools.mechanicstools = { ability: "int" };
  CONFIG.DND5E.tools.radiationdetector = { ability: "int" };
  CONFIG.DND5E.tools.scrungekit = { ability: "dex" };
  CONFIG.DND5E.tools.signalbooster = { ability: "int" };
  CONFIG.DND5E.tools.surveyorstools = { ability: "wis" };
  CONFIG.DND5E.tools.trapperstools = { ability: "wis" };

  console.log("[OTOV] ✅ Custom tools registered.");
});
