const {
	heroName,
	yellow,
	cyan,
	blue,
	red,
	green,
	heroHe,
	heroTermn,
	heroA
} = require('../dependencies')
const capituloSete = `
${cyan('Pagode do Esquadrão')}

${yellow('<Narração>')}Mais tarde, ${heroName} está em casa fazendo algumas panquecas. 
As panquecas são enfileiradas uma a uma, ${heroHe} despeja manteiga, 
depois uma calda cor caramelo e encharca a todas.
${yellow('<Narração>')}Pega uma panqueca com a mão. Calda e manteiga escorrem.
${yellow('<Narração>')}A campainha toca. ${heroName} estranha, levantasse e vai atender 
a porta. É o seu irmão.
${yellow('<MenorVagabundo>')}Eae manim, trancou aqui por quê?
${green('<' + heroName + '>')}Você não precisa de mim pra abrir.
${yellow('<MenorVagabundo>')}Eu só tava testando a campainha pra ver se ainda funcionava. 
Que cheiro é esse? Você fez panqueca!
${yellow('<Narração>')}Menor joga n${heroTermn} ${heroName} sua bolsa e capa.
Vai para a cozinha, pega as panquecas e sai para o quarto.
${yellow('<MenorVagabundo>')}É melhor você fazer mais, ela disse que vem todo mundo.
${green('<' + heroName + '>')}Ela quem? Eu não vou fazer nada.
${yellow('<Narração>')}No quarto sentado na cama do ${heroName}, Menor come ferozmente 
as panquecas.
${yellow('<MenorVagabundo>')}Caramba, isso é bom demais. Tem mais aí?
${green('<' + heroName + '>')}Não. Tem pra fazer.
${yellow('<Narração>')}Com um coração mole, ${heroTermn} pequen${heroTermn} vai na
dispensa e pega alguns ingredientes. E volta com mais duas pilhas de panquecas.
${green('<' + heroName + '>')}Aqui, pode comer maninho.
${yellow('<Narração>')}Constrangid${heroTermn}, ${heroHe} começa a dar voltas em círculo.
${yellow('<MenorVagabundo>')}Fala, ${heroName}. O que foi que tá pegando?
${green('<' + heroName + '>')}É que faz uns dias aí, eu achei melhor não comentar, 
mas eu vi a Lua aqui.
${yellow('<Narração>')}A campainha toca assustando ${heroName}. Menor continua 
comendo concentrado.
${yellow('<MenorVagabundo>')}Vai ficar fazendo pose aí, ou o quê?
${yellow('<Narração>')}Ao abrir a porta ${heroHe} se depara com um homem de meia idade.
${yellow('<AmareloVagabundo>')}Amarelo Vagabundo na área.
${green('<' + heroName + '>')}Pois... não!?
${yellow('<AmareloVagabundo>')}Pus não, não, se alguém colocou algo, não foi eu esse alguém.
${yellow('<Narração>')}Amarelo Vagabundo entra no barraco.
${yellow('<AmareloVagabundo>')}Eu só segui o que me falaram pra fazer. Já começou?
${green('<' + heroName + '>')}Começou o quê?
${yellow('<Narração>')}Amarelo avista Menor na cozinha pegando um frango do armazenador frio.
${yellow('<AmareloVagabundo>')}Eae pivete! Qual foi, Vagabundo?
${yellow('<MenorVagabundo>')}Abriram as portas do asilo, foi? Você tá acabadão 
desde a última vez que te vi. Mais velho, mais amarelo.
${yellow('<AmareloVagabundo>')}E continuo sendo menos estúpido que você né, pivete?
${yellow('<Narração>')}Olhares estranhos e tensos dão lugar a uma grande gargalhada 
e comprimentos de mão.
${green('<' + heroName + '>')}Maninho, quem é esse dái? Tipo, é meio tarde eu não sei se 
é bom a gente receber visita a essa hora.
${yellow('<Narração>')}Menor pega dois cigarros de sangue no armazenador seco.
${yellow('<MenorVagabundo>')}Já fumou?
${green('<' + heroName + '>')}Mano, tô dizendo que é pra não chaviar o pé do môi. 
Vocês sabem que tá proibido aglomeração.
${yellow('<MenorVagabundo>')}Tá passando aquela série, cola aqui.
${yellow('<AmareloVagabundo>')}Que série, tem série nova, é? Tava sabendo não.
${yellow('<MenorVagabundo>')}Nada, é aquela pirata lá dos heróis sendo caçado por uns gringos.
${yellow('<AmareloVagabundo>')}Ah, sim. Sei qual é, achei que você tava dizeno daquela 
que tão falando que vai sair, mas não sei se isso é verdade também 
porque ninguém pode fazer nada que a Ditadora não goste.
${green('<' + heroName + '>')}Vocês dois estão fazendo uma coisa errada e eu não quero 
nenhum problema por aqui. Nenhum mesmo. A qualquer momento pode chegar aqui um GADO.
${yellow('<Narração>')}Amarelo e Menor que até agora não prestavam atenção ao ${heroName}, 
param de assistir, arregalam os olhos e correm se escondendo.
${yellow('<MenorVagabundo>')}GADO? Corre, se esconde aí caramba.
${yellow('<AmareloVagabundo>')}Moleque, eu não vim aqui pra morrer.
${yellow('<MenorVagabundo>')}Apaga o beck, apaga o beck.
${yellow('<Narração>')}A campainha toca de novo. ${heroName} vai atendê-la.
${yellow('<ZóinVagabundo>')}Zóin.
${yellow('<PernaVagabundo>')}E Perna Vagabundo, se apresentando. Você deve ser ${heroTermn} ${heroName}.
${green('<' + heroName + '>')}Fala baixo, o que vocês estão fazendo aqui? Sai daqui?
${yellow('<PernaVagabundo>')}Não fala que os GADO já estão aqui?
${yellow('<ZóinVagabundo>')}Eu não ouvi nada no caminho.
${green('<' + heroName + '>')}Quê? Não, ainda não, mas...
${yellow('<PernaVagabundo>')}Graças a Deus, que susto.
${yellow('<Narração>')}Os dois entram para dentro do barraco do ${heroName}.
${yellow('<ZóinVagabundo>')}Onde eu posso guardar isso, é pesado demais.
${yellow('<Narração>')}Envolto a um pano está uma arma de sangue que Zóin Vagabundo carrega. 
O brilho vermelho seduz aos olhos de qualquer um. Zóin também entrega 
um amuleto e um bracelete. Eram todos aumentos de sangue.
${yellow('<PernaVagabundo>')}Tá daora aqui, né? Tem até câmera de segurança. 
Você mesmo que instalou?
${green('<' + heroName + '>')}Oi, não. Foi o meu irmão, o Menor Vagabundo.
${yellow('<Narração>')}Zóin vai direto para o armazenador de necessidades físicas.
${green('<' + heroName + '>')}Poxa mano, fecha essa porta pelo menos.
${yellow('<MenorVagabundo>')}Perna, vem. Vai começar o nosso reality.
${yellow('<PernaVagabundo>')}Menor Vagabundo, a lenda.
${yellow('<AmareloVagabundo>')}Vamos levantar essas camas senão não vai caber todo mundo.
${green('<' + heroName + '>')}”Todo mundo”? Aí não cabe nem nós dois.
${yellow('<PernaVagabundo>')}Eu pego desse lado.
${yellow('<Narração>')}Eles arrumam o quarto. ${heroName} confuso com uma arma pesada 
nos braços. A campainha toca.
${green('<' + heroName + '>')}Qual foi dessa vez? Já lotou o suficiente aqui irmão. 
Sai fora, vai aglomerar lá na casa da família de vocês. Já tem 
Vagabundo demais no meu barraco. Se der ruim eu vou entregar 
todo mundo e tô nem aí.
${yellow('<Narração>')}Ao abrir a porta mais oito integrantes do Esquadrão e Lua. 
Eles tocam um samba puxado pela voz da Novinha Vagabundo.
${yellow('<NovinhaVagabundo ação=”cantar”>')}Nasceu tão lind${heroTermn}. Como ${heroA} anj${heroTermn} 
veio sorrindo. Tão pequenininh${heroTermn}, do céu aos meus braços veio parar. 
Soluços e choros, mamadas e risadas, se fosse um pouco maior 
eu iria te apertar. Filh${heroTermn} querid${heroTermn} o mundo inteiro 
quer dizer, como eu crio você, mas não vou deixar não. Já sei fazer 
você parar de chorar, sei sua cólica aliviar, pois quem manda 
é o meu coração. ${heroName} lind${heroTermn}, se tu ouvires 
os meus conselhos, saberás que vieram da sabedoria do nosso Senhor. 
Vai e segue fiel pelo caminho, sede firme e não serás sozinh${heroTermn}, 
pois quem te fala é meu amor.
${green('<' + heroName + '>')}Lua! Isso foi golpe baixo.
${yellow('<Narração>')}A cozinha se transforma em uma fábrica de panquecas. E a fumaça 
da cozinha se mistura com uma densa e avermelhada fumaça vinda do quarto.
${green('<' + heroName + '>')}Opa, por favor, essa batata palha é minha. 
E esse chá de camomila também. Você poderia me devolver?
${yellow('<BinárioVagabundo>')}A gente adora açúcar precioso, mas não mais gosto. 
De repente se você me der o precioso, não quero. Deixa pra lá, 
pode me dar um pouco de água?
${yellow('<PrincesinhaVagabundo>')}Ele não bate muito bem das ideia não. Não liga pra ele.
${green('<' + heroName + '>')}Ele só me pediu água.
${yellow('<PrincesinhaVagabundo>')}É assim que começa, você dá água e vê onde vai parar.
${yellow('<Narração>')}São muitos Vagabundo reunidos indo e vindo. ${heroName} tenta 
pôr ordem nas coisas, como sempre gostou. Pede silêncio e insiste 
toda hora para que não comecem a cantar.
${green('<' + heroName + '>')}Eu vou ficar sem comida. As batatas não. Deixa isso daí. 
Você não precisa de tudo isso.
${yellow('<Narração>')}${heroName} fala em vão com Negão Vagabundo.
${yellow('<RastaVagabundo>')}Ele vai comer tudo e vai querer mais. Se liga.
${green('<' + heroName + '>')}Pra onde você vai com o meu colchão? Leva de volta.
${yellow('<FilhoVagabundo>')}Oi Lua, com licença. Você aceita um chá de sangue?
${cyan('<Lua>')}Não, obrigado, Filho. Eu não fumo, mas aceito uma panqueca de brigadeiro 
branco com granulado colorido.
${yellow('<Narração>')}Lua sai do quarto e vai para a porta de entrada e começa a contar.
${yellow('<Narração>')}Ela tropeça entre livros e bugigangas, parece preocupada.
${cyan('<Lua>')}Menor, Amarelo, Princesinha, Novinha, Rasta, Filho, Binário, Zóin, 
Perna, Negão, X Matematx, Unix.
${yellow('<PrincesinhaVagabundo>')}Sai da frente.
${green('<' + heroName + '>')}Gente, não joga queimada no chão.
${yellow('<XMatematx para=”Lua”>')}Eu tô lendo o livro que você me deu, Luazinha, 
mas eu não entendi nada o que o polvo tem a ver com a gente.
${cyan('<Lua>')}Um dia você entende, X.
${cyan('<Lua>')}Poxa, tem um Vagabundo a menos.
${yellow('<MenorVagabundo>')}Ele vai chegar atrasado. Ele teve que se desconectar dessa 
realidade pra entrar e sair do show. E pra despistar o GADO 
ele foi pela malha geométrica, entrou em 2012 a.D. Tem uma falha 
na projeção no Viaduto do Chá que ele usa nessa data 
e isso pode demorar. Mas ele vem.
${yellow('<FilhoVagabundo>')}Lua, aqui a panqueca que você pediucom brigadeiro branco. 
Eu achei um pouco enjoativa. 
${cyan('<Lua>')}É perfeita!
${yellow('<FilhoVagabundo>')}Você é a única que gosta dessas coisas doces por aqui.
${yellow('<Narração>')}A comida já está no fim. Não tem bebida, então bebem água. 
Fumam muito sangue. Riem alto e frequentemente estão sacaneando um ao outro.
${cyan('<Lua>')}${heroName}, você tá meio estressad${heroTermn} hoje.
${green('<' + heroName + '>')}Claro, eu não te vejo há anos, você chega e traz os caras 
mais procurados do mundo pro meu barraco e você quer que eu fique feliz, Lua?
${cyan('<Lua>')}Eles precisavam de um lugar pra descansar depois do show. 
Só que energia é o que não falta pro Esquadrão, parceiro.
${green('<' + heroName + '>')}Energia? Eu é que não tenho mais energia. Eles acabaram 
com minha comida. Sujaram todo meu quarto. Tem fumaça pra todo lado. 
Não vou nem falar o que vai acontecer se os GADO chegarem aqui agora. 
Meu armazenador do banheiro tá entupido! E eu nem gosto tanto assim 
da música deles.
${yellow('<Narração>')}Nesse momento o projetor é desligado e todos ficam em silêncio. 
Olhares desconfiados direcionados para ${heroName}.
${green('<' + heroName + '>')}O que foi, eu tenho que gostar agora do que vocês fazem?
${yellow('<FilhoVagabundo para=”${heroName}” >')}Desculpa, com licença.
Oi, mas o que eu faço com esse cinzeiro?
${yellow('<NegãoVagabundo>')}Hora da limpeza? Deixa comigo!
${yellow('<Narração>')}O barraco é impecavelmente limpo em instantes por Negão Vagabundo 
e seu braço de sangue multifunções. A campainha toca. Lua encara a porta.
${yellow('<MenorVagabundo>')}Ele chegou.
`

module.exports = { capituloSete }
