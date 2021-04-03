// const utils = require('./utils')
const cli = require('./index')
const capituloUM = require('./capituloUM')
// const clearConsole = require('clear-any-console')

const log = console.log

const tabONE = [
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

const tabChapters = [
	cli({
		agent: 'chapter',
		subAgent: 1,
		msg: capituloUM.nuMESSAGEtabTwo,
		style: {
			color: '#dd3'
		},
		clear: false
	}),
	cli({
		agent: 'chapter',
		subAgent: 2,
		msg: capituloUM.nuMESSAGEtabFift,
		clear: false
	})
]

const constructorTabWelcome = () => {
	tabONE.map(nowLogWelcome => {
		return console.log(nowLogWelcome.styledMsg(nowLogWelcome.msg))
	})
}

// const chooseChapters = require('./chooseChapters')

const constructorTabChapter = chapter => {
	const maybePluralize = (count, noun, suffix = 's') => `${noun}${count !== 1 ? suffix : ''}`

	tabChapters.map(nowChapter => {
		if (nowChapter.subAgent === chapter) {
			const qtdRow = 3
			const splitText = nowChapter.msg.split('\n')
			const totalRows = splitText.length
			let totalFinal = qtdRow >= totalRows ? totalRows : qtdRow
			const pluralPrimeiras = maybePluralize(totalFinal, 'Primeira')

			let countLine = 0
			console.log(`${pluralPrimeiras} ${totalFinal} de um total de ${totalRows} linhas: `)
			splitText.map(nowLine => {
				countLine++
				if (countLine <= totalFinal) {
					console.log(`${countLine}:  ${nowLine}`)
				}
			})
			console.log(`\n-->\n`)

			let countNextLine = 0
			const nextLines = splitText.slice(qtdRow, qtdRow + 1 + qtdRow)
			const pluralProximas = maybePluralize(totalFinal, 'Próxima')
			const nextTotalFinalText = totalFinal <= 1 ? 0 : totalFinal
			console.log(`${pluralProximas} ${nextTotalFinalText} de um total de ${totalRows} linhas: `)
			nextLines.map(nextLine => {
				countNextLine++
				if (countNextLine <= totalFinal) {
					const nowLine = qtdRow + countNextLine
					console.log(`${nowLine}:  ${nextLine}`)
				}
			})

			console.log(`\n-->\n`)

			let countLastLine = 0
			const ultimaProximas = maybePluralize(totalFinal, 'Última')
			const lastTotalFinalText = totalFinal <= 1 ? 0 : totalFinal
			const slicedArr = splitText.slice(totalRows - totalFinal)
			slicedArr.map(lastLine => {
				countLastLine++
				if (countLastLine === 1) {
					console.log(
						`${ultimaProximas} ${lastTotalFinalText} de um total de ${totalRows} linhas:  `
					)
				}
				if (countLastLine <= totalFinal) {
					const nowLine = totalRows - totalFinal + countLastLine
					console.log(`${nowLine}:  ${lastLine}`)
				}
			})
		}
	})
}

const tabTWO = [
	cli({
		agent: 'message',
		msg: capituloUM.nuMESSAGEtabTwo,
		style: {
			color: '#0000FF'
		},
		clear: false
	})
]

const constructorTabTWO = () => {
	tabTWO.map(nowLogTwo => {
		return nowLogTwo.styledMsg(nowLogTwo.msg)
	})
}

const tabTHREE = [
	cli({
		agent: 'message',
		msg: capituloUM.nuMESSAGEtabThree,
		style: {
			color: '#ffffff'
		},
		clear: false
	})
]

const constructorTabTHREE = () => {
	tabTHREE.map(nowLogThree => {
		nowLogThree.styledMsg(nowLogThree.msg)
	})
}

module.exports = {
	constructorTabWelcome,
	constructorTabTWO,
	constructorTabTHREE,
	constructorTabChapter
}
