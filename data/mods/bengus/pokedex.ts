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

};