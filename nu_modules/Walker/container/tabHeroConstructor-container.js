const clearConsole = require('clear-any-console')
const {thisConstructorScene} = require('./tabThisConstructorScene-container')
const heroConstructor = heroConstructorScene => {
	setTimeout(() => {
		clearConsole()
		thisConstructorScene(0)
		console.log(1)
	}, 2000)
}
module.exports = {heroConstructor}
