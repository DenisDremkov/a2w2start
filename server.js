const express 		= require('express'),
	router			= express.Router()
	path 			= require('path'),
	app 			= express(),
	bodyParser 		= require('body-parser'),
	configApp 		= require('./config/appConfig'),
	PORT 			= configApp.port,
	dbConfig 		= require('./config/dbConfig'),
	autentification = require('./routes/autentification')(router),
	mongoose    	= require('mongoose'),
	cors 			= require('cors'),
	fs 				= require("fs"),
	localiRu 		= require('./locali/ru.json'),
	localiEn 		= require('./locali/en.json'),
	User 			= require('./models/user');

// mongoose
mongoose.Promise = global.Promise;
mongoose.connect( dbConfig.dbHost, {useMongoClient: true, promiseLibrary: global.Promise },	err => {
	if (err) {console.log(err)}
	else {console.log('CONNECT WITH DB - ' + dbConfig.dbHost)}
});

// cors
app.use(cors({ origin: 'http://localhost:9000'}));

// parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// static
app.use(express.static(path.join(__dirname, configApp.publicFolderName)))

// api

app.get('/appInit', function(req, res) {
	if (req.query.lang === 'ru') {res.send(JSON.stringify(localiRu));}
	if (req.query.lang === 'en') {res.send(JSON.stringify(localiEn));}
});

app.post('/login', function(req, res) {
	User.findOne({username: req.body.username}, function(err,obj) { 
		if (err) {res.send({success:false, msg: 'server error'})}
		if (obj) {

			if (obj.comparePassword(req.body.password)) {
				res.send({success:true, msg: 'success registration', user: {'username': obj.username, 'email':obj.email} });
			} else {
				res.send({success:false, msg: 'wrong password'});
			}
		} else {
			res.send({success:false, msg: 'you are not registered'})
		}
	});
});

app.post('/register', function(req, res) {
	if (req.body.email && req.body.username && req.body.password) {
		
		let user = new User({
			email: req.body.email.toLowerCase(),
			username: req.body.username.toLowerCase(),
		});

		user.password = user.createHashPassword(req.body.password);

		user.save( err => {
			if (err) {
				if(err.code === 11000) {res.send({success: false, msg: 'dublicate data'})}
				else {res.send({success: false, msg: 'system error - save in db'})}
			}
			else {
				res.send({success: true, msg: 'user saved'})
			}
		})
	}
	else {
		res.send({success: false, msg: 'print all fields'})
	}
});

app.post('/setLanguage', function(req, res) {
	res.send({success: true})
});

app.listen(PORT, function() {
	console.log('EXPRESS LISTEN ON PORT: ' + PORT);
})