var term = require('terminal-kit').terminal
const firstRun = require('first-run')

var term = require('terminal-kit').terminal
const constructorTabChooser = (laFunc, tabMULTIPLEarrays, lesCaras, tabCharacters) => {
	term.clear()

	var items = ['Sumário', 'Personagem', 'Capítulos', 'Ajuda', 'Reset']

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
			if (response.selectedText === 'Sumário') {
				setTimeout(() => {
					laFunc(tabMULTIPLEarrays(), true, [{welcome: true}])
					return process.exit()
				}, 10)

			}
			if (response.selectedText === 'Personagem') {
				term.clear()

				term.cyan('\n\nSelecione o personagem para ler o seu resumo.\n')

				var items = ['a. Herói Vagabundo', 'b. Ditadora Facista', 'c. @goshDev', 'd. Boi Sonoro']

				term.singleColumnMenu(items, function (error, response) {
					// term('\n').eraseLineAfter.green(
					// 	'#%s selected: %s (%s,%s)\n',
					// 	response.selectedIndex,
					// 	response.selectedText,
					// 	response.x,
					// 	response.y
					// )
					// console.log(`Você escolheu: Personagem ${response.selectedText}`)
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
				})
			}
			if (response.selectedText === 'Capítulos') {
				term.clear()
				console.log(`
Você escolheu: Capítulos
			`)
			}
			if (response.selectedText === 'Ajuda') {
				term.clear()
				console.log(`
Você escolheu: Ajuda
			`)
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

	term.grabInput({mouse: 'button', focus: true})

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
	const {yellow, cyan, blue, red, green, dim} = require('chalk')

	console.log(`

`)
	var r = Math.floor(Math.random() * 256)
	var g = Math.floor(Math.random() * 256)
	var b = Math.floor(Math.random() * 256)
	// term.bold.cyan('Setting the cursor color to RGB (%d,%d,%d)\n', r, g, b)
	term.setCursorColorRgb(r, g, b)
}

module.exports = {constructorTabChooser}
