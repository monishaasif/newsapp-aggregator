var mongoose = require('mongoose');
var schema = mongoose.Schema;
var UserDetailsSchema = new schema({
	"Username":String,
	"password":String
})

module.exports = mongoose.model('userinfo',UserDetailsSchema);
