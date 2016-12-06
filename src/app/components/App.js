"use strict";

import React from 'react';
import { BrowserRouter as Router, Link, Match, Miss } from 'react-router';

import Bar from './Bar';
import Header from './Header';
import Manager from './Manager';

import container from './App.css';


export default class App extends React.Component {
  render () {
    return (
      <Router>
        <div className="container">
          <Header />
          <Match pattern='/manager' component={Manager}/>
          <Match exactly pattern='/' component={Manager}/>
          <Match pattern='/bar' component={Bar}/>
        </div>
      </Router>
    );
  }
}
