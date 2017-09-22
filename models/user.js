const mongoose = require('mongoose');
const bcrypt   = require('bcrypt-nodejs');


const Schema = mongoose.Schema;


const userSchema = new Schema({
    username: {type:String, required: true, unique: true, lowercase: true},
    password: {type:String, required: true},
    email: {type:String, required: true, unique: true, lowercase: true}
});

// разобраться с this!!!!!!!!!!!!
userSchema.pre('save', function(next) {
	let obj = this;
	if (!this.isModified('password')) {
		return next();
	}
	bcrypt.hash(obj.password, null, null, function(err, hash) {
		console.log(err, hash)
		if (err) {return next(err)};
		obj.password = hash;
		next()
	})
});
userSchema.methods.comparePassword =(password) => {
	return bcrypt.compareSync(password, this.password);
}



// 	(next) => {
	
	
		
// 	// }))
// })

module.exports = mongoose.model('User', userSchema)