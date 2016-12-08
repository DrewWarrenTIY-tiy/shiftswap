'use strict';

import React from 'react';
import { Link } from 'react-router';
import classnames from 'classnames';

import navBar from './Nav.css'

export default class Nav extends React.Component {
  render () {
    const { auth } = this.props;
    console.log("Nav props: " + this.props.auth);
    return(
      <nav>
        <ul className="navBar">
          <li className={classnames("navItem", {
            hide: !auth
          })}><Link to='/manager'>Manager</Link></li>
          <li className={classnames("navItem", {
            hide: !auth
          })}><Link to='/bar'>Bar</Link></li>
          <li><Link to='/'>Home</Link></li>
        </ul>
      </nav>
    );
  }
}
