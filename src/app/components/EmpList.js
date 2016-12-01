'use strict';

import React from 'react';

var firebase = require("firebase");

export default class EmpList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value
    }

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidUpdate(nextProps, nextState) {
    console.log("dropdown value(componentDidUpdate): " + this.state.value);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  render () {

    let emplData = this.props.emplData;
    let fbdbRef = this.props.fbdbRef;

    return (
      <div className='empList'>
        <select className='dropDown' value={this.state.value} onChange={this.handleChange}>
          <option  value="open">open</option>
          {emplData.map((c,i,a) => {
            return <option
               key={"Employee" + i}
               value={a[i]}>
                {a[i]}
              </option>
          })}
          <option value="none">none</option>
        </select>
      </div>
    )
  }

}
