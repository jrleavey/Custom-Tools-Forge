Hooks.once("init", () => {
  CONFIG.DND5E.toolTypes.otov = "OTOV Tools";

  const otovTools = {
    animal_care_kit: "wis",
    brewers_supplies: "wis",
    calligraphers_supplies: "int",
    cartographers_tools: "int",
    chemistry_kit: "int",
    climbing_gear: "str",
    cooking_kit: "wis",
    disguise_kit: "cha",
    explosives_kit: "int",
    farmers_tools: "wis",
    fishing_tackle: "wis",
    forensic_kit: "int",
    gunsmiths_tools: "dex",
    hacking_tools: "int",
    herbalism_kit: "wis",
    jewelers_tools: "dex",
    leatherworking_tools: "dex",
    mechanics_tools: "int",
    miners_tools: "str",
    navigators_tools: "int",
    painters_tools: "dex",
    poisoners_kit: "int",
    potters_tools: "int",
    radiation_detector: "int",
    scrunge_kit: "dex",
    sewing_kit: "dex",
    signal_booster: "int",
    smiths_tools: "str",
    surveyors_tools: "wis",
    tinkers_tools: "int",
    trappers_tools: "wis"
  };

  for (const [toolId, ability] of Object.entries(otovTools)) {
    CONFIG.DND5E.tools[toolId] = {
      ability,
      type: "otov",
      identifier: `dnd5e.tools.${toolId}`
    };
    console.log(`[OTOV] Registered tool: ${toolId} (${ability})`);
  }
});

Hooks.once("ready", () => {
  // ONLY iterate OTOV tools
  const otovToolIds = Object.keys(CONFIG.DND5E.tools).filter(key => key.includes("_")); // safe filter

  for (const toolId of otovToolIds) {
    const tool = CONFIG.DND5E.tools[toolId];
    if (typeof tool !== "object" || tool === null) {
      console.error(`[OTOV] TOOL ERROR: '${toolId}' is not an object. Value:`, tool);
      continue;
    }

    if (typeof tool.identifier !== "string") {
      console.warn(`[OTOV] Tool '${toolId}' missing valid string identifier. Fixing.`);
      tool.identifier = `dnd5e.tools.${toolId}`;
    }
  }

  console.log("[OTOV] ✅ Custom tool integrity check complete.");
});
