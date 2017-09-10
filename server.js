let express 	= require('express'),
	path 		= require('path'),
	app 		= express(),
	bodyParser 	= require('body-parser'),
	configApp 	= require('./commonApp/configApp.js'),
	api 		= require('./routes/index.js'),
	PORT 		= configApp.portProduction;

// app.set('views', path.join(__dirname, '/' + configApp.publicFolderName));

app.use(express.static(path.join(__dirname, configApp.publicFolderName)))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/api', api);

app.listen(PORT, function() {
	console.log('Server running on -' + PORT + ' port');
})