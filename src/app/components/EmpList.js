'use strict';

import React from 'react';

var firebase = require("firebase");

export default class EmpList extends React.Component {

  render () {

    let emplData = this.props.emplData;

    return (
      <div className='empList'>
        <select className='dropDown'>
          <option value="blank"></option>
          {this.props.emplData.map(function(c,i,a) {
            return (
              <option key={"Employee" + i} value={a[i]}>
                {a[i]}
              </option>
            )
          })}
        </select>
      </div>
    )
  }

}
