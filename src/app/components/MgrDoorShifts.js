'use strict';

import React from 'react';

import MgrDoorShift from './MgrDoorShift';

var firebase = require("firebase");

export default class MgrDoorShifts extends React.Component {

  render () {

    let doorShifts = this.props.doorShifts;
    let doorShiftsKeys = this.props.doorShiftsKeys;
    let doorList = this.props.doorList;
    let fbdbRef = this.props.fbdbRef;

    return (
      <div className="doorShifts">
        {doorShifts.map(function(c,i,a) {
          return (
            <MgrDoorShift key={"DoorShift" + i}
              doorList={doorList}
              fbdbRef={fbdbRef}
              thisShift={doorShiftsKeys[i]}
              value={a[i]} />
          )
        })}
      </div>
    )
  }

}
