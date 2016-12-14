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
    }
    resetForm () {
      this.setState({
        email: '',
        password: ''
      })
    }

  render () {
    const { auth } = this.props;

    return (
      <div className="home">
        <h1>Home</h1>
        <form
          className="loginForm"
          onSubmit={this.login.bind(this)}
          >
          <input
            id="email"
            tabIndex={1}
            className={classnames("input", {
              hide: auth
            })}
            type="email"
            placeholder="Email"
            onChange={e => this.setState({email: e.target.value})}
          />
          <br/>
          <input
            id="password"
            tabIndex={2}
            className={classnames("input", {
              hide: auth
            })}
            type="password"
            placeholder="Password"
            onChange={e => this.setState({password: e.target.value})}
          />
        <br />
          <button
            type='submit'
            tabIndex={3}
            className={classnames("homeBtn btn-action", {
              hide: auth
            })}
          >
            Log In
          </button>
        </form>
        <h2 className={classnames("welcome", {
            hide: !auth
          })}>Welcome!</h2>
       <button
         onClick={this.logout.bind(this)}
         className={classnames("homeBtn btn-action btnLogout", {
           hide: !auth
         })}
       >
         Log Out
       </button>
      </div>
    )
  }
}
