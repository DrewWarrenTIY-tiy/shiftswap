'use strict';

import React from 'react';

import BarShift from './BarShift';

var firebase = require("firebase");

export default class BarShifts extends React.Component {

  render () {

    let barShifts = this.props.barShifts;
    let barShiftsKeys = this.props.barShiftsKeys;
    let barList = this.props.barList;
    let fbdbRef = this.props.fbdbRef;

    return (
      <div className="barShifts">
        {barShifts.map(function(c,i,a) {
          return (
            <BarShift key={"BarShift" + i}
              barList={barList}
              fbdbRef={fbdbRef}
              thisShift={barShiftsKeys[i]}
              value={a[i]} />
          )
        })}
      </div>
    )
  }

}
