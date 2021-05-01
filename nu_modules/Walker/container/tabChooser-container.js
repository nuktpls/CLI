// var term = require('terminal-kit').terminal

// term.wrapColumn({x: 10, width: 25})
// term.wrap('^GP^re^Yr^um^Mi^bs^bs^ciy the Software.')
// console.log('\n	oiois ^GP^ ')

// term.bold.underline.red('Hello world!\n')
// console.log('zim')
// term.grabInput({mouse: 'motion'})
// var menu_
// term.on('key', function (name, matches, data) {
// 	// console.log("'key' event:", name)
// 	// console.log("'key' event:", matches)
// 	// console.log("'key' event:", data)

// 	// Detect CTRL-C and exit 'manually'
// 	if (name === 'CTRL_C') {
// 		if (menu_) {
// 			menu_.stop()
// 		}
// 		term.green('CTRL-C received...\n')
// 		process.exit()
// 	}
// })
// var items = ['File', 'Edit', 'View', 'History', 'Bookmarks', 'Tools', 'Help']
// items.push('a very looooooooooooooong menu entry! '.repeat(8))
// items.push(
// 	term
// 		.str('^ra ^cvery ^glo^boo^yooo^moooooo^/ooong^ ^cmenu ^Yentry ^_with escape sequences! ')
// 		.repeat(8)
// )

// function menu() {
// 	var options = {
// 		//ellipsis: true ,
// 		selectedLeftPadding: '*',
// 		extraLines: 2
// 		//continueOnSubmit: true ,
// 		//keyBindings: { ENTER: 'submit' , UP: 'previous' , p: 'previous' , DOWN: 'next' , n: 'next' } ,
// 		//y: 1 ,
// 		//style: term.inverse ,
// 		//selectedStyle: term.dim.blue.bgGreen
// 	}

// 	menu_ = term.singleColumnMenu(items, options, function (error, response) {
// 		if (error) {
// 			term.red.bold('\nAn error occurs: ' + error + '\n')
// 			term.processExit()
// 			return
// 		}

// 		term.green(
// 			'\n#%s %s: %s (%s,%s)\n',
// 			response.selectedIndex,
// 			response.submitted ? 'submitted' : 'selected',
// 			response.selectedText,
// 			response.x,
// 			response.y
// 		)

// 		term.processExit()
// 	})

// 	//menu_.on( 'highlight' , eventData => console.error( '\neventData:' , eventData ) ) ;

// 	setTimeout(menu_.pause.bind(menu_), 1500)
// 	setTimeout(menu_.resume.bind(menu_), 3000)
// }

// async function asyncMenu() {
// 	var options = {
// 		//ellipsis: true ,
// 		selectedLeftPadding: '*',
// 		extraLines: 2,
// 		unsubmittableIndexes: [false, true]
// 		//continueOnSubmit: true ,
// 		//keyBindings: { ENTER: 'submit' , UP: 'previous' , p: 'previous' , DOWN: 'next' , n: 'next' } ,
// 		//y: 1 ,
// 		//style: term.inverse ,
// 		//selectedStyle: term.dim.blue.bgGreen
// 	}

// 	var response = await term.singleColumnMenu(items, options).promise

// 	term.green(
// 		'\n#%s %s: %s (%s,%s)\n',
// 		response.selectedIndex,
// 		response.submitted ? 'submitted' : 'selected',
// 		response.selectedText,
// 		response.x,
// 		response.y
// 	)

// 	term.processExit()
// }

//term.clear() ;
// term.bold.cyan('\n\nSelect one item from the menu!')

// menu()
// asyncMenu()

// term.grabInput({mouse: 'button'})

// term.on('key', function (key, matches, data) {
// 	switch (key) {
// 		case 'UP':
// 			term.up(1)
// 			break
// 		case 'DOWN':
// 			term.down(1)
// 			break
// 		case 'LEFT':
// 			term.left(1)
// 			break
// 		case 'RIGHT':
// 			term.right(1)
// 			break
// 		case 'CTRL_C':
// 			process.exit()
// 			break
// 		default:
// 			// Echo anything else
// 			term.noFormat(Buffer.isBuffer(data.code) ? data.code : String.fromCharCode(data.code))
// 			break
// 	}
// })

