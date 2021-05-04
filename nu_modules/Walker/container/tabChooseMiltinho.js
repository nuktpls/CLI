const dotenv = require('dotenv')
const fs = require('fs')
const term = require('terminal-kit').terminal
var resolvePath = require('resolve-path')

const clearConsole = require('clear-any-console')
const chooseMiltinho = () => {
	    var fullpath = resolvePath('./', '.env.staging')

	const file = dotenv.parse(fs.readFileSync(fullpath))
	const dataInsert = `HERO_NAME=${file.HERO_NAME}
HERO_HE=${file.HERO_HE}
HERO_A=${file.HERO_A}
HERO_TERMN=${file.HERO_TERMN}
HERO_TERMN_AO=${file.HERO_TERMN_AO}
HERO_INIT_NAME=${file.HERO_INIT_NAME}`

	const filename = './.env'
	//  appendFileSync
	fs.writeFileSync(filename, dataInsert, 'utf-8')
	const fileFinal = dotenv.parse(fs.readFileSync('./.env'))

	const heroName = fileFinal.HERO_NAME
	const heroTermn = fileFinal.HERO_TERMN
	clearConsole()
	term.cyan(`Você já pode iniciar o sistema.\n`)
	term.green(`\nDigite "nuktpls" e seja bem-vind${heroTermn}!\n\n`)

	process.exit()
}
module.exports = {chooseMiltinho}
