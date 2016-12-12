'use strict';

import React from 'react';

import DoorShiftEmp from './DoorShiftEmp';

var firebase = require("firebase");

export default class DoorShiftsEmp extends React.Component {

  render () {

    let doorShifts = this.props.doorShifts;
    let doorShiftsKeys = this.props.doorShiftsKeys;
    let fbdbRef = this.props.fbdbRef;

    return (
      <div className="doorShiftsEmp">
        {doorShifts.map(function(c,i,a) {
          return (
            <DoorShiftEmp key={"DoorShift" + i}
              fbdbRef={fbdbRef}
              thisShift={doorShiftsKeys[i]}
              value={a[i]} />
          )
        })}
      </div>
    )
  }

}
