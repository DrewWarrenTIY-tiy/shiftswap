'use strict';

import React from 'react';

import BarShiftEmp from './BarShiftEmp';

var firebase = require("firebase");

export default class BarShifts extends React.Component {

  render () {

    let barShifts = this.props.barShifts;
    let barShiftsKeys = this.props.barShiftsKeys;
    let fbdbRef = this.props.fbdbRef;

    return (
      <div className="barShiftsEmp">
        {barShifts.map(function(c,i,a) {
          return (
            <BarShiftEmp key={"BarShift" + i}
              fbdbRef={fbdbRef}
              thisShift={barShiftsKeys[i]}
              value={a[i]} />
          )
        })}
      </div>
    )
  }

}
