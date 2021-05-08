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
	term: 'Ditadora Facista',
	description: `${red.bold.underline('Ditadora Facista')}

${red('Nome:')} 			Ditadora Facista
${red('Gênero:')} 		Feminino
${red('Idade:')} 			18 anos
${red('Versões:')} 		Brasil Antigo; Brasil beta 2.0.X.X; Brasil 3.0
${red('Nascimento:')} 		02/10/1999
${red('Local de nascimento:')} 	Brasil Antigo

${red.bold('Resumo')}
Conhecida pelo seu vírus da felicidade, a Presidenta Ditadora Facista
se tornou adorada no Brasil inteiro.
	`,
	topology: 'Circuito',
	state: 'Esteira',
	iterator: 'ação',
	agent: 'Termo',
	subAgent: 'Descrição'
}

module.exports = {characterData}
