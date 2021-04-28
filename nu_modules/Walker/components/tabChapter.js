const {dim} = require('chalk')

const tabChapter = (page, countLine, qtdRow, nowLine) => {
	return setTimeout(function () {
		console.log(`${dim(!page ? countLine : countLine + page * qtdRow - qtdRow + ':')}  ${nowLine}`)
	}, 1000)
}

module.exports = {
	tabChapter
}
