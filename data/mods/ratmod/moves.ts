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


	nibble: {
		name: "Nibble",
		type: "Rat",
		category: "Physical",
		basePower: 1,
		accuracy: 100,
		pp: 10,
		shortDesc: "Hits 80 times",
		desc: "",
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, metronome: 1},
		onPrepareHit(target, pokemon, move) {
			this.attrLastMove('[still]');
			this.add('-anim', pokemon, "Bite", target);
		},
		multihit: 80,
		secondary: null,
		target: "normal",
	},

	plague: {
		name: "Plague",
		type: "Poison",
		category: "Special",
		basePower: 50,
		accuracy: 100,
		pp: 20,
		shortDesc: "100% chance to badly poison target.",
		desc: "",
		priority: 0,
		flags: {protect: 1, mirror: 1, metronome: 1},
		onPrepareHit(target, pokemon, move) {
			this.attrLastMove('[still]');
			this.add('-anim', pokemon, "Poison Gas", target);
		},
		secondary: {
			chance: 100,
			status: 'tox',
		},
		target: "normal",
	},




};