'use strict';

import React from 'react';

import Nav from './Nav';

import header from './Header.css';

export default class Header extends React.Component {
  render () {
    return(
      <header>
        <img className="logo" src="./app/img/ShiftSwapIcon.png" alt="ss-logo"/>
        <Nav
          auth={this.props.auth}
          admin={this.props.admin}
          isBar={this.props.isBar}
        />
      </header>
    );
  }
}
