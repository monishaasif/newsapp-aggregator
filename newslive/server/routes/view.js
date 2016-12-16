var express = require('express');
var router = express.Router();

/* GET home page. */
/local/
router.get('/', function(req, res, next) {
 res.render('index', { title: 'Welcome To Newslive application' });
});

router.post("/add",function(req,res) {
//var newsauthor=req.params.newsauthor;
var title=req.params.title;

 res.send("News added successfully");
 console.log("News added");
 });
router.delete("/delete",function(req,res) {
   var request=req.params.title;
   console.log(request);
   if(request)
   {
       res.send("the title is deleted  "+request);
       }
      });

router.put("/update",function(req,res) {
   console.log(req.params);
   var updateddetails = req.params.title;
    console.log(updateddetails);
       res.send("news updated with title "+updateddetails);
     
 });
router.post('/view',function(req,res){
    console.log(req.body);
    res.json(req.body);
})

module.exports = router;