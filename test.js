#!/usr/bin/env node
const {helper, goAsync, clearAll} = require('./nu_modules/container/cli-container')
const cleanConsole = require('clear-any-console')

if (clearAll) {
	cleanConsole()
}
goAsync()
