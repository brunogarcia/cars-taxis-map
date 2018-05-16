import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './containers/Home';
import MapList from './containers/MapList';
import CONSTANTS from './constants';
import './App.css';

const { PATH } = CONSTANTS.APP;

const App = () => (
  <Router>
    <div className="App">
      <Switch>
        <Route exact path={PATH.HOME} component={Home} />
        <Route path={PATH.MAP} component={MapList} />
      </Switch>
    </div>
  </Router>
);

export default App;
