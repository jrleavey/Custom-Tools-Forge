Hooks.once("init", () => {
  console.log("[OTOV] Registering tool proficiencies...");

  CONFIG.DND5E.toolProficiencies.animalcarekit = {
    label: "Animal Care Kit",
    tools: ["animalcarekit"]
  };
  CONFIG.DND5E.toolProficiencies.chemistrykit = {
    label: "Chemistry Kit",
    tools: ["chemistrykit"]
  };
  CONFIG.DND5E.toolProficiencies.climbinggear = {
    label: "Climbing Gear",
    tools: ["climbinggear"]
  };
  CONFIG.DND5E.toolProficiencies.explosiveskit = {
    label: "Explosives Kit",
    tools: ["explosiveskit"]
  };
  CONFIG.DND5E.toolProficiencies.farmerstools = {
    label: "Farmer’s Tools",
    tools: ["farmerstools"]
  };
  CONFIG.DND5E.toolProficiencies.forensickit = {
    label: "Forensic Kit",
    tools: ["forensickit"]
  };
  CONFIG.DND5E.toolProficiencies.gunsmithtools = {
    label: "Gunsmith’s Tools",
    tools: ["gunsmithtools"]
  };
  CONFIG.DND5E.toolProficiencies.hackingtools = {
    label: "Hacking Tools",
    tools: ["hackingtools"]
  };
  CONFIG.DND5E.toolProficiencies.mechanicstools = {
    label: "Mechanic’s Tools",
    tools: ["mechanicstools"]
  };
  CONFIG.DND5E.toolProficiencies.radiationdetector = {
    label: "Radiation Detector",
    tools: ["radiationdetector"]
  };
  CONFIG.DND5E.toolProficiencies.scrungekit = {
    label: "Scrunge Kit",
    tools: ["scrungekit"]
  };
  CONFIG.DND5E.toolProficiencies.signalbooster = {
    label: "Signal Booster",
    tools: ["signalbooster"]
  };
  CONFIG.DND5E.toolProficiencies.surveyorstools = {
    label: "Surveyor’s Tools",
    tools: ["surveyorstools"]
  };
  CONFIG.DND5E.toolProficiencies.trapperstools = {
    label: "Trapper’s Tools",
    tools: ["trapperstools"]
  };

  console.log("[OTOV] ✅ Tool proficiencies registered.");
});
