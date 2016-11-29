'use strict';

import React from 'react';

import manager from './Manager.css';

var firebase = require("firebase");

// Set the configuration for your app
var config = {
  apiKey: "AIzaSyDayn7zcog-05rzJNH6KeQyHTyttuzUT_8",
  authDomain: "shiftswapforsues.firebaseapp.com",
  databaseURL: "https://shiftswapforsues.firebaseio.com",
  storageBucket: "shiftswapforsues.appspot.com"
};
firebase.initializeApp(config);

// Get a reference to the database service
var fbdbRef = firebase.database().ref();
var fbdbTest = fbdbRef.child('test');

let data = [];

function displayData(val, key) {
  data.push(val)
}

export default class Manager extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      data: data
    }
  }
  componentWillMount () {
    fbdbTest.on("child_added", (snapshot) => {
      displayData(snapshot.val(), snapshot.key);
      this.setState({
        data: data
      });
    }).bind(this)
  }

  render () {
    return (
      <div className='manager'>
        <p>Data: {this.state.data}</p>
      </div>
    )
  }
}
