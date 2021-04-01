const pimpMyCLI = require('./index')

const message = pimpMyCLI({
	style: {
		color: 'green',
		bold: true
	}
})

console.log(message('Xum'))
