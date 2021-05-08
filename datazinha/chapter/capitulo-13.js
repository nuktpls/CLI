const {yellow, cyan, magentaBright, blue, red, green, dim} = require('chalk')
const tabData = {
	agent: 'Capítulo 13',
	subAgent: `
Obrigado por lerem até aqui esta aventura.
Eu sinceramente espero que vocês tenham se divertido no mundo
da imaginação e literatura. Apoiem o projeto para
que possa continuar. Esse é o link onde você pode realizar
apoios financeiros de qualquer quantia:

\u{1F419} ${magentaBright('https://apoia.se/room')}.

Caso queira apoiar via Pix, pode entrar em contato
comigo via rede social.

\u{1F9C3} Aqui está o meu perfil no LinkedIn:
${blue('https://www.linkedin.com/in/miltonbolonha')}

\u{1F4F8} O meu perfil de Instagram :
${magentaBright('https://www.instagram.com/kikobolonha')}

\u{1F4E7} E-mail:
${blue('miltonbolonha@gmail.com')}

Nos vemos em breve com mais novidades \u{1F63B}
`
}
module.exports = {tabData}
