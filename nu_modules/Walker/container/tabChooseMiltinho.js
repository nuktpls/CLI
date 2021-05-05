const dotenv = require('dotenv').config()
const fs = require('fs')
const term = require('terminal-kit').terminal
var path = require('path');
const appRoot = require('app-root-path');

const { miltinho } = require('../config/miltinho')
const clearConsole = require('clear-any-console')
const chooseMiltinho = () => {
	// return console.log(appRoot)
	// var fullpath = path.resolve(`${appRoot}/node_modules/nuktpls-cli/.env.staging`)
	// console.log(fullpath)

	const dataInsert = `HERO_NAME=${miltinho.HERO_NAME}
HERO_HE=${miltinho.HERO_HE}
HERO_A=${miltinho.HERO_A}
HERO_TERMN=${miltinho.HERO_TERMN}
HERO_TERMN_AO=${miltinho.HERO_TERMN_AO}
HERO_INIT_NAME=${miltinho.HERO_INIT_NAME}`
	console.log(dataInsert)
	const filename = path.resolve(`${appRoot}/.env`)
	console.log(path.resolve(filename))
	//  appendFileSync
	// process.exit()
	fs.writeFileSync(filename, dataInsert, 'utf-8')
	const fileFinal = dotenv.parse(fs.readFileSync(filename))

	const heroName = fileFinal.HERO_NAME
	const heroTermn = fileFinal.HERO_TERMN
	clearConsole()
	term.cyan(`Você já pode iniciar o sistema.\n`)
	term.green(`\nDigite "nuktpls" e seja bem-vind${heroTermn}!\n\n`)

	process.exit()
}
module.exports = { chooseMiltinho }
