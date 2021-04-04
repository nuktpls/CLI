#!/usr/bin/env node
const {
	helper,
	welcome,
	capitulo,
	qtdRow,
	nexts,
	rangeBegin,
	latest,
	first,
	pages
} = require('./cli')
const debug = require('./debug')
// prettier-ignore
const {sceneWelcome,sceneChapter} = require('./init')

async function goAsync() {
	if (welcome) {
		sceneWelcome()
	}
	if (capitulo) {
		sceneChapter(capitulo, pages, qtdRow, nexts, rangeBegin, latest, first)
	}

	helper.input.includes('help') && helper.showHelp(0)
	helper.input.includes('versão') && helper.showVersion(0)
	helper.flags.clear && debug(true)
	helper.flags.debug && debug(helper.flags.clear, helper.flags.debug, helper.flags, helper.input)
}
goAsync()
