
const isProductionMode = process.env.NODE_ENV === 'prod';

// prod
const prodHost = 'http://localhost:',
	prodPort = 80;

// dev
const devHost = 'http://localhost:',
	devPort      = 3000,						// nodemon server.js
	devPortClient = 9000; 						// webpack dev server



const config = {             
	appFolderName:    	'a2w2', 						 
	host: 				(isProductionMode) ? prodHost : devHost, 
	port: 				(isProductionMode) ? prodPort : devPort, 
	devPortClient:      devPortClient,
	fullHost: 			((isProductionMode) ? prodHost : devHost) + ((isProductionMode) ? prodPort : devPort),
	publicFolderName: 	'dist',						// public folder (dist) (result of build) (client)
	rootPath: 			require('path').resolve(__dirname, '..')
}

module.exports = config;