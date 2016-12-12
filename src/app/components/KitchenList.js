'use strict';

import React from 'react';

var firebase = require("firebase");

export default class KitchenList extends React.Component {
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

    let kitchenList = this.props.kitchenList;
    let fbdbRef = this.props.fbdbRef;

    return (
      <div className='kitchenList'>
        <select className='dropDown'
          value={this.state.value}
          onChange={this.onDropdownChange}>
          <option  value=" - "> - </option>
          {kitchenList.map((c,i,a) => {
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
