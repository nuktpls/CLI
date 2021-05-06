const fs = require('fs')
var path = require('path')

const term = require('terminal-kit').terminal
const { readDir } = require('../../Fs')

function sceneGlossary(method) {
  // const glossaryTermsFiles = readDir('./')
  const dataDir = path.resolve(__dirname, '../../../data/glossary')
  const glossaryTermsFiles = fs.readdirSync(dataDir)
  // console.log(process.chdir('./'))
  // console.log()
  // process.cwd()
  // process.exit()
  let arrayItems = []
  let arrayTitles = []
  glossaryTermsFiles.map((termFile) => {
    const contentFile = require(`../../../data/glossary/${termFile}`)

    const { term, description } = contentFile.glossaryTerm
    if (method === 'arrayTitles') {
      arrayTitles.push(term)
    }
    if (method === 'arrayItems') {
      arrayItems.push(contentFile)
    }
  })
  // console.log(`readDir('./data/glossary'): `)
  // console.log(glossaryTermsFiles)
  // console.log('glossaryTermsFiles.map:')
  // console.log(arrayItems)
  // console.log('arrayTitles: ')
  return method === 'arrayTitles' ? arrayTitles : arrayItems
}

const deviceGlossary = (nz) => {

  const items = sceneGlossary('arrayTitles')
  term.singleColumnMenu(items, function (error, response) {
    // sceneGlossary(response.selectedIndex + 1)
    const itemsTermDesc = sceneGlossary('arrayItems')

    const termObj = itemsTermDesc.find(termObj => termObj.glossaryTerm.term === response.selectedText)
    // console.log(termObj)
    const { glossaryTerm } = require('../../Menu/components/glossaryTerm')
    glossaryTerm(termObj.glossaryTerm.term, termObj.glossaryTerm.description)
    process.exit()
  })
}

module.exports = { deviceGlossary }