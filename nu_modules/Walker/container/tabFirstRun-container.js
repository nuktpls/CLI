const {welcomeScreenContainer} = require('./tabWelcomeScreen-container')
const {heroConstructor} = require('./tabHeroConstructor-container')
const constructorFirstRun = () => {
	// cena de abertura
	welcomeScreenContainer()
	// construir herói
	heroConstructor()
	return process.exit
}
module.exports = {constructorFirstRun}
