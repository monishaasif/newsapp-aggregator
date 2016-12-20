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
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <div className="form-body">
            <ul className="nav nav-tabs final-login">
              <li className="active"><a data-toggle="tab" href="#sectionA">Sign In</a></li>
              <li><a data-toggle="tab" href="#sectionB">Join us!</a></li>
            </ul><br /><br />
            <div className="tab-content">
            <div id="sectionA" className="tab-pane fade in active">
            <div className="innter-form">
              <form className="sa-innate-form" method="post">
                <label>Email Address</label>&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="text" name="username"/>
                <br /> <br />
                <label>Password</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;
                <input type="password" name="password"/>
                <br /><br />
                <center><button className="btn btn-success" type="submit">Sign In</button></center>
                &nbsp;&nbsp;&nbsp;&nbsp;

              </form>
            </div>
            <div className="clearfix"></div>
            </div>
            <div id="sectionB" className="tab-pane fade">
            <div className="innter-form">
              <form className="sa-innate-form" method="post">
              <table>
                <tr><td><label>Name</label></td>
                <td><input type="text" name="username"/></td></tr>
                <br /><br />
              <tr><td>  <label>Email </label></td>
                <td><input type="text" name="username"/></td></tr><br /><br />
              <tr><td>  <label>Password</label></td>
                <td><input type="password" name="password"/></td></tr>
                <br /><br />

                </table>
                <center><button className="btn btn-success" type="submit" >Join now</button></center>
              </form>
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
