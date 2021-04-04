const pimpMyCLI = require('./index')
const clearConsole = require('clear-any-console')
const {yellow} = require('chalk')

module.exports = (clear, isDebug, flags, input) => {
	if (clear && !isDebug) {
		clearConsole()
	}

	if (clear && isDebug) {
		clearConsole()
	}
	if (isDebug) {
		console.log(`
${yellow('+-----------------------+')}
${pimpMyCLI({
	subAgent: 'info'
})}
${yellow('+-----------------------+')}
			`)
		const newValue = Object.entries(flags)
		const stringF = JSON.stringify(flags)
		// console.log(Object.entries(flags))
		// console.log(Object.values(flags))
		console.table(flags)
		console.table(input)
	}
}
