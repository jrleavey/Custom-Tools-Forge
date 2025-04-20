Hooks.once("init", () => {
  console.log("[OTOV] 🛠️ Initializing OTOV tools (no custom type)...");

  const otovTools = {
    animalcarekit: { label: "Animal Care Kit", ability: "wis" },
    brewerssupplies: { label: "Brewer’s Supplies", ability: "wis" },
    calligrapherssupplies: { label: "Calligrapher’s Supplies", ability: "int" },
    cartographerstools: { label: "Cartographer’s Tools", ability: "int" },
    chemistrykit: { label: "Chemistry Kit", ability: "int" },
    climbinggear: { label: "Climbing Gear", ability: "str" },
    cookingkit: { label: "Cooking Kit", ability: "wis" },
    disguisekit: { label: "Disguise Kit", ability: "cha" },
    explosiveskit: { label: "Explosives Kit", ability: "int" },
    farmerstools: { label: "Farmer’s Tools", ability: "wis" },
    fishingtackle: { label: "Fishing Tackle", ability: "wis" },
    forensickit: { label: "Forensic Kit", ability: "int" },
    gunsmithstools: { label: "Gunsmith’s Tools", ability: "dex" },
    hackingtools: { label: "Hacking Tools", ability: "int" },
    herbalismkit: { label: "Herbalism Kit", ability: "wis" },
    jewelerstools: { label: "Jeweler’s Tools", ability: "dex" },
    leatherworkingtools: { label: "Leatherworking Tools", ability: "dex" },
    mechanicstools: { label: "Mechanic’s Tools", ability: "int" },
    minerstools: { label: "Miner’s Tools", ability: "str" },
    navigatorstools: { label: "Navigator’s Tools", ability: "int" },
    painterstools: { label: "Painter’s Tools", ability: "wis" },
    poisonerskit: { label: "Poisoner’s Kit", ability: "int" },
    potterstools: { label: "Potter’s Tools", ability: "int" },
    radiationdetector: { label: "Radiation Detector", ability: "int" },
    scrungekit: { label: "Scrunge Kit", ability: "dex" },
    sewingkit: { label: "Sewing Kit", ability: "dex" },
    signalbooster: { label: "Signal Booster", ability: "int" },
    smithstools: { label: "Smith’s Tools", ability: "str" },
    surveyorstools: { label: "Surveyor’s Tools", ability: "wis" },
    tinkerstools: { label: "Tinker’s Tools", ability: "int" },
    trapperstools: { label: "Trapper’s Tools", ability: "wis" }
  };

  for (const [key, { label, ability }] of Object.entries(otovTools)) {
    CONFIG.DND5E.tools[key] = {
      ability,
      // No custom type, stays in "Other"
      identifier: key // must be a string, no nesting or prefix
    };
    CONFIG.DND5E.toolProficiencies[key] = {
      label,
      tools: [key]
    };
    console.log(`[OTOV] ✅ Registered tool: ${label} (${key}) → Ability: ${ability}`);
  }

  console.log(`[OTOV] 🧰 Finished registering ${Object.keys(otovTools).length} OTOV tools.`);
});

Hooks.once("ready", () => {
  try {
    for (const [key, tool] of Object.entries(CONFIG.DND5E.tools)) {
      if (!tool || typeof tool !== "object") {
        console.warn(`[OTOV] ❌ Malformed tool object: ${key}`, tool);
        continue;
      }
      if (typeof tool.identifier !== "string") {
        console.error(`[OTOV] ❌ Invalid identifier for tool: ${key}`, tool);
        ui.notifications.warn(`OTOV Tool '${key}' is misconfigured and may cause crashes.`);
      }
    }

    ui.notifications.info("✅ OTOV Tools module initialized successfully.");
  } catch (err) {
    console.error("[OTOV] ❌ Error during ready hook validation:", err);
    ui.notifications.error("❌ OTOV Tools encountered a startup error. See console for details.");
  }
});
