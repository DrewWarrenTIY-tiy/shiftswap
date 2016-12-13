'use strict';

import React from 'react';

import DoorShiftsEmp from './DoorShiftsEmp';

import manager from './Manager.css';

var firebase = require("firebase");

export default class Door extends React.Component{

  render () {

    let doorShifts = this.props.doorShifts;
    let doorShiftsKeys = this.props.doorShiftsKeys;
    let fbdbRef = this.props.fbdbRef;

    return (
      <div className='door'>
        <h2>Door Schedule</h2>
        <DoorShiftsEmp doorShifts={doorShifts}
        doorShiftsKeys={doorShiftsKeys}
        fbdbRef={fbdbRef} />
      </div>
    )
  }
}
