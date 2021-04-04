const cli = require('./index')
const capituloUM = require('./capituloUM')

const tabWELCOME = () => {
	return [
		cli({
			agent: 'message',
			msg: capituloUM.nuTEIASbemvindo,
			style: {
				color: '#0000ff',
				inverse: true,
				bold: true
			},
			clear: true
		}),
		cli({
			agent: 'message',
			msg: capituloUM.nuTEIASabre,
			style: {
				color: '#FFFF00',
				bold: true
			}
		}),
		cli({
			agent: 'message',
			msg: capituloUM.nuMESSAGE,
			style: {
				color: '#00FF00'
			}
		}),
		cli({
			agent: 'message',
			msg: capituloUM.nuTERIASfecha,
			style: {
				color: '#FFFF00',
				bold: true
			}
		}),
		cli({
			agent: 'message',
			msg:
				capituloUM.nuMESSAGElinks +
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
		cli({
			agent: 'chapter',
			subAgent: 1,
			msg: capituloUM.nuMESSAGEtabTwo,
			style: {
				color: '#dd3'
			},
			clear: true
		}),
		cli({
			agent: 'chapter',
			subAgent: 2,
			msg: capituloUM.nuMESSAGEtabFift,
			clear: true
		})
	]
}

const tabTWO = () => {
	return [
		cli({
			agent: 'message',
			msg: capituloUM.nuMESSAGEtabTwo,
			style: {
				color: '#0000FF'
			},
			clear: false
		})
	]
}

const tabTHREE = () => {
	return [
		cli({
			agent: 'message',
			msg: capituloUM.nuMESSAGEtabThree,
			style: {
				color: '#ffffff'
			},
			clear: false
		})
	]
}

module.exports = {
	tabWELCOME,
	tabChapters,
	tabTWO,
	tabTHREE
}
