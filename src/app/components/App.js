"use strict";

import React from 'react';
import { BrowserRouter as Router, Link, Match, Miss } from 'react-router';

import Bar from './Bar';
import Header from './Header';
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

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      fbdbRef: fbdbRef
    }
  }

  render () {
    return (
      <Router>
        <div className="container">
          <Header />
          <Manager fbdbRef={this.state.fbdbRef}/>
          <Match pattern='/bar' component={Bar}/>
        </div>
      </Router>
    );
  }
}


// <Match exactly pattern='/' render={
//     (defaultProps) => <Manager fbdbRef={this.state.fbdbRef} {...defaultProps} />} />
