/**
 * Node Cli Handle Error.
 */
// const sym = require('log-symbols')
const {red, yellow, dim, blue} = require('chalk')
const cli = require('./index')
const clearConsole = require('clear-any-console')

/**
 * @param {String} heading
 * @param {Error} err
 * @param {Boolean} displayError
 * @param {Boolean} exit
 */
module.exports = (heading = `ERROR: `, err, displayError = true, exit = true, debug = false) => {
	const warning = cli({subAgent: 'warning'})
	const error = cli({subAgent: 'error'})
	const info = cli({subAgent: 'info'})
	if (err) {
		console.log()
		if (displayError) {
			clearConsole()
			console.log(`${error} ${red(heading)}`)
			console.log(`${error} ${red(`ERROR →`)} ${err.name}`)
			console.log(`${info} ${blue(`reason →`)} ${err.message}`)
			let splitText = err.stack.split('\n')
			const splitRow = splitText[1].split(':')
			const joinLines = splitRow[1] + ':' + splitRow[2]
			const pathName = splitRow[0].toString().split('/')
			console.log(
				`${info} ${blue(`stack (rows): `)}${yellow(joinLines.slice(0, -1))}.${dim(
					pathName[pathName.length - 1]
				)}`
			)
			if (debug) {
				console.log(`${info} ${red(`error stack \n`)} ${dim(err.stack)}\n`)
			}
			// + splitText[1])}\n\n`)
			console.log()
			// const errorFile = errorString.slice(totalCharas - 50, totalCharas - 7)

			console.log()
			//uncheck to see entire message
		} else {
			console.log(`${warning}  ${yellow(heading)}\n`)
		}
		if (exit) {
			process.exit(0)
		} else {
			return false
		}
	}
}

// how to use
// const handleError = require('./errors')
// const err = new Error([`ERRO_01_INTENCIONAL!`])
// handleError(`Got an error`, err)
