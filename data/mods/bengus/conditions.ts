export const Conditions: {[id: string]: ModdedConditionData} = {
	fear: {
		name: 'Fear',
		// Volatile
		onStart(target, source, sourceEffect) {
			this.add('-message', 'Chris scares the opponent...');
			if (sourceEffect && sourceEffect.effectType === 'Ability') {
				this.add('-status', target, 'fear', '[from] ability: ' + sourceEffect.name, '[of] ' + source);
			} else {
				this.add('-status', target, 'fear');
			}
			this.effectState.time = this.random(min, 6);
		},

		onEnd(target) {
			this.add('-end', target, 'fear');
		},

		onDamagingHit(damage, target, source, move) {
			if (!this.canSwitch(target.side) || target.forceSwitchFlag || target.switchFlag) return;
			for (const side of this.sides) {
				for (const active of side.active) {
					active.switchFlag = false;
				}
			}
			target.switchFlag = true;
		},
	},

	frostbite: {
		name: 'Frostbite',
		// Volatile
		onStart(target, source, sourceEffect) {
			this.add('-message', 'Chilled to the bone...');
			if (sourceEffect && sourceEffect.effectType === 'Ability') {
				this.add('-status', target, 'frostbite', '[from] ability: ' + sourceEffect.name, '[of] ' + source);
			} else {
				this.add('-status', target, 'frostbite');
			}
			this.effectState.time = this.random(min, 6);
		},

		onEnd(target) {
			this.add('-end', target, 'frostbite');
		},


		onResidual(pokemon) {
				if (!pokemon.hp) return;
				let move: Move | ActiveMove | null = target.lastMove;
				if (!move || move.isZ) return;
				if (move.isMax && move.baseMove) move = this.dex.moves.get(move.baseMove);

				const ppDeducted = pokemon.deductPP(move.id, 3);
				if (!ppDeducted) return;
				this.add('-activate', pokemon, 'volatile: Frostbite', move.name, ppDeducted);
			},

			
		},
	},

};
