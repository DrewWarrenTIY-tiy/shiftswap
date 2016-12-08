'use strict';

import React from 'react';
import classnames from 'classnames';

var firebase = require("firebase");

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: this.props.auth,
      email: '',
      password: '',
    }
  }

  login(e) {
    e.preventDefault();
    //Get email and pass
    const { email, password } = this.state
    console.log("email: " + email + " pass: " + password);

    //Get Firebase Auth
    const auth = firebase.auth();
    //Sign in via Firebase
    auth.signInWithEmailAndPassword(email, password)
      .then( () => {
        this.resetForm()
        window.location.reload();
      })
      .catch( e => {
        console.log(e.message)
        this.resetForm()
      });
      // The rest will be handled by the firebase listener in the App.js
    }
    logout() {
      firebase.auth().signOut();
      window.location.reload();
      document.getElementById("email").value = "";
      document.getElementById("password").value = "";
    }
    resetForm () {
      this.setState({
        email: '',
        password: ''
      })
      document.getElementById("email").value = "";
      document.getElementById("password").value = "";
    }

  render () {
    // This render function is awesome now, because it only has one job which is the UI
    const { auth } = this.props;
    console.log("this.state.auth of Home.js: " + this.state.auth);

    return (
      <div className="home">
        <h1>Home</h1>
        <form onSubmit={this.login.bind(this)}>
          <input
            id="email"
            type="email"
            placeholder="Email"
            onChange={e => this.setState({email: e.target.value})}
          />
          <input
            id="password"
            type="password"
            placeholder="Password"
            onChange={e => this.setState({password: e.target.value})}
          />
          <button
            type='submit'
            className={classnames("btn btn-action", {
              hide: auth
            })}
          >
            Log In
          </button>
        </form>
        {/* <button className="btn btn-secondary">Sign Up</button> */}
       <button
         onClick={this.logout.bind(this)}
         className={classnames("btn btn-action btnLogout", {
           hide: !auth
         })}
       >
         Log Out
       </button>
      </div>
    )
  }
}
