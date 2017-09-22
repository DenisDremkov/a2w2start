
const dbHost = 'mongodb://localhost:27017/';
const dbName = 'a2w2';
const secret = require('crypto').randomBytes(256).toString('hex');

module.exports = {
	dbHost: dbHost + dbName,
	secret: secret
};