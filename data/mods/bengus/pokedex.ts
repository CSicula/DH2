export const Pokedex: {[k: string]: ModdedSpeciesData} = {
	mrflambaygo: {
		num: -1,
		name: "Mr Flambaygo",
		types: ["Fire"],
		gender: "M",
		baseStats: {hp: 50, atk: 100, def: 150, spa: 150, spd: 100, spe: 50},
		abilities: {0: "Good as Gold", H: "Flame Body"},
		weightkg: 1.2,
	},
	
	wrexur: {
		num: -2,
		name: "Wrexur",
		types: ["Steel", "Ground"],
		baseStats: {hp: 110, atk: 111, def: 130, spa: 66, spd: 92, spe: 63},
		abilities: {0: "Demolitionist", 1: "Heavy Metal", H: "Full Metal Body"},
		weightkg: 600,
	},

	plasmordial: {
		num: -3,
		name: "Plasmordial",
		types: ["Fire", "Electric"],
		baseStats: {hp: 101, atk: 44, def: 72, spa: 183, spd: 122, spe: 178},
		abilities: {0: "Superhot", 1: "Supercharged", H: "Solar Power"},
		weightkg: 3.7,
	},


	eevee: {
		name: "Eevee",
		types: ["Normal"],
		baseStats: {hp: 55, atk: 55, def: 50, spa: 45, spd: 65, spe: 55},
		abilities: {0: "Run Away", 1: "Adaptability", H: "Anticipation"},
		weightkg: 6.5,
		otherFormes: ["Eevee-Mega"],
		formeOrder: ["Eevee", "Eevee-Mega"],
	},



	eeveemega: {
		name: "Eevee-Mega",
		baseSpecies: "Eevee",
		forme: "Mega",
		types: ["Normal", "Ghost"],
		baseStats: {hp: 110, atk: 110, def: 100, spa: 90, spd: 130, spe: 110},
		abilities: {0: "Adaptability", 1:"Run Away"},
		weightkg: 6.5,
		requiredItem: "Eeveeite",
	},
	
	mosquito: {
		num: -5,
		name: "Mosquito",
		types: ["Bug", "Poison", "Flying"],
		baseStats: {hp: 75, atk: 112, def: 58, spa: 73, spd: 66, spe: 113},
		abilities: {0: "Bloodsucker"},
		weightkg: 0.1,
	},

	souldrake: {
		num: -6,
		name: "Souldrake",
		types: ["Dragon"],
		baseStats: {hp: 110, atk: 52, def: 95, spa: 61, spd: 124, spe: 53},
		abilities: {0: "Mind's Eye", 1: "Neuroforce", H: "Regenerator"},
		weightkg: 85.0,
		otherFormes: ["Souldrake-Awakened"],
		formeOrder: ["Souldrake", "Souldrake-Awakened"],
	},

	souldrakeawakened: {
		num: -6,
		name: "Souldrake-Awakened",
		baseSpecies: "souldrake",
		forme: "Awakened",
		types: ["Dragon", "Psychic"],
		baseStats: {hp: 102, atk: 95, def: 62, spa: 124, spd: 103, spe: 85},
		abilities: {0: "All-Seeing"},
		weightkg: 120.0,
		requiredMove: "Third Eye Open",
		battleOnly: "Souldrake",
	},

	terrakionyellow: {
		num: -7,
		name: "Terrakion-Yellow",
		types: ["Rock", "Yellow"],
		gender: "N",
		baseStats: {hp: 91, atk: 129, def: 80, spa: 114, spd: 80, spe: 108},
		abilities: {0: "So Yellow", H: "Dazzling"},
		weightkg: 260,
	},

	tarblob: {
		num: -8,
		name: "Tar Blob",
		types: ["Ground", "Fire", "Rock"],
		baseStats: {hp: 120, atk: 80, def: 105, spa: 95, spd: 85, spe: 52},
		abilities: {0: "Protosynthesis", 1: "Critical Heat", H: "Earth Eater"},
		weightkg: 130,
	},

	noivern: {
		name: "Noivern",
		types: ["Flying", "Dragon"],
		baseStats: {hp: 85, atk: 70, def: 80, spa: 97, spd: 80, spe: 123},
		abilities: {0: "Frisk", 1: "Infiltrator", H: "Telepathy"},
		heightm: 1.5,
		weightkg: 85,
		color: "Purple",
		prevo: "Noibat",
		evoLevel: 48,
		eggGroups: ["Flying", "Dragon"],
	},

	noivernmega: {
		name: "Noivern-Mega",
		baseSpecies: "Noivern",
		forme: "Mega",
		types: ["Flying", "Dragon"],
		baseStats: {hp: 85, atk: 80, def: 95, spa: 127, spd: 105, spe: 143},
		abilities: {0: "Punk Rock"},
		weightkg: 105,
		requiredItem: "Noivernite",
	},

	mustard: {
		num: -10,
		name: "Mustard",
		types: ["Yellow", "Grass"],
		baseStats: {hp: 108, atk: 65, def: 116, spa: 98, spd: 113, spe: 35},
		abilities: {0: "Viscous"},
		weightkg: 0.1,
	},

	centiskorch: {
		num: -11,
		name: "Centiskorch",
		types: ["Fire", "Bug"],
		baseStats: {hp: 120, atk: 135, def: 85, spa: 110, spd: 110, spe: 85},
		abilities: {0: "Desolate Land", 1: "Invertebrate Superiority", H: "Flame Body"},
		weightkg: 120,
		canGigantamax: "G-Max Centiferno",
	},

	centiskorchcerulean: {
		num: -12,
		name: "Centiskorch-Cerulean",
		baseSpecies: "Centiskorch",
		forme: "Cerulean",
		types: ["Fire", "Bug", "Water"],
		baseStats: {hp: 105, atk: 100, def: 75, spa: 145, spd: 120, spe: 100},
		abilities: {0: "Primordial Sea", 1: "Invertebrate Superiority", H: "Storm Drain"},
		weightkg: 120,
		canGigantamax: "G-Max Centiferno",
	},

};