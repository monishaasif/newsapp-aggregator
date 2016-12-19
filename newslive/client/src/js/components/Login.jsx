import React from 'react';
export default class Login extends React.Component{
  constructor(){
    super();
    this.buttonLogin=this.buttonLogin.bind(this);
  }
  buttonLogin(){

  }
  render(){
    return(
    <div className="container">
    <form className="form-signin">
       <h2 className="form-signin-heading">Sign-in</h2>
       <br></br><br></br>
       <label for="text" className="sr-only">Username</label>
       <input type="text" id="text" className="form-control" placeholder="Username" required autofocus />
       <br></br><br></br>
       <label for="inputPassword" className="sr-only">Password</label>
       <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
       <br></br><br></br>
       <div className="checkbox">
         </div>
       <button className="btn btn-lg btn-success btn-block" type="submit" onChange={this.buttonLogin.bind(this)}>Login </button>
     </form>
</div>
    )
  }
}
