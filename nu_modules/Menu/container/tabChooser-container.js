const term = require('terminal-kit').terminal
const {deviceChapter} = require('../../Walker/container/deviceChapter-container')
const {deviceGlossary} = require('../../Menu/container/deviceGlossary')
const {deviceCharacter} = require('../../Menu/container/deviceCharacter-container')
const firstRun = require('first-run')
const dotenv = require('dotenv')
const fs = require('fs')
var path = require('path')
const appRoot = require('app-root-path')
const {items} = require('../config')

const constructorTabChooser = (
	laFunc,
	tabMULTIPLEarrays,
	lesCaras,
	tabCharacters,
	sceneChapter
) => {
	term.clear()

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
					laFunc(tabMULTIPLEarrays(), true, [{welcome: true}])
					return process.exit()
				}, 10)
			}
			if (response.selectedText === 'Personagem') {
				term.clear()
				term.cyan('Selecione o personagem para ler o seu resumo.\n\n')
				deviceCharacter()
			}
			if (response.selectedText === 'Capítulo') {
				term.clear()
				console.log(`
Você escolheu: Capítulo
			`)
				deviceChapter(sceneChapter, 1)
				// process.exit()
			}
			if (response.selectedText === 'Aula') {
				term.clear()
				term.cyan(`Aula

				`)
				// deviceGlossary()
				const items = [
					'Aula 01 - Introdução ao Caminho da Luz',
					'Aula 02 - Propedêuticas ao Código',
					'Aula 03 - Topologias Cibernéticas'
				]
				term.singleColumnMenu(items, function (error, response) {})
				// process.exit()
			}
			if (response.selectedText === 'Glossário') {
				term.clear()
				term.cyan(`Selecione o termo para ler a sua descrição.

				`)
				deviceGlossary()
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
