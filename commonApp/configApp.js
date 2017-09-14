
const appSecureType = false;					// true - https, false - http

const crypto = require('crypto').randomBytes(256).toString('hex');

// database connection
const dbConnect = {
	log: 'denisdremkov',
	pass: 'jcnfitdcrbq1982'
}

// production mode
const prod = {
	host: 		'localhost',					// deploy host
	port: 		80,								// deploy port
	dbHost: 	'localhost',					// deploy DB host			 		
	dbPort: 	27017,							// deploy DB port
	dbName:   	'a2w2'
}

// development mode	
const  dev = {
	host: 		'localhost',
	port: 		3000,
	dbHost: 	'localhost',
	dbPort: 	27017,
	dbName:   	'a2w2'
}

const node_env = process.env.NODE_ENV;

// сдк=елать выкинуть исключение
if ( ! node_env ) { console.log('set NODE_ENV!: - dev or - prod') }

const secureTypeValue = (appSecureType) ? 'https://' : 'http://';
const url = (node_env === 'dev') ? (dev.host + ':' + dev.port + '/') : (prod.host + ':' + prod.port + '/');
const hostFullUrl = secureTypeValue + url;
const dbHostUrl   = (node_env === 'dev') ? (dev.dbHost + ':' + dev.dbPort + '/') : (prod.dbHost + ':' + prod.dbPort + '/');
const dbFullUrl   = 'mongodb://' + dbHostUrl + ((node_env === 'dev') ? dev.dbName : prod.dbName);   //dbConnect.log + ':' + dbConnect.pass + '@'
    	

const config = {             
	appFolderName:    	'a2w2', 						 
	hostUrl: 			hostFullUrl, 
	dbUrl: 				dbFullUrl,
	port: 				(node_env === 'dev') ? dev.port : prod.port, 
	publicFolderName: 	'public',						// public folder (dist) (result of build) (client)
	rootPath: 			require('path').resolve(__dirname, '..'),
	secret:   			crypto
}
console.log('MODE: ' + node_env)
console.log('HOST API: ', config.hostUrl)
console.log('CONFIG DB URL: ', config.dbUrl)
module.exports = config;