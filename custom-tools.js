Hooks.once("init", () => {
  console.log("[OTOV] 🛠️ Initializing OTOV Custom Tools...");

  CONFIG.DND5E.toolTypes.otov = "OTOV Tools";
  console.log("[OTOV] ➕ Added custom tool type 'otov' to CONFIG.DND5E.toolTypes");

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
    const identifier = `dnd5e.tools.${toolId}`; // ✅ string identifier to prevent crash
    CONFIG.DND5E.tools[toolId] = {
      ability,
      type: "otov",
      identifier
    };
    console.log(`[OTOV] ✅ Registered tool: '${toolId}' → Ability: ${ability}, Type: 'otov', Identifier: '${identifier}'`);
  }

  console.log(`[OTOV] 🧰 Total custom tools registered: ${Object.keys(otovTools).length}`);
});

Hooks.once("ready", () => {
  console.log("[OTOV] 🔍 Validating tool definitions at Foundry ready hook...");

  const otovToolIds = Object.keys(CONFIG.DND5E.tools).filter(key => key.includes("_"));
  console.log(`[OTOV] 🔎 Found ${otovToolIds.length} tools with underscores (likely OTOV tools).`);

  for (const toolId of otovToolIds) {
    const tool = CONFIG.DND5E.tools[toolId];

    if (typeof tool !== "object" || tool === null) {
      console.error(`[OTOV] ❌ TOOL ERROR: '${toolId}' is not a valid object. Current value:`, tool);
      continue;
    }

    if (typeof tool.identifier !== "string") {
      const fixedId = `dnd5e.tools.${toolId}`;
      console.warn(`[OTOV] ⚠️ Tool '${toolId}' had invalid identifier (type: ${typeof tool.identifier}). Setting to '${fixedId}'.`);
      tool.identifier = fixedId;
    }

    console.log(`[OTOV] ✅ Tool '${toolId}' has valid identifier: '${tool.identifier}'`);
  }

  console.log("[OTOV] ✅ Custom tool integrity check complete.");

  // ✅ In-game UI confirmation message
  ui.notifications.info("✅ OTOV Custom Tools module loaded and active.", { permanent: true });
});
