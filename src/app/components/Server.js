'use strict';

import React from 'react';

import ServerShiftsEmp from './ServerShiftsEmp';

import manager from './Manager.css';

var firebase = require("firebase");

export default class Server extends React.Component{

  render () {

    let serverShifts = this.props.serverShifts;
    let serverShiftsKeys = this.props.serverShiftsKeys;
    let emplData = this.props.emplData;
    let fbdbRef = this.props.fbdbRef;

    return (
      <div className='server'>
        <h2>Server Schedule</h2>
        <ServerShiftsEmp serverShifts={serverShifts}
        serverShiftsKeys={serverShiftsKeys}
        emplData={emplData}
        fbdbRef={fbdbRef} />
      </div>
    )
  }
}
