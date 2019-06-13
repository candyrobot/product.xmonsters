import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './AppTmp.js';
import Item from './Item';

const AppContainer = (props) => (
  <BrowserRouter>
    <Route exact exact path='/' component={App} />
    <Route exact path='/items/:id' component={Item} />
  </BrowserRouter>
);

export default AppContainer;
