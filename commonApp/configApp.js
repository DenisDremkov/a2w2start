
const appSecureType = false;					// true - https, false - http

// database connection
const dbConnect = {
	log: 'denisdremkov',
	pass: 'jcnfitdcrbq1982'
}

// production mode
const prod = {
	host: 		'heroku',					// deploy host
	port: 		80,							// deploy port
	dbHost : 	'heroku',					// deploy DB host			 		
	dbPort : 	27017						// deploy DB port
}

// development mode	
const  dev = {
	host: 		'localhost',
	port: 		3000,
	dbHost: 	'localhost',
	dbPort: 	9000
}

const node_env = process.env.NODE_ENV;

if ( ! node_env ) { throw {message: "set NODE_ENV!: - dev or - prod"} }

const secureTypeValue = (appSecureType) ? 'https://' : 'http://';
const url = (node_env === 'dev') ? (dev.host + ':' + dev.port + '/') : (prod.host + ':' + prod.port + '/');
const hostFullUrl = secureTypeValue + url;
const dbHostUrl   = (node_env === 'dev') ? dev.dbHost + ':' + dev.dbPort + '/' : prod.dbHost + ':' + prod.dbPort + '/';
const dbFullUrl   = 'mongodb://' + dbConnect.log + ':' + dbConnect.pass + '@' + dbHostUrl;
    			
const config = {             
	appFolderName:    	'a2w2', 						 
	hostUrl: 			hostFullUrl, 
	dbUrl: 				dbFullUrl,
	port: 				(node_env === 'dev') ? dev.port : prod.port, 
	publicFolderName: 	'public',						// public folder (dist) (result of build) (client)
	rootPath: 			require('path').resolve(__dirname, '..')
}
console.log('SERVER START IN ' + node_env + ' MODE')
console.log('FULL CONFIGURATION: ', config)
module.exports = config;