import React from 'react';
export default class SaveView extends React.Component{
 constructor()
   {
     super();
     this.buttonHandler=this.buttonHandler.bind(this);
 }
 buttonHandler(news){
   $.ajax({
    url: "http://localhost:8095/news/delete",
    type: "DELETE",
    data: this.props.ele,
    success : function(msg){
      this.props.delNews(this.props.ele);
      console.log("deleted");
  }.bind(this),
    error: function(err){
      console.log("error in displaying articles");
    }.bind(this)
});
 }
   render(){
       return(
              <div class="Container-fluid">
               <div className="jumbotron row">
               <div className="col-sm-12">
                <a href="{this.props.ele.url}" target="_blank"><h1>{this.props.ele.title}</h1></a>

                  <div className="col-sm-6">
                        <img src={this.props.ele.urlToImage}  alt="image not loaded" id="imageid" width="300" height="200"/>
                   </div>
               <div className="col-sm-6">
                  <h3>{this.props.ele.description}</h3>
                 <h3>{this.props.ele.author}</h3>
                 <h3>{this.props.ele.publishedAt}</h3>
                   <form>
                   <button type="button" className="btn btn-info" onClick={this.buttonHandler.bind(this)}>DELETE</button>
                 </form>
                   </div>
               </div>
             </div>
             </div>

         )
   }
}