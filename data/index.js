const fs = require('fs')

const {
	nuTEIASbemvindo,
	nuTERIASfecha,
	nuTEIASabre,
	nuMESSAGE,
	nuMESSAGElinks
} = require('./multipleStrings/multipleStrig-01')

const {capitulo} = require('./oneBigString/capitulo-01')
const {capituloUm} = require('./oneBigString/capitulo-01')
const {capituloDois} = require('./oneBigString/capitulo-02')
const {capituloTres} = require('./oneBigString/capitulo-03')

const newCapitulo = subAgent => {
	if (!subAgent) {
		return null
	}

	fs.readdir('./data/oneBigString', (err, files) => {
		if (err) {
			console.error(err)
			return
		}

		files.map(theFile => {
			// theFile.split(/(\w)(\-)(\d)(\.)/)
			// console.log(theFile.split(/(\w)(\-)(\d)(\.)/))
			const digitsCount = files.length.toString().length
			const numeroUltra = theFile.slice(9, -3).padStart(digitsCount, '0')
			const digitPattern = subAgent.toString().padStart(digitsCount, '0')
			if (numeroUltra === digitPattern) {
				console.log('Tem sim, o capítulo: ', numeroUltra)
				console.log('capitulo-' + digitPattern + '.js')
			}
			// console.log(digitPattern)

			// numeroUltra === digitPattern ? console.log(digitPattern) : null
		})
	})
}
newCapitulo(13)
// const nuMESSAGEtabTwo = `A História de NÜktpls 🐙`
// const nuMESSAGEtabThree = `O Sangue`

module.exports = {
	nuTEIASbemvindo,
	nuTERIASfecha,
	nuTEIASabre,
	nuMESSAGE,
	nuMESSAGElinks,
	capitulo,
	capituloUm,
	capituloDois,
	capituloTres,
	newCapitulo
	// nuMESSAGEtabTwo,
	// nuMESSAGEtabThree,
}
