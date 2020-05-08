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
    this.setState(calculate(this.state, buttonName));
  }
  render() {
    return (
      <div className='container'>
        <div className='App' id='app-id'>
          <Display result='0' display='display' />
          <ButtonPanel  clickHandle={this.handleClick} className='button-panel' />
        </div>
      </div>
    );
  }
}

export default App;
