const {dim} = require('chalk')

const tabLatestConstructor = (maybePluralize, totalFinal, qtdRow, config, splitText, totalRows) => {
	let countLastLine = 0
	const ultimaProximas = maybePluralize(totalFinal, 'Última')
	const lastTotalFinalText = totalFinal <= 1 ? 0 : totalFinal
	if (qtdRow === 0) {
		if (config.qtdRow) {
			qtdRow = config.qtdRow
		} else {
			qtdRow = 10
		}
	}
	const slicedArr = splitText.slice(totalRows - qtdRow)
	slicedArr.map(lastLine => {
		countLastLine++
		if (countLastLine === 1) {
			console.log(`${ultimaProximas} ${lastTotalFinalText} de um total de ${totalRows} linhas:  `)
		}
		if (countLastLine <= totalFinal) {
			const nowLine = totalRows - qtdRow + countLastLine
			console.log(`${dim(nowLine + ':')}  ${lastLine}`)
		}
	})
}

module.exports = {
	tabLatestConstructor
}
