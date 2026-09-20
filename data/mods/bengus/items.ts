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





};