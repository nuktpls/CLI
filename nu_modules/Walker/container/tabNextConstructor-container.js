const {dim} = require('chalk')
const handleError = require('../../PimpMyCli/container/errors')

const tabNextConstructor = (
	next,
	qtdRow,
	page,
	splitText,
	maybePluralize,
	totalFinal,
	totalRows
) => {
	if (qtdRow <= 0) {
		const err = new Error([`Por favor, inserir quantidades de linhas --rows x`])
		handleError(`init problem`, err)
	}

	let countNextLine = 0
	const pageEnd = page ? qtdRow * page + qtdRow : next + 1 + qtdRow
	const nextLines = splitText.slice(next, pageEnd)
	const pluralProximas = maybePluralize(totalFinal, 'Próxima')
	const nextTotalFinalText = totalFinal <= 1 ? 0 : totalFinal
	console.log(`${pluralProximas} ${nextTotalFinalText} de um total de ${totalRows} linhas: `)

	nextLines.map(nextLine => {
		countNextLine++
		if (countNextLine <= totalFinal) {
			const nowLine = qtdRow + countNextLine
			return console.log(`${dim(next + nowLine - qtdRow + ':')}  ${nextLine}`)
		}
	})
}

module.exports = {
	tabNextConstructor
}
