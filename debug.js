const pimpMyCLI = require('./index')
const clearConsole = require('clear-any-console')

module.exports = (clear, isDebug, flags, input) => {
	if (clear && !isDebug) {
		clearConsole()
	}

	if (clear && isDebug) {
		clearConsole()
		console.log(
			pimpMyCLI({
				subAgent: 'warning'
			})
		)

		console.log(`flags`, flags)
		console.log(`input`, input)
	}
}
