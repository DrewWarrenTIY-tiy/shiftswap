'use strict';

import React from 'react';

import EmpList from './EmpList';

var firebase = require("firebase");

export default class BarShifts extends React.Component {

  render () {

    let barShifts = this.props.barShifts;
    let barShiftKeys = Object.keys(barShifts);
    let emplData = this.props.emplData;

    return (
      <div className="barShifts">
        {barShifts.map(function(c,i,a) {
          return (
            <div className="shift" key={"BarShift" + i}>
              <span>{barShiftKeys[i]}: {a[i]}</span>
              <EmpList emplData={emplData} />
            </div>
          )
        })}
      </div>
    )
  }

}
