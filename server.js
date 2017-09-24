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
// var fs = require("fs");
// console.log("\n *START* \n");
// var content = fs.readFileSync("content.txt");
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


// app.get('/api', api);
app.get('/getLocalization', function(req, res) {
	res.send({lang:"en"})
	console.log('asdasdasdasd')
});

// app.get('/api', api);
app.get('/appInit', function(req, res) {
	
	// console.log(JSON.parse(req.headers.param))
	setTimeout(function() {
		res.send({config: 'async'})
	},500)
});



app.listen(PORT, function() {
	console.log('EXPRESS LISTEN ON PORT: ' + PORT);
})