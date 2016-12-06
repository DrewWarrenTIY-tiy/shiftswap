'use strict';

import React from 'react';

import BarShifts from './BarShifts';
import EmpList from './EmpList';

import manager from './Manager.css';

var firebase = require("firebase");

export default class Manager extends React.Component{

  render () {

    let barShifts = this.props.barShifts;
    let barShiftsKeys = this.props.barShiftsKeys;
    let emplData = this.props.emplData;
    let fbdbRef = this.props.fbdbRef;

    return (
      <div className='manager'>
        <BarShifts barShifts={barShifts}
        barShiftsKeys={barShiftsKeys}
        emplData={emplData}
        fbdbRef={fbdbRef} />
      </div>
    )
  }
}
