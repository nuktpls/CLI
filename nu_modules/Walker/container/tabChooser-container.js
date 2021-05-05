const term = require('terminal-kit').terminal
const { deviceChapter } = require('./deviceChapter-container')
const firstRun = require('first-run')
const dotenv = require('dotenv')
const fs = require('fs')
var path = require('path');
const appRoot = require('app-root-path');



const constructorTabChooser = (laFunc, tabMULTIPLEarrays, lesCaras, tabCharacters, sceneChapter) => {
	term.clear()
	var items = ['Introdução', 'Personagem', 'Capítulo', 'Reset']

	var options = {
		y: 1, // the menu will be on the top of the terminal
		style: term.inverse,
		selectedStyle: term.dim.blue.bgGreen
	}

	const menuRegistry = colorMenuHack =>
		term.singleLineMenu(items, options, function (error, response) {
			// 	response.selectedIndex,
			if (colorMenuHack) {
				options.style = colorMenuHack
			}
			if (response.selectedText === 'Introdução') {
				setTimeout(() => {
					laFunc(tabMULTIPLEarrays(), true, [{ welcome: true }])
					return process.exit()
				}, 10)

			}
			if (response.selectedText === 'Personagem') {
				term.clear()

				term.cyan('Selecione o personagem para ler o seu resumo.\n')
				const filename = path.resolve(`${appRoot}/.env`)
				const fileFinal = dotenv.parse(fs.readFileSync(filename))
				const heroTermn = fileFinal.HERO_NAME
				var items = ['a. Herói Vagabundo', 'b. Ditadora Facista', 'c. @goshDev', 'd. Boi Sonoro', 'e. ' + heroTermn]

				term.singleColumnMenu(items, function (error, response) {
					if (response.selectedIndex === 0) {
						term.clear()
						lesCaras(tabCharacters, 'heroiVagabundo')
						process.exit()
					}
					if (response.selectedIndex === 1) {
						term.clear()
						lesCaras(tabCharacters, 'ditadoraFacista')
						process.exit()
					}
					if (response.selectedIndex === 2) {
						term.clear()
						lesCaras(tabCharacters, 'goshDev')
						process.exit()
					}
					if (response.selectedIndex === 3) {
						term.clear()
						lesCaras(tabCharacters, 'boiSonoro')
						process.exit()
					}
					if (response.selectedIndex === 4) {
						term.clear()
						lesCaras(tabCharacters, 'heroResume')
						process.exit()
					}
				})
			}
			if (response.selectedText === 'Capítulo') {
				term.clear()
				console.log(`
Você escolheu: Capítulo
			`)
				deviceChapter(sceneChapter, 1)
				// process.exit()
			}

			if (response.selectedText === 'Reset') {
				term.clear()
				firstRun.clear()

				term.red(`O seu herói foi deletado.\n\n`)
				term.green(`\nDigite "nuktpls" e configure o sistema.\n\n`)
				process.exit()
			}

			// menuRegistry()
		})

	menuRegistry()

	term.grabInput({ mouse: 'button', focus: true })

	term.on('key', function (key, matches, data) {
		switch (key) {
			case 'UP':
				term.up(1)
				// term.scrollDown(1)
				break
			case 'DOWN':
				// term.scrollUp(1)
				term.down(1)
				break
			// case 'LEFT':
			// 	term.left(1)
			// 	break
			// case 'RIGHT':
			// 	term.right(1)
			// 	break
			// case 'CTRL_C':
			// process.exit()
			// break
			default:
				// Echo anything else
				term.noFormat(Buffer.isBuffer(data.code) ? data.code : String.fromCharCode(data.code))
				break
		}
	})

	// term.grabInput({mouse: 'button'})
	const { yellow, cyan, blue, red, green, dim } = require('chalk')

	console.log(`

`)
	var r = Math.floor(Math.random() * 256)
	var g = Math.floor(Math.random() * 256)
	var b = Math.floor(Math.random() * 256)
	// term.bold.cyan('Setting the cursor color to RGB (%d,%d,%d)\n', r, g, b)
	term.setCursorColorRgb(r, g, b)
}

module.exports = { constructorTabChooser }
