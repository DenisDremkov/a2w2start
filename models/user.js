'use strict';

const mongoose = require('mongoose');
const bcrypt   = require('bcrypt-nodejs');


const Schema = mongoose.Schema;


const userSchema = new Schema({
    username: {type:String, required: true, unique: true, lowercase: true},
    password: {type:String, required: true},
    email: {type:String, required: true, unique: true, lowercase: true}
});

userSchema.methods.createHashPassword = (password) => {	return bcrypt.hashSync(password); }
userSchema.methods.comparePassword = function(password) { return bcrypt.compareSync(password, this.password);}

module.exports = mongoose.model('User', userSchema)