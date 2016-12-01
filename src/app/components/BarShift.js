'use strict';

import React from 'react';

import EmpList from './EmpList';

var firebase = require("firebase");

export default class BarShift extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value
    }

  }

  render () {

    let emplData = this.props.emplData;
    let fbdbRef = this.props.fbdbRef;

    return (
      <div className="shift">
        <span>{this.props.shift}: {this.props.value}</span>
        <EmpList emplData={emplData}
          value={this.props.value}
          fbdbRef={fbdbRef} />
      </div>
    )
  }

}
