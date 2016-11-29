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
var fbdbEmpl = fbdbRef.child('employees');

let testdata = [];
let emplData = [];

function displayTestData(val, key) {
  testdata.push(val)
}

function displayEmplData(val, key) {
  emplData.push(val)
}

export default class Manager extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      testdata: testdata,
      emplData: emplData,
    }
  }
  componentWillMount () {
    fbdbTest.on("child_added", (snapshot) => {
      displayTestData(snapshot.val(), snapshot.key);
      this.setState({
        testdata: testdata
      });
    }).bind(this)
    fbdbEmpl.on("child_added", (snapshot) => {
      displayEmplData(snapshot.val(), snapshot.key);
      this.setState({
        emplData: emplData
      });
    }).bind(this)
  }

  render () {
    return (
      <div className='manager'>
        <p>Test Data: {this.state.testdata[0]}</p>
        <p>Empl Data: {this.state.emplData.join(", ")}</p>
      </div>
    )
  }
}
