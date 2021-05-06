const clearConsole = require('clear-any-console')
const glossaryTerm = (term, desc) => {
  clearConsole()
  console.log(`
 GLOSSÁRIO - Termo ${term}
  
  `)
  console.log(` ${term}`)
  console.log(` ${desc}`)
  console.log(`
  
  
  
  `)
}
module.exports = { glossaryTerm }