#!/usr/bin/env node
const {helper, goAsync, clearAll} = require('./cli')
const cleanConsole = require('clear-any-console')

if (clearAll) {
	cleanConsole()
}
goAsync()
