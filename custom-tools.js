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
      identifier: `otov.tools.${toolId}` // Ensure it's a plain string
    };
    console.log(`[OTOV] Registered tool: ${toolId} (ability: ${ability})`);
  }
});

Hooks.once("ready", () => {
  for (const [key, tool] of Object.entries(CONFIG.DND5E.tools)) {
    if (!tool || typeof tool !== "object") {
      console.warn(`[OTOV] Tool entry for '${key}' is invalid. Fixing.`);
      CONFIG.DND5E.tools[key] = {
        ability: "int",
        type: "otov",
        identifier: `otov.tools.${key}`
      };
      continue;
    }

    if (typeof tool.identifier !== "string") {
      console.warn(`[OTOV] Tool '${key}' missing valid string identifier. Fixing.`);
      tool.identifier = `otov.tools.${key}`;
    }
  }

  console.log("[OTOV] ✅ Tool definitions validated.");
});
