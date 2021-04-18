const {dim} = require('chalk')

const tabChapterConstructor = (page, qtdRow, totalRows, maybePluralize, totalFinal, splitText) => {
	const labelShowing = qtdRow >= 0 && qtdRow < totalRows ? 'Primeira' : 'Toda'
	const pluralPrimeiras = maybePluralize(totalFinal, labelShowing)
	let countLine = 0
	console.log(`${pluralPrimeiras} ${totalFinal} de um total de ${totalRows} linhas: `)
	splitText.map(nowLine => {
		countLine++
		if (countLine <= totalFinal) {
			return console.log(
				`${dim(!page ? countLine : countLine + page * qtdRow - qtdRow + ':')}  ${nowLine}`
			)
		}
	})
}

module.exports = {
	tabChapterConstructor
}
