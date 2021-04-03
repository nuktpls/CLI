const tabConstruct = require('./tabConstruct')

const sceneWelcome = () => tabConstruct.constructorTabWelcome()
const sceneChapter = chapter => tabConstruct.constructorTabChapter(chapter)
const sceneTwo = () => tabConstruct.constructorTabTWO()
const sceneThree = () => tabConstruct.constructorTabTHREE()

module.exports = {
	sceneWelcome,
	sceneTwo,
	sceneThree,
	sceneChapter
}