// term.on('mouse', function (name, data) {
// 	term.moveTo(data.x, data.y)
// })

// const logUpdate = require('log-update')
// const frames = ['-', '\\', '|', '/']
// let i = 0

// setInterval(() => {
// 	const frame = frames[(i = ++i % frames.length)]

// 	logUpdate(
// 		`
//         ♥♥
//    ${frame} unicorns ${frame}
//         ♥♥
// `
// 	)
// }, 80)

// const terminalImage = require('terminal-image')

// ;(async () => {
// 	console.log(await terminalImage.file('mb.png', {width: '30%', height: '30%'}))
// })()

// const firstRun = require('first-run')

// console.log(firstRun())

// const ora = require('ora')

// const spinner = ora('Loading unicorns').start()
// // spinner.warn('ish')

// setTimeout(() => {
// 	spinner.color = 'yellow'
// 	spinner.text = 'Loading rainbows'
// }, 1500)

// var Table = require('cli-table3')
// var table = new Table({
// 	head: ['', 'Top Header 1', 'Top Header 2'],
// 	colWidths: [15, 20, 20]
// })

// table.push(
// 	{'Left Header 1': ['Value Row 1 Col 1', 'Value Row 1 Col 2']},
// 	{'Left Header 2': ['Value Row 2 Col 1', 'Value Row 2 Col 2']}
// )

// console.log(table.toString())

// var shell = require('shelljs')
// shell.mkdir('hello world')
// const gradient = require('gradient-string')

// console.log(gradient(['#FF0000', '#00FF00', '#0000FF'])('Hello world!'))

// const termSize = require('term-size')

// console.log(termSize())

// inquirer
// 	.prompt([
// 		// {
// 		// 	type: 'editor',
// 		// 	name: 'story',
// 		// 	message: 'Tell me a story, a really long one!'
// 		// },
// 		{
// 			type: 'autocomplete',
// 			name: 'fruit',
// 			suggestOnly: true,
// 			message: 'What is your favorite fruit?',
// 			searchText: 'We are searching the internet for you!',
// 			emptyText: 'Nothing found!',
// 			default: 'Banana',
// 			source: searchFood,
// 			pageSize: 4,
// 			validate: function (val) {
// 				return val ? true : 'Type something!'
// 			}
// 		},
// 		{
// 			type: 'password',
// 			name: 'secret',
// 			message: 'Tell me a secret'
// 		},
// 		{
// 			type: 'checkbox',
// 			name: 'reptiles',
// 			message: 'Which reptiles do you love?',
// 			choices: ['Alligators', 'Snakes', 'Turtles', 'Lizards']
// 		},
// 		{
// 			type: 'expand',
// 			name: 'reptile',
// 			message: 'Which is better?',
// 			choices: [
// 				{
// 					key: 'a',
// 					value: 'alligator'
// 				},
// 				{
// 					key: 'c',
// 					value: 'crocodile'
// 				}
// 			]
// 		},
// 		{
// 			type: 'rawlist',
// 			name: 'reptile',
// 			message: 'Which is better?',
// 			choices: ['alligator', 'crocodile']
// 		},
// 		{
// 			name: 'faveReptile',
// 			message: 'What is your favorite reptile?',
// 			default: 'Alligators'
// 		},
// 		{
// 			name: 'faveColor',
// 			message: 'What is your favorite color?',
// 			default: '#008f68'
// 		},
// 		{
// 			type: 'list',
// 			name: 'reptile',
// 			message: 'Which is better?',
// 			choices: ['alligator', 'crocodile']
// 		}
// 	])
// 	.then(answers => {
// 		console.info('Answer:', answers)
// 	})

// var term = require('terminal-kit').terminal

// term.grabInput({mouse: 'button'})

// term.on('mouse', function (name, data) {
// 	console.log("'mouse' event:", name, data)
// })

// function test() {
// 	term.slowTyping('What a wonderful world!\n', {flashStyle: term.brightWhite}, function () {
// 		process.exit()
// 	})
// }

