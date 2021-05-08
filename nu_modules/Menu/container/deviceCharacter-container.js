const fs = require('fs')
var path = require('path')
const term = require('terminal-kit').terminal

function sceneCharacter(method) {
	const dataDir = path.resolve(__dirname, '../../../data/character')
	const characterDatasFiles = fs.readdirSync(dataDir)

	let arrayItems = []
	let arrayTitles = []
	characterDatasFiles.map(termFile => {
		const contentFile = require(`../../../data/character/${termFile}`)

		const {term} = contentFile.characterData
		if (method === 'arrayTitles') {
			arrayTitles.push(term)
		}
		if (method === 'arrayItems') {
			arrayItems.push(contentFile)
		}
	})

	return method === 'arrayTitles' ? arrayTitles : arrayItems
}

const deviceCharacter = nz => {
	const items = sceneCharacter('arrayTitles')
	term.singleColumnMenu(items, function (error, response) {
		const itemsTermDesc = sceneCharacter('arrayItems')
		const termObj = itemsTermDesc.find(
			termObj => termObj.characterData.term === response.selectedText
		)
		const {characterPrint} = require('../../Menu/components/character')
		characterPrint(termObj.characterData.term, termObj.characterData.description)
		process.exit()
	})
}

module.exports = {deviceCharacter}
