  var express = require('express');
  var router = express.Router();
  var newslives = require('../models/schema');
  /* GET home page. */
  /local/
  router.get('/', function(req, res, next) {
   res.render('index', { title: 'Welcome To Newslive application' });
  });
  //localhost:8095/news/login
  router.post('/login',function(req,res,next){
   res.send("Username:"+req.body.uname+"<BR>"+"Password:"+req.body.pass);
  })
  //localhost:8095/news/adddatatodb
  router.post("/adddatatodb",function(req ,res) {
    if(req.body){
      var newssave = new newslives();
      newssave.author = req.body.author;
      newssave.title = req.body.title;
      newssave.description = req.body.description;
      newssave.url = req.body.url;
      newssave.urlToImage = req.body.urlToImage;
      newssave.publishedAt = req.body.publishedAt;

    newssave.save(function(err){
      if(err) {
        res.send("Error in saving the news headlines");
    }
    else{
       res.send("Saved the news headlines in the mongo" );
   }
 });

  }
  });

  //localhost:8095/news/delete
  router.delete("/delete",function(req,res) {
    if(req.body){
      request=req.body.title;
      newslives.remove({title:request},function(err){
        if(err){
          res.send("Error in deleting the data");
        }
        else{
          res.send("Data is deleted successfully");
        }
      });
    }
      else{
        res.send("no data found to delete");
      }
  });
  /*localhost:8095/news/update*/
  router.put('/update', function(req, res){
     if(req.body)
     {
      request1=req.body.title;
       request2=req.body.description;
     newslives.update({title:request1},{$set:{description:request2}},function(err){

         if(err) {
           res.send(err);
         }
         else  {
         res.send("News updated");
         }
       });
     }
    });
  /*localhost:8095/news/view*/

router.get('/view', function(req, res) {
  newslives.find({},function(err,allnews){
    if(err) {
      res.send(err);
      console.log('error ocuured');
    }
    else {
     var newsobject={};
      allnews.forEach(function(newss,ind){
        newsobject[newss._id]=newss;

      });
      res.send(newsobject);
    }
  });
});

  module.exports = router;
