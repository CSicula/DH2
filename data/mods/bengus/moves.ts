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
			this.add('-anim', pokemon, "Thunderclap", target);
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


};