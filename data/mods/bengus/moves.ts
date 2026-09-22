export const Moves: {[moveid: string]: ModdedMoveData} = {
	/*
	placeholder: {
		name: "",
		type: "",
		category: "",
		basePower: 0,
		accuracy: 100,
		pp: 10,
		shortDesc: "",
		desc: "",
		priority: 0,
		flags: {protect: 1, mirror: 1, metronome: 1},
		onPrepareHit(target, pokemon, move) {
			this.attrLastMove('[still]');
			this.add('-anim', pokemon, "", target);
		},
		secondary: null,
		target: "normal",
	},
	*/


	wreckingball: {
		name: "Wrecking Ball",
		type: "Steel",
		category: "Physical",
		basePower: 100,
		accuracy: 90,
		pp: 10,
		shortDesc: "Ballistics-based; 10% flinch chance",
		desc: "The users slams a wrecking ball into the opponent's face.",
		priority: 0,
		flags: {protect: 1, mirror: 1, metronome: 1, bullet: 1},
		onPrepareHit(target, pokemon, move) {
			this.attrLastMove('[still]');
			this.add('-anim', pokemon, "Gigaton Hammer", target);
		},
		secondary: {
			chance: 10,
			volatileStatus: 'flinch',
		},
		target: "normal",
	},

	
	hellfireblight: {
		name: "Hellfire Blight",
		type: "Fire",
		category: "Special",
		basePower: 100,
		accuracy: 100,
		pp: 5,
		shortDesc: "Applies fire spin on hit. 20% burn.",
		desc: "The user releases a burst of celestial flame, trapping the opponent in an inferno.",
		priority: 0,
		flags: {protect: 1, mirror: 1, metronome: 1},
		volatileStatus: 'partiallytrapped',
		onPrepareHit(target, pokemon, move) {
			this.attrLastMove('[still]');
			this.add('-anim', pokemon, "Inferno", target);
		},
		secondary: {
			chance: 20,
			status: 'brn',
		},
		target: "normal",
	},

	tempestuousblight: {
		name: "Tempestuous Blight",
		type: "Electric",
		category: "Special",
		basePower: 130,
		accuracy: 100,
		pp: 10,
		shortDesc: "20% chance to paralyze the target.",
		desc: "",
		priority: 0,
		flags: {protect: 1, mirror: 1, metronome: 1},
		onPrepareHit(target, pokemon, move) {
			this.attrLastMove('[still]');
			this.add('-anim', pokemon, "Wildbolt Storm", target);
		},
		secondary: {
			chance: 20,
			status: 'par',
		},
		target: "normal",
	},

	solarflare: {
		name: "Solar Flare",
		type: "Fire",
		category: "Special",
		basePower: 110,
		accuracy: 100,
		pp: 10,
		shortDesc: "100% chance to lower opponent's defence.",
		desc: "The user throws a lash of blazing celestial magma, lowering the opponent's defence.",
		priority: 0,
		flags: {protect: 1, mirror: 1, metronome: 1},
		onPrepareHit(target, pokemon, move) {
			this.attrLastMove('[still]');
			this.add('-anim', pokemon, "Mystical Fire", target);
		},
		secondary: {
			chance: 100,
			boosts: {
				def: -1,
			},
		},
		target: "normal",
	},

	extreeveebash: {
		accuracy: 100,
		basePower: 85,
		category: "Physical",
		name: "Extreevee Bash",
		pp: 5,
		shortDesc: "Has +2 priority. Go nuts mia.",
		desc: "The eevee hurls itself with insane speed.",
		priority: 2,
		flags: {contact: 1, protect: 1, mirror: 1, metronome: 1},
		onPrepareHit(target, pokemon, move) {
			this.attrLastMove('[still]');
			this.add('-anim', pokemon, "Extreme Speed", target);
		},

		secondary: null,
		target: "normal",
		type: "Ghost",
	},
	
	noxiousdrain: {
		name: "Noxious Drain",
		type: "Poison",
		category: "Physical",
		basePower: 80,
		accuracy: 100,
		pp: 15,
		shortDesc: "User recovers 50% of the damage dealt.",
		desc: "The user stabs it's mouthparts into the opponent's skin and drains their blood.",
		priority: 0,
		flags: {protect: 1, heal: 1, mirror: 1, metronome: 1},
		drain: [1, 2],
		onPrepareHit(target, pokemon, move) {
			this.attrLastMove('[still]');
			this.add('-anim', pokemon, "Fell Stinger", target);
		},
		secondary: null,
		target: "normal",
	},

	thirdeyeopen: {
		name: "Third Eye Open",
		type: "Psychic",
		category: "Status",
		basePower: 0,
		accuracy: 100,
		pp: 20,
		shortDesc: "Raises SpA/Spe, lowers SpD. Souldrake: becomes awakened",
		desc: "The user awakens to inner power, increasing Special Attack and Speed.",
		priority: 0,
		flags: {snatch: 1, metronome: 1},
		boosts: {
			spa: 1,
			spe: 1,
			spd: -1,
		},
		onPrepareHit(target, pokemon, move) {
			this.attrLastMove('[still]');
			this.add('-anim', pokemon, "Miracle Eye", target);
		},
		
		onHit(pokemon) {
			const oldAbility = pokemon.setAbility('allseeing');
			if (pokemon.baseSpecies.baseSpecies === 'Souldrake' && !pokemon.transformed) {
				move.willChangeForme = true;
			}
			if target.ability !=== 'allseeing' {
				this.add('-ability', pokemon, 'allseeing', '[from] move: Third Eye Open');
				return;
			}
		},
		onAfterMoveSecondarySelf(pokemon, target, move) {
			if (move.willChangeForme) {
				const souldrakeForme = pokemon.species.id === 'souldrakeawakened' ? '' : '-Awakened';
				pokemon.formeChange('Souldrake' + souldrakeForme, this.effect, false, '[msg]');
			}
		},
		secondary: null,
		target: "self",
	},

	yellowbeam: {
		name: "Yellow Beam",
		type: "Yellow",
		category: "Special",
		basePower: 80,
		accuracy: 100,
		pp: 20,
		shortDesc: "Turns the opponent Yellow",
		desc: "SO SO YELLOW",
		priority: 0,
		flags: {protect: 1, mirror: 1, metronome: 1},
		onPrepareHit(target, pokemon, move) {
			this.attrLastMove('[still]');
			this.add('-anim', pokemon, "Charge Beam", target);
		},
		onHit(target) {
			if (target.getTypes().join() === 'Yellow' || !target.setType('Yellow')) {
				// Soak should animate even when it fails.
				// Returning false would suppress the animation.
				this.add('-fail', target);
				return null;
			}
			this.add('-start', target, 'typechange', 'Yellow');
		},
		secondary: null,
		target: "normal",
	},
	
	scramble: {
		name: "Scramble",
		type: "Yellow",
		category: "Status",
		basePower: 0,
		accuracy: 100,
		pp: 10,
		shortDesc: "Confuses opponent then switches out",
		desc: "Confuses opponent then switches out",
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, metronome: 1},
		onPrepareHit(target, pokemon, move) {
			this.attrLastMove('[still]');
			this.add('-anim', pokemon, "Eerie Impulse", target);
		},
		volatileStatus: 'confusion',
		selfSwitch: true,
		secondary: null,
		target: "normal",
	},

	bitumensurge: {
		name: "Bitumen Surge",
		type: "Ground",
		category: "Special",
		basePower: 100,
		accuracy: 100,
		pp: 10,
		shortDesc: "Hits all adjaccent foes; 100% chance to lower evasion.",
		desc: "",
		priority: 0,
		flags: {protect: 1, mirror: 1, metronome: 1},
		onPrepareHit(target, pokemon, move) {
			this.attrLastMove('[still]');
			this.add('-anim', pokemon, "Mud Shot", target);
		},
		secondary: {
			chance: 100,
			boosts: {
				evasion: -1,
			},
		},
		target: "allAdjacentFoes",
	},

	ignitionpoint: {
		name: "Ignition Point",
		type: "Fire",
		category: "Special",
		basePower: 60,
		accuracy: 100,
		pp: 10,
		shortDesc: "Garunteed crit",
		desc: "",
		priority: 0,
		flags: {protect: 1, mirror: 1, metronome: 1},
		onPrepareHit(target, pokemon, move) {
			this.attrLastMove('[still]');
			this.add('-anim', pokemon, "Polar Flare", target);
		},
		willCrit: true,
		secondary: null,
		target: "normal",
	},

	sonicwind: {
		name: "Sonic Wind",
		type: "Flying",
		category: "Special",
		basePower: 105,
		accuracy: 100,
		pp: 10,
		shortDesc: "No additional effect",
		desc: "The user breaks the sound barrier with high-speed winds.",
		priority: 0,
		flags: {protect: 1, mirror: 1, sound: 1, bypasssub: 1, metronome: 1},
		onPrepareHit(target, pokemon, move) {
			this.attrLastMove('[still]');
			this.add('-anim', pokemon, "Boomburst", target);
		},
		secondary: null,
		target: "allAdjacentFoes",
	},

	mustardshot: {
		name: "Mustard Shot",
		type: "Yellow",
		category: "Special",
		basePower: 80,
		accuracy: 100,
		pp: 10,
		shortDesc: "30% chance to inflict burn",
		desc: "MUSTARD MUSTARD MUSTARD",
		priority: 0,
		flags: {protect: 1, mirror: 1, defrost: 1, metronome: 1},
		thawsTarget: true,
		secondary: {
			chance: 30,
			status: 'brn',
		},
		onPrepareHit(target, pokemon, move) {
			this.attrLastMove('[still]');
			this.add('-anim', pokemon, "Tar Shot", target);
		},
		secondary: null,
		target: "normal",
	},

};