const User = require('../models/user');

module.exports = (router) => {
	router.post('/register', function(req, res) {
		if (req.body.email && req.body.username && req.body.password) {
			
			let user = new User({
				email: req.body.email.toLowerCase(),
				username: req.body.username.toLowerCase(),
				password: req.body.password
			});

			user.save( err => {
				console.log('save oper')
				if (err) {
					if(err.code === 11000) {res.json({success: false, msg: 'dublicate data'})}
					else {res.json({success: false, msg: 'system error - save in db'})}
				}
				else {
					setTimeout(function() {
						res.json({success: true, msg: 'user saved'})
					}, 3000)
				}
			})
		}
		else {
			res.json({success: false, msg: 'print all fields'})
		}
	})
	return router;
};