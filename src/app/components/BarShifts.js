'use strict';

import React from 'react';

import EmpList from './EmpList';

var firebase = require("firebase");

export default class BarShifts extends React.Component {

  render () {

    let barShifts = this.props.barShifts;
    let barShiftsKeys = this.props.barShiftsKeys;
    let emplData = this.props.emplData;

    return (
      <div className="barShifts">
        {barShifts.map(function(c,i,a) {
          return (
            <div className="shift" key={"BarShift" + i}>
              <span>{barShiftsKeys[i]}: {a[i]}</span>
              <EmpList emplData={emplData} />
            </div>
          )
        })}
      </div>
    )
  }

}
