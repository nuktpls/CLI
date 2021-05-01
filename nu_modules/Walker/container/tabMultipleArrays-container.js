const consoleClear = require('clear-any-console')
const {multipleArrayPrint} = require('../components/multipleArray')

const constructorTabMultipleArrays = (tab, clearTab, flagSubAgent) => {
	// console.log('flagSubAgent')
	// console.log(flagSubAgent)
	if (!flagSubAgent && !flagSubAgent.welcome) {
		return null
	}

	let moreOptionsTrueCount = 0
	if (clearTab === 2) {
		consoleClear()
	}

	tab.map(nowLogMultipleArrays => {
		moreOptionsTrueCount++

		if (nowLogMultipleArrays.moreOptions === 2 && moreOptionsTrueCount === 1 && clearTab === 0) {
			consoleClear()
		}
		// find in the object/array for a subAgent
		// config equal value in some flag child of #'s flags

		// console.log('flagSubAgent.subAgent')
		// console.log(flagSubAgent)
		// console.log(nowLogMultipleArrays)
		multipleArrayPrint(nowLogMultipleArrays)
		// setTimeout(() => {
		// 	return multipleArrayPrint(nowLogMultipleArrays)
		// }, 10)
	})
}

module.exports = {constructorTabMultipleArrays}
