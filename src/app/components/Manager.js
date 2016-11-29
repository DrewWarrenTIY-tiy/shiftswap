'use strict';

import React from 'react';

import BarShifts from './BarShifts';
import EmpList from './EmpList';

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
var fbdbBarShifts = fbdbRef.child('barshifts');

let testdata = [];
let emplData = [];
let barShifts = [];

function displayTestData(val, key) {
  testdata.push(val)
}

function displayEmplData(val, key) {
  emplData.push(val)
}

function displayBarShifts(val, key) {
  barShifts.push(val)
}

export default class Manager extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      testdata: testdata,
      emplData: emplData,
      barShifts: barShifts,
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
    fbdbBarShifts.on("child_added", (snapshot) => {
      displayBarShifts(snapshot.val(), snapshot.key);
      this.setState({
        barShifts: barShifts
      });
    }).bind(this)
  }

  render () {
    return (
      <div className='manager'>
        <p>Test Data: {this.state.testdata[0]}</p>
        <p>Empl Data from state: {this.state.emplData.join(", ")}</p>
        <p>Bar Shifts from state: {this.state.barShifts.join(", ")}</p>
        <p>Drop down menu from EmpList.js</p>
        <EmpList emplData={this.state.emplData} />
        <BarShifts barShifts={this.state.barShifts} />
      </div>
    )
  }
}
