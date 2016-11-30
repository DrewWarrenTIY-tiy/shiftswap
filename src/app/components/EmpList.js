'use strict';

import React from 'react';

var firebase = require("firebase");


export default class EmpList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'open'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    console.log("dropdown value: " + this.state.value);
    event.preventDefault();
  }

  render () {

    function setEmpl(str) {
      console.log(str);
    }

    let emplData = this.props.emplData;

    return (
      <div className='empList'>
        <form onSubmit={this.handleSubmit}>
          <select className='dropDown' value={this.state.value} onChange={this.handleChange}>
            <option  value="open">open</option>
            {this.props.emplData.map(function(c,i,a) {
              return (
                  <option key={"Employee" + i} value={a[i]}>
                  {a[i]}
                </option>
              )
            })}
            <option value="none">none</option>
          </select>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }

}
