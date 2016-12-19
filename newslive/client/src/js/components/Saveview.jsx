import React from 'react';
export default class SaveView extends React.Component{
 constructor()
   {
     super();
     this.state={comment:""};
     this.buttonHandler=this.buttonHandler.bind(this);
     this.buttonUpdate=this.buttonUpdate.bind(this);
     this.updateTitle=this.updateTitle.bind(this);
 }
 updateTitle(t){
    console.log('typing...');
    this.setState({comment: t.target.value});
  }
  buttonUpdate(){
      var obj={
            comment:this.state.comment,
            title:this.props.ele.title
      }
      console.log(obj);
      $.ajax({
       url:"http://localhost:8095/news/update",
       type: 'PUT',
       data: obj,
       success: function(message)
       {
         console.log("comments updated");
                 console.log(obj.comment);
        // window.location.reload();
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

                   <button type="button" className="btn btn-danger btn-lg" value="delete"  onClick={this.buttonHandler.bind(this)}>DELETE</button>
                   &nbsp;&nbsp;&nbsp;&nbsp;
                   <button type="button" className="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Update</button>
                   <div id="myModal" className="modal fade in" role="dialog">
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                              <h4 className="modal-title">Update Comments</h4>
                          </div>
                          <div className="modal-body">
                          <textArea placeholder="give your comments" onChange={this.updateTitle.bind(this)} />
                          </div>
                          <div className="modal-footer">
                              <button type="button" className="btn btn-success" data-dismiss="modal" onClick={this.buttonUpdate.bind(this)}>Save</button>
                              <button type="button" className="btn btn-success" data-dismiss="modal">Close</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    )
   }
}
