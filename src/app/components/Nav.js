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
        <div className="navBar">
          <button className={classnames("navItem", {
            hide: !admin
          })}><Link to='/manager'>Manager</Link></button>
        <button className={classnames("navItem", {
            hide: !isBar
          })}><Link to='/bar'>Bar</Link></button>
        <button className={classnames("navItem", {
              hide: !isDoor
            })}><Link to='/door'>Door</Link></button>
          <button className={classnames("navItem", {
              hide: !isKitchen
            })}><Link to='/kitchen'>Kitchen</Link></button>
          <button className={classnames("navItem", {
            hide: !isServer
          })}><Link to='/server'>Server</Link></button>
        <button className="navItem"><Link to='/'>Home</Link></button>
        </div>
      </nav>
    );
  }
}
