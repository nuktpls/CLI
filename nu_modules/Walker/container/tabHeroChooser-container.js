const {chooseMiltinho} = require('./tabChooseMiltinho')
const {chooseCustom} = require('./tabChooseCustom')
const readline = require('readline')

const term = require('terminal-kit').terminal
const {fraseUm, fraseDois} = require('../components/heroConstructor')
const {heroChoose} = require('../config')
const clearConsole = require('clear-any-console')

const heroChooserScene = this__Scene => {
	term.cyan(fraseUm)
	term.cyan(fraseDois)

	term.singleColumnMenu(heroChoose, function (error, response) {
		term('\n').eraseLineAfter.green(
			'#%s selected: %s (%s,%s)\n',
			response.selectedIndex,
			response.selectedText,
			response.x,
			response.y
		)
		if (response.selectedIndex === 0) {
			chooseMiltinho()
		}
		if (response.selectedIndex === 1) {
			chooseCustom(this__Scene)
		}
	})
}

module.exports = {heroChooserScene}
