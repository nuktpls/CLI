const logUpdate = require('log-update')
const welcomeScreen = (olhosFunc, sombrancelhaFunc) => {
	const framesOne = [`------`, `------`, `------`, `------`, `------`, `------`, `______`, `______`, `______`]
	const frames = ['( o )', '( o )', '( o )', '(o  )', '(  o)', '(  o)', '( - )', '( - )', '( - )']
	const olhos = olhosFunc(frames)
	const sombrancelha = sombrancelhaFunc(framesOne)
	logUpdate(
		`






				${'      ' + sombrancelha} ${sombrancelha}
				_.i.. ${olhos} . ${olhos} ..i._


			  Bem-vindo ao Brasil beta 2.0.X.X




		`
	)
}

module.exports = {welcomeScreen}
