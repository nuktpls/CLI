const term = require('terminal-kit').terminal
const clearConsole = require('clear-any-console')
term.on('key', function (name, matches, data) {
	// console.log("'key' event:", name)
	if (name === 'CTRL_C') {
		clearConsole()
		term.green('Sistema encerrado.\n')
		term.green('Para iniciá-lo novamente digite "nuktpls".\n\n')
		term.blue('Até breve...\n\n🐙\n')
		process.exit()
	}
})
