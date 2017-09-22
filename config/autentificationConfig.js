const autentifConfig = {             
	login: {
		pattern: '',
		minSize: 5,
		maxSize: 20
	},
	password: {
		pattern: '(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$', //Строчные и прописные латинские буквы, цифры, спецсимволы. Минимум 8 символов
		minSize: 8,
		maxSize: 30
	}
}

module.exports = autentifConfig;