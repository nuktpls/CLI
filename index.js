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
	let browserExtension = null
	if (options.style) {
		color = options.style.color
		bold = options.style.bold
		underline = options.style.underline
		inverse = options.style.inverse
	}
	if (options.browserExtension) {
		browserExtension = options.browserExtension
	}
	let customColor = chalk.white
	if (agent === 'message' || !subAgent || options.style) {
		if (color === 'blue') {
			if (!browserExtension) {
				customColor = chalk.blue
			} else {
				customColor = 'color: blue'
			}
		}
		if (color === 'green') {
			if (!browserExtension) {
				customColor = chalk.green
			} else {
				customColor = 'color: green'
			}
		}
		if (color === 'yellow') {
			if (!browserExtension) {
				customColor = chalk.yellow
			} else {
				customColor = 'color: yellow'
			}
		}
		if (color === 'red') {
			if (!browserExtension) {
				customColor = chalk.red
			} else {
				customColor = 'color: red'
			}
		}
		if (bold) {
			if (!browserExtension) {
				customColor = customColor.bold
			} else {
				customColor = customColor + '; font-weight: bold'
			}
		}
		if (underline) {
			if (!browserExtension) {
				customColor = customColor.underline
			} else {
				customColor = customColor + '; text-decoration: underline'
			}
		}
		if (inverse) {
			if (!browserExtension) {
				customColor = customColor.inverse
			} else {
				customColor = 'background-color: ' + color + '; color: white; mix-blend-mode: difference;'
			}
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
