const pimpMyCli = require('../container/pimpMyCli-container')
const {
	nuTEIASbemvindo,
	nuTEIASabre,
	nuMESSAGE,
	nuTERIASfecha,
	nuMESSAGElinks,
	nuMESSAGEtabTwo,
	nuMESSAGEtabFift,
	nuMESSAGEtabThree
} = require('../../data/capituloUM')
const {capituloDois} = require('../../data/capituloDois')
const {heroiVagabundo, goshDev, boiSonoro, ditadoraFacista} = require('../../data/character')

const tabMULTIPLEarrays = () => {
	return [
		pimpMyCli({
			agent: 'message',
			subAgent: 'welcome',
			msg: nuTEIASbemvindo,
			style: {
				color: '#0000ff',
				inverse: true,
				bold: true
			},
			clear: 2
		}),
		pimpMyCli({
			agent: 'message',
			subAgent: 'welcome',
			msg: nuTEIASabre,
			style: {
				color: '#FFFF00',
				bold: true
			}
		}),
		pimpMyCli({
			agent: 'message',
			subAgent: 'welcome',
			msg: nuMESSAGE,
			style: {
				color: '#00FF00'
			}
		}),
		pimpMyCli({
			agent: 'message',
			subAgent: 'welcome',
			msg: nuTERIASfecha,
			style: {
				color: '#FFFF00',
				bold: true
			}
		}),
		pimpMyCli({
			agent: 'message',
			subAgent: 'welcome',
			msg:
				nuMESSAGElinks +
				`
			`,
			style: {
				color: '#0000FF'
			}
		})
	]
}

const tabChapters = () => {
	return [
		pimpMyCli({
			agent: 'chapter',
			subAgent: 1,
			msg: nuMESSAGEtabTwo,
			style: {
				color: '#dd3'
			},
			clear: 2
		}),
		pimpMyCli({
			agent: 'chapter',
			subAgent: 2,
			msg: nuMESSAGEtabFift,
			clear: 2
		}),
		pimpMyCli({
			agent: 'chapter',
			subAgent: 3,
			msg: capituloDois,
			clear: 2
		})
	]
}

const tabCharacters = () => {
	return [
		pimpMyCli({
			agent: 'characters',
			subAgent: 'heroiVagabundo',
			msg: heroiVagabundo,
			style: {
				color: '#dd3'
			},
			clear: 2
		}),
		pimpMyCli({
			agent: 'characters',
			subAgent: 'ditadoraFacista',
			msg: ditadoraFacista,
			style: {
				color: '#dd3'
			},
			clear: 2
		}),
		pimpMyCli({
			agent: 'characters',
			subAgent: 'boiSonoro',
			msg: boiSonoro,
			style: {
				color: '#dd3'
			},
			clear: 2
		}),
		pimpMyCli({
			agent: 'characters',
			subAgent: 'goshDev',
			msg: goshDev,
			style: {
				color: '#dd3'
			},
			clear: 2
		})
	]
}

const tabTWO = () => {
	return [
		pimpMyCli({
			agent: 'message',
			msg: nuMESSAGEtabTwo,
			style: {
				color: '#0000FF'
			},
			clear: false
		})
	]
}

const tabTHREE = () => {
	return [
		pimpMyCli({
			agent: 'message',
			msg: nuMESSAGEtabThree,
			style: {
				color: '#ffffff'
			},
			clear: false
		})
	]
}

module.exports = {
	tabMULTIPLEarrays,
	tabChapters,
	tabTWO,
	tabCharacters,
	tabTHREE
}
