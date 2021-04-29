require('dotenv').config()
const heroName = process.env.HERO_NAME
const {yellow, cyan, blue, red, green} = require('chalk')

module.exports = {heroName, yellow, cyan, blue, red, green}
