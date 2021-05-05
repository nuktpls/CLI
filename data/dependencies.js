const dotenv = require('dotenv')
var path = require('path')
const fs = require('fs')
const appRoot = require('app-root-path')
const firstRun = require('first-run')
// firstRun.clear()

const filename = path.resolve(`${appRoot}/.env`)
// firstRun.clear()
if (firstRun()) {
	const filename = path.resolve(`${appRoot}/.env`)
	try {
		if (!fs.existsSync(filename)) {
			fs.writeFileSync(filename, '', 'utf-8')
		}
	} catch (err) {
		// console.error(err)
	}
	firstRun.clear()
}
const file = dotenv.parse(fs.readFileSync(filename))
const {miltinho} = require('../nu_modules/Walker/config/miltinho')

const heroName = file.HERO_NAME || miltinho.HERO_NAME
const heroHe = file.HERO_HE || miltinho.HERO_HE
const heroA = file.HERO_A || miltinho.HERO_A
const heroTermn = file.HERO_TERMN || miltinho.HERO_TERMN
const heroTermnAO = file.HERO_TERMN_AO || miltinho.HERO_TERMN_AO
const heroCity = file.HERO_INIT_NAME || miltinho.HERO_INIT_NAME
const {yellow, cyan, blue, red, green} = require('chalk')

module.exports = {
	heroName,
	yellow,
	cyan,
	blue,
	red,
	green,
	heroHe,
	heroTermn,
	heroTermnAO,
	heroCity,
	heroA
}
