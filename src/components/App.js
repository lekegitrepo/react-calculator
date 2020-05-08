/* eslint-disable jsx-quotes */
/* eslint-disable no-unused-vars */

import React from 'react';
import Display from './display';
import ButtonPanel from './button-panel';
import calculate from '../logic/calculate';
import '../styles/App.css';

class App extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      total: null,
      next: null,
      operation: null
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    console.log(buttonName, ' clicked')
    this.setState(calculate(this.state, buttonName));
    console.log(this.setState(calculate(this.state, buttonName)))
  }
  render() {
    const { total, next } = this.state;
    return (
      <div className='container'>
        <div className='App' id='app-id'>
          <Display result={next ? next : (total ? total : '0')} display='display' />
          <ButtonPanel  clickHandler={this.handleClick} className='button-panel' />
        </div>
      </div>
    );
  }
}

export default App;
