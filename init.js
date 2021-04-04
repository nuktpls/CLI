const tabConstruct = require('./tabConstruct')
const {tabWELCOME, tabChapters} = require('./tabs')

const sceneWelcome = clearTab => {
	tabConstruct.constructorTabWelcome(tabWELCOME(), clearTab)
}
const sceneChapter = (chapter, pages, qtdRow, first, next, rangeBegin, latest) => {
	tabConstruct.constructorTabChapter(
		tabChapters(),
		chapter,
		pages,
		qtdRow,
		first,
		next,
		rangeBegin,
		latest
	)
}

module.exports = {
	sceneWelcome,
	sceneChapter
}
