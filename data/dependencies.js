const dotenv = require('dotenv')
var path = require('path');
const fs = require('fs')
const appRoot = require('app-root-path');

const filename = path.resolve(`${appRoot}/.env`)

const file = dotenv.parse(fs.readFileSync(filename))

const heroName = file.HERO_NAME
const heroHe = file.HERO_HE
const heroA = file.HERO_A
const heroTermn = file.HERO_TERMN
const heroTermnAO = file.HERO_TERMN_AO
const heroCity = file.HERO_INIT_NAME
const { yellow, cyan, blue, red, green } = require('chalk')

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
