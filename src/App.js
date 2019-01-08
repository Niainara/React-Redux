import React, { Component } from 'react';
import './App.css';
import ReducerComponent from './components/LightReducer/counterContainer.js';

class App extends Component {
  render() {
    return (
      <div className="App">
      <ReducerComponent/>
      </div>
    );
  }
};

export default App;
