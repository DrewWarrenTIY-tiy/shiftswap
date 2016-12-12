'use strict';

import React from 'react';

import KitchenShiftEmp from './KitchenShiftEmp';

var firebase = require("firebase");

export default class KitchenShiftsEmp extends React.Component {

  render () {

    let kitchenShifts = this.props.kitchenShifts;
    let kitchenShiftsKeys = this.props.kitchenShiftsKeys;
    let fbdbRef = this.props.fbdbRef;

    return (
      <div className="kitchenShiftsEmp">
        {kitchenShifts.map(function(c,i,a) {
          return (
            <KitchenShiftEmp key={"KitchenShift" + i}
              fbdbRef={fbdbRef}
              thisShift={kitchenShiftsKeys[i]}
              value={a[i]} />
          )
        })}
      </div>
    )
  }

}
