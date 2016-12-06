'use strict';

import React from 'react';

import BarShiftsEmp from './BarShiftsEmp';
import EmpList from './EmpList';

import manager from './Manager.css';

var firebase = require("firebase");

export default class Bar extends React.Component{

  render () {

    let barShifts = this.props.barShifts;
    let barShiftsKeys = this.props.barShiftsKeys;
    let emplData = this.props.emplData;
    let fbdbRef = this.props.fbdbRef;

    return (
      <div className='manager'>
        <BarShiftsEmp barShifts={barShifts}
        barShiftsKeys={barShiftsKeys}
        emplData={emplData}
        fbdbRef={fbdbRef} />
      </div>
    )
  }
}
