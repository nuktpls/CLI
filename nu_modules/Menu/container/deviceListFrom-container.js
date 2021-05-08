const fs = require('fs')
var path = require('path')
const term = require('terminal-kit').terminal

function sceneTab(method, component) {
	const dataDir = path.resolve(__dirname, `../../../datazinha/${component}`)
	const tabDatasFiles = fs.readdirSync(dataDir)
	let arrayItems = []
	let arrayTitles = []

	tabDatasFiles.map(subAgentFile => {
		const contentFile = require(`../../../datazinha/${component}/${subAgentFile}`)
		const {agent} = contentFile.tabData
		if (method === 'arrayTitles') {
			arrayTitles.push(agent)
		}
		if (method === 'arrayItems') {
			arrayItems.push(contentFile)
		}
	})
	return method === 'arrayTitles' ? arrayTitles : arrayItems
}

const deviceListFrom = (tabInvoke, tabMethodName) => {
	const componentFlag = tabInvoke || 'tab'
	const items = sceneTab('arrayTitles', componentFlag)
	function tabMethod(response, component) {
		const itemsSubAgent = sceneTab('arrayItems', component)
		const subAgentObj = itemsSubAgent.find(
			subAgentObj => subAgentObj.tabData.agent === response.selectedText
		)
		const {tab} = require(`../../Menu/components/${component}`)
		tab(subAgentObj.tabData.agent, subAgentObj.tabData.subAgent)
		process.exit()
	}

	if (tabMethodName === 'singleColumnMenu') {
		return term.singleColumnMenu(items, function (error, response) {
			tabMethod(response, componentFlag)
		})
	}
	if (tabMethodName === 'singleLineMenu') {
		return term.singleLineMenu(items, function (error, response) {
			tabMethod(response, componentFlag)
		})
	}
	if (tabMethodName === 'gridMenu') {
		return term.gridMenu(items, function (error, response) {
			tabMethod(response, componentFlag)
		})
	}
	process.exit()
}

module.exports = {deviceListFrom}
