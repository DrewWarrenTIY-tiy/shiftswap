'use strict';

import React from 'react';

var firebase = require("firebase");

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: this.props.auth,
    }
  }

  onAuthChange(bool) {
    this.setState({
      auth: bool
    });
    this.props.handleAuthChange(bool)
  }

  render () {

    console.log("this.state.auth of Home.js: " + this.state.auth);

    function loginEvent(e) {
      e.preventDefault();
      //Get email and pass
       let email = document.getElementById('txtEmail').value;
       let pass = document.getElementById('txtPassword').value;
      const auth = firebase.auth();
      //Sign in
      const promise = auth.signInWithEmailAndPassword(email, pass);
      promise.catch( e => console.log(e.message));
      console.log("email: " + email + " pass: " + pass);
      document.getElementById('txtEmail').value = '';
      document.getElementById('txtPassword').value = '';
    }

    function logoutEvent() {
      firebase.auth().signOut();
      //onAuthChange(false);
    }

    firebase.auth().onAuthStateChanged(firebaseUser => {
      if(firebaseUser) {
        console.log(firebaseUser);
        document.getElementById('btnLogout').classList.remove('hide');
        document.getElementById('btnLogin').classList.add('hide');
      } else {
        console.log('not logged in');
        document.getElementById('btnLogout').classList.add('hide');
        document.getElementById('btnLogin').classList.remove('hide');
      }
      console.log("onAuthStateChanged auth: " + this.state.auth);
    });

    return (
      <div className="home">
        <h1>Home</h1>
        <form onSubmit={loginEvent}>
          <input id="txtEmail" type="email" placeholder="Email"/>
          <input id="txtPassword" type="password" placeholder="Password"/>
          <button onClick={loginEvent} id="btnLogin" className="btn btn-action">
            Log In
          </button>
        </form>
        <button id="btnSignUp" className="btn btn-secondary">
          Sign Up
        </button>
        <button onClick={logoutEvent} id="btnLogout" className="btn btn-action hide btnLogout">
          Log Out
        </button>
      </div>
    )
  }
}
