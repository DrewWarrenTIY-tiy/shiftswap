'use strict';

import React from 'react';
import { Link } from 'react-router';
import classnames from 'classnames';

import navBar from './Nav.css'

export default class Nav extends React.Component {
  render () {
    const { auth } = this.props;
    const { admin } = this.props;
    return(
      <nav>
        <ul className="navBar">
          <li className={classnames("navItem", {
            hide: !admin
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
