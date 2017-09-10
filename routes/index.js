let express = require('express');
let router = express.Router();

// get
router.get('/api', function(req, res, next) {
	console.log('api')
	res.send('index page');
});

// post
router.post('/tasks', function(req, res, next) {
	console.log('tasks')
	res.send('tasks page');
});


module.exports = router;