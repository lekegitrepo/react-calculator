/* eslint-disable jsx-quotes */
/* eslint-disable no-unused-vars */

import React from 'react';
import Display from './display';
import ButtonPanel from './button-panel';
import calculate from '../logic/calculate';
import '../styles/App.css';

function App() {
  return (
    <div className='container'>
      <div className='App' id='app-id'>
        <Display result='0' display='display' />
        <ButtonPanel className='button-panel' />
      </div>
    </div>
  );
}

export default App;
