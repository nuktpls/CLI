const term = require('terminal-kit').terminal
const dotenv = require('dotenv')
const fs = require('fs')
const clearConsole = require('clear-any-console')
// const {heroConstructor} = require('./tabHeroConstructor-container')

// //  appendFileSync

const chooseCustom = this__Scene => {
	const filename = './.env'
	//
	clearConsole()
	// exports.sceneOne = true
	// heroConstructor
	fs.writeFileSync(filename, '', 'utf-8', function (err) {
		if (err) return console.log(err)
		console.log(`${''} > ${filename}`)
	})
	term('Escreva o NOME do seu herói: ')
	term.inputField({}, function (error, input) {
		term.green("\nO seu NOME herói é o '%s'\n", input)

		const recordHeroName = `HERO_NAME=${input}\n`
		fs.appendFileSync(filename, recordHeroName, 'utf-8')

		term('Escreva o pronome ELE de tratamento: ')
		term.inputField({}, function (error, input) {
			term.green("\nVai chamar ELE '%s'\n", input)

			const recordHeroHe = `HERO_HE=${input}\n`
			fs.appendFileSync(filename, recordHeroHe, 'utf-8')

			term('Escreva o pronome UM de tratamento: ')
			term.inputField({}, function (error, input) {
				term.green("\nVai chamar UM '%s'\n", input)

				const recordHeroA = `HERO_A=${input}\n`
				fs.appendFileSync(filename, recordHeroA, 'utf-8')

				term('Escreva o pronome FINALZIM de tratamento: ')
				term.inputField({}, function (error, input) {
					term.green("\nVai chamar FINALZIM '%s'\n", input)
					const recordHeroTermn = `HERO_TERMN=${input}\n`
					fs.appendFileSync(filename, recordHeroTermn, 'utf-8')

					term('Escreva o pronome ÃO de tratamento: ')
					term.inputField({}, function (error, input) {
						term.green("\nVai chamar ÃO '%s'\n", input)
						const recordHeroTermnAo = `HERO_TERMN_AO=${input}\n`
						fs.appendFileSync(filename, recordHeroTermnAo, 'utf-8')

						term('Escreva o pronome CIDADE de tratamento: ')
						term.inputField({}, function (error, input) {
							term.green("\nVai chamar CIDADE '%s'\n", input)
							const recordHeroCity = `HERO_INIT_NAME=${input}\n`
							fs.appendFileSync(filename, recordHeroCity, 'utf-8')
							process.exit()
						})
					})
				})
			})
		})
	})

	//
	// process.exit()
}
module.exports = {chooseCustom}
