import React from 'react';
export default class DisplayContent extends React.Component{

	handleSubmit()
	{
		console.log("coming here");
	var data=document.getElementById("new").value;
	console.log(data);
this.props.mydata(data);
	}

	render(){
		return (
		<div>
		<form>
		<input type="search"  placeholder="search the news"  id="new"/>
		<input type="button" value="search" onClick={this.handleSubmit.bind(this)}/></form>

		</div>
		)
	}
}
