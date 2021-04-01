const clearConsole = require('clear-any-console') // this is a devDep
const colorSettings = require('./index')

const log = console.log

// *****************************
// *********ALERTS**************
// *****************************

// ALERT SETTINGS
const errorRequiredSettings = {
	agent: 'alert', // alert, message
	subAgent: 'success' // success, warning, info, error
}
// REQUESTING COLOR SETTINGS
const errorNow = colorSettings(errorRequiredSettings)

// PRINTING IN A NEW 'TAB'
// clearConsole()
log(errorNow)

// *****************************
// *********ALERTS**************
// *****************************

const messageOneRequiredSettings = {
	agent: 'message',
	subAgent: null,
	style: {
		color: 'green',
		bold: false,
		underline: false,
		inverse: false
	}
}

// REQUESTING COLOR SETTINGS
const messageNow = colorSettings(messageOneRequiredSettings)

// PRINTING IN A NEW 'TAB'
// clearConsole()
log(messageNow('NÜktpls'))
