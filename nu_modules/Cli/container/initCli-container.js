const {
	constructorTabMultipleArrays,
	constructorTabChapter,
	constructorTabCharacter
} = require('../../Walker/container/tabConstruct-container')

const {config} = require('../../PimpMyCli/config/index')

// return console.log(config)

const {tabMULTIPLEarrays} = config.tabs || null
const {tabChapters} = config.tabs || null
const {tabCharacters} = config.tabs || null

// const tabMultipleStrings = tabWELCOME

const sceneWelcome = (clearTab, flags) => {
	// console.log(flags)
	// const owww = flags.find(imHere => imHere.we)
	constructorTabMultipleArrays(tabMULTIPLEarrays(), clearTab, flags)
	// tabMultipleStrings
}
const sceneChapter = (chapter, page, qtdRow, first, next, rangeBegin, latest) => {
	constructorTabChapter(tabChapters(), chapter, page, qtdRow, first, next, rangeBegin, latest)
}
const sceneCharacter = (character, characterName, gender, age, version, birth, birthplace) => {
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
