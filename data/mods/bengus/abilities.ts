export const Abilities: {[k: string]: ModdedAbilityData} = {
	/*
	placeholder: {
		
		flags: {},
		name: "",
		shortDesc: "",
	},
	*/
	demolitionist: {
		onBasePowerPriority: 19,
		onBasePower(basePower, attacker, defender, move) {
			if (move.flags['bullet']) {
				// this.debug('Sharpness boost');
				return this.chainModify(1.5);
			}
		},
		flags: {},
		name: "Demolitionist",
		shortDesc: "Boosts the power of ballistics (bullet) based moves by 1.5x",
	},	

	superhot: {
		onPrepareHit(source, target, move) {
			if (move.category === 'Status' || move.multihit || move.flags['noparentalbond'] || move.flags['charge'] ||
			move.flags['futuremove'] || move.spreadHit || move.isZ || move.isMax) return;
			if (move.type === 'Fire') {
				this.boost({spa: 1}, this.effectState.target);
			}
		},
		flags: {},
		name: "Superhot",
		shortDesc: "Raises special attack by 1 stage when using a fire-type move.",
	},

	supercharged: {
		onPrepareHit(source, target, move) {
			if (move.category === 'Status' || move.multihit || move.flags['noparentalbond'] || move.flags['charge'] ||
			move.flags['futuremove'] || move.spreadHit || move.isZ || move.isMax) return;
			if (move.type === 'Electric') {
				this.boost({spe: 1}, this.effectState.target);
			}
		},
		flags: {},
		name: "Supercharged",
		shortDesc: "Raises speed by 1 stage when using an electric-type move.",
	},

};