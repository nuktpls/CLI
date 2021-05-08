const clearConsole = require('clear-any-console')
const tab = (term, desc) => {
	clearConsole()
	console.log(`
GLOSSÁRIO - Termo ${term}

  `)
	console.log(`${term}`)
	console.log(`${desc}`)
	console.log(`



  `)
}
module.exports = {tab}
