const {tabChapter} = require('../components/tabChapter')
const {labelTabChapter} = require('../components/labelTabChapter')

const tabChapterConstructor = (page, qtdRow, totalRows, maybePluralize, totalFinal, splitText) => {
	let countLine = 0
	const labelShowing = qtdRow >= 0 && qtdRow < totalRows ? 'Primeira' : 'Toda'
	const pluralPrimeiras = maybePluralize(totalFinal, labelShowing)

	// Label Tab Chapter component
	labelTabChapter(pluralPrimeiras, totalFinal, totalRows)

	// array walker
	splitText.map(nowLine => {
		countLine++
		const digitsCount = totalFinal.toString().length
		const digitPattern = countLine.toString().padStart(digitsCount, '0')

		if (countLine <= totalFinal) {
			// tabChapter lines print component
			return setTimeout(function () {
				tabChapter(page, digitPattern, qtdRow, nowLine)
				// console.log(digitPattern)
			}, 100)
		}
	})
	setTimeout(function () {
		labelTabChapter(pluralPrimeiras, totalFinal, totalRows)
	}, 100)
}

module.exports = {
	tabChapterConstructor
}
