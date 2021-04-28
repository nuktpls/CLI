const multipleArrayPrint = nowLogMultipleArrays => {
	return setTimeout(function () {
		console.log(nowLogMultipleArrays.styledMsg(nowLogMultipleArrays.msg))
	}, 100)
}

module.exports = {multipleArrayPrint}
