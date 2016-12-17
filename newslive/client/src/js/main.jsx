import 'file?name=[name].[ext]!../index.html';
import React from 'react';
import ReactDOM from 'react-dom';
var {browserHistory,hashHistory, Route, Router, IndexRoute}
  = require('react-router');

import About from './components/About.jsx';
import Home from './components/Home.jsx';
import Contact from './components/Contact.jsx';
import NavBar from './components/navbar.jsx';
import FavNewsComponent from './components/favNewsComponent.jsx';

 class Main extends React.Component{

render(){

return (
<div>
<NavBar/>
  <br/><br/><br/><br/>
    {this.props.children}
</div>
)
}
}
ReactDOM.render(
<Router history={browserHistory}>
             <Route path="/" component={Main} >
             <Route path="/Home" component={Home}/>
						 <Route path="/favNews" component={FavNewsComponent}/>
             <Route path="/About" component={About}/>
             <Route path="/Contact" component={Contact}/>

						 </Route>

</Router>,document.getElementById('content'));
