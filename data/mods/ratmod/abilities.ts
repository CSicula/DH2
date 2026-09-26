export const Abilities: {[k: string]: ModdedAbilityData} = {
	/*
	placeholder: {
		
		flags: {},
		name: "",
		shortDesc: "",
	},
	*/
	
	stealfood: {
		onStart(pokemon) {
			for (const target of pokemon.adjacentFoes()) {
				if (source.hp && item.isBerry && ) {
				this.add('-enditem', target, item.name, '[from] stealeat', '[ability] Steal Food', '[of] ' + source);
				if (this.singleEvent('Eat', item, null, source, null, null)) {
					this.runEvent('EatItem', source, null, null, item);
					if (item.id === 'leppaberry') target.staleness = 'external';
				}
				if (item.onEat) source.ateBerry = true;
			}

			}
		},
		flags: {},
		name: "Steal Food",
		shortDesc: "Consumes berry on switch-in",
	},



};