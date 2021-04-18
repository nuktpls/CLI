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
	${cyan(`--next`)},	${cyan(`-next`)}		${blue(`Next quantity to print.`)}
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
module.exports = {
	helpText
}
