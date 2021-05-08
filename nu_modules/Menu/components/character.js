const clearConsole = require('clear-any-console')
const characterPrint = (term, desc) => {
	clearConsole()

	console.log(`${desc}`)
	console.log(`
  `)
}
module.exports = {characterPrint}
