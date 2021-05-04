const dotenv = require('dotenv')
const fs = require('fs')

const chooseMiltinho = () => {
	const file = dotenv.parse(fs.readFileSync('./.env.staging'))
	const dataInsert = `HERO_NAME=${file.HERO_NAME}
HERO_HE=${file.HERO_HE}
HERO_A=${file.HERO_A}
HERO_TERMN=${file.HERO_TERMN}
HERO_TERMN_AO=${file.HERO_TERMN_AO}
HERO_INIT_NAME=${file.HERO_INIT_NAME}`

	const filename = './.env'
	//  appendFileSync
	fs.writeFileSync(filename, dataInsert, 'utf-8', function (err) {
		if (err) return console.log(err)
		console.log(`${dataInsert} > ${filename}`)
	})

	console.log(dataInsert)
	process.exit()
}
module.exports = {chooseMiltinho}
