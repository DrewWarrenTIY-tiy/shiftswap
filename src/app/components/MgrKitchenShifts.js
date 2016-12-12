'use strict';

import React from 'react';

import MgrKitchenShift from './MgrKitchenShift';

var firebase = require("firebase");

export default class MgrKitchenShifts extends React.Component {

  render () {

    let kitchenShifts = this.props.kitchenShifts;
    let kitchenShiftsKeys = this.props.kitchenShiftsKeys;
    let kitchenList = this.props.kitchenList;
    let fbdbRef = this.props.fbdbRef;

    return (
      <div className="kitchenShifts">
        {kitchenShifts.map(function(c,i,a) {
          return (
            <MgrKitchenShift key={"KitchenShift" + i}
              kitchenList={kitchenList}
              fbdbRef={fbdbRef}
              thisShift={kitchenShiftsKeys[i]}
              value={a[i]} />
          )
        })}
      </div>
    )
  }

}
