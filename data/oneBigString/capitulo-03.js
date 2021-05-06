const {
	heroName,
	yellow,
	cyan,
	blue,
	red,
	green,
	heroTermnAO,
	heroCity,
	heroTermn,
	heroA
} = require('../dependencies')

const capituloTres = `
${cyan('Lua, a Famosa Hacker')}

${yellow('<Narração>')}Em uma rua semi asfaltada de uma comuna ao entorno de ${heroCity},
em um terceiro andar de um barraco onde moram dois irmãos.
O Menor Vagabundo e ${heroTermn} ${heroName}. E como em qualquer
versão do Brasil é final de semana de churrasco de muita música por lá.
${yellow('<Narração>')}Nesse anoitecer o pagode ainda está vazio. ${heroName} está
limpando a frente da sua casa quando se aproxima uma garota
baixa de pele bem branca, cabelos castanhos claros e olhos claros.
${green('<' + heroName + '>')}Salvê!
${red('<Garota>')}Qual foi? Tá querendo que eu te salve ou só mandando um salve
e dizendo para eu sair daqui? Ou talvez esteja vendendo algo aí,
não se sente à vontade ainda de me oferecer e está me mandando
um código esperando que eu retribua com um pedido. Ou tá dizendo
que eu pareço com alguém que não tá bem e precisa ser salva?
${green('<' + heroName + '>')}Qual foi mina, tá doida? Eae, vai ficar aí parada ou o quê?
${red('<Garota>')}Tô decidindo o que fazer. Eu tô procurando ${heroA} baixinh${heroTermn}
bem franzin${heroTermn} mesmo, mirradinh${heroTermn}.
${green('<' + heroName + '>')}Desaparecid${heroTermn}? Não sei de ninguém assim. Por aqui não,
por aqui só a molecada da rua mesmo.
${green('<' + heroName + '>')}Ei, você não é daqui. Não deveria andar sozinha aqui não.
Tá querendo o quê? Tem Kira aí?
${red('<Garota>')}Qual foi ${heroName} e pensar que eu viveria pra ser ameaçada
logo por quem? Net${heroTermn} do fundador de ${heroCity}, agora ${heroA} Degenerad${heroTermn}?
${green('<' + heroName + '>')}Qual foi mina?
${red('<Garota>')}Cê tá diferente, mas não pode perder o Silêncio, ${heroName}. Jamais!
${green('<' + heroName + '>')}Quem é você?
${red('<Garota>')}Eu tô todo dia brilhando na tua cabeça. Você não para
de pensar em mim. Sou uma dev. Você sabe o que isso significa? Pô!?
${green('<' + heroName + '>')}Lua?!!! Sim, a hacker mais famosa do mundo que criou o NÜcoin,
foi contra o sistema financeiro LeKira e ficou bilionária
antes dos dezoito. Tudo as custas dos burguês. E agora desce
a favela procurando ${heroA} menin${heroTermn} perdid${heroTermn}?
${cyan('<Lua>')}Lá em cima tá chato, sabe?
${green('<' + heroName + '>')}Aqui é maneirinho...
${cyan('<Lua>')}Pelo menos meu sucesso chegou aqui e você ouviu falar de mim...
ou da grana que dizem que eu ganhei. Suave, irm${heroTermnAO}.
Mas é isso ae mesmo. Você tá precisando de um pouco de caos
pra ativar esse Silêncio aí. Vô avisar o Esquadrão que já temos
um lugar pra descansar.
${green('<' + heroName + '>')}Avisar quem? Que Esquadrão? Tá falando do quê?
Aqui é favela, entende? Não traz problema pra gente. Lá em Brasóleo
você vai encontrar os da sua laia. Cai fora, vai.
${yellow('<Narração>')}${heroName} entra em seu barraco, onde se certifica
de ligar seu aparelho de defesa. Lua é vista em um monitor indo embora.
${yellow('<Narração>')}É madrugada. As câmeras de segurança gravam um brilho
vindo do chão na frente da casa d${heroTermn} ${heroName}, o clarão formava um desenho
de uma lua emanando um brilho azul claro.
`

module.exports = {capituloTres}
