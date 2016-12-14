'use strict';

import React from 'react';

import ServerShiftsEmp from './ServerShiftsEmp';

var firebase = require("firebase");

export default class Server extends React.Component{

  render () {

    let serverShifts = this.props.serverShifts;
    let serverShiftsKeys = this.props.serverShiftsKeys;
    let fbdbRef = this.props.fbdbRef;

    return (
      <div className='bodyRoute server'>
        <h2>Server Schedule</h2>
        <ServerShiftsEmp serverShifts={serverShifts}
        serverShiftsKeys={serverShiftsKeys}
        fbdbRef={fbdbRef} />
      </div>
    )
  }
}
