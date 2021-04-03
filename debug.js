const pimpMyCLI = require('./index')

module.exports = (isDebug, flags, input) => {
	if (!isDebug) {
		return
	}

	console.log(
		pimpMyCLI({
			subAgent: 'warning'
		})
	)

	console.log(`flags`, flags)
	console.log(`input`, input)
}
