'use strict';

import React from 'react';
import { Link } from 'react-router';

import navBar from './Nav.css'

export default class Nav extends React.Component {
  render () {
    return(
      <nav>
        <ul className="navBar">
          <li><Link to='/manager'>Manager</Link></li>
          <li><Link to='/bar'>Bar</Link></li>
          <li><Link to='/'>Home</Link></li>
        </ul>
      </nav>
    );
  }
}
