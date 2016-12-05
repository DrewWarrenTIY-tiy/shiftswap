'use strict';

import React from 'react';

import navBar from './Nav.css'

export default class Nav extends React.Component {
  render () {
    return(
      <nav>
        <ul className="navBar">
          <li><a href='#'>Home</a></li>
          <li><a href='#'>About</a></li>
          <li><a href='#'>Contact</a></li>
        </ul>
      </nav>
    );
  }
}
