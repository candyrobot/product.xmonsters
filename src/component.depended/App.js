import React, { Component } from 'react';
import ReactList from 'react-list';
import './App.css';
import GridListWithTitlebars from './GridListWithTitlebars';

class App extends Component {
  render() {
    return (
      <div className="App">
        <GridListWithTitlebars />
      </div>
    );
  }
}

export default App;
