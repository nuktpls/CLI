const {dim} = require('chalk')
const log = console.log
const consoleClear = require('clear-any-console')
const handleError = require('./errors')

const constructorTabWelcome = (tab, clearTab) => {
	let moreOptionsTrueCount = 0

	if (clearTab === 2) {
		consoleClear()
	}
	tab.map(nowLogWelcome => {
		moreOptionsTrueCount++
		if (moreOptionsTrueCount === 1) {
		}
		if (
			nowLogWelcome.moreOptions === 2 &&
			moreOptionsTrueCount === 1 &&
			clearTab === 0 &&
			moreOptionsTrueCount === 1
		) {
			consoleClear()
		}

		setTimeout(() => {
			log(nowLogWelcome.styledMsg(nowLogWelcome.msg))
		}, 1)

		// return log(nowLogWelcome.styledMsg(nowLogWelcome.msg))
	})
}

const constructorTabChapter = (tab, chapter, pages, qtdRow, first, next, rangeBegin, latest) => {
	const maybePluralize = (count, noun, suffix = 's') => `${noun}${count !== 1 ? suffix : ''}`
	tab.map(nowChapter => {
		if (nowChapter.subAgent === chapter) {
			let splitText = nowChapter.msg.split('\n')
			const totalRows = splitText.length
			if (qtdRow === 0 && pages) {
				qtdRow = 10
			}
			if (pages >= 1 && !latest && !next && !rangeBegin) {
				if (pages === 1) {
					splitText = splitText.slice(pages - 1, pages * qtdRow)
				} else {
					const sum = pages * qtdRow
					splitText = splitText.slice(sum - qtdRow, sum)
				}
			}
			let totalFinal = qtdRow >= totalRows ? totalRows : qtdRow
			if (qtdRow || chapter > 0) {
				if (!next && !rangeBegin && !latest && !first) {
					const labelShowing = qtdRow >= 0 && qtdRow < totalRows ? 'Primeira' : 'Toda'
					const pluralPrimeiras = maybePluralize(totalFinal, labelShowing)
					let countLine = 0
					log(`${pluralPrimeiras} ${totalFinal} de um total de ${totalRows} linhas: `)
					splitText.map(nowLine => {
						countLine++
						if (countLine <= totalFinal) {
							return log(
								`${dim(!pages ? countLine : countLine + pages * qtdRow - qtdRow + ':')}  ${nowLine}`
							)
						} else if (totalFinal === 0) {
							return console.log(
								`${dim(!pages ? countLine : countLine + pages * qtdRow - qtdRow + ':')}  ${nowLine}`
							)
						}
					})
				} else if (first) {
					let countFirstLine = 0
					const pluralPrimeiras = maybePluralize(totalFinal, 'Primeira')
					const firstTotalFinalText = totalFinal <= 1 ? 0 : totalFinal
					// const firstLines = splitText.slice(
					// 	0,
					// 	(firstTotalFinalText && qtdRow) === 0 ? 10 : firstTotalFinalText + qtdRow
					// )
					const firstLines = splitText.slice(0, qtdRow || 10)
					// log(firstLines)
					// log(firstTotalFinalText)
					// log(qtdRow)
					log(`${pluralPrimeiras} ${firstTotalFinalText} de um total de ${totalRows} linhas: `)
					firstLines.map(firstLine => {
						countFirstLine++
						// if (countFirstLine <= totalFinal) {
						// log(firstLine)
						log(
							`${dim(
								!pages ? countFirstLine + ':' : countLine + pages * qtdRow - qtdRow + ':'
							)}  ${firstLine}`
						)
						// }
					})
				}
			}

			if (next) {
				if (qtdRow <= 0) {
					const err = new Error([`Por favor, inserir quantidades de linhas --rows x`])
					handleError(`init problem`, err)
				}

				let countNextLine = 0
				const pagesEnd = pages ? qtdRow * pages + qtdRow : next + 1 + qtdRow
				const nextLines = splitText.slice(next, pagesEnd)
				const pluralProximas = maybePluralize(totalFinal, 'Próxima')
				const nextTotalFinalText = totalFinal <= 1 ? 0 : totalFinal
				log(`${pluralProximas} ${nextTotalFinalText} de um total de ${totalRows} linhas: `)

				nextLines.map(nextLine => {
					countNextLine++
					if (countNextLine <= totalFinal) {
						const nowLine = qtdRow + countNextLine
						log(`${dim(next + nowLine - qtdRow + ':')}  ${nextLine}`)
					}
				})
			}

			if (rangeBegin) {
				let countRangeLine = 0
				const rowBegin = rangeBegin
				const qtdRowBegin = rowBegin - 1
				const rangeLines = splitText.slice(
					qtdRowBegin,
					pages ? qtdRowBegin + qtdRow : qtdRowBegin + qtdRow
				)
				log(`Entre a linha número ${qtdRowBegin + 1} e a de número ${qtdRowBegin + qtdRow}: `)
				rangeLines.map(rangeLine => {
					countRangeLine++
					if (countRangeLine <= totalFinal) {
						const nowRangeLine = countRangeLine + qtdRowBegin
						log(`${dim(nowRangeLine + ':')}  ${rangeLine}`)
					}
				})
			}

			if (latest) {
				let countLastLine = 0
				const ultimaProximas = maybePluralize(totalFinal, 'Última')
				const lastTotalFinalText = totalFinal <= 1 ? 0 : totalFinal
				const slicedArr = splitText.slice(totalRows - qtdRow)
				log(qtdRow)
				slicedArr.map(lastLine => {
					countLastLine++
					if (countLastLine === 1) {
						log(`${ultimaProximas} ${lastTotalFinalText} de um total de ${totalRows} linhas:  `)
					}
					if (countLastLine <= totalFinal) {
						const nowLine = totalRows - totalFinal + countLastLine
						log(`${dim(nowLine + ':')}  ${lastLine}`)
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
