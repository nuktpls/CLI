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
const {capituloQuatro} = require('./oneBigString/capitulo-04')
const {capituloCinco} = require('./oneBigString/capitulo-05')
const {capituloSeis} = require('./oneBigString/capitulo-06')
const {capituloSete} = require('./oneBigString/capitulo-07')
const {capituloOito} = require('./oneBigString/capitulo-08')
const {capituloNove} = require('./oneBigString/capitulo-09')
const {capituloDez} = require('./oneBigString/capitulo-10')
const {capituloOnze} = require('./oneBigString/capitulo-11')
const {capituloDoze} = require('./oneBigString/capitulo-12')
const {capituloTreze} = require('./oneBigString/capitulo-13')

const newCapitulo = subAgent => {
	if (!subAgent) {
		return null
	}

	// fs.readdir('./data/oneBigString', (err, files) => {
	// 	if (err) {
	// 		console.error(err)
	// 		return
	// 	}

	// 	files.map(theFile => {
	// 		// theFile.split(/(\w)(\-)(\d)(\.)/)
	// 		// console.log(theFile.split(/(\w)(\-)(\d)(\.)/))
	// 		const digitsCount = files.length.toString().length
	// 		const numeroUltra = theFile.slice(9, -3).padStart(digitsCount, '0')
	// 		const digitPattern = subAgent.toString().padStart(digitsCount, '0')
	// 		if (numeroUltra === digitPattern) {
	// 			// console.log('Tem sim, o capítulo: ', numeroUltra)
	// 			// console.log('capitulo-' + digitPattern + '.js')
	// 		}
	// 		// console.log(digitPattern)

	// 		// numeroUltra === digitPattern ? console.log(digitPattern) : null
	// 	})
	// })
}
newCapitulo(13)

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
	newCapitulo,
	capituloQuatro,
	capituloCinco,
	capituloSeis,
	capituloSete,
	capituloOito,
	capituloNove,
	capituloDez,
	capituloOnze,
	capituloDoze,
	capituloTreze
	// nuMESSAGEtabTwo,
	// nuMESSAGEtabThree,
}
