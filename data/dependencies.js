const { yellow, cyan, blue, red, green } = require('chalk')
var path = require('path')
const appRoot = require('app-root-path')
const { checkEnvExist, readEnv } = require('../nu_modules/Fs/index')

checkEnvExist()

const filename = path.resolve(`${appRoot}/.env`)
const file = readEnv(filename)

const { miltinho } = require('../nu_modules/Walker/config/miltinho')

const heroName = file.HERO_NAME || miltinho.HERO_NAME
const heroHe = file.HERO_HE || miltinho.HERO_HE
const heroA = file.HERO_A || miltinho.HERO_A
const heroTermn = file.HERO_TERMN || miltinho.HERO_TERMN
const heroTermnAO = file.HERO_TERMN_AO || miltinho.HERO_TERMN_AO
const heroCity = file.HERO_INIT_NAME || miltinho.HERO_INIT_NAME

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
