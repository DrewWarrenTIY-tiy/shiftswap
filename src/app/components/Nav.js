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
          <Link to='/manager'><button className={classnames("navItem", {
            hide: !admin
          })}>Manager</button></Link>
        <Link to='/bar'><button className={classnames("navItem", {
            hide: !isBar
          })}>Bar</button></Link>
        <Link to='/door'><button className={classnames("navItem", {
              hide: !isDoor
            })}>Door</button></Link>
          <Link to='/kitchen'><button className={classnames("navItem", {
              hide: !isKitchen
            })}>Kitchen</button></Link>
          <Link to='/server'><button className={classnames("navItem", {
            hide: !isServer
          })}>Server</button></Link>
        <Link to='/'><button className="navItem">Home</button></Link>
        </div>
      </nav>
    );
  }
}
