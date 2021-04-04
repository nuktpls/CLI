const tabConstruct = require('./tabConstruct')
const {tabWELCOME, tabChapters, tabTWO, tabTHREE} = require('./tabs')

const sceneWelcome = () => tabConstruct.constructorTabWelcome(tabWELCOME())
const sceneChapter = (chapter, qtdRow, nexts, rangeBegin, latest, first) => {
	tabConstruct.constructorTabChapter(
		tabChapters(),
		chapter,
		qtdRow,
		first,
		nexts,
		rangeBegin,
		latest
	)
}
const sceneTwo = () => tabConstruct.constructorTabTWO(tabTWO())
const sceneThree = () => tabConstruct.constructorTabTHREE(tabTHREE())

module.exports = {
	sceneWelcome,
	sceneTwo,
	sceneThree,
	sceneChapter
}
