"use strict";

import React from 'react';
import { BrowserRouter as Router, Link, Match, Miss } from 'react-router';

import Bar from './Bar';
import Door from './Door';
import Header from './Header';
import Home from './Home';
import Kitchen from './Kitchen';
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
var fbdbDoorShifts = fbdbRef.child('doorshifts');
var fbdbKitchenShifts = fbdbRef.child('kitchenshifts');
var fbdbServerShifts = fbdbRef.child('servshifts');
var fbdbUsers = fbdbRef.child('empTest');

let barList = [];
let barShifts = [];
let barShiftsKeys = [];
let doorList = [];
let doorShifts = [];
let doorShiftsKeys = [];
let kitchenList = [];
let kitchenShifts = [];
let kitchenShiftsKeys = [];
let serverList = [];
let serverShifts = [];
let serverShiftsKeys = [];

function addToBarList(val, key) {
  if (val.isBar == true) {
    barList.push(val.name)
    barList.sort()
  }
}

function addToDoorList(val, key) {
  if (val.isDoor == true) {
    doorList.push(val.name)
    doorList.sort()
  }
}

function addToKitchenList(val, key) {
  if (val.isKitchen == true) {
    kitchenList.push(val.name)
    kitchenList.sort()
  }
}

function addToServerList(val, key) {
  if (val.isServer == true) {
    serverList.push(val.name)
    serverList.sort()
  }
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
      doorList: doorList,
      doorShifts: doorShifts,
      doorShiftsKeys: doorShiftsKeys,
      kitchenList: kitchenList,
      kitchenShifts: kitchenShifts,
      kitchenShiftsKeys: kitchenShiftsKeys,
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
    fbdbUsers.on("child_added", (snapshot) => {
      addToDoorList(snapshot.val(), snapshot.key);
      this.setState({
        doorList: doorList
      });
    }).bind(this)
    fbdbUsers.on("child_added", (snapshot) => {
      addToKitchenList(snapshot.val(), snapshot.key);
      this.setState({
        kitchenList: kitchenList
      });
    }).bind(this)
    const fbdbBarShiftsRef = this.state.fbdbRef.child('barshifts');
    const fbdbDoorShiftsRef = this.state.fbdbRef.child('doorshifts');
    const fbdbKitchenShiftsRef = this.state.fbdbRef.child('kitchenshifts');
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
    fbdbDoorShiftsRef.on('value', snapshot => {
      let doorShiftsObj = snapshot.val();
      let doorShiftsKeys = Object.keys(doorShiftsObj);
      for (let i = 0; i < doorShiftsKeys.length; i++) {
        doorShiftsKeys[i] = doorShiftsKeys[i];
      }
      this.setState({
        doorShiftsKeys: doorShiftsKeys
      });
    });
    fbdbKitchenShiftsRef.on('value', snapshot => {
      let kitchenShiftsObj = snapshot.val();
      let kitchenShiftsKeys = Object.keys(kitchenShiftsObj);
      for (let i = 0; i < kitchenShiftsKeys.length; i++) {
        kitchenShiftsKeys[i] = kitchenShiftsKeys[i];
      }
      this.setState({
        kitchenShiftsKeys: kitchenShiftsKeys
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
    fbdbDoorShiftsRef.on('value', snapshot => {
      let doorShiftsObj = snapshot.val();
      let doorShifts = Object.values(doorShiftsObj);
      for (let i = 0; i < doorShifts.length; i++) {
        doorShifts[i] = doorShifts[i];
      }
      this.setState({
        doorShifts: doorShifts
      });
    });
    fbdbKitchenShiftsRef.on('value', snapshot => {
      let kitchenShiftsObj = snapshot.val();
      let kitchenShifts = Object.values(kitchenShiftsObj);
      for (let i = 0; i < kitchenShifts.length; i++) {
        kitchenShifts[i] = kitchenShifts[i];
      }
      this.setState({
        kitchenShifts: kitchenShifts
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
            isDoor={this.state.isDoor}
            isKitchen={this.state.isKitchen}
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
                kitchenList={this.state.kitchenList}
                kitchenShifts={this.state.kitchenShifts}
                kitchenShiftsKeys={this.state.kitchenShiftsKeys}
                serverList={this.state.serverList}
                serverShifts={this.state.serverShifts}
                serverShiftsKeys={this.state.serverShiftsKeys}
                doorList={this.state.doorList}
                doorShifts={this.state.doorShifts}
                doorShiftsKeys={this.state.doorShiftsKeys} {...defaultProps}
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
            pattern="/door"
            render={defaultProps => (
              <Door
                auth={this.state.auth}
                doorShifts={this.state.doorShifts}
                doorShiftsKeys={this.state.doorShiftsKeys}
                fbdbRef={this.state.fbdbRef} {...defaultProps}
              />
            )}
          />
          <Match
            pattern="/kitchen"
            render={defaultProps => (
              <Kitchen
                auth={this.state.auth}
                kitchenShifts={this.state.kitchenShifts}
                kitchenShiftsKeys={this.state.kitchenShiftsKeys}
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
