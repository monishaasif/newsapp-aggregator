import React from 'react';
export default class Headingdisplay extends React.Component{
 constructor()
   {
     super();
     this.buttonHandler=this.buttonHandler.bind(this);
     this.clickButton=this.clickButton.bind(this);
 }

 buttonHandler(){

   $.ajax({
    url: "http://localhost:8095/news/adddatatodb",
    type: "POST",
    data: this.props.data,
    success : function(msg){
      console.log("inserted");
  }.bind(this),
    error: function(err){
      console.log("error in displaying articles");
    }.bind(this)
});
 }
   render(){
       return(
              <div class="Container">
               <div className="jumbotron row">
               <div className="col-sm-12">
                <a href="{this.props.data.url}" target="_blank">{this.props.data.title}</a>

                  <div className="col-sm-6">
                        <img src={this.props.data.urlToImage}  alt="image not loaded" id="imageid" width="300" height="200"/>
                   </div>
               <div className="col-sm-6">
                  <h3>{this.props.data.description}</h3>
                 <h3>{this.props.data.author}</h3>
                 <h3>{this.props.data.publishedAt}</h3>
                   <form>

                   <button type="button" className="btn btn-success" onClick={this.buttonHandler.bind(this)}>Save</button>

                   </form>
                   </div>
               </div>
             </div>
             </div>

         )
   }
}
