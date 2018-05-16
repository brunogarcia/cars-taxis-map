import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Cars from './containers/Cars';
import Taxis from './containers/Taxis';
import MapList from './containers/MapList';
import CONSTANTS from './constants';
import './App.css';

const { PATH } = CONSTANTS.APP;

const App = () => (
  <Router>
    <div className="App">
      <Header />
      <Navigation />
      <Switch>
        <Route exact path={PATH.CARS} component={Cars} />
        <Route exact path={PATH.TAXIS} component={Taxis} />
        <Route path={PATH.MAP} component={MapList} />
      </Switch>
    </div>
  </Router>
);

export default App;
