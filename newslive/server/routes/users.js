var express = require('express');
var router = express.Router();
var user = require('../models/login');
router.get('/add',function(req,res,next){
	res.send("respond with resource")
});

router.post("/add",function(req,res) {
 if(req.body) {
 var uservar=new user();
 console.log("---------------------------------------------------------"+req.body);
 uservar.Username=req.body.Username;
 uservar.password=req.body.password;
 uservar.save(function(err){
 if(err) {
   res.send("error in inserting the data");
 }
 else  {
 res.send("data is inserted successfully" );
 }
   });
 }
 else{
 	res.send("no data inserted");
 }
 });

/* GET home page. */
/local/
router.get('/', function(req, res, next) {
 res.render('index', { title: 'Welcome To Newslive application' });
});
module.exports = router;