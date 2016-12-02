'use strict';

import React from 'react';

import EmpList from './EmpList';

var firebase = require("firebase");

export default class BarShift extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value,
      thisShift: this.props.thisShift,
    }

  }

  componentDidUpdate(nextProps, nextState) {
    console.log(this.props.thisShift + "  value(componentDidUpdate): " + this.state.value);
  }

  onHandleChange (val) {
    this.setState({
      value: val  
    });
    var updates = {};
    updates['/barshifts/' + this.props.thisShift] = val;
    return this.props.fbdbRef.update(updates);
  }

  render () {

    return (
      <div className="shift">
        <span>{this.props.thisShift}: {this.props.value}</span>
        <EmpList emplData={this.props.emplData}
          fbdbRef={this.props.fbdbRef}
          handleChange={this.onHandleChange.bind(this)}
          value={this.props.value}/>
      </div>
    )
  }

}
