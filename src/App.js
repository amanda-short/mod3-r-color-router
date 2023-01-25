import './App.css';
import Header from './components/Header/Header.js';

import { Route, Switch } from 'react-router-dom';
import React, { useState } from 'react';
import ColorDisplay from './components/ColorDisplay.js';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <Switch>
          <Route className="home" exact path="/">
            colors colors colors...
          </Route>
          <Route
            exact
            path="/rgb/:redValue/:greenValue/:blueValue"
            component={ColorDisplay}
          ></Route>
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
