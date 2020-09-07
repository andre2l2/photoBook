import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, BrowserRouter, Router } from 'react-router-dom';

import HomePage from './HomePage';
import Galery from './Galery';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/galery" exact>
        <Galery />
      </Route>
      <Route path="/" exact>
        <HomePage />
      </Route>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