// async function asyncTest() {
// 	await term.slowTyping('What a wonderful world!\n', {flashStyle: term.brightWhite})
// 	term('done!\n')
// 	process.exit()
// }

// //test() ;
// asyncTest()

// async function test() {
// 	var spinner = await term.spinner('unboxing-color')
// 	term(' Loading... ')
// 	//setTimeout( () => process.exit() , 5000 ) ;
// }

// test()
// term.wrap( '^GP^re^Yr^um^Mi^bs^bs^ci^ro^mn^ is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.' ) ;
// term( '\n' ) ;
// term.wrapColumn({x: 10, width: 60})
// term.wrap(
// 	'^GP^re^Yr^um^Mi^bs^bs^ci^ro^mn^ is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all copies or portions of the Software.'
// )
//term.wrap( '^GP^re^Yr^um^Mi^bs^bs^ci^ro^mn^ is hereby granted' ) ;
//term.wrap( '^GP^re^Yr^um^Mi^bs^bs^ci^ro^mn^ is hereby granted' ) ;
//term.wrap( '^GP^re^Yr^um^Mi^bs^bs^ci^ro^mn^ is ' )

// term('\n')
//term.wrap.noFormat( 'Permission is  ' )
// term.wrap( '^GP^re^Yr^um^Mi^bs^bs^ci^ro^mn^ is ' )
// term.wrap.red( 'hereby granted' ) ;
// console.log(process.stdout)
// shell.exec(`lines=$(tput lines)
// columns=$(tput cols)

// echo "Lines: " $lines
// echo "Columns: " $columns`)

// pipe a Stream to the log zone
// console.log(ui.log)

// Or simply write output
// ui.log.write('something just happened.')
// ui.log.write('Almost over, standby!')

// During processing, update the bottom bar content to display a loader
// or output a progress bar, etc

// term.grabInput({mouse: 'motion'})

// var items = [
// 	'a menu entry',
// 	'another menu entry',
// 	'still a menu entry',
// 	'yet another menu entry',
// 	'know what? a menu entry!',
// 	'surprise! a menu entry!',
// 	'dang! a menu entry!',
// 	'^Ydouble dang! a menu entry!',
// 	'OMG! too much menu entries!',
// 	'seriously: this is a menu entry!'
// ]

// function menu() {
// 	var options = {
// 		selectedLeftPadding: '*'
// 		//keyBindings: { ENTER: 'submit' , UP: 'previous' , p: 'previous' , DOWN: 'next' , n: 'next' } ,
// 		//x: 4 ,
// 		//itemMaxWidth: 20 ,
// 		//y: 1 ,
// 		//style: term.inverse ,
// 		//selectedStyle: term.dim.blue.bgGreen
// 	}

// 	term.gridMenu(items, options, function (error, response) {
// 		if (error) {
// 			term.red.bold('\nAn error occurs: ' + error + '\n')
// 			terminate()
// 			return
// 		}

// 		term.green(
// 			'\n#%s selected: %s (%s,%s)\n',
// 			response.selectedIndex,
// 			response.selectedText,
// 			response.x,
// 			response.y
// 		)
// 		terminate()
// 	})
// }

// async function asyncMenu() {
// 	var options = {
// 		selectedLeftPadding: '*'
// 		//keyBindings: { ENTER: 'submit' , UP: 'previous' , p: 'previous' , DOWN: 'next' , n: 'next' } ,
// 		//x: 4 ,
// 		//itemMaxWidth: 20 ,
// 		//y: 1 ,
// 		//style: term.inverse ,
// 		//selectedStyle: term.dim.blue.bgGreen
// 	}

// 	var response = await term.gridMenu(items, options).promise
// 	term.green(
// 		'\n#%s selected: %s (%s,%s)\n',
// 		response.selectedIndex,
// 		response.selectedText,
// 		response.x,
// 		response.y
// 	)
// 	terminate()
// }

// function terminate() {
// 	term.grabInput(false)
// 	// Add a 100ms delay, so the terminal will be ready when the process effectively exit, preventing bad escape sequences drop
// 	setTimeout(function () {
// 		process.exit()
// 	}, 100)
// }

