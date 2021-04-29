require('dotenv').config()
const heroName = process.env.HERO_NAME
const heroHe = process.env.HERO_HE
const {yellow, cyan, blue, red, green} = require('chalk')

module.exports = {heroName, yellow, cyan, blue, red, green, heroHe}
