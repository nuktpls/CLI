const {dim} = require('chalk')

const tabChapter = (page, countLine, qtdRow, nowLine) => {
	return console.log(
		`${dim(!page ? countLine : countLine + page * qtdRow - qtdRow + ':')}  ${nowLine}`
	)
}

module.exports = {
	tabChapter
}
