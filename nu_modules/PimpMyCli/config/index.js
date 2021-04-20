const configTabs = require('./tabs')
const config = {
	qtdRow: 10, // quantidade de linhas por página
	tabs: {
		tabMULTIPLEarrays: configTabs.tabMULTIPLEarrays || null,
		tabChapters: configTabs.tabChapters || null,
		tabCharacters: configTabs.tabCharacters || null
	}
}

module.exports = {config}
