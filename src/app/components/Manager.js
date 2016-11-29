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
var database = firebase.database();

export default class Manager extends React.Component{

  render () {
    return (
      <div className='manager'>
        <p>Data: </p>
      </div>
    )
  }
}

// {database.ref().child("test")}   LINE 26
