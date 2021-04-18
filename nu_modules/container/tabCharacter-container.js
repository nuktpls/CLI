const {characterLog} = require('../components/character')
const constructorTabCharacter = (
	tab,
	character,
	name,
	gender,
	age,
	version,
	birth,
	birthplace,
	clearTab
) => {
	return characterLog(tab, character, name, gender, age, version, birth, birthplace, clearTab)
}

module.exports = {
	constructorTabCharacter
}
