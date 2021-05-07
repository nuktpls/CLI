const fs = require('fs')
var path = require('path')
const term = require('terminal-kit').terminal

function sceneGlossary(method) {
	const dataDir = path.resolve(__dirname, '../../../data/glossary')
	const glossaryTermsFiles = fs.readdirSync(dataDir)

	let arrayItems = []
	let arrayTitles = []
	glossaryTermsFiles.map(termFile => {
		const contentFile = require(`../../../data/glossary/${termFile}`)

		const {term} = contentFile.glossaryTerm
		if (method === 'arrayTitles') {
			arrayTitles.push(term)
		}
		if (method === 'arrayItems') {
			arrayItems.push(contentFile)
		}
	})

	return method === 'arrayTitles' ? arrayTitles : arrayItems
}

const deviceGlossary = nz => {
	const items = sceneGlossary('arrayTitles')
	term.gridMenu(items, function (error, response) {
		const itemsTermDesc = sceneGlossary('arrayItems')

		const termObj = itemsTermDesc.find(
			termObj => termObj.glossaryTerm.term === response.selectedText
		)
		const {glossaryTerm} = require('../../Menu/components/glossaryTerm')
		glossaryTerm(termObj.glossaryTerm.term, termObj.glossaryTerm.description)
		process.exit()
	})
}

module.exports = {deviceGlossary}
