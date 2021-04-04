#!/usr/bin/env node
const {helper} = require('./cli')
const debug = require('./debug')
const init = require('./init')

if (helper.flags.welcome) {
	init.sceneWelcome()
}

const capitulo = helper.flags.capítulo
const chapter = helper.flags.chapter
const qtdRow = helper.flags.qtdRow
const nexts = helper.flags.nexts
const rangeBegin = helper.flags.rangeBegin
const latest = helper.flags.latest
const first = helper.flags.first

if (chapter || capitulo) {
	init.sceneChapter(chapter || capitulo, qtdRow, nexts, rangeBegin, latest, first)
}

helper.input.includes('help') && helper.showHelp(0)
helper.input.includes('versão') && helper.showVersion(0)
helper.flags.clear && debug(true)
helper.flags.debug && debug(helper.flags.clear, helper.flags.debug, helper.flags, helper.input)
