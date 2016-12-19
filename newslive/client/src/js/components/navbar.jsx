var React = require('react');
var {Link} = require('react-router');
var NavBar = React.createClass({
  render: function(){
    return(
      <div>
      <nav className="navbar navbar-inverse">
      <div className="container-fluid">
      <ul className="nav navbar-nav">
      <li><Link to="/Home">Home</Link></li>
      <li><Link to="/favNews">View Favourites</Link></li>
      <li><Link to="/About">About Us</Link></li>
      <li><Link to="/Contact">Contact Us</Link></li>
      </ul>
      </div>
      </nav>
      </div>
    );
  }
});
module.exports=NavBar;
