import React, { Component } from 'react';
import Card from './components/Card/Card';
import CardWithHooks from './components/Card/CardWithHooks';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Card />
        <CardWithHooks />
      </div>
    );
  }
}

export default App;
