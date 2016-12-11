'use strict';

import React from 'react';

var firebase = require("firebase");

export default class ServerList extends React.Component {
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

    let serverList = this.props.serverList;
    let fbdbRef = this.props.fbdbRef;

    return (
      <div className='serverList'>
        <select className='dropDown'
          value={this.state.value}
          onChange={this.onDropdownChange}>
          <option  value=" - "> - </option>
          {serverList.map((c,i,a) => {
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
