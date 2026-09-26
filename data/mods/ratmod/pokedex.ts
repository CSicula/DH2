export const Pokedex: {[k: string]: ModdedSpeciesData} = {

	pngrat: {
		num: -1,
		name: "Png.Rat",
		types: ["Rat"],
		baseStats: {hp: 40, atk: 105, def: 40, spa: 62, spd: 40, spe: 112},
		abilities: {0: "Steal Food", 1: "Rat Ability"},
		weightkg: 0.3,
	},

	frozenrat: {
		num: -2,
		name: "Frozen Rat",
		types: ["Rat", "Ice"],
		baseStats: {hp: 70, atk: 62, def: 142, spa: 125, spd: 103, spe: 38},
		abilities: {0: "Ice Scales", 1: "Rat Ability"},
		weightkg: 1.1,
	},

	thanquol: {
		num: -3,
		name: "Thanquol",
		types: ["Rat", "Psychic"],
		baseStats: {hp: 110, atk: 113, def: 69, spa: 165, spd: 102, spe: 106},
		abilities: {0: "Meat Shield", 1: "Rat Ability"},
		weightkg: 60,
	},

};