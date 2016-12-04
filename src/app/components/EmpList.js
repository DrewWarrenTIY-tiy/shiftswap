'use strict';

import React from 'react';

var firebase = require("firebase");

export default class EmpList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value,
    }

    this.onDropdownChange = this.onDropdownChange.bind(this);
   }

  componentDidUpdate(nextProps, nextState) {
    console.log("dropdown value(componentDidUpdate): " + this.state.value);
  }

  onDropdownChange(event) {
    this.setState({
      value: event.target.value
    });
    this.props.handleChange(event.target.value)
  }

  render () {

    let emplData = this.props.emplData;
    let fbdbRef = this.props.fbdbRef;

    return (
      <div className='empList'>
        <select className='dropDown'
          value={this.state.value}
          onChange={this.onDropdownChange}>
          <option  value=" - "> - </option>
          {emplData.map((c,i,a) => {
            return <option
               key={"Employee" + i}
               value={a[i]}>
                {a[i]}
              </option>
          })}
        </select>
      </div>
    )
  }

}
