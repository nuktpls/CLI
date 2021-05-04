const firstRun = require('first-run')

const {constructorFirstRun} = require('../../Walker/container/tabFirstRun-container')
const {constructorTabMultipleArrays} = require('../../Walker/container/tabMultipleArrays-container')
const {constructorTabCharacter} = require('../../Walker/container/tabCharacter-container')
const {constructorTabChapter} = require('../../Walker/container/tabChapter-container')
const {constructorTabChooser} = require('../../Walker/container/tabChooser-container')

const {config} = require('../../PimpMyCli/config/index')

const {tabMULTIPLEarrays} = config.tabs || null
const {tabChapters} = config.tabs || null
const {tabCharacters} = config.tabs || null

const sceneFirstRun = clearTab => {
	firstRun.clear()
	return firstRun() ? constructorFirstRun(clearTab) : null
}

const sceneWelcome = (clearTab, flags) => {
	return constructorTabMultipleArrays(tabMULTIPLEarrays(), clearTab, flags)
}
const sceneChapter = (chapter, page, qtdRow, first, next, rangeBegin, latest) => {
	return constructorTabChapter(
		tabChapters(),
		chapter,
		page,
		qtdRow,
		first,
		next,
		rangeBegin,
		latest
	)
}
const sceneCharacter = character => {
	return constructorTabCharacter(tabCharacters(), character)
}
const sceneChooser = () => {
	const laFunc = (aqui, eaqui, eaquimesmo) => constructorTabMultipleArrays(aqui, eaqui, eaquimesmo)
	const lesCaras = (um, dois) => constructorTabCharacter(um, dois)
	return constructorTabChooser(laFunc, tabMULTIPLEarrays, lesCaras, tabCharacters())
}

module.exports = {
	sceneWelcome,
	sceneChapter,
	sceneCharacter,
	sceneChooser,
	sceneFirstRun
}
