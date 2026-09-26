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
				if (item.isBerry) {
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

	ratability: {
		
		flags: {},
		name: "Rat Ability",
		shortDesc: "No additional effect, but it has aura.",
	},
	
	meatshield: {
		onDamagePriority: 1,
		onDamage(damage, target, source, effect) {
			if (effect?.effectType === 'Move' && ['thanquol'].includes(target.species.id)) {
				this.add('-activate', target, 'ability: Meatshield');
				this.effectState.busted = true;
				return 0;
			}
		},
		onCriticalHit(target, source, move) {
			if (!target) return;
			if (!['thanquol'].includes(target.species.id)) {
				return;
			}
			const hitSub = target.volatiles['substitute'] && !move.flags['bypasssub'] && !(move.infiltrates && this.gen >= 6);
			if (hitSub) return;

			if (!target.runImmunity(move.type)) return;
			return false;
		},
		onEffectiveness(typeMod, target, type, move) {
			if (!target || move.category === 'Status') return;
			if (!['thanquol'].includes(target.species.id)) {
				return;
			}

			const hitSub = target.volatiles['substitute'] && !move.flags['bypasssub'] && !(move.infiltrates && this.gen >= 6);
			if (hitSub) return;

			if (!target.runImmunity(move.type)) return;
			return 0;
		},
		onUpdate(pokemon) {
			if (['thanquol'].includes(pokemon.species.id) && this.effectState.busted) {
				const speciesid = pokemon.species.id === 'thanquol';
				this.damage(pokemon.baseMaxhp / 16, pokemon, pokemon, this.dex.species.get(speciesid));
			}
		},
		flags: {
			failroleplay: 1, noreceiver: 1, noentrain: 1, notrace: 1, failskillswap: 1, cantsuppress: 1,
			breakable: 1, notransform: 1,
		},
		name: "Meat Shield",
		shortDesc: "First hit deals 1/16 hp instead.",
	},
};