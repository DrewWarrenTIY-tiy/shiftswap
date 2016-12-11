'use strict';

import React from 'react';

import ServerShiftEmp from './ServerShiftEmp';

var firebase = require("firebase");

export default class ServerShiftsEmp extends React.Component {

  render () {

    let serverShifts = this.props.serverShifts;
    let serverShiftsKeys = this.props.serverShiftsKeys;
    let fbdbRef = this.props.fbdbRef;

    return (
      <div className="serverShiftsEmp">
        {serverShifts.map(function(c,i,a) {
          return (
            <ServerShiftEmp key={"ServerShift" + i}
              fbdbRef={fbdbRef}
              thisShift={serverShiftsKeys[i]}
              value={a[i]} />
          )
        })}
      </div>
    )
  }

}
