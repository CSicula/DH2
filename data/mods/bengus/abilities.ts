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

	bloodsucker: {
		onSourceDamagingHit(damage, target, source, move) {
			if (move?.flags['heal']) { 
				target.trySetStatus('psn', source);
			}
		},
		onBasePower(basePower, attacker, defender, move) {
			if (move.flags['heal']) {
				return this.chainModify(1.5);
			}
		},
		flags: {},
		name: "Bloodsucker",
		shortDesc: "Draining moves deal 1.5x damage and poison the target",
	
	},

	allseeing: {
		onModifyMove(move) {
			move.ignoreEvasion = true;
			if (!move.ignoreImmunity) move.ignoreImmunity = {};
			if (move.ignoreImmunity !== true) {
				move.ignoreImmunity['Dark'] = true;
			}
		},
		flags: {},
		name: "All-Seeing",
		shortDesc: "Psychic-type moves ignore dark immunity",


	},
	
	soyellow:{
		onTryHit(target, source, move) {
			if (target !== source && move.flags['sound', 'pulse']) {
				source.trySetStatus('par', target);
			}
		},
		onAllyTryHitSide(target, source, move) {
			if (move.flags['sound', 'pulse']) {
				source.trySetStatus('par', target);
			}
		},
		flags: {breakable: 1},
		name: "So Yellow",
		shortDesc: "If hit by a pulse or sound-based move, the target is paralyzed.",
	},

	criticalheat: {
		onSourceDamagingHit(damage, target, source, move) {
			if (target.getMoveHitData(move).crit) {
				target.trySetStatus('brn', source);
			}
		},
		flags: {},
		name: "Critical Heat",
		shortDesc: "Critical hits burn the target.",
	},

	viscous: {
		onSourceModifyDamage(damage, source, target, move) {
			let mod = 1;
			if (move.type === 'Water') mod *= 2;
			if (move.flags['contact']) mod /= 2;
			return this.chainModify(mod);
		},
		flags: {breakable: 1},
		name: "Viscous",
		shortDesc: "Takes half contact damage, becomes weaker to water.",
	},

	invertebratesuperiority: {
		
		onModifyAtkPriority: 5,
		onModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Bug') {
				return this.chainModify(2.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA(atk, attacker, defender, move) {
			if (move.type === 'Bug') {
				return this.chainModify(2.5);
			}
		},
		flags: {},
		name: "Invertebrate Superiority",
		shortDesc: "Boosts the damage of bug-type moves by 2.5x",
	},

	letsgogambling: {
		onResidualOrder: 28,
		onResidualSubOrder: 3,
		onResidual(pokemon) {
			if (this.randomChance(1, 2)) {
				if (!pokemon.hp) return;
				for (const target of pokemon.foes()) {
					this.damage(target.baseMaxhp, target, pokemon);
				}
			}
		},
		flags: {},
		name: "Let's Go Gambling!",
		shortDesc: "50% chance to ko opposing pokemon every turn.",
	},

	veilofmidnight: {
		onDamagingHit(damage, target, source, move) {
			if (this.randomChance(2, 10) && damage >= target.hp) {
				return target.hp - 1;
			}
		},
		flags: {},
		name: "Veil of Midnight",
		shortDesc: "20% not to be ko'd by a fatal attack.",
	},
	
	oneinakrillion: {
		onResidualOrder: 28,
		onResidualSubOrder: 3,
		onResidual(pokemon) {
			if (this.randomChance(1, 1000000)) {
				
				this.win(pokemon.side);
			}
		},
		onAnyInvulnerabilityPriority: 1,
		onAnyInvulnerability(target, source, move) {
			if (move && (source === this.effectState.target || target === this.effectState.target)) return 0;
		},
		onAnyAccuracy(accuracy, target, source, move) {
			if (move && (source === this.effectState.target || target === this.effectState.target)) {
				return true;
			}
			return accuracy;
		},
		flags: {},
		name: "One in a Krillion",
		shortDesc: "No Guard + 1 in 1 million chance to win the game each turn.",
	},


};