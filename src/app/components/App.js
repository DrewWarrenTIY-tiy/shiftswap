"use strict";

import React from 'react';

import Header from './Header';
import Manager from './Manager';

import container from './App.css';


export default class App extends React.Component {
  render () {
    return (
      <div className='container'>
        <Header />
        <Manager />
      </div>
    );
  }
}
