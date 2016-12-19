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

		<form className="navbar-form" role="search">
		        <div className="input-group">
		            <input type="text" className="form-control"  placeholder="Search"  name="srch-term" id="new"/>
					  </div>

        <button type="button" className="btn btn-success" onClick={this.handleSubmit.bind(this)} >
          <span className="glyphicon glyphicon-search"></span> Search</button>
					</form>

					</div>
		)
	}
}
