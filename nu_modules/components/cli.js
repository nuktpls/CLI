const {green, yellow, cyan, blue} = require('chalk')

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
	${cyan(`--welcome`)},	${cyan(`-w`)}	${blue(`To print Welcome Page.`)}
	${cyan(`--help`)},		${cyan(`-h`)}	${blue(`Print CLI help informations.`)}
	${cyan(`--chapter`)},	${cyan(`-c`)}	${blue(`Choosing chapter to print.`)}
	${cyan(`--capítulo`)},		${blue(`Choosing chapter to print.`)}
	${cyan(`--qtdRow`)},	${cyan(`-rows`)}	${blue(`quantity of lines to print.`)}
	${cyan(`--next`)},	${cyan(`-next`)}	${blue(`Next quantity to print.`)}
	${cyan(`--first`)},	${cyan(`-first`)}	${blue(`First quantities to print.`)}
	${cyan(`--rangeBegin`)},	${cyan(`-range`)}	${blue(`Range quantity to print.`)}
	${cyan(`--latest`)},	${cyan(`-lst`)}	${blue(`Latest quantity to print.`)}

${blue(`Examples`)}
	${green(`npx nuktpls`)}		${yellow(`--welcome`)}
	${green(`nuktpls --capitulo 2`)}	${yellow(`--next --rows=10`)}
	${green(`nuktpls --capitulo 2`)}	${yellow(`--rangeBegin=18  --rows=7`)}
	${green(`nuktpls --capitulo 2`)}	${yellow(`--first --rows 2`)}
	${green(`nuktpls --capitulo 2`)}	${yellow(`--latest --rows 7`)}

`
const options = {
	inferType: true,
	flags: {
		page: {
			alias: 'p',
			type: 'number',
			default: 0
		},
		página: {
			alias: 'pagina',
			type: 'number',
			default: 1
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
			alias: 'c',
			type: 'number',
			default: 0
		},
		capítulo: {
			alias: 'capitulo',
			type: 'number',
			default: 0
		},
		clear: {
			type: 'number',
			default: 0,
			alias: 'no-clear'
		},
		clearAll: {
			type: 'boolean',
			default: false,
			alias: 'clt'
		},
		qtdRow: {
			alias: 'rows',
			type: 'number',
			default: 0
		},
		next: {
			alias: 'nxt',
			type: 'number',
			default: 0
		},
		first: {
			alias: 'primeiros',
			type: 'boolean',
			default: false
		},
		rangeBegin: {
			alias: 'range',
			type: 'number',
			default: 0
		},
		latest: {
			alias: 'lst',
			type: 'boolean',
			default: false
		},
		character: {
			alias: 'personagem',
			type: 'string',
			default: ''
		},
		name: {
			alias: 'nome',
			type: 'boolean',
			default: false
		},
		gender: {
			alias: 'gênero',
			type: 'boolean',
			default: false
		},
		age: {
			alias: 'idade',
			type: 'boolean',
			default: false
		},
		characterVersion: {
			alias: 'versãoPersonagem',
			type: 'boolean',
			default: false
		},
		birth: {
			alias: 'nascimento',
			type: 'boolean',
			default: false
		},
		birthplace: {
			alias: 'localNascimento',
			type: 'boolean',
			default: false
		}
	}
}

module.exports = {
	helpText,
	options
}
