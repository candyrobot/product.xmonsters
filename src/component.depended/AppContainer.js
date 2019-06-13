import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './App';
import Item from './Item';


const tileData = [
  {
    id: 1,
    img: 'https://s3-ap-northeast-1.amazonaws.com/stores-files/ji-han-ki/39d70ad2f7a22608746e.png',
    title: 'Image',
    author: 'author',
  },
  {
    id: 2,
    img: 'https://s3-ap-northeast-1.amazonaws.com/stores-files/ji-han-ki/39d70ad2f7a22608746e.png',
    title: 'Image',
    author: 'author',
  },
  {
    id: 3,
    img: 'https://s3-ap-northeast-1.amazonaws.com/stores-files/ji-han-ki/39d70ad2f7a22608746e.png',
    title: 'Image',
    author: 'author',
  },
];

window.tileData = tileData;

const AppContainer = () => (
  <BrowserRouter>
    <Route exact exact path='/' component={App} />
    <Route exact path='/items/:id' component={Item} />
  </BrowserRouter>
);

export default AppContainer;
