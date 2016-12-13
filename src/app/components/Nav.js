'use strict';

import React from 'react';
import { Link } from 'react-router';
import classnames from 'classnames';

export default class Nav extends React.Component {
  render () {
    const { auth } = this.props;
    const { admin } = this.props;
    const { isBar } = this.props;
    const { isDoor } = this.props;
    const { isKitchen } = this.props;
    const { isServer } = this.props;
    return(
      <nav>
        <ul className="navBar">
          <li className={classnames("navItem", {
            hide: !admin
          })}><Link to='/manager'>Manager</Link></li>
          <li className={classnames("navItem", {
            hide: !isBar
          })}><Link to='/bar'>Bar</Link></li>
          <li className={classnames("navItem", {
              hide: !isDoor
            })}><Link to='/door'>Door</Link></li>
          <li className={classnames("navItem", {
              hide: !isKitchen
            })}><Link to='/kitchen'>Kitchen</Link></li>
          <li className={classnames("navItem", {
            hide: !isServer
          })}><Link to='/server'>Server</Link></li>
          <li><Link to='/'>Home</Link></li>
        </ul>
      </nav>
    );
  }
}
