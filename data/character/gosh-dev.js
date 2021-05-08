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
	term: '@goshDev',
	description: `${cyan.bold.underline('@goshDev')}

${cyan('Nome:')} 			@goshDev
${cyan('Gênero:')} 		Sem gênero
${cyan('Idade:')} 			18 anos
${cyan('Versões:')} 		Brasil beta 2.0.X.X; Brasil 3.0
${cyan('Nascimento:')} 		Antes da contagem do tempo
${cyan('Local de nascimento:')} 	Fora do Tártaro

${cyan.bold('Resumo')}
@goshDev entrou no Brasil na versão 3.0.
	`,
	topology: 'Circuito',
	state: 'Esteira',
	iterator: 'ação',
	agent: 'Termo',
	subAgent: 'Descrição'
}

module.exports = {characterData}
