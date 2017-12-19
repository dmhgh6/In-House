import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import HomePage from './homePage/homePage'
import PlayerStats from './playerStats/stats'
import GameData from './gameData/gameData'

class App extends Component {
  render() {
    return (
      <Router>  
        <div>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/stats" component={PlayerStats}/>
          <Route exact path="/gamedata" component={GameData}/>
        </div>
      </Router>
    );
  }
}

export default App;
