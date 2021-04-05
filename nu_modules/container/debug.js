const pimpMyCLI = require('../container/pimpMyCli-container')
const {yellow} = require('chalk')

module.exports = (isDebug, flags, input) => {
	if (!isDebug) {
		return
	}

	console.log(`
${yellow('+-----------------------+')}
${pimpMyCLI({
	subAgent: 'info'
})}
${yellow('+-----------------------+')}
			`)
	// console.log(Object.entries(flags))
	// console.log(Object.values(flags))
	console.table(flags)
	console.table(input)
}
