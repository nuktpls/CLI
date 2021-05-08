const {
	yellow,
	cyan,
	blue,
	red,
	green,
	heroName,
	heroCity,
	heroTermn,
	heroA,
	heroTermnAO
} = require('../dependencies')
const tabData = {
	agent: 'Boi Sonoro',
	subAgent: `${green.bold.underline('Boi Sonoro')}

${green('Nome:')} 			Boi Sonoro
${green('Gênero:')} 		Masculino
${green('Idade:')} 			23 anos
${green('Versões:')} 		Indefinido
${green('Nascimento:')} 		21/03/20XX
${green('Local de nascimento:')} 	Brasil beta 2.0.X.X

${green.bold('Resumo')}
Escolhido como o chefe do Exército PT-BR e oriundo de uma família incluída
manualmente na realidade do Brasil.
A família Sonoro tem como seu chefe o temido Boi Sonoro.
	`
}

module.exports = {tabData}
