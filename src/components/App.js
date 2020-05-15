import React from 'react';
import Display from './display';
import ButtonPanel from './button-panel';
import calculate from '../logic/calculate';
import '../styles/App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      total: null,
      next: null,
      operation: null,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    const newState = calculate(this.state, buttonName);
    this.setState(newState);
  }

  render() {
    const { total, next } = this.state;
    return (
      <div className="container">
        <div className="App" id="app-id">
          <Display result={next || (total || 'null')} display="display" />
          <ButtonPanel clickHandler={this.handleClick} className="button-panel" />
        </div>
      </div>
    );
  }
}

export default App;
