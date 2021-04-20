const consoleClear = require('clear-any-console')

const characterLog = (tab, character) => {
	const tabHere = tab.map(tabNow => {
		// console.log(tabNow.msg)
		// console.log('tabNow.cleartabNow.cleartabNow.clear')
		if (tabNow.moreOptions.clear === 2) {
			consoleClear()
		}

		if (tabNow.moreOptions.subAgent === character) {
			const vaiQvai = setTimeout(function () {
				console.log(tabNow.msg)
			}, 100)
			return vaiQvai
		}
		// console.log('tabNow.character')
		// console.log(tabNow.character)
		// console.log('tabNow.subAgent')
		// console.log(tabNow.subAgent)
	})
	return tabHere
}

module.exports = {
	characterLog
}
