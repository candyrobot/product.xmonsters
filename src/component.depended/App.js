import React, { Component } from 'react';
import ReactList from 'react-list';
import './App.css';
import Header from './Header'
import GridListWithTitlebars from './GridListWithTitlebars';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <GridListWithTitlebars />
      </div>
    );
  }
}

export default App;
