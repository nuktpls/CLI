const clearConsole = require('clear-any-console')
const {welcomeScreen} = require('../components/welcomeScreen')
const welcomeScreenContainer = () => {
	clearConsole()
	let i = 0
	const frameGoOne = setInterval(() => {
		const frame = olhosArray => olhosArray[(i = ++i % olhosArray.length)]
		const frameOne = sombrancelhaArray => sombrancelhaArray[(i = ++i % sombrancelhaArray.length)]
		welcomeScreen(frame, frameOne)
	}, 120)
	frameGoOne

	setTimeout(() => {
		clearInterval(frameGoOne)
	}, 2000)
}
module.exports = {welcomeScreenContainer}
