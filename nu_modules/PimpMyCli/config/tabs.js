const pimpMyCli = require('../container/pimpMyCli-container')
const {
	nuTEIASbemvindo,
	nuTEIASabre,
	nuMESSAGE,
	nuTERIASfecha,
	nuMESSAGElinks,
	nuMESSAGEtabTwo,
	capitulo,
	newCapitulo,
	capituloDois,
	capituloUm,
	capituloTres,
	nuMESSAGEtabThree,
	capituloQuatro,
	capituloCinco,
	capituloSeis,
	capituloSete,
	capituloOito,
	capituloNove,
	capituloDez,
	capituloOnze,
	capituloDoze,
	capituloTreze
} = require('../../../data/index')
// const {capituloDois} = require('../../../data/capituloDois')
const { heroiVagabundo, goshDev, boiSonoro, ditadoraFacista } = require('../../../data/character')

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
				color: '#008eee'
			}
		})
	]
}

const tabChapters = () => {
	return [
		pimpMyCli({
			agent: 'chapter',
			subAgent: 1,
			msg: capituloUm,
			style: {
				color: '#dd3'
			},
			clear: 2
		}),
		pimpMyCli({
			agent: 'chapter',
			subAgent: 2,
			msg: capituloDois,
			clear: 2
		}),
		pimpMyCli({
			agent: 'chapter',
			subAgent: 3,
			msg: capituloTres,
			clear: 2
		}),
		pimpMyCli({
			agent: 'chapter',
			subAgent: 4,
			msg: capituloQuatro,
			clear: 2
		}),
		pimpMyCli({
			agent: 'chapter',
			subAgent: 5,
			msg: capituloCinco,
			clear: 2
		}),
		pimpMyCli({
			agent: 'chapter',
			subAgent: 6,
			msg: capituloSeis,
			clear: 2
		}),
		pimpMyCli({
			agent: 'chapter',
			subAgent: 7,
			msg: capituloSete,
			clear: 2
		}),
		pimpMyCli({
			agent: 'chapter',
			subAgent: 8,
			msg: capituloOito,
			clear: 2
		}),
		pimpMyCli({
			agent: 'chapter',
			subAgent: 9,
			msg: capituloNove,
			clear: 2
		}),
		pimpMyCli({
			agent: 'chapter',
			subAgent: 10,
			msg: capituloDez,
			clear: 2
		}),
		pimpMyCli({
			agent: 'chapter',
			subAgent: 11,
			msg: capituloOnze,
			clear: 2
		}),
		pimpMyCli({
			agent: 'chapter',
			subAgent: 12,
			msg: capituloDoze,
			clear: 2
		}),
		pimpMyCli({
			agent: 'chapter',
			subAgent: 13,
			msg: capituloTreze,
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
