const term = require('terminal-kit').terminal
const dotenv = require('dotenv')
const path = require('path');
const fs = require('fs')
const appRoot = require('app-root-path');
const clearConsole = require('clear-any-console')
// const {heroConstructor} = require('./tabHeroConstructor-container')
const { green } = require('chalk')
// //  appendFileSync
const firstRun = require('first-run')

const chooseCustom = this__Scene => {
	const filename = path.resolve(`${appRoot}/.env`)
	clearConsole()
	fs.writeFileSync(filename, '', 'utf-8')
	term.cyan('Qual é o nome desse seu herói? ')
	term.green('\nEscreva: ')
	term.inputField({}, function (error, input) {
		const recordHeroName = `HERO_NAME=${input}\n`
		fs.appendFileSync(filename, recordHeroName, 'utf-8')
		term.green("\nNome: '%s'\n\n", input)

		term.cyan('Qual o pronome [')
		term.yellow('ele, ela, elx, el@, @, x')
		term.cyan('] ')
		term.green('\nExemplo: ')
		term.cyan('Ah,')
		term.yellow(' ele ')
		term.cyan('não tá aqui? ')

		term.green('\nEscreva: ')
		term.inputField({}, function (error, input) {
			term.green("\nPronome '%s'\n\n", input)
			const recordHeroHe = `HERO_HE=${input}\n`
			fs.appendFileSync(filename, recordHeroHe, 'utf-8')

			term.cyan('O artigo a ser usado: [')
			term.yellow('um, uma, umx, x')
			term.cyan(']\n')
			term.green('Exemplo: ')
			term.cyan('Uma criança tímida e')
			term.yellow(' um ')
			term.cyan('desaparecido ilustre.')
			term.green('\nEscreva: ')

			term.inputField({}, function (error, input) {
				term.green("\nArtigo '%s'\n\n", input)

				const recordHeroA = `HERO_A=${input}\n`
				fs.appendFileSync(filename, recordHeroA, 'utf-8')

				term.cyan('Indicação de gênero gramatical: [')
				term.yellow('a, o, @, x')
				term.cyan(']\n')
				term.green('Exemplo: ')
				term.cyan('Desaparecid')
				term.yellow('a')
				term.cyan('? Não sei de ninguém assim..')
				term.green('\nEscreva: ')

				term.inputField({}, function (error, input) {
					term.green("\nTerminação de gênero 01: '%s'\n\n", input)
					const recordHeroTermn = `HERO_TERMN=${input}\n`
					fs.appendFileSync(filename, recordHeroTermn, 'utf-8')

					term.cyan('Indicação de gênero gramatical: [')
					term.yellow('ão, ã, @, x')
					term.cyan(']\n')
					term.green('Exemplo: ')
					term.cyan('Irm')
					term.yellow('ão')
					term.cyan(' do Menor Vagabundo.')
					term.green('\nEscreva: ')

					term.inputField({}, function (error, input) {
						term.green("\nTerminação de gênero 02: '%s'\n\n", input)
						const recordHeroTermnAo = `HERO_TERMN_AO=${input}\n`
						fs.appendFileSync(filename, recordHeroTermnAo, 'utf-8')

						term.cyan('Cidade natal: [')
						term.yellow('Fernadatown, Enzocity')
						term.cyan(']\n')
						term.green('Exemplo: ')
						term.cyan('(...) nos subúrbios de ')
						term.yellow('Miltown.')
						term.dim(' // Use final com town ou city')
						term.green('\nEscreva: ')

						term.inputField({}, function (error, input) {
							term.green("\nCidade '%s'\n\n", input)
							term(`


							`)
							const recordHeroCity = `HERO_INIT_NAME=${input}\n`
							fs.appendFileSync(filename, recordHeroCity, 'utf-8')
							console.log(`

							`)
							clearConsole()
							term.cyan(`Leia e confirme que as frases abaixo estão corretas.
							`)
							const file = dotenv.parse(fs.readFileSync('./.env'))

							const heroName = file.HERO_NAME
							const heroHe = file.HERO_HE
							const heroA = file.HERO_A
							const heroTermn = file.HERO_TERMN
							const heroTermnAO = file.HERO_TERMN_AO
							const heroCity = file.HERO_INIT_NAME
							console.log(`
Oi eu sou ${green(heroTermn)} ${green(heroName)}.
Eu sou ${green(heroA)} desaparecid${green(heroTermn)}.
Filh${green(heroTermn)} do fundador de ${green(heroCity)}.
Sou irm${green(heroTermnAO)} do Menor Vagabundo.
Olha o que meu irmão fala de mim:

"${green(heroName)}? Muito destraíd${green(heroTermn)}!
Mas ${green(heroHe)} é muito inteligente também."

Sou maneirinh${green(heroTermn)}!
-- ${green(heroName)}
							`)

							const columAqui = ['a. Correto 🙂 ', 'b. Incorreto 😥 ']
							term.singleColumnMenu(columAqui, function (error, response) {
								term('\n').eraseLineAfter.green(
									'#%s selected: %s (%s,%s)\n',
									response.selectedIndex,
									response.selectedText,
									response.x,
									response.y
								)
								if (response.selectedIndex === 0) {
									// chooseMiltinho()
									clearConsole()
									term.cyan(`Você já pode iniciar o sistema.\n`)
									term.green(`\nDigite "nuktpls" e seja bem-vind${heroTermn}!\n\n`)
									process.exit()
								}
								if (response.selectedIndex === 1) {
									clearConsole()
									term.red(`Inicie novamente o procedimento.
									`)
									term.green(`\nSistema encerrado...
									`)
									firstRun.clear()
									fs.writeFileSync(filename, '', 'utf-8', function (err) {
										if (err) return console.log(err)
										console.log(`${''} > ${filename}`)
									})
									process.exit()
									// chooseCustom(this__Scene)
								}
							})
							// term.cyan(': [')

							// process.exit()
						})
					})
				})
			})
		})
	})

	//
	// process.exit()
}
module.exports = { chooseCustom }
