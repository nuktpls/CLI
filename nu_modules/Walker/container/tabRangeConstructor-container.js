const {dim} = require('chalk')

const tabRangeConstructor = (rangeBegin, splitText, page, qtdRow, totalFinal) => {
	let countRangeLine = 0
	const rowBegin = rangeBegin
	const qtdRowBegin = rowBegin - 1
	const rangeLines = splitText.slice(
		qtdRowBegin,
		page ? qtdRowBegin + qtdRow : qtdRowBegin + qtdRow
	)
	console.log(`Exibindo a linha número ${qtdRowBegin + 1} e a de número ${qtdRowBegin + qtdRow}: `)
	rangeLines.map(rangeLine => {
		countRangeLine++
		if (countRangeLine <= totalFinal) {
			const nowRangeLine = countRangeLine + qtdRowBegin
			console.log(`${dim(nowRangeLine + ':')}  ${rangeLine}`)
		}
	})
}

module.exports = {
	tabRangeConstructor
}
