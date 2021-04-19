const multipleString = require('./welcomeMultipleString-1')

const multipleStringData = (subAgent, idAgent) => {
	if (!subAgent && !idAgent) {
		return null
	}
	return {...multipleString}
}

module.exports = {multipleStringData}