// //term.clear() ;
// term.bold.cyan('\n\nSelect one item from the menu!')

// //menu() ;
// asyncMenu()

// process.stdin.on('data', function (data) {
// 	term.red(data.toString())
// })

// term.stdout.on('resize', () => {
// 	console.log("term.stdout 'resize'")
// })

// function terminate() {
// 	term.brightBlack('About to exit...\n')
// 	term.grabInput(false)
// 	term.fullscreen(false)

// 	// Add a 100ms delay, so the terminal will be ready when the process effectively exit, preventing bad escape sequences drop
// 	setTimeout(function () {
// 		process.exit()
// 	}, 100)
// }

// term.fullscreen(true)
// term.bold.cyan('Resize test, try resizing your terminal...\n')

// term.grabInput({mouse: 'button', focus: true})

// term.on('key', (name, matches, data) => {
// 	if (matches.indexOf('CTRL_C') >= 0) {
// 		term.green('CTRL-C received...\n')
// 		terminate()
// 	}

// 	if (matches.indexOf('CTRL_R') >= 0) {
// 		term.green('CTRL-R received... asking terminal some information...\n')
// 		term.requestCursorLocation()
// 		term.requestScreenSize()
// 	}
// })

// term.on('resize', (width, height) => {
// 	console.log("'resize' event, new width and height:", width, height)
// })

var term = require('terminal-kit').terminal

// function terminate() {
// 	term.grabInput(false)
// 	setTimeout(function () {
// 		process.exit()
// 	}, 100)
// }

// term.bold.cyan('Type anything on the keyboard...\n')
// term.green('Hit CTRL-C to quit.\n\n')

// term.grabInput({mouse: 'button'})

// term.on('key', function (name, matches, data) {
// 	console.log("'key' event:", name)
// 	if (name === 'CTRL_C') {
// 		terminate()
// 	}
// })

// term.on('terminal', function (name, data) {
// 	console.log("'terminal' event:", name, data)
// })

// term.on('mouse', function (name, data) {
// 	console.log("'mouse' event:", name, data)
// })

// term.table(
// 	[
// 		['header #1', 'header #2', 'header #3'],
// 		['row #1', 'a much bigger cell, a much bigger cell, a much bigger cell... ', 'cell'],
// 		['row #2', 'cell', 'a medium cell'],
// 		['row #3', 'cell', 'cell'],
// 		['row #4', 'cell\nwith\nnew\nlines', '^YThis ^Mis ^Ca ^Rcell ^Gwith ^Bmarkup^R^+!']
// 	],
// 	{
// 		hasBorder: true,
// 		contentHasMarkup: true,
// 		borderChars: 'lightRounded',
// 		borderAttr: {color: 'blue'},
// 		textAttr: {bgColor: 'default'},
// 		firstCellTextAttr: {bgColor: 'blue'},
// 		firstRowTextAttr: {bgColor: 'yellow'},
// 		firstColumnTextAttr: {bgColor: 'red'},
// 		width: 60,
// 		fit: true // Activate all expand/shrink + wordWrap
// 	}
// )

// term.table(
// 	[
// 		['header #1', 'header #2', 'header #3'],
// 		['row #1', 'a much bigger cell, a much bigger cell, a much bigger cell... ', 'cell'],
// 		['row #2', 'cell', 'a medium cell'],
// 		['row #3', 'cell', 'cell'],
// 		['row #4', 'cell\nwith\nnew\nlines', '^YThis ^Mis ^Ca ^Rcell ^Gwith ^Bmarkup^R^+!']
// 	],
// 	{
// 		hasBorder: false,
// 		contentHasMarkup: true,
// 		textAttr: {bgColor: 'default'},
// 		firstCellTextAttr: {bgColor: 'blue'},
// 		firstRowTextAttr: {bgColor: 'yellow'},
// 		firstColumnTextAttr: {bgColor: 'red'},
// 		checkerEvenCellTextAttr: {bgColor: 'gray'},
// 		width: 60,
// 		fit: true // Activate all expand/shrink + wordWrap
// 	}
// )

// var history = ['John', 'Jack', 'Joey', 'Billy', 'Bob']

