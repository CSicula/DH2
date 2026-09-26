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
		flags: {contact: 1, protect: 1, mirror: 1, metronome: 1, bite: 1},
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

	iciclerain: {
		name: "Icicle Rain",
		type: "Ice",
		category: "Special",
		basePower: 105,
		accuracy: 100,
		pp: 10,
		shortDesc: "Sets snow",
		desc: "",
		priority: 0,
		flags: {protect: 1, mirror: 1, metronome: 1},
		onPrepareHit(target, pokemon, move) {
			this.attrLastMove('[still]');
			this.add('-anim', pokemon, "Icicle crash", target);
		},
		weather: 'snow',
		secondary: null,
		target: "normal",
	},

	coldbite: {
		name: "Cold Bite",
		type: "Ice",
		category: "Physical",
		basePower: 60,
		accuracy: 100,
		pp: 20,
		shortDesc: "35% Freeze chance.",
		desc: "",
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, bite: 1, metronome: 1},
		secondary: {
			chance: 35,
			status: 'frz',
		},
		target: "normal",
	},

	accidentalblast: {
		name: "Accidental Blast",
		type: "Rat",
		category: "Special",
		basePower: 160,
		accuracy: 70,
		pp: 10,
		shortDesc: "Inflicts confusion on hit.",
		desc: "",
		priority: 0,
		flags: {protect: 1, mirror: 1, metronome: 1},
		onPrepareHit(target, pokemon, move) {
			this.attrLastMove('[still]');
			this.add('-anim', pokemon, "Focus Blast", target);
		},
		onHit(target, pokemon) {
			pokemon.trySetVolatileStatus('confusion', pokemon);
		},
		secondary: null,
		target: "normal",
	},

	belligerence: {
		name: "Belligerence",
		type: "Rat",
		category: "Special",
		basePower: 60,
		accuracy: 100,
		pp: 10,
		shortDesc: "100% chance to confuse target.",
		desc: "",
		priority: 0,
		flags: {protect: 1, mirror: 1, metronome: 1},
		onPrepareHit(target, pokemon, move) {
			this.attrLastMove('[still]');
			this.add('-anim', pokemon, "Teeter Dance", target);
		},
		secondary: {
			chance: 100,
			volatileStatus: 'confusion',
		},
		target: "normal",
	},

	failedscheme: {
		name: "Failed Scheme",
		type: "Psychic",
		category: "Special",
		basePower: 120,
		accuracy: 100,
		pp: 10,
		shortDesc: "",
		desc: "",
		priority: 0,
		flags: {allyanim: 1, metronome: 1, futuremove: 1},
		onPrepareHit(target, pokemon, move) {
			this.attrLastMove('[still]');
			this.add('-anim', pokemon, "Future Sight", target);
		},
		onTry(source, target) {
			if (!target.side.addSlotCondition(target, 'futuremove')) return false;
			Object.assign(target.side.slotConditions[target.position]['futuremove'], {
				duration: 3,
				move: 'futuresight',
				source: source,
				moveData: {
					id: 'failedscheme',
					name: "Failed Scheme",
					accuracy: 100,
					basePower: 120,
					category: "Special",
					priority: 0,
					flags: {allyanim: 1, metronome: 1, futuremove: 1},
					ignoreImmunity: false,
					effectType: 'Move',
					type: 'Psychic',
				},
			});
			this.add('-start', source, 'move: Future Sight');
			return this.NOT_FAIL;
		},

		secondary: null,
		target: "normal",
	},

	runaway: {
		name: "Run Away",
		type: "Rat",
		category: "Status",
		basePower: 0,
		accuracy: true,
		pp: 10,
		shortDesc: "Switches out and heals 50%",
		desc: "",
		priority: 0,
		flags: {snatch: 1, heal: 1, metronome: 1},
		heal: [1, 2],
		onPrepareHit(target, pokemon, move) {
			this.attrLastMove('[still]');
			this.add('-anim', pokemon, "Recover", target);
		},
		selfSwitch: true,
		secondary: null,
		target: "self",
	},

};