const labelTabChapter = (pluralPrimeiras, totalFinal, totalRows) => {
	return setTimeout(function () {
		console.log(`${pluralPrimeiras} ${totalFinal} de um total de ${totalRows} linhas: `)
	}, 100)
}

module.exports = {labelTabChapter}
