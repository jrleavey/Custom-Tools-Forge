Hooks.once("init", () => {
  console.log("[OTOV] 🛠️ Registering OTOV Tools into CONFIG.DND5E.tools");

  const otovTools = {
    animalcarekit: ["Animal Care Kit", "wis"],
    brewerssupplies: ["Brewer’s Supplies", "wis"],
    calligrapherssupplies: ["Calligrapher’s Supplies", "int"],
    cartographerstools: ["Cartographer’s Tools", "int"],
    chemistrykit: ["Chemistry Kit", "int"],
    climbinggear: ["Climbing Gear", "str"],
    cookingkit: ["Cooking Kit", "wis"],
    disguisekit: ["Disguise Kit", "cha"],
    explosiveskit: ["Explosives Kit", "int"],
    farmerstools: ["Farmer’s Tools", "wis"],
    fishingtackle: ["Fishing Tackle", "wis"],
    forensickit: ["Forensic Kit", "int"],
    gunsmithtools: ["Gunsmith’s Tools", "dex"],
    hackingtools: ["Hacking Tools", "int"],
    herbalismkit: ["Herbalism Kit", "wis"],
    jewelerstools: ["Jeweler’s Tools", "dex"],
    leatherworkingtools: ["Leatherworking Tools", "dex"],
    mechanicstools: ["Mechanic’s Tools", "int"],
    minerstools: ["Miner’s Tools", "str"],
    navigatorstools: ["Navigator’s Tools", "int"],
    painterstools: ["Painter’s Tools", "dex"],
    poisonerskit: ["Poisoner’s Kit", "int"],
    potterstools: ["Potter’s Tools", "int"],
    radiationdetector: ["Radiation Detector", "int"],
    scrungekit: ["Scrunge Kit", "dex"],
    sewingkit: ["Sewing Kit", "dex"],
    signalbooster: ["Signal Booster", "int"],
    smithstools: ["Smith’s Tools", "str"],
    surveyorstools: ["Surveyor’s Tools", "wis"],
    tinkerstools: ["Tinker’s Tools", "int"],
    trapperstools: ["Trapper’s Tools", "wis"]
  };

  let count = 0;

  for (const [id, [label, ability]] of Object.entries(otovTools)) {
    if (!CONFIG.DND5E.tools[id]) {
      CONFIG.DND5E.tools[id] = {
        ability: ability,
        id: "" // <-- No type or identifier: ensures it falls into "Other"
      };
      count++;
      console.log(`[OTOV] ✅ Tool registered: ${label} (${id}) → Ability: ${ability}`);
    } else {
      console.warn(`[OTOV] ⚠️ Tool '${id}' already exists in CONFIG.DND5E.tools`);
    }
  }

  console.log(`[OTOV] ✅ ${count} OTOV tools registered under 'Other' category.`);
});
