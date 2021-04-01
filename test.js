const pimpMyCLI = require('./index')

const message = pimpMyCLI({
	style: {
		color: 'blue',
		bold: true
	},
	browserExtension: true
})

console.log('Zumbamaster', message)
