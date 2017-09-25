const express 		= require('express'),
	router			= express.Router()
	path 			= require('path'),
	app 			= express(),
	bodyParser 		= require('body-parser'),
	configApp 		= require('./config/appConfig'),
	api 			= require('./routes/index'),
	PORT 			= configApp.port,
	dbConfig 		= require('./config/dbConfig'),
	autentification = require('./routes/autentification')(router),
	mongoose    	= require('mongoose'),
	cors 			= require('cors'),
	fs 				= require("fs"),
	localiRu 		= require('./locali/ru.json'),
	localiEn 		= require('./locali/en.json');

mongoose.Promise = global.Promise;
mongoose.connect( dbConfig.dbHost, {useMongoClient: true, promiseLibrary: global.Promise },	err => {
	if (err) {console.log(err)}
	else {console.log('CONNECT WITH DB - ' + dbConfig.dbHost)}
});

app.use(cors({
	origin: 'http://localhost:9000'
}))

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, configApp.publicFolderName)))

app.use('/auth', autentification); // autentif/registr,  autentif/login ....
// app.use(); // autentif/registr,  autentif/login ....


// app.get('/api', api);
app.get('/getLocalization', function(req, res) {
	console.log('get locali')
	res.send(localiRu)
});

// app.get('/api', api);
app.get('/appInit', function(req, res) {
	console.log('appInit')
	if (req.query.lang === 'ru') {res.send(JSON.stringify(localiRu));}
	if (req.query.lang === 'en') {res.send(JSON.stringify(localiEn));}
});

app.post('/setLanguage', function(req, res) {
	res.send({success: true})
});

app.listen(PORT, function() {
	console.log('EXPRESS LISTEN ON PORT: ' + PORT);
})