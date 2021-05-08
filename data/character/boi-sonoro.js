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
const characterData = {
	term: 'Boi Sonoro',
	description: `${green.bold.underline('Boi Sonoro')}

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
	`,
	topology: 'Circuito',
	state: 'Esteira',
	iterator: 'ação',
	agent: 'Termo',
	subAgent: 'Descrição'
}

module.exports = {characterData}
