'use strict';

import React from 'react';

import BarShifts from './BarShifts';
import MgrDoorShifts from './MgrDoorShifts';
import MgrKitchenShifts from './MgrKitchenShifts';
import MgrServerShifts from './MgrServerShifts';
import NewUser from './NewUser';

var firebase = require("firebase");

export default class Manager extends React.Component{

  componentDidMount () {
    console.log("Manager auth: " + this.props.auth);
  }

  render () {

    let barShifts = this.props.barShifts;
    let barShiftsKeys = this.props.barShiftsKeys;
    let barList = this.props.barList;
    let doorShifts = this.props.doorShifts;
    let doorShiftsKeys = this.props.doorShiftsKeys;
    let doorList = this.props.doorList;
    let fbdbRef = this.props.fbdbRef;
    let fbdbRefTwo = this.props.fbdbRefTwo;
    let kitchenShifts = this.props.kitchenShifts;
    let kitchenShiftsKeys = this.props.kitchenShiftsKeys;
    let kitchenList = this.props.kitchenList;
    let secondaryApp = this.props.secondaryApp;
    let serverShifts = this.props.serverShifts;
    let serverShiftsKeys = this.props.serverShiftsKeys;
    let serverList = this.props.serverList;

    return (
      <div className='bodyRoute manager'>
        <h2>Bar Schedule</h2>
        <BarShifts barShifts={barShifts}
        barShiftsKeys={barShiftsKeys}
        barList={barList}
        fbdbRef={fbdbRef} />
        <h2>Door Schedule</h2>
        <MgrDoorShifts doorShifts={doorShifts}
          doorShiftsKeys={doorShiftsKeys}
          doorList={doorList}
          fbdbRef={fbdbRef} />
        <h2>Kitchen Schedule</h2>
        <MgrKitchenShifts kitchenShifts={kitchenShifts}
          kitchenShiftsKeys={kitchenShiftsKeys}
          kitchenList={kitchenList}
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
