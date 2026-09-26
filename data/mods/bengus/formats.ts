import { FormatData } from '../../../sim/dex-formats';

export const Formats: FormatData[] = [
	{
		name: "[Gen 9] Bengus OU",
		desc: `Jizzing myself that I actually got this to work.`,
		threads: [ //This shows up when using /tier on the format and is normally used for resource links
			`&bullet; <a href="URL of your resource here">Name of your resource here</a>`,
		],
		mod: 'bengus',
		ruleset: ['Standard NatDex', 'Terastal Clause', 'Species Clause', 'Sleep Clause Mod', 'Data Mod', 'Mega Data Mod', 'Evasion Clause', 'OHKO Clause'],
		banlist: [ 'Arena Trap', 'Shadow Tag', 'Moody', 'King\'s Rock', 'Quick Claw', 'Razor Fang', 'Shed Tail', 'Baton Pass', 'Assist', 'Last Respects',],
		unbanlist: ['Shedinja', 'G-Max Befuddle', 'G-Max Steelsurge',],
		teambuilderFormat: 'National Dex',
		onValidateTeam(team, format) {
			let speciesTable = {};
			let allowedTiers = ['Bengus OU', 'Bengus OU (by technicality)', 'OU'];
			for (const set of team) {
				let template = this.dex.species.get(set.species);
				if (!allowedTiers.includes(template.tier)) {
					return [set.species + ' is illegal kys NOW!'];
				}
			}
		},

	},

	{
		name: "[Gen 9] Bengus Ubers",
		desc: `Dumpster fire`,
		threads: [ //This shows up when using /tier on the format and is normally used for resource links
			`&bullet; <a href="URL of your resource here">Name of your resource here</a>`,
		],
		mod: 'bengus',
		ruleset: ['Standard NatDex', 'Terastal Clause', 'Species Clause', 'Sleep Clause Mod', 'Data Mod', 'Mega Data Mod', 'Evasion Clause', 'OHKO Clause'],
		banlist: ['King\'s Rock', 'Quick Claw', 'Razor Fang', 'Baton Pass', 'Assist',],
		unbanlist: ['Shedinja'],
		teambuilderFormat: 'National Dex',
		onValidateTeam(team, format) {
			let speciesTable = {};
			let allowedTiers = ['Bengus OU', 'Bengus Ubers', 'Bengus OU (by technicality)'];
			for (const set of team) {
				let template = this.dex.species.get(set.species);
				if (!allowedTiers.includes(template.tier)) {
					return [set.species + ' is illegal kys NOW!'];
				}
			}
		},

	},



];