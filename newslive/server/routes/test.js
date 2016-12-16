var mongoose = require('mongoose');
var schema = mongoose.Schema;
var UserDetailsSchema = new Schema({
	username:String;
	password:String;
})
model.exports = mongoose.model('userinfo',UserDetailsSchema);