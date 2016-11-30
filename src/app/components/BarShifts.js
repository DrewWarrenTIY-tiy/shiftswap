'use strict';

import React from 'react';

import EmpList from './EmpList';

var firebase = require("firebase");

export default class BarShifts extends React.Component {

  render () {

    let barShifts = this.props.barShifts;

    return (
      <div className="barShifts">
         <p className="">Mon AM: {this.props.barShifts[0]} <EmpList emplData={this.props.emplData} /></p>
         <p>Tues AM: {this.props.barShifts[1]}</p>
         <p>Wed AM: {this.props.barShifts[2]}</p>
         <p>Thurs AM: {this.props.barShifts[3]}</p>
         <p>Fri AM: {this.props.barShifts[4]}</p>
         <p>Sat AM: {this.props.barShifts[5]}</p>
         <p>Sun AM: {this.props.barShifts[6]}</p>
      </div>
    )
  }

}
