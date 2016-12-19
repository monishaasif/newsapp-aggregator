import React from 'react';
import ReactDOM from 'react-dom';
import DisplayContent from './DisplayContent.jsx'
import Intermediate from './Intermediate.jsx'
import NavBar from './navbar.jsx'
import Login from './Login.jsx'

export default class Home extends React.Component{
	constructor(){
		super();
		this.state={newData:[]};
		this.fetchNewsFromExternalAPI=this.fetchNewsFromExternalAPI.bind(this);
	}
	fetchNewsFromExternalAPI(msg) {
	    $.ajax({
	     url: " https://newsapi.org/v1/articles?source="+msg+"&sortBy=top&apiKey=83ad99ebe5d642b29469a64a257c4ce3",
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
