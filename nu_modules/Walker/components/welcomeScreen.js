const logUpdate = require('log-update')
const welcomeScreen = (olhosFunc, sombrancelhaFunc) => {
	const framesOne = ['__', '__', '--', '--']
	const frames = ['o', 'O', '-', '-']
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
