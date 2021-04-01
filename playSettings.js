/**
 *
 * @param {*} options
 * @returns
 *
 *
 *
 */

const chalk = require('chalk')
const emoji = require('log-symbols')
const clearConsole = require('clear-any-console')

module.exports = options => {
	if (!options) {
		return `${chalk.red(' ' + emoji.error + ' : ')} ${chalk.red('!Error FATAL, cadê pô')}`
	}

	if (options.playable && options.msg) {
		const splitMsg = options.msg.split('')

		// function toPrint(character, index, splitArr, nextLetter) {
		// 	let msg = null
		// 	if (character === splitArr[0]) {
		// 		clearConsole()
		// 		msg = character
		// 		// console.log(msg)
		// 	} else {
		// 		// clearConsole() // TEM UM ACCUMMULATOR PRA ISSO JÁ
		// 		msg = splitArr.slice(index - 1)
		// 		if (nextLetter) {
		// 			// clearConsole()
		// 			msg += nextLetter
		// 			const msgSplit = msg.split('')
		// 			console.log(msgSplit)
		// 			msgSplit.map((nowWordSecond, i) => {
		// 				const hereNow = setTimeout(toPrint, 1000, nowWordSecond, i, msgSplit, msgSplit[i + 1])
		// 				return hereNow
		// 			})
		// 		}
		// 	}
		// }

		function toPrint(character, indexNow, splitArr, nextLetter) {
			let msg = null
			for (let index = 0; index < splitArr; index++) {
				const element = array[index]
				// toPrint(NOWcharacter, NOWindexNow, NOWsplitArr, NOWnextLetter)
			}
		}

		splitMsg.map((nowWord, i) => {
			const here = setTimeout(toPrint, 1000, nowWord, i, splitMsg, splitMsg[i + 1])
			return here
		})
	}
}
