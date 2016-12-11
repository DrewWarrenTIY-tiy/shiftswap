'use strict';

import React from 'react';

var firebase = require("firebase");

export default class ServerShiftEmp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fbdbRef: this.props.fbdbRef,
      thisShift: this.props.thisShift,
      value: this.props.value,
    }

  }

  render () {

    let slicedShifts = this.props.thisShift.slice(2);

    return (
      <div className="shift">
        <span>{slicedShifts}: <br /> {this.state.value}</span>
        <br />
      </div>
    )
  }

}
