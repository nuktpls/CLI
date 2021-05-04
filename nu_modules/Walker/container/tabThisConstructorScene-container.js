const {heroChooserScene} = require('./tabHeroChooser-container')

const thisConstructorScene = this__Scene => {
	if (this__Scene === undefined) {
		return
	}
	switch (this__Scene) {
		case 0:
			return heroChooserScene()
		case 1:
			return console.log('cena 2')
	}
}
module.exports = {thisConstructorScene}
