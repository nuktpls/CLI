const {yellow} = require('chalk')
const heroiVagabundo = `
${yellow('Nome:')} 			Herói Vagabundo
${yellow('Gênero:')} 		Masculino
${yellow('Idade:')} 			16 anos
${yellow('Versões:')} 		Indefinido
${yellow('Nascimento:')} 		01/01/????
${yellow('Local de nascimento:')} 	Brasil antigo
`

const ditadoraFacista = `
${yellow('Nome:')} 			Ditadora Facista
${yellow('Gênero:')} 		Feminino
${yellow('Idade:')} 			18 anos
${yellow('Versões:')} 		Brasil Antigo; Brasil beta 2.0.X.X; Brasil 3.0
${yellow('Nascimento:')} 		02/10/1999
${yellow('Local de nascimento:')} 	Brasil Antigo
`

const boiSonoro = `
${yellow('Nome:')} 			Boi Sonoro
${yellow('Gênero:')} 		Masculino
${yellow('Idade:')} 			23 anos
${yellow('Versões:')} 		Indefinido
${yellow('Nascimento:')} 		21/03/20XX
${yellow('Local de nascimento:')} 	Brasil beta 2.0.X.X
`

const goshDev = `
${yellow('Nome:')} 			@goshDev
${yellow('Gênero:')} 		Sem gênero
${yellow('Idade:')} 			18 anos
${yellow('Versões:')} 		Brasil beta 2.0.X.X; Brasil 3.0
${yellow('Nascimento:')} 		Antes da contagem do tempo
${yellow('Local de nascimento:')} 	Fora do Tártaro
`

module.exports = {heroiVagabundo, ditadoraFacista, boiSonoro, goshDev}
