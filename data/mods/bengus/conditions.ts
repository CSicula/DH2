export const Conditions: {[id: string]: ModdedConditionData} = {
	fear: {
		name: 'Fear',
		effectType: 'Status',
		onStart(target, source, sourceEffect) {
			this.add('-message', 'Chris scares the opponent...');
			if (sourceEffect && sourceEffect.effectType === 'Ability') {
				this.add('-status', target, 'fear', '[from] ability: ' + sourceEffect.name, '[of] ' + source);
			} else {
				this.add('-status', target, 'fear');
			}
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

};
