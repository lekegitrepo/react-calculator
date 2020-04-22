import React from 'react';
import Display from './display';
import ButtonPanel from './button-panel';
import '../styles/App.css';

function App() {
  return (
    <div className='App' id='app-id'>
      <Display />
      <ButtonPanel />
    </div>
  );
}

export default App;
