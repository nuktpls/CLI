const chalk = require('chalk')
const emoji = require('log-symbols')

module.exports = options => {
	if (!options) {
		return `${chalk.red(' ' + emoji.error + ' : ')} ${chalk.red('!Error FATAL, cadê pô')}`
	}
	const defaultOptions = {
		agent: null,
		subAgent: null,
		msg: null,
		style: {
			color: '#fff',
			bold: false,
			underline: false,
			inverse: false,
			bgColor: '#000'
		},
		browserExtension: false,
		clear: false,
		version: ''
	}
	const opts = {...defaultOptions, ...options}
	const {agent, subAgent, msg, style, browserExtension, clear, version} = opts
	const {color, bold, underline, inverse} = style
	let styledMsg = chalk.white

	if (agent === 'message' || agent === 'chapter' || agent === 'characters') {
		styledMsg = chalk.hex(color)
		if (browserExtension) {
			styledMsg = 'color: ' + color
		}
		if (bold) {
			if (!browserExtension) {
				styledMsg = styledMsg.bold
			} else {
				styledMsg = styledMsg + '; font-weight: bold'
			}
		}
		if (underline) {
			if (!browserExtension) {
				styledMsg = styledMsg.underline
			} else {
				styledMsg = styledMsg + '; text-decoration: underline'
			}
		}
		if (inverse) {
			if (!browserExtension) {
				styledMsg = styledMsg.inverse
			} else {
				styledMsg = 'background-color: ' + color + '; color: white; mix-blend-mode: difference;'
			}
		}
		let moreOptions = null
		if (clear || subAgent === 'character') {
			moreOptions = {clear: clear, subAgent: subAgent}
		}
		if (agent === 'chapter') {
			return {styledMsg, msg, subAgent, moreOptions}
		}
		return {styledMsg, msg, moreOptions}
	}

	if (subAgent === 'error') {
		return `${chalk.red(' ' + emoji.error + ' : ')} ${chalk.red('!Error')}`
	}
	if (subAgent === 'warning') {
		return `${chalk.yellow(' ' + emoji.warning + ' : ')} ${chalk.yellow('Warning')}`
	}
	if (subAgent === 'info') {
		return `${chalk.blue(' ' + emoji.info + ' : ')} ${chalk.blue('Info')}`
	}
	if (subAgent === 'success') {
		return `${chalk.green(' ' + emoji.success + ' : ')} ${chalk.green('Success!!!')}`
	}
}
