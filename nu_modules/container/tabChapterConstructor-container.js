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
		if (countLine <= totalFinal) {
			// tabChapter lines print component
			return tabChapter(page, countLine, qtdRow, nowLine)
		}
	})
}

module.exports = {
	tabChapterConstructor
}
