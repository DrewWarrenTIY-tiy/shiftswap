'use strict';

import React from 'react';

import MgrServerShift from './MgrServerShift';

var firebase = require("firebase");

export default class MgrServerShifts extends React.Component {

  render () {

    let serverShifts = this.props.serverShifts;
    let serverShiftsKeys = this.props.serverShiftsKeys;
    let serverList = this.props.serverList;
    let fbdbRef = this.props.fbdbRef;

    return (
      <div className="serverShifts">
        {serverShifts.map(function(c,i,a) {
          return (
            <MgrServerShift key={"ServerShift" + i}
              serverList={serverList}
              fbdbRef={fbdbRef}
              thisShift={serverShiftsKeys[i]}
              value={a[i]} />
          )
        })}
      </div>
    )
  }

}
