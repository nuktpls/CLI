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
	term: 'Herói Vagabundo',
	description: `${yellow.bold.underline('Herói Vagabundo')}

${yellow('Nome:')} 			Herói Vagabundo
${yellow('Gênero:')} 		Masculino
${yellow('Idade:')} 			16 anos
${yellow('Versões:')} 		Indefinido
${yellow('Nascimento:')} 		01/01/????
${yellow('Local de nascimento:')} 	Brasil antigo

${yellow.bold('Resumo')}
Com uma história misteriosa, cheia de mentiras e ilegalidades, o líder
do Esquadrão Vagabundo tenta escapar da Eugenia e saltar de realidade.
	`,
	topology: 'Circuito',
	state: 'Esteira',
	iterator: 'ação',
	agent: 'Termo',
	subAgent: 'Descrição'
}

module.exports = {characterData}
