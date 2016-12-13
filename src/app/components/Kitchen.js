'use strict';

import React from 'react';

import KitchenShiftsEmp from './KitchenShiftsEmp';

var firebase = require("firebase");

export default class Kitchen extends React.Component{

  render () {

    let kitchenShifts = this.props.kitchenShifts;
    let kitchenShiftsKeys = this.props.kitchenShiftsKeys;
    let fbdbRef = this.props.fbdbRef;

    return (
      <div className='kitchen'>
        <h2>Kitchen Schedule</h2>
        <KitchenShiftsEmp kitchenShifts={kitchenShifts}
        kitchenShiftsKeys={kitchenShiftsKeys}
        fbdbRef={fbdbRef} />
      </div>
    )
  }
}
