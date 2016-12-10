'use strict';

import React from 'react';

import BarShifts from './BarShifts';

import manager from './Manager.css';

var firebase = require("firebase");

export default class Manager extends React.Component{

  componentDidMount () {
    console.log("Manager auth: " + this.props.auth);
  }

  render () {

    let barShifts = this.props.barShifts;
    let barShiftsKeys = this.props.barShiftsKeys;
    let barList = this.props.barList;
    let fbdbRef = this.props.fbdbRef;

    return (
      <div className='manager'>
        <h2>Bar Schedule</h2>
        <BarShifts barShifts={barShifts}
        barShiftsKeys={barShiftsKeys}
        barList={barList}
        fbdbRef={fbdbRef} />
      </div>
    )
  }
}
