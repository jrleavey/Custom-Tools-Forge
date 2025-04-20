Hooks.once("init", () => {
  console.log("[OTOV] 🛠️ Registering OTOV tools...");

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
    gunsmithtools: { label: "Gunsmith’s Tools", ability: "dex" },
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

  for (const [id, data] of Object.entries(otovTools)) {
    CONFIG.DND5E.tools[id] = {
      ...data,
      identifier: `dnd5e.tools.${id}`
    };
    console.log(`[OTOV] ✅ Tool '${id}' registered.`);
  }

  console.log("[OTOV] ✅ All OTOV tools injected into CONFIG.DND5E.tools.");
});
