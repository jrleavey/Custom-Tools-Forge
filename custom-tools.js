Hooks.once("init", () => {
  console.log("[OTOV] Initializing OTOV tool definitions...");

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
    console.log(`[OTOV] ✅ Registered: ${toolId} → ${ability}`);
  }

  console.log("[OTOV] Init complete.");
});

Hooks.once("ready", () => {
  console.log("[OTOV] 🔍 Beginning runtime validation of all tool entries...");

  let fixed = 0;
  let replaced = 0;

  for (const [key, tool] of Object.entries(CONFIG.DND5E.tools)) {
    const label = `[OTOV VALIDATION] Tool key: '${key}' →`;

    if (typeof tool !== "object" || tool === null) {
      console.error(`${label} ❌ INVALID TYPE: Expected object, got:`, tool);
      CONFIG.DND5E.tools[key] = {
        ability: "int",
        type: "otov",
        identifier: `dnd5e.tools.${key}`
      };
      console.warn(`${label} 🔧 Replaced with fallback OTOV tool definition.`);
      replaced++;
      continue;
    }

    if (typeof tool.identifier !== "string") {
      console.warn(`${label} ⚠️ Missing or bad identifier:`, tool.identifier);
      CONFIG.DND5E.tools[key].identifier = `dnd5e.tools.${key}`;
      console.log(`${label} 🔧 Identifier patched to: dnd5e.tools.${key}`);
      fixed++;
    }

    if (!tool.identifier.startsWith("dnd5e.tools.")) {
      console.warn(`${label} ⚠️ Identifier format unexpected: '${tool.identifier}'`);
    }
  }

  console.log(`[OTOV] ✅ Tool validation complete. ${fixed} identifiers fixed, ${replaced} entries replaced.`);
});
