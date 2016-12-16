import 'file?name=[name].[ext]!../index.html';
import React from 'react';
import ReactDOM from 'react-dom';
import DisplayContent from './components/DisplayContent.jsx'
import Intermediate from './components/Intermediate.jsx'

class MainComponent extends React.Component{
	constructor(){
		super();
		this.state={newData:[]};
		this.fetchNewsFromExternalAPI=this.fetchNewsFromExternalAPI.bind(this);
	}
	fetchNewsFromExternalAPI(msg) {
		console.log("hi");
	    $.ajax({
	     url: "https://newsapi.org/v1/articles?source="+msg+"&sortBy=top&apiKey=9a096e35ae9f4533938af6df42ef14b9",
	     type: "GET",
	     dataType: 'JSON',
	     success : function(msg){
					this.setState({newData:msg.articles});
					
		 }.bind(this),
	     error: function(err){
				 console.log("error in displaying articles");
	     }.bind(this)
	 });
	}
	render(){
		return (
			<div>
				<DisplayContent mydata={this.fetchNewsFromExternalAPI.bind(this)}/>
				<Intermediate array1={this.state.newData}/>
			</div>
			)
	}
}
ReactDOM.render(
	<MainComponent/>,document.getElementById('content')
);
