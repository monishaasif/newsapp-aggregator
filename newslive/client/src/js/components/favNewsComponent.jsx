var React = require('react');
import SaveView from './SaveView.jsx';
export default class FavNewsComponent extends  React.Component{
  constructor(){
    super();
    this.state={newData:[]};
    this.viewRepo=this.viewRepo.bind(this);
    this.deleteNews=this.deleteNews.bind(this);
  }

  viewRepo(){
		$.ajax({
		 url: " http://localhost:8095/news/view",
		 type: "GET",
		 dataType: 'JSON',
		 success : function(msg){
       var array2=$.map(msg, function(e1) {return e1})
				this.setState({newData:array2});
	 }.bind(this),
		 error: function(err){
			 console.log("error in displaying articles");
		 }.bind(this)
 });
	}
  deleteNews(msg){
    var myData=this.state.newData;
    var index=myData.findIndex(function(element){
      return element.title===msg.title;
    });
    if(index!==-1){
      myData.splice(index,1);
      console.log(myData);
      this.setState({newData:myData});
    }
}
  componentDidMount(){
    this.viewRepo();
  }
render(){
        var obj=this.state.newData.map(function(elemen){
      return (
        <SaveView ele={elemen} delNews={this.deleteNews.bind(this)} />
      )
    }.bind(this));
    return(
      <div>
      {obj}
      </div>
    )
 }
 }
