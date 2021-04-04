const log = console.log

const constructorTabWelcome = tab => {
	tab.map(nowLogWelcome => {
		console.log(nowLogWelcome.styledMsg(nowLogWelcome.msg))
		return process.exit
	})
}

const constructorTabChapter = (tab, chapter, qtdRow, first, nexts, rangeBegin, latest) => {
	const maybePluralize = (count, noun, suffix = 's') => `${noun}${count !== 1 ? suffix : ''}`
	tab.map(nowChapter => {
		if (nowChapter.subAgent === chapter) {
			const splitText = nowChapter.msg.split('\n')
			const totalRows = splitText.length
			if (qtdRow === 0) {
				qtdRow = totalRows
			}
			let totalFinal = qtdRow >= totalRows ? totalRows : qtdRow
			if (first || qtdRow) {
				if (!nexts && !rangeBegin && !latest) {
					const labelShowing = qtdRow >= 0 && qtdRow < totalRows ? 'Primeira' : 'Toda'
					const pluralPrimeiras = maybePluralize(totalFinal, labelShowing)
					let countLine = 0
					console.log(`${pluralPrimeiras} ${totalFinal} de um total de ${totalRows} linhas: `)
					splitText.map(nowLine => {
						countLine++
						if (countLine <= totalFinal) {
							console.log(`${countLine}:  ${nowLine}`)
							return process.exit
						}
					})
				}
			}

			if (nexts) {
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
			}

			if (rangeBegin) {
				let countRangeLine = 0
				const rowBegin = rangeBegin
				const qtdRowBegin = rowBegin - 1
				const rangeLines = splitText.slice(qtdRowBegin, qtdRowBegin + qtdRow)
				console.log(
					`Entre a linha número ${qtdRowBegin + 1} e a de número ${qtdRowBegin + qtdRow}: `
				)
				rangeLines.map(rangeLine => {
					countRangeLine++
					if (countRangeLine <= totalFinal) {
						const nowRangeLine = countRangeLine + qtdRowBegin
						console.log(`${nowRangeLine}:  ${rangeLine}`)
					}
				})
			}

			if (latest) {
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
		}
	})
}

const constructorTabTWO = tab => {
	tabTWO.map(nowLogTwo => {
		return nowLogTwo.styledMsg(nowLogTwo.msg)
	})
}

const constructorTabTHREE = tab => {
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
