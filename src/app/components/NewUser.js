'use strict';

import React from 'react';

var firebase = require("firebase");

export default class NewUser extends React.Component {

  saveUser(user) {
    return fbdbRef.child(`empTest/${user.uid}/`)
    .set({
      email: user.email,
      uid: user.uid
    })
    .then(() => user)
  }

  auth(email, password) {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(saveUser)
    .catch((error) => console.log('Oops', error))
  }

  addNewUser(e) {
    e.preventDefault()
    auth(this.email.value, this.password.value)
  }

  render () {
    return (
      <div className='newUser'>
        <form onSubmit={this.addNewUser}>
          <label>Email</label>
          <input className="newEmail" ref={(email) => this.email = email} placeholder="email"/>
          <input className="newPass" ref={(password) => this.password = password} placeholder="password"/>
          <button type="submit">Add New Employee</button>
        </form>
      </div>
    )
  }
}
