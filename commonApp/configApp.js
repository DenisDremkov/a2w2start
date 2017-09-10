
let path = require('path'),
	_root = path.resolve(__dirname, '..');

module.exports = {             
	appFolderName:    	'a2w2', 						 
	portDevelopment: 	9000,
	portProduction: 	80,
	hostUrl: 			undefined,
	dbUrl: 				undefined,
	publicFolderName: 	'public',						// public folder (dist) (result of build) (client)
	rootPath: 			_root
};