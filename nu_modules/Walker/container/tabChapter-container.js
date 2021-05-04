const {config} = require('../../PimpMyCli/config')

const {tabChapterConstructor} = require('./tabChapterConstructor-container')
const {tabNextConstructor} = require('./tabNextConstructor-container')
const {tabRangeConstructor} = require('./tabRangeConstructor-container')
const {tabLatestConstructor} = require('./tabLatestConstructor-container')
const {tabFirstConstructor} = require('./tabFirstConstructor-container')

const constructorTabChapter = (tab, chapter, page, qtdRow, first, next, rangeBegin, latest) => {
	// lidando com plural para texto 'Total Final'
	const maybePluralize = (count, noun, suffix = 's') => `${noun}${count !== 1 ? suffix : ''}`
	tab.map(nowChapter => {
		// capítulo início
		if (nowChapter.subAgent === chapter) {
			// configs para receber chapter request
			// split mensagem em array
			let splitText = nowChapter.msg.split('\n')
			const totalRows = splitText.length
			if (qtdRow === 0 && page !== 0) {
				// default de rows caso não explícito
				qtdRow = config.qtdRow
			}
			if (page >= 1 && !latest && !next && !rangeBegin) {
				// default página sem último, next e sem range
				// implícito, aceita parâmetros nulos e parâmetro 'first'
				if (page === 1) {
					// sincronia de split para array 0 e numeração humana
					// corta o texto em página + qtd de rows
					splitText = splitText.slice(page - 1, page * qtdRow)
				} else {
					// cortar o texto em página
					const sum = page * qtdRow
					splitText = splitText.slice(sum - qtdRow, sum)
				}
			}
			// define total de linhas após regras definidas
			let totalFinal = null
			if (qtdRow === 0) {
				// se qdtRow for zero então é igual ao total
				totalFinal = totalRows
			} else {
				// senão, total é estabelecido mediante qtdRow seja menor que a si
				totalFinal = qtdRow >= totalRows ? totalRows : qtdRow
			}

			// caso for definido o chapter
			if (qtdRow || chapter > 0) {
				if (!next && !rangeBegin && !latest && !first) {
					// se nenhuma flag
					// first, latest, range, next, só chapter
					tabChapterConstructor(page, qtdRow, totalRows, maybePluralize, totalFinal, splitText)
				}
				if (first) {
					// caso flag first
					tabFirstConstructor(
						page,
						splitText,
						maybePluralize,
						totalFinal,
						config,
						totalRows,
						qtdRow
					)
				}
			}

			// a partir da próxima linha, segundo a definida
			if (next) {
				tabNextConstructor(next, qtdRow, page, splitText, maybePluralize, totalFinal, totalRows)
			}

			// da linha x até a qtd de linhas
			if (rangeBegin) {
				tabRangeConstructor(rangeBegin, splitText, page, qtdRow, totalFinal)
			}

			// últimas linhas
			if (latest) {
				tabLatestConstructor(maybePluralize, totalFinal, qtdRow, config, splitText, totalRows)
			}
		}
	})
}

module.exports = {
	constructorTabChapter
}
