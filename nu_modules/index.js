const {goAsync, clearAll} = require('./container/cli-container')
const cleanConsole = require('clear-any-console')

if (clearAll) {
	cleanConsole()
}
goAsync()
