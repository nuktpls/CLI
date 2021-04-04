const pimpMyCLI = require('./index')

const breakLine = `\n`
const warning = pimpMyCLI({
	subAgent: 'warning'
})

module.exports = {
	breakLine,
	warning
}
