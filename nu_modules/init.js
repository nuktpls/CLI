const {
	constructorTabWelcome,
	constructorTabChapter,
	constructorTabCharacter
} = require('./container/tabConstruct')
const {tabWELCOME, tabChapters, tabCharacters} = require('../data/tabs')

const sceneWelcome = clearTab => {
	constructorTabWelcome(tabWELCOME(), clearTab)
}
const sceneChapter = (chapter, page, qtdRow, first, next, rangeBegin, latest) => {
	constructorTabChapter(tabChapters(), chapter, page, qtdRow, first, next, rangeBegin, latest)
}
const sceneCharacter = (character, characterName, gender, age, version, birth, birthplace) => {
	// console.log(tabCharacters())

	constructorTabCharacter(
		tabCharacters(),
		character,
		characterName,
		gender,
		age,
		version,
		birth,
		birthplace
	)
}

module.exports = {
	sceneWelcome,
	sceneChapter,
	sceneCharacter
}
