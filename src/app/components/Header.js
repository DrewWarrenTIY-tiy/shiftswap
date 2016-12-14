'use strict';

import React from 'react';
import { Link } from 'react-router';

import Nav from './Nav';

export default class Header extends React.Component {
  render () {
    return(
      <header>
        <Link to='/'>
          <img className="logo" src="./app/img/ShiftSwapIcon.png" alt="ss-logo"/>
        </Link>
        <Nav
          auth={this.props.auth}
          admin={this.props.admin}
          isBar={this.props.isBar}
          isDoor={this.props.isDoor}
          isKitchen={this.props.isKitchen}
          isServer={this.props.isServer}
        />
      </header>
    );
  }
}
