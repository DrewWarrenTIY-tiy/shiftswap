'use strict';

import React from 'react';

import DoorList from './DoorList';

var firebase = require("firebase");

export default class MgrDoorShift extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fbdbRef: this.props.fbdbRef,
      thisShift: this.props.thisShift,
      value: this.props.value,
    }

  }

  onHandleChange (val) {
    this.setState({
      value: val
    });
    var updates = {};
    updates['/doorshifts/' + this.props.thisShift] = val;
    return this.state.fbdbRef.update(updates);
  }

  render () {

    let slicedShifts = this.props.thisShift.slice(2);

    return (
      <div className="shift">
        <span>{slicedShifts}: <br /> {this.state.value}</span>
        <DoorList doorList={this.props.doorList}
          fbdbRef={this.props.fbdbRef}
          handleChange={this.onHandleChange.bind(this)}
          value={this.props.value}/>
        <br />
      </div>
    )
  }

}
