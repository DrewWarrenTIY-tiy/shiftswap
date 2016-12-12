'use strict';

import React from 'react';

var firebase = require("firebase");

export default class DoorList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value,
    }
    this.onDropdownChange = this.onDropdownChange.bind(this);
   }

  onDropdownChange(event) {
    this.setState({
      value: event.target.value
    });
    this.props.handleChange(event.target.value)
  }

  render () {

    let doorList = this.props.doorList;
    let fbdbRef = this.props.fbdbRef;

    return (
      <div className='doorList'>
        <select className='dropDown'
          value={this.state.value}
          onChange={this.onDropdownChange}>
          <option  value=" - "> - </option>
          {doorList.map((c,i,a) => {
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
