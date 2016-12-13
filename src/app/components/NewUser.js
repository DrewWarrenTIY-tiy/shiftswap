'use strict';

import React from 'react';

var firebase = require("firebase");

const saveUser = (user) => {
  console.log("Beginning of SaveUser: ", user);
  return fbdbRef.child(`empTest/${user.uid}/`)
  .set({
    email: user.email,
    uid: user.uid
  })
  .then(() => user)
}

const auth = (email, password) => {
  console.log("Beginning of auth: ");
  return firebase.auth().createUserWithEmailAndPassword(email, password)
  .then(saveUser)
  .catch((error) => console.log('Oops', error))
}

export default class NewUser extends React.Component {

  addNewUser(e) {
    console.log(e);
    console.log("this: ", this);
    e.preventDefault()
    auth(this.email.value, this.password.value)
  }

  render () {
    return (
      <div className='newUser'>
        <form onSubmit={this.addNewUser.bind(this)}>
          <label>Email</label>
          <input
            className="newEmail"
            id="email"
            type="text"
            ref={(email) => { this.email = email }}
            placeholder="email"/>
          <input
            className="newPass"
            id="pw"
            type="text"
            ref={(password) => { this.password = password }}
            placeholder="password"/>
          <button type="submit">Add New Employee</button>
        </form>
      </div>
    )
  }
}
