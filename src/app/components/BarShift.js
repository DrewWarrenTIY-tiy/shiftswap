'use strict';

import React from 'react';

import EmpList from './EmpList';

var firebase = require("firebase");

export default class BarShift extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value,
    }

  }

  componentDidUpdate(nextProps, nextState) {
    console.log("BarShift value(componentDidUpdate): " + this.state.value);
  }

  onHandleChange (val) {
    this.setState({
      value: val
    });
  }

  render () {

    let emplData = this.props.emplData;
    let fbdbRef = this.props.fbdbRef;

    return (
      <div className="shift">
        <span>{this.props.shift}: {this.props.value}</span>
        <EmpList emplData={emplData}
          fbdbRef={fbdbRef}
          handleChange={this.onHandleChange.bind(this)}
          value={this.props.value}/>
      </div>
    )
  }

}
