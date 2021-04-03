#!/usr/bin/env node
const clearConsole = require('clear-any-console')
const debug = require('./debug')
const meow = require('meow')
const {green, yellow, cyan, blue} = require('chalk')
const init = require('./init')
const chooseChapters = require('./chooseChapters')

const helpText = `
	${blue(`Usage`)}
		${green(`npx nuktpls`)} ${yellow(`[options]`)} ${yellow(`<command>`)}

	${blue(`Options`)}
		${yellow(`--debug`)},	${yellow(`-d`)}	${blue(`To print debug info's.`)}
		${yellow(`--version`)},	${yellow(`-v`)}	${blue(`To print debug info's.`)}
		${yellow(`--versão`)}		${blue(`To print debug info's.`)}
		${yellow(`--clear`)},		${blue(`Clear the console.`)}
		${yellow(`--no-clear`)},		${blue(`Don't clear the console.`)}

	${blue(`Commands`)}
		${cyan(`--welcome`)},	${cyan(`-w`)}	${blue(`To print debug info's.`)}
		${cyan(`--chapter`)},	${cyan(`-c`)}	${blue(`--chapter="10" || -c 10 `)}
		${cyan(`--help`)},		${cyan(`-h`)}	${blue(`Print CLI help informations.`)}

	${blue(`Examples`)}
		${green(`npx nuktpls`)} ${yellow(`--welcome`)}
		${green(`npx nuktpls`)} ${yellow(`--no-warning`)}
`
const options = {
	inferType: true,
	flags: {
		page: {
			alias: 'p'
		},
		página: {
			alias: 'pagina'
		},
		debug: {
			type: 'boolean',
			default: false,
			alias: 'd'
		},
		version: {
			type: 'boolean',
			default: false,
			alias: 'v'
		},
		versão: {
			type: 'boolean',
			default: false
		},
		welcome: {
			type: 'boolean',
			default: false,
			alias: '-w'
		},
		help: {
			type: 'boolean',
			default: false,
			alias: '-h'
		},
		chapter: {
			alias: 'c'
		},
		capítulo: {
			alias: 'capitulo'
		},
		clear: {
			type: 'boolean',
			default: true
		}
	}
}
// clearConsole()

const helper = meow(helpText, options)
if (helper.flags.welcome) {
	init.sceneWelcome()
}
if (helper.flags.chapter || helper.flags.capítulo) {
	init.sceneChapter(helper.flags.chapter || helper.flags.capítulo)
}

helper.input.includes('help') && helper.showHelp(0)
helper.input.includes('versão') && helper.showVersion(0)
debug(helper.flags.debug, helper.flags, helper.input)
// (async () => {

// })
