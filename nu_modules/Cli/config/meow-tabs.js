const options = {
	inferType: true,
	flags: {
		page: {
			alias: 'p',
			type: 'number',
			default: 0
		},
		página: {
			alias: 'pagina',
			type: 'number',
			default: 1
		},
		debug: {
			type: 'boolean',
			default: false,
			alias: 'd'
		},
		version: {
			type: 'boolean',
			default: false,
			alias: 'v'
		},
		versão: {
			type: 'boolean',
			default: false
		},
		welcome: {
			type: 'boolean',
			default: false,
			alias: '-w'
		},
		help: {
			type: 'boolean',
			default: false,
			alias: '-h'
		},
		chapter: {
			alias: 'c',
			type: 'number',
			default: 0
		},
		capítulo: {
			alias: 'capitulo',
			type: 'number',
			default: 0
		},
		clear: {
			type: 'number',
			default: 0,
			alias: 'no-clear'
		},
		clearAll: {
			type: 'boolean',
			default: false,
			alias: 'limpar'
		},
		qtdRow: {
			alias: 'rows',
			type: 'number',
			default: 0
		},
		next: {
			alias: 'nxt',
			type: 'number',
			default: 0
		},
		first: {
			alias: 'primeiros',
			type: 'boolean',
			default: false
		},
		rangeBegin: {
			alias: 'range',
			type: 'number',
			default: 0
		},
		latest: {
			alias: 'lst',
			type: 'boolean',
			default: false
		},
		character: {
			alias: 'personagem',
			type: 'string',
			default: ''
		},
		name: {
			alias: 'nome',
			type: 'boolean',
			default: false
		},
		gender: {
			alias: 'gênero',
			type: 'boolean',
			default: false
		},
		age: {
			alias: 'idade',
			type: 'boolean',
			default: false
		},
		characterVersion: {
			alias: 'versãoPersonagem',
			type: 'boolean',
			default: false
		},
		birth: {
			alias: 'nascimento',
			type: 'boolean',
			default: false
		},
		birthplace: {
			alias: 'localNascimento',
			type: 'boolean',
			default: false
		}
	}
}
module.exports = {options}
