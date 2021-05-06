const dotenv = require('dotenv')
// var path = require('path')
const fs = require('fs')
// const appRoot = require('app-root-path')


function checkEnvExist(rootFile) {
  try {
    if (!fs.existsSync(rootFile)) {
      fs.writeFileSync(rootFile, '', 'utf-8')
    }
  } catch (err) {
    // console.error(err)
  }
}


function readEnv(filename) {
  return dotenv.parse(fs.readFileSync(filename))
}

function readDir(dirName) {
  return fs.readdirSync(dirName)
}

module.exports = { checkEnvExist, readEnv, readDir }