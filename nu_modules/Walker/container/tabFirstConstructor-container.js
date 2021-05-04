const {dim} = require('chalk')
const tabFirstConstructor = (
	page,
	splitText,
	maybePluralize,
	totalFinal,
	config,
	totalRows,
	qtdRow
) => {
	let countFirstLine = 0
	const pluralPrimeiras = maybePluralize(totalFinal, 'Primeira')
	const firstTotalFinalText = totalFinal <= 1 ? 0 : totalFinal
	const configQtdRow = config.qtdRow || 10
	const firstLines = splitText.slice(0, qtdRow || configQtdRow)
	console.log(`${pluralPrimeiras} ${firstTotalFinalText} de um total de ${totalRows} linhas: `)
	firstLines.map(firstLine => {
		countFirstLine++
		console.log(`${dim(!page ? countFirstLine + ':' : page * qtdRow - qtdRow + ':')}  ${firstLine}`)
	})
}

module.exports = {
	tabFirstConstructor
}
