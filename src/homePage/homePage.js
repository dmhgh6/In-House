import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class HomePage extends Component {
    render() {
        return (
          <div>
            <h1> In House Home Page</h1>
            <p><a href="./stats">Player Stats</a></p>
            <p><a href="./gamedata">Enter Game Data</a></p>
          </div>
        );
  }
}

export default HomePage;