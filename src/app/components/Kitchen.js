'use strict';

import React from 'react';

import KitchenShiftsEmp from './KitchenShiftsEmp';

import manager from './Manager.css';

var firebase = require("firebase");

export default class Kitchen extends React.Component{

  render () {

    let kitchenShifts = this.props.kitchenShifts;
    let kitchenShiftsKeys = this.props.kitchenShiftsKeys;
    let fbdbRef = this.props.fbdbRef;

    return (
      <div className='manager'>
        <h2>Kitchen Schedule</h2>
        <KitchenShiftsEmp kitchenShifts={kitchenShifts}
        kitchenShiftsKeys={kitchenShiftsKeys}
        fbdbRef={fbdbRef} />
      </div>
    )
  }
}
