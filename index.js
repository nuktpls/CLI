/**
 *
 * @param {*} options
 * @returns
 *
 * use it in any page. remember to call it in a require
 * NORMAL MESSAGE
 * const myNewRequireSettings = {
 * 		agent: 'message',
 * 		subAgent: null,
 * 		color: 'blue',
 * 		bold: true,
 * 		underline: false,
 * 		inverse: false
 * 		}
 *	}
 * ALERT's
 * const myNewAlert = {
 * 		agent: 'alert',
 * 		subAgent: 'warning' // warning, error, info, success
 * }
 *
 */

const chalk = require('chalk')
const emoji = require('log-symbols')

module.exports = options => {
	if (!options) {
		return `${chalk.red(' ' + emoji.error + ' : ')} ${chalk.red('!Error FATAL, cadê pô')}`
	}
	const agent = options.agent ? options.agent : null
	const subAgent = options.subAgent ? options.subAgent : null
	let color = null
	let bold = null
	let underline = null
	let inverse = null
	if (options.style) {
		color = options.style.color
		bold = options.style.bold
		underline = options.style.underline
		inverse = options.style.inverse
	}

	let customColor = chalk.white
	if (agent === 'message' || !subAgent || options.style) {
		if (color === 'blue') {
			customColor = chalk.blue
		}
		if (color === 'green') {
			customColor = chalk.green
		}
		if (color === 'yellow') {
			customColor = chalk.yellow
		}
		if (color === 'red') {
			customColor = chalk.red
		}
		if (bold) {
			customColor = customColor.bold
		}
		if (underline) {
			customColor = customColor.underline
		}
		if (inverse) {
			customColor = customColor.inverse
		}
		return customColor
	}

	if (subAgent === 'error') {
		return `${chalk.red(' ' + emoji.error + ' : ')} ${chalk.red('!Error')}`
	}
	if (subAgent === 'warning') {
		return `${chalk.yellow(' ' + emoji.warning + ' : ')} ${chalk.yellow('Warning.')}`
	}
	if (subAgent === 'info') {
		return `${chalk.blue(' ' + emoji.info + ' : ')} ${chalk.blue('Info:')}`
	}
	if (subAgent === 'success') {
		return `${chalk.green(' ' + emoji.success + ' : ')} ${chalk.green('Success!!!')}`
	}
}
