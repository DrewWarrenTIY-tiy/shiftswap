'use strict';

import React from 'react';

var firebase = require("firebase");

export default class Home extends React.Component {
  render () {

    const btnLogin = document.getElementById('btnLogin');
    const btnSignUp = document.getElementById('btnSignUp');
    const btnLogout = document.getElementById('btnLogout');

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
      firebase.auth().signOut();;
    }

    firebase.auth().onAuthStateChanged(firebaseUser => {
      if(firebaseUser) {
        console.log(firebaseUser);
        document.getElementById('btnLogout').classList.remove('hide');
      } else {
        console.log('not logged in');
        document.getElementById('btnLogout').classList.add('hide');
      }
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
        <button onClick={logoutEvent} id="btnLogout" className="btn btn-action hide">
          Log Out
        </button>
      </div>
    )
  }
}
