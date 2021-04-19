const multipleStringData = require('./multipleString-container')
// const oneBigStringData = require('./chapterOneBigString')

const dataChooser = (subAgent, idAgent) => {
	if (!subAgent && !idAgent) {
		return null
	}

	let responseCall = null

	if (isMultipleString) {
		responseCall = multipleStringData(subAgent, idAgent)
	}

	// if (isOneBigString) {
	// 	responseCall = oneBigStringData(subAgent, idAgent)
	// }

	return {...responseCall}
}

module.exports = dataChooser
