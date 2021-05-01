// const {
// 	constructorTabMultipleArrays,
// 	constructorTabChapter,
// 	constructorTabCharacter
// } = require('../../Walker/container/tabConstruct-container')

const {constructorTabMultipleArrays} = require('../../Walker/container/tabMultipleArrays-container')
const {constructorTabCharacter} = require('../../Walker/container/tabCharacter-container')
const {constructorTabChapter} = require('../../Walker/container/tabChapter-container')
const {constructorTabChooser} = require('../../Walker/container/tabChooser-container')

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
const sceneCharacter = character => {
	constructorTabCharacter(tabCharacters(), character)
}
const sceneChooser = () => {
	const laFunc = (aqui, eaqui, eaquimesmo) => constructorTabMultipleArrays(aqui, eaqui, eaquimesmo)
	const lesCaras = (um, dois) => constructorTabCharacter(um, dois)
	return constructorTabChooser(laFunc, tabMULTIPLEarrays, lesCaras, tabCharacters())
	// constructorTabMultipleArrays(tabMULTIPLEarrays(), true, {welcome: true})
}

module.exports = {
	sceneWelcome,
	sceneChapter,
	sceneCharacter,
	sceneChooser
}
