import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Cars from './containers/Cars';
import Taxis from './containers/Taxis';
import Map from './containers/Map';
import NoMatch from './components/NoMatch';
import CONSTANTS from './constants';
import './App.css';

const { CARS, TAXIS, MAP } = CONSTANTS.APP.PATH;

const App = () => (
  <Router>
    <div className="App">
      <Header />
      <Navigation />
      <Switch>
        <Route exact path={CARS} component={Cars} />
        <Route path={TAXIS} component={Taxis} />
        <Route path={MAP} component={Map} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
