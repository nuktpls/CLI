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
} = require('./dependencies')
// const {yellow, red, green, cyan} = require('chalk')
const heroiVagabundo = `${yellow.bold.underline('Herói Vagabundo')}

${yellow('Nome:')} 			Herói Vagabundo
${yellow('Gênero:')} 		Masculino
${yellow('Idade:')} 			16 anos
${yellow('Versões:')} 		Indefinido
${yellow('Nascimento:')} 		01/01/????
${yellow('Local de nascimento:')} 	Brasil antigo

${yellow.bold('Resumo')}
Com uma história misteriosa, cheia de mentiras e ilegalidades, o líder
do Esquadrão Vagabundo tenta escapar da Eugenia e saltar de realidade.
`

const ditadoraFacista = `${red.bold.underline('Ditadora Facista')}

${red('Nome:')} 			Ditadora Facista
${red('Gênero:')} 		Feminino
${red('Idade:')} 			18 anos
${red('Versões:')} 		Brasil Antigo; Brasil beta 2.0.X.X; Brasil 3.0
${red('Nascimento:')} 		02/10/1999
${red('Local de nascimento:')} 	Brasil Antigo

${red.bold('Resumo')}
Conhecida pelo seu vírus da felicidade, a Presidenta Ditadora Facista
se tornou adorada no Brasil inteiro.
`

const boiSonoro = `${green.bold.underline('Boi Sonoro')}

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

const goshDev = `${cyan.bold.underline('@goshDev')}

${cyan('Nome:')} 			@goshDev
${cyan('Gênero:')} 		Sem gênero
${cyan('Idade:')} 			18 anos
${cyan('Versões:')} 		Brasil beta 2.0.X.X; Brasil 3.0
${cyan('Nascimento:')} 		Antes da contagem do tempo
${cyan('Local de nascimento:')} 	Fora do Tártaro

${cyan.bold('Resumo')}
@goshDev entrou no Brasil na versão 3.0.
`
function gender(heroA) {
  if (!heroA) {
    return
  }
  if (heroA === 'um') {
    return 'Masculino'
  }
  if (heroA === 'uma') {
    return 'Feminino'
  }
  if (heroA === '@') {
    return 'Sem gênero'
  }
  if (heroA !== 'um' && heroA !== 'uma') {
    return 'Gênero diverso'
  }
}
const heroResume = `${green.bold.underline(heroName)}
		
${green('Nome:')} 			${heroName}
${green('Gênero:')} 		${gender(heroA)}
${green('Idade:')} 			13 anos
${green('Versões:')} 		Brasil beta 2.0.X.X; Brasil 3.0
${green('Nascimento:')} 		18/08/20XX
${green('Local de nascimento:')} 	${heroCity}

${green.bold('Resumo')}
${heroTermn.toUpperCase()} pequen${heroTermn} ${heroName} vive nos subúrbios de ${heroCity}.
Irm${heroTermnAO} do Menor Vagabundo que é um baterista e dos mais 
habilidosos soldados do Esquadrão Vagabundo.

`


module.exports = { heroiVagabundo, ditadoraFacista, boiSonoro, goshDev, heroResume }
