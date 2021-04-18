const consoleClear = require('clear-any-console')

const constructorTabWelcome = (tab, clearTab) => {
	let moreOptionsTrueCount = 0

	if (clearTab === 2) {
		consoleClear()
	}
	tab.map(nowLogWelcome => {
		moreOptionsTrueCount++
		if (moreOptionsTrueCount === 1) {
		}
		if (
			nowLogWelcome.moreOptions === 2 &&
			moreOptionsTrueCount === 1 &&
			clearTab === 0 &&
			moreOptionsTrueCount === 1
		) {
			consoleClear()
		}

		setTimeout(() => {
			console.log(nowLogWelcome.styledMsg(nowLogWelcome.msg))
		}, 10)
	})
}

module.exports = {constructorTabWelcome}
