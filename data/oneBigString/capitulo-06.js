const {heroName, yellow, cyan, blue, red, green, heroCity, heroTermn} = require('../dependencies')

const capituloSeis = `
${cyan('Vielas e Becos')}

${yellow('<Narração>')}${heroName} com mais duas amigas
retornam do show cantarolando e atravessando as vielas para
cortar atalho por entre as favelas de ${heroCity}.
${yellow('<Narração>')}Passam pela feira da madrugada. O olhar fixo a
cada passo, mas na cabeça a música não para.
${red('#feiranteUm( [ ‘ação’: ‘gritar’ ] )')} Ó o acarajé! Ó o acarajé!
${red('#feiranteDois')} Aqui está madame, 1kg de tomate. São 12
Kiras.
${yellow('<Narração>')}Toda vez que passam na feira é de lei que
comprem uma panqueca recheada para dividir.
${red('#panquequeiro')} Aqui, pode pedir.
${green('<' + heroName + '>')}Pode ser uma panqueca de frango com caterpi.
${yellow('<Narração>')}A panqueca passa com maestria de mão em
mão, uma mordida para cada um. Apanha quem deixar algo
cair no chão. ${heroName} é ${heroTermn} desastrad${heroTermn} da turma.
${blue('<Nat>')}Aí caramba, pô mano, segura direito o barato aí.
${red('<Mandinha>')}Não vale, truta, eu comi uma parte só com
massa.
${blue('<Nat>')}Qual foi, ${heroName}, que você falou lá que a Lua teve a
coragem de dar as caras na quebrada?
${green('<' + heroName + '>')}Então, nem sei qual é daquela mina. Sai fora.
${red('<Mandinha>')}Ela é rica, vê o que ela quer e tenta ganhar
uma grana em cima.
${green('<' + heroName + '>')}Não sei não, Mandinha. Essa mina só arruma
pras cabeça, táli?
${red('<Mandinha>')}Toli.
`

module.exports = {capituloSeis}
