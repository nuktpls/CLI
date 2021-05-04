const term = require('terminal-kit').terminal


const deviceChapter = (sceneChapter, n) => {
  var items = ['Capítulo 01 - O Sangue', 'Capítulo 02 - Brasil, 2005 do ano comum', 'Capítulo 03 - Lua, a Famosa Hacker', 'Capítulo 04 - Nova São Paulo', 'Capítulo 05 - Show do Esquadrão',
    'Capítulo 06 - Vielas e Becos',
    'Capítulo 07 - Pagode do Esquadrão',
    'Capítulo 08 - Esquadrão Voltou',
    'Capítulo 09 - A Pedra da Lua',
    'Capítulo 10 - A Canção do Herói',
    'Capítulo 11 - Celeste, a Deusa',
    'Capítulo 12 - No Rastro do Herói',
    'Capítulo 13 - Agradecimentos']
  term.singleColumnMenu(items, function (error, response) {
    sceneChapter(response.selectedIndex + 1)
    process.exit()
  })
}

module.exports = { deviceChapter }