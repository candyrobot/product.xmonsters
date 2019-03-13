import React, { Component } from 'react';
import ReactList from 'react-list';
import './App.css';
import GridListWithTitlebars from './GridListWithTitlebars';
import ImageSlider from './ImageSlider'

class App extends Component {
  render() {
    return (
      <div>
      	<ImageSlider />
        <GridListWithTitlebars />
      </div>
    );
  }
}

export default App;
