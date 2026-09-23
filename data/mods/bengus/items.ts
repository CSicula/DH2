export const Items: {[itemid: string]: ModdedItemData} = {
	eeveeite: {
		name: "Eeveeite",
		megaStone: "Eevee-Mega",
		megaEvolves: "Eevee",
		shortDesc: "If held by an Eevee, this item allows it to Mega Evolve in battle.",
		itemUser: ["Eevee"],
		fling: {
			basePower: 80,
		},
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
	},

	fortnitedisk: {
		name: "Fortnite Disk",
		fling: {
			basePower: 30,
		},
		shortDesc: "Boosts bullet-based moves by 1.2x",
		onBasePowerPriority: 23,
		onBasePower(basePower, user, target, move) {
			if (move.flags['punch']) {
				return this.chainModify([4915, 4096]);
			}
		},
	},

	noivernite: {
		name: "Noivernite",
		megaStone: "Noivern-Mega",
		megaEvolves: "Noivern",
		shortDesc: "If held by an Noivern, this item allows it to Mega Evolve in battle.",
		itemUser: ["Noivern"],
		fling: {
			basePower: 80,
		},
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
	},


};