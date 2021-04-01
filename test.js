const pimpMyCLI = require('./index')
const clearConsole = require('clear-any-console')

const messageGREEN = pimpMyCLI({
	style: {
		color: 'green'
	}
})

const messageYELLOW = pimpMyCLI({
	style: {
		color: 'yellow'
	}
})

const messageBLUE = pimpMyCLI({
	style: {
		color: 'blue'
	}
})

const messageBLUEinverse = pimpMyCLI({
	style: {
		color: 'blue',
		inverse: true
	}
})

const log = console.log

const nuTEIASbemvindo = `NÜ( U∅TE[i]AS ) 🐙`
const breakLine = `
`
const nuTERIASfecha = `🕸 <<</TE[i]AS>`
const nuTEIASabre = `🕸 <TE[i]AS>>>`
const nuMESSAGE = `
    NÜktpls é o Deus do primeiro universo literário
    e educacional cibernético do mundo.
`
const nuMESSAGElinks = `
🐦 Twitter: http://twitter.com/nuktpls
📋 https://github.com/nuktpls`
const nuMESSAGEtabTwo = `A História de NÜktpls 🐙
`

clearConsole()
log(breakLine)
log(messageBLUEinverse(nuTEIASbemvindo))
log(breakLine)
log(messageYELLOW(nuTEIASabre))
log(messageGREEN(nuMESSAGE))
log(messageYELLOW(nuTERIASfecha))
log(messageBLUE(nuMESSAGElinks))
log(breakLine)
setTimeout(function () {
	clearConsole()
	log(breakLine)
	log(messageBLUEinverse(nuMESSAGEtabTwo))
}, 5000)
