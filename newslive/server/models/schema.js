
var mongoose = require('mongoose');
var schema1 = mongoose.Schema;
var saveheadlines = new schema1({
	"Author" : String,
	"Title" : String,
	"Description" : String,
	"Url" : String,
	"urlToImage" : String,
	"PublishedAt" : String
})
module.exports = mongoose.model('savenews',saveheadlines);