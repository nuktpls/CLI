const term = require('terminal-kit').terminal

term.on('key', function (name, matches, data) {
	// console.log("'key' event:", name)
	if (name === 'CTRL_C') {
		term.green('\nSistema encerrado...\n')
		process.exit()
	}
})
