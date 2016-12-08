"use strict";

import React from 'react';
import { BrowserRouter as Router, Link, Match, Miss } from 'react-router';

import Bar from './Bar';
import Header from './Header';
import Home from './Home';
import Manager from './Manager';

import container from './App.css';

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
var fbdbEmpl = fbdbRef.child('employees');
var fbdbBarShifts = fbdbRef.child('barshifts');

let barShifts = [];
let barShiftsKeys = [];
let emplData = [];

function displayEmplData(val, key) {
  emplData.push(val)
}

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      auth: false,
      barShifts: barShifts,
      barShiftsKeys: barShiftsKeys,
      emplData: emplData,
      fbdbRef: fbdbRef
    }
  }

  componentWillMount () {
    fbdbEmpl.on("child_added", (snapshot) => {
      displayEmplData(snapshot.val(), snapshot.key);
      this.setState({
        emplData: emplData
      });
    }).bind(this)
    const fbdbBarShiftsRef = this.state.fbdbRef.child('barshifts');
    //POPULATES OBJECT KEYS ARRAY
    fbdbBarShiftsRef.on('value', snapshot => {
      let barShiftsObj = snapshot.val();
      let barShiftsKeys = Object.keys(barShiftsObj);
      for (let i = 0; i < barShiftsKeys.length; i++) {
        barShiftsKeys[i] = barShiftsKeys[i];
      }
      this.setState({
        barShiftsKeys: barShiftsKeys
      });
    });
    //POPULATES OBJECT VALS ARRAY
    fbdbBarShiftsRef.on('value', snapshot => {
      let barShiftsObj = snapshot.val();
      let barShifts = Object.values(barShiftsObj);
      for (let i = 0; i < barShifts.length; i++) {
        barShifts[i] = barShifts[i];
      }
      this.setState({
        barShifts: barShifts
      });
    });
    // listen for firebase auth events at the top level, much easier to react to regardless of what route the user is in
    firebase.auth().onAuthStateChanged(firebaseUser => {
      console.log("onAuthStateChanged auth: " + this.state.auth);
      if (firebaseUser) {
        console.log('logged in');
        console.log(firebaseUser);
        this.handleAuthChange(true)
      } else {
        console.log('not logged in');
        this.handleAuthChange(false)
      }
    });
  }

  handleAuthChange (auth) {
    this.setState({ auth })
  }

  render () {

    return (
      <Router>
        <div className='container'>
          <Header />
          <Match
            exactly
            pattern="/"
            render={defaultProps => (
              <Home
                auth={this.state.auth}
                handleAuthChange={this.handleAuthChange}
                {...defaultProps}
              />
            )}
          />
          <Match
            pattern="/manager"
            render={defaultProps => (
              <Manager
                barShifts={this.state.barShifts}
                barShiftsKeys={this.state.barShiftsKeys}
                emplData={this.state.emplData}
                fbdbRef={this.state.fbdbRef} {...defaultProps}
              />
            )}
          />
          <Match
            pattern="/bar"
            render={defaultProps => (
              <Bar
                barShifts={this.state.barShifts}
                barShiftsKeys={this.state.barShiftsKeys}
                fbdbRef={this.state.fbdbRef} {...defaultProps}
              />
            )}
          />
        </div>
      </Router>
    )
  }
}