// var autoComplete = [
// 	'--Barack Obama',
// 	'--George W. Bush',
// 	'--Bill Clinton',
// 	'--George Bush',
// 	'--Ronald W. Reagan',
// 	'--Jimmy Carter',
// 	'--Gerald Ford',
// 	'--Richard Nixon',
// 	'--Lyndon Johnson',
// 	'--John F. Kennedy',
// 	'--Dwight Eisenhower',
// 	'--Harry Truman',
// 	'--Franklin Roosevelt'
// ]

// term('Please enter your name: ')

// term.inputField(
// 	{history: history, autoComplete: autoComplete, autoCompleteMenu: true},
// 	function (error, input) {
// 		term.green("\nYour name is '%s'\n", input)
// 		process.exit()
// 	}
// )

// const now = require('../../../data/index')

var term = require('terminal-kit').terminal
const constructorTabChooser = (laFunc, tabMULTIPLEarrays, lesCaras, tabCharacters) => {
	term.clear()

	term.on('key', function (name, matches, data) {
		// console.log("'key' event:", name)
		if (name === 'CTRL_C') {
			term.green('\nCTRL-C received...\n')
			process.exit()
		}
	})

	var items = ['Welcome', 'Personagem', 'Sumário', 'Tarefa', 'Ferramentas', 'Ajuda']

	var options = {
		y: 1, // the menu will be on the top of the terminal
		style: term.inverse,
		selectedStyle: term.dim.blue.bgGreen
	}

	const menuRegistry = colorMenuHack =>
		term.singleLineMenu(items, options, function (error, response) {
			// 	response.selectedIndex,
			if (colorMenuHack) {
				options.style = colorMenuHack
			}
			if (response.selectedText === 'Welcome') {
				// term.clear()
				// const zin = () => tabMULTIPLEarrays()
				// const exitProcss = zinga =>
				// 	process.on('exit', code => {
				// 		console.log(`${zinga}`)
				// 	})
				// console.log('tabMULTIPLEarrays')
				// console.log(tabMULTIPLEarrays)
				setTimeout(() => {
					laFunc(tabMULTIPLEarrays(), true, [{welcome: true}])
					return process.exit()

					// menuRegistry()
				}, 10)

				// exitProcss(buffer)

				// 				console.log(`
				// Você escolheu: Welcome
				// 			`)
			}
			if (response.selectedText === 'Personagem') {
				term.clear()

				term.cyan('Selecione o livro para ler.\n')

				var items = ['a. Herói Vagabundo', 'b. Ditadora Facista', 'c. @goshDev', 'd. Boi Sonoro']

				term.singleColumnMenu(items, function (error, response) {
					term('\n').eraseLineAfter.green(
						'#%s selected: %s (%s,%s)\n',
						response.selectedIndex,
						response.selectedText,
						response.x,
						response.y
					)
					// console.log(`Você escolheu: Personagem ${response.selectedText}`)
					if (response.selectedIndex === 0) {
						term.clear()
						lesCaras(tabCharacters, 'heroiVagabundo')
						process.exit()
					}
					if (response.selectedIndex === 1) {
						term.clear()
						lesCaras(tabCharacters, 'ditadoraFacista')
						process.exit()
					}
					if (response.selectedIndex === 2) {
						term.clear()
						lesCaras(tabCharacters, 'goshDev')
						process.exit()
					}
					if (response.selectedIndex === 3) {
						term.clear()
						lesCaras(tabCharacters, 'boiSonoro')
						process.exit()
					}
				})
			}
			if (response.selectedText === 'Sumário') {
				term.clear()
				console.log(`
Você escolheu: Sumário
			`)
			}

			if (response.selectedText === 'Tarefa') {
				term.clear()
				console.log(`
Você escolheu: Tarefa
			`)
			}
			if (response.selectedText === 'Ferramentas') {
				term.clear()
				console.log(`
Você escolheu: Ferramentas
			`)
			}
			if (response.selectedText === 'Ajuda') {
				term.clear()
				console.log(`
Você escolheu: Ajuda
			`)
			}

			// menuRegistry()
		})

	menuRegistry()

	term.grabInput({mouse: 'button', focus: true})

	// term.grabInput({mouse: 'motion'})
	term.on('key', function (name, matches, data) {
		if (matches.indexOf('CTRL_R') >= 0) {
			term.green('CTRL-R received... asking terminal some information...\n')
			term.requestCursorLocation()
			term.requestScreenSize()
		}
		// term.clear()

		// console.log("'key' event:", name)

		// console.log("'key' event:", matches)
		// console.log("'key' event:", data)
		// menuRegistry()
	})

	term.on('key', function (key, matches, data) {
		switch (key) {
			case 'UP':
				term.up(1)
				// term.scrollDown(1)
				break
			case 'DOWN':
				// term.scrollUp(1)
				term.down(1)
				break
			// case 'LEFT':
			// 	term.left(1)
			// 	break
			// case 'RIGHT':
			// 	term.right(1)
			// 	break
			case 'CTRL_C':
				process.exit()
				break
			default:
				// Echo anything else
				term.noFormat(Buffer.isBuffer(data.code) ? data.code : String.fromCharCode(data.code))
				break
		}
	})

	// term.grabInput({mouse: 'button'})
	const {yellow, cyan, blue, red, green, dim} = require('chalk')
	// var shell = require('shelljs')

	term.on('mouse', function (name, data) {
		if (name === 'MOUSE_RIGHT_BUTTON_PRESSED') {
			name = 'Você apertou o botão direito do mouse, nas seguintes coordenadas:'
		}
		if (name === 'MOUSE_RIGHT_BUTTON_RELEASED') {
			name = 'Você soltou botão direito do mouse, nas seguintes coordenadas:'
		}
		if (name === 'MOUSE_LEFT_BUTTON_PRESSED') {
			name = 'Você apertou o botão direito do mouse, nas seguintes coordenadas:'
		}
		if (name === 'MOUSE_LEFT_BUTTON_RELEASED') {
			name = 'Você soltou botão direito do mouse, nas seguintes coordenadas:'
		}

		// term.clear()
		// console.log(`\n${yellow(name)} \n${blue('Coluna')}: ${data.x}\n${blue('Linha')}: ${data.y}\n`)
		menuRegistry()
	})
	// const inquirer = require('inquirer')
	// var ui = new inquirer.ui.BottomBar()
	// ui.updateBottomBar('')

	// term.cyan('The hall is spacious. Someone lighted few chandeliers.\n')
	// term.cyan('There are doorways south and west.\n')

	// var items = ['a. Go south', 'b. Go west', 'c. Go back to the street']

	// term.singleColumnMenu(items, function (error, response) {
	// 	term('\n').eraseLineAfter.green(
	// 		'#%s selected: %s (%s,%s)\n',
	// 		response.selectedIndex,
	// 		response.selectedText,
	// 		response.x,
	// 		response.y
	// 	)
	// 	process.exit()
	// })
	console.log(`

`)
	var r = Math.floor(Math.random() * 256)
	var g = Math.floor(Math.random() * 256)
	var b = Math.floor(Math.random() * 256)
	// term.bold.cyan('Setting the cursor color to RGB (%d,%d,%d)\n', r, g, b)
	term.setCursorColorRgb(r, g, b)
	//*/

	/*
	var c = Math.floor( Math.random() * 8 ) ;
	term.bold.cyan( 'Setting the cursor color to register %d\n' , c ) ;
	term.setCursorColor( c , 0 ) ;
	//*/

	// var t = Math.floor(Math.random() * 6)

	// switch (t) {
	// 	case 0:
	// 		term.blockCursor('Block cursor\n')
	// 		break
	// 	case 1:
	// 		term.blinkingBlockCursor('Blinking block cursor\n')
	// 		break
	// 	case 2:
	// 		term.underlineCursor('Underline cursor\n')
	// 		break
	// 	case 3:
	// 		term.blinkingUnderlineCursor('Blinking underline cursor\n')
	// 		break
	// 	case 4:
	// 		term.beamCursor('Beam cursor\n')
	// 		break
	// 	case 5:
	// 		term.blinkingBeamCursor('Blinking Beam cursor\n')
	// 		break
	// }
}

module.exports = {constructorTabChooser}
