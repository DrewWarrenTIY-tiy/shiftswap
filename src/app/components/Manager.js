'use strict';

import React from 'react';

import BarShifts from './BarShifts';
import MgrServerShifts from './MgrServerShifts'

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
    let serverShifts = this.props.serverShifts;
    let serverShiftsKeys = this.props.serverShiftsKeys;
    let serverList = this.props.serverList;

    return (
      <div className='manager'>
        <h2>Bar Schedule</h2>
        <BarShifts barShifts={barShifts}
        barShiftsKeys={barShiftsKeys}
        barList={barList}
        fbdbRef={fbdbRef} />
        <h2>Server Schedule</h2>
        <MgrServerShifts serverShifts={serverShifts}
        serverShiftsKeys={serverShiftsKeys}
        serverList={serverList}
        fbdbRef={fbdbRef} />
      </div>
    )
  }
}
