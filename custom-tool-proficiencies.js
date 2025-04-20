Hooks.once("init", () => {
  const toolLabels = {
    animal_care_kit: "Animal Care Kit",
    brewers_supplies: "Brewer’s Supplies",
    calligraphers_supplies: "Calligrapher’s Supplies",
    cartographers_tools: "Cartographer’s Tools",
    chemistry_kit: "Chemistry Kit",
    climbing_gear: "Climbing Gear",
    cooking_kit: "Cooking Kit",
    disguise_kit: "Disguise Kit",
    explosives_kit: "Explosives Kit",
    farmers_tools: "Farmer’s Tools",
    fishing_tackle: "Fishing Tackle",
    forensic_kit: "Forensic Kit",
    gunsmiths_tools: "Gunsmith’s Tools",
    hacking_tools: "Hacking Tools",
    herbalism_kit: "Herbalism Kit",
    jewelers_tools: "Jeweler’s Tools",
    leatherworking_tools: "Leatherworking Tools",
    mechanics_tools: "Mechanic’s Tools",
    miners_tools: "Miner’s Tools",
    navigators_tools: "Navigator’s Tools",
    painters_tools: "Painter’s Tools",
    poisoners_kit: "Poisoner’s Kit",
    potters_tools: "Potter’s Tools",
    radiation_detector: "Radiation Detector",
    scrunge_kit: "Scrunge Kit",
    sewing_kit: "Sewing Kit",
    signal_booster: "Signal Booster",
    smiths_tools: "Smith’s Tools",
    surveyors_tools: "Surveyor’s Tools",
    tinkers_tools: "Tinker’s Tools",
    trappers_tools: "Trapper’s Tools"
  };

  for (const [toolId, label] of Object.entries(toolLabels)) {
    CONFIG.DND5E.toolProficiencies[toolId] = {
      label,
      tools: [toolId]
    };
    console.log(`[OTOV] 🧰 Registered tool proficiency: ${toolId} → "${label}"`);
  }

  console.log("[OTOV] ✅ All OTOV tool proficiencies loaded.");
});
