'use strict';

import React from 'react';

var firebase = require("firebase");

export default class EmpList extends React.Component {

  render () {

    let emplData = this.props.emplData;

    return (
      <div className='empList'>
        <p> empList: {this.props.emplData.join(", ")}</p>
      </div>
    )
  }

}
