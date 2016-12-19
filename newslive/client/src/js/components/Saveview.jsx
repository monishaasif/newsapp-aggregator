import React from 'react';
export default class SaveView extends React.Component{
 constructor()
   {
     super();
     this.buttonHandler=this.buttonHandler.bind(this);
     this.buttonUpdate=this.buttonUpdate.bind(this);
     this.updateTitle=this.updateTitle.bind(this);
 }
 updateTitle(t){
    console.log('typing...');
    this.setState({title: t.target.value});
  }
  buttonUpdate(){
      var newTitle=this.state.title;
      var movieObject = {};
      movieObject.Title = this.state.title;
      movieObject.imdbID= this.props.valuedata.imdbID;
      $.ajax({
       url:"http://localhost:8095/news/update",
       type: 'PUT',
       data: movieObject,
       success: function(message)
       {
         console.log("Movie updated");
         this.props.onupdate(movieObject.imdbID, movieObject.Title);
       }.bind(this),
       error: function(err)
       {
         console.log(err);
       }.bind(this)
     });
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
                <a href="{this.props.ele.url}" target="_blank"><h3>{this.props.ele.title}</h3></a>

                  <div className="col-sm-6">
                        <img src={this.props.ele.urlToImage}  alt="image not loaded" id="imageid" width="300" height="200"/>
                   </div>
               <div className="col-sm-6">
                  <h3>{this.props.ele.description}</h3>
                 <h3>{this.props.ele.author}</h3>
                 <h3>{this.props.ele.publishedAt}</h3>
                   <form>
                   <div class="container">
                   <button type="button" className="btn btn-danger btn-lg" data-target="#mymodal" onClick={this.buttonHandler.bind(this)}>DELETE</button>
                   &nbsp;&nbsp;&nbsp;&nbsp;
                   <button type="button" className="btn btn-primary btn-lg" data-toggle="modal" data-target="#mymodal">UPDATE</button>
                    <div className="modal fade in" id="myModal" role="dialog">
  									<div className="modal-dialog">
  										<div className="modal-content">
  											<div className="modal-header">
  												<button type="button" className="close" data-dismiss="modal">&times;</button>

  												<h4 className="modal-title">Update Comment</h4>
  											</div>
  											<div className="modal-body">
  											<div className="modal-footer">
  												<button className="btn btn-success" data-dismiss="modal" type="button">Close</button> <button class="btn btn-primary" type="button">Submit</button>
  											</div>
  										</div>
  									</div>
  								</div>
                     </div>
                     </div>
                 </form>

                    </div>
                     </div>
                      </div>

                       </div>

    )
   }
}
