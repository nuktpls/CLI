const {characterLog} = require('../components/character')
const constructorTabCharacter = (tab, character) => {
	return characterLog(tab, character)
}

module.exports = {
	constructorTabCharacter
}
