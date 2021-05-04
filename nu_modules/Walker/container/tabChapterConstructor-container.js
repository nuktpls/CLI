const { tabChapter } = require('../components/tabChapter')
const { labelTabChapter } = require('../components/labelTabChapter')

const tabChapterConstructor = (page, qtdRow, totalRows, maybePluralize, totalFinal, splitText) => {
	let countLine = 0
	const labelShowing = qtdRow >= 0 && qtdRow < totalRows ? 'Primeira' : 'Toda'
	const pluralPrimeiras = maybePluralize(totalFinal, labelShowing)

	// Label Tab Chapter component
	const printLabel = () => labelTabChapter(pluralPrimeiras, totalFinal, totalRows)

	// array walker
	splitText.map(nowLine => {
		countLine++
		if (countLine === 1) {
			printLabel()
		}
		const digitsCount = totalFinal.toString().length
		const digitPattern = countLine.toString().padStart(digitsCount, '0')

		// tabChapter lines print component
		const printChapter = () => {
			if (countLine <= totalFinal) {
				return tabChapter(page, digitPattern, qtdRow, nowLine)
			}
		}
		printChapter()
		if (countLine === totalFinal) {
			printLabel()
		}
	})
}

module.exports = {
	tabChapterConstructor
}
