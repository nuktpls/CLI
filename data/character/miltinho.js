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

function gender(heroTermn) {
	if (!heroTermn) {
		return
	}
	if (heroTermn === 'o') {
		return 'Masculino'
	}
	if (heroTermn === 'a') {
		return 'Feminino'
	}
	if (heroTermn === '@') {
		return 'Sem gênero'
	}
	if (heroTermn !== 'o' && heroTermn !== 'a') {
		return 'Gênero diverso'
	}
}
const characterData = {
	term: heroName,
	description: `${green.bold.underline(heroName)}

${green('Nome:')} 			${heroName}
${green('Gênero:')} 		${gender(heroA)}
${green('Idade:')} 			13 anos
${green('Versões:')} 		Brasil beta 2.0.X.X; Brasil 3.0
${green('Nascimento:')} 		18/02/20XX
${green('Local de nascimento:')} 	${heroCity}

${green.bold('Resumo')}
${heroTermn.toUpperCase()} pequen${heroTermn} ${heroName} vive nos subúrbios de ${heroCity}.
Irm${heroTermnAO} do Menor Vagabundo que é o baterista e um dos mais habilidosos
soldados do Esquadrão Vagabundo.`,
	topology: 'Circuito',
	state: 'Esteira',
	iterator: 'ação',
	agent: 'Termo',
	subAgent: 'Descrição'
}

module.exports = {characterData}
