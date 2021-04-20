const {goAsync, clearAll} = require('./Cli/container/cli-container')
const cleanConsole = require('clear-any-console')

if (clearAll) {
	cleanConsole()
}
goAsync()
