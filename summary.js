const tabConstruct = require('./tabConstruct')

const sceneOne = () => tabConstruct.constructorTabONE()
const sceneTwo = () => tabConstruct.constructorTabTWO()
const sceneThree = () => tabConstruct.constructorTabTHREE()

module.exports = {
	sceneOne,
	sceneTwo,
	sceneThree
}
