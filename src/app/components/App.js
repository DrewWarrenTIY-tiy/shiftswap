"use strict";

import React from 'react';
import { BrowserRouter as Router, Link, Match, Miss } from 'react-router';

import Bar from './Bar';
import Header from './Header';
import Home from './Home';
import Manager from './Manager';
import Server from './Server';

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
var fbdbBarShifts = fbdbRef.child('barshifts');
var fbdbServerShifts = fbdbRef.child('servshifts');
var fbdbEmpl = fbdbRef.child('employees');
var fbdbUsers = fbdbRef.child('empTest');

let barList = [];
let barShifts = [];
let barShiftsKeys = [];
let emplData = [];
let serverList = [];
let serverShifts = [];
let serverShiftsKeys = [];

function addToBarList(val, key) {
  if (val.isBar == true) {
    barList.push(val.name)
    barList.sort()
  }
}

function addToServerList(val, key) {
  if (val.isServer == true) {
    serverList.push(val.name)
    serverList.sort()
  }
}

function displayEmplData(val, key) {
  emplData.push(val)
}

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      admin: false,
      auth: false,
      barList: barList,
      barShifts: barShifts,
      barShiftsKeys: barShiftsKeys,
      fbdbRef: fbdbRef,
      name: "",
      serverList: serverList,
      serverShifts: serverShifts,
      serverShiftsKeys: serverShiftsKeys,
      uid: "",
    }
  }

  componentWillMount () {
    fbdbUsers.on("child_added", (snapshot) => {
      addToBarList(snapshot.val(), snapshot.key);
      this.setState({
        barList: barList
      });
    }).bind(this)
    fbdbUsers.on("child_added", (snapshot) => {
      addToServerList(snapshot.val(), snapshot.key);
      this.setState({
        serverList: serverList
      });
    }).bind(this)
    const fbdbBarShiftsRef = this.state.fbdbRef.child('barshifts');
    const fbdbServerShiftsRef = this.state.fbdbRef.child('servshifts');
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
    fbdbServerShiftsRef.on('value', snapshot => {
      let serverShiftsObj = snapshot.val();
      let serverShiftsKeys = Object.keys(serverShiftsObj);
      for (let i = 0; i < serverShiftsKeys.length; i++) {
        serverShiftsKeys[i] = serverShiftsKeys[i];
      }
      this.setState({
        serverShiftsKeys: serverShiftsKeys
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
    fbdbServerShiftsRef.on('value', snapshot => {
      let serverShiftsObj = snapshot.val();
      let serverShifts = Object.values(serverShiftsObj);
      for (let i = 0; i < serverShifts.length; i++) {
        serverShifts[i] = serverShifts[i];
      }
      this.setState({
        serverShifts: serverShifts
      });
    });
    // listen for firebase auth events at the top level
    firebase.auth().onAuthStateChanged(firebaseUser => {
      if (firebaseUser) {
        console.log('logged in');
        console.log(firebaseUser);
        this.handleAuthChange(true)
        let empTest = this.state.fbdbRef.child('empTest').child(firebaseUser.uid).on('value', (snapshot) => {
          const user = snapshot.val();
          this.handleAdmin(user.isAdmin)
          this.handleUID(user.uid)
          this.handleName(user.name)
          this.handleBar(user.isBar)
          this.handleDoor(user.isDoor)
          this.handleKitchen(user.isKitchen)
          this.handleServer(user.isServer)
        });
      } else {
        console.log('not logged in');
        this.handleAuthChange(false)
      }
    });
  }

  handleAdmin (admin) {
    this.setState({ admin })
  }

  handleName (name) {
    this.setState({ name })
  }

  handleAuthChange (auth) {
    this.setState({ auth })
  }

  handleUID (uid) {
    this.setState({ uid })
  }

  handleBar (isBar) {
    this.setState({ isBar })
  }

  handleKitchen (isKitchen) {
    this.setState({ isKitchen })
  }

  handleDoor (isDoor) {
    this.setState({ isDoor })
  }

  handleServer (isServer) {
    this.setState({ isServer })
  }

  render () {

    return (
      <Router>
        <div className='container'>
          <Header
            auth={this.state.auth}
            admin={this.state.admin}
            isBar={this.state.isBar}
            isServer={this.state.isServer}
          />
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
                auth={this.state.auth}
                barList={this.state.barList}
                barShifts={this.state.barShifts}
                barShiftsKeys={this.state.barShiftsKeys}
                fbdbRef={this.state.fbdbRef}
                serverList={this.state.serverList}
                serverShifts={this.state.serverShifts}
                serverShiftsKeys={this.state.serverShiftsKeys} {...defaultProps}
              />
            )}
          />
          <Match
            pattern="/bar"
            render={defaultProps => (
              <Bar
                auth={this.state.auth}
                barShifts={this.state.barShifts}
                barShiftsKeys={this.state.barShiftsKeys}
                fbdbRef={this.state.fbdbRef} {...defaultProps}
              />
            )}
          />
          <Match
            pattern="/server"
            render={defaultProps => (
              <Server
                auth={this.state.auth}
                serverShifts={this.state.serverShifts}
                serverShiftsKeys={this.state.serverShiftsKeys}
                fbdbRef={this.state.fbdbRef} {...defaultProps}
              />
            )}
          />
        </div>
      </Router>
    )
  }
}
