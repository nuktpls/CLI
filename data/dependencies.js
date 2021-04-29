require('dotenv').config()
const heroName = process.env.HERO_NAME
const heroHe = process.env.HERO_HE
const heroA = process.env.HERO_A
const heroTermn = process.env.HERO_TERMN
const heroTermnAO = process.env.HERO_TERMN_AO
const heroCity = process.env.HERO_INIT_NAME
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
