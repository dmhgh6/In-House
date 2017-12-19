import { Link } from 'react-router-dom'
//import { ReactDataGridPlugins, Toolbar, Data, Formatters, Editors } from 'react-data-grid-addons'

const ReactDataGrid = require('react-data-grid');
const React = require('react');

class Stats extends React.Component {
  constructor(props, context) {
    super(props, context);
    this._columns = [
      { key: 'Player', name: 'Player' },
      { key: 'Kills', name: 'Kills', sortable:true },
      { key: 'Assists', name: 'Assists', sortable:true },
      { key: 'Deaths', name: 'Deaths', sortable:true },
      { key: 'KDA', name: 'KDA', sortable:true },
      { key: 'RoundsPlayed', name: 'Rounds Played', sortable:true },
      { key: 'RoundsWon', name: 'Rounds Won', sortable:true },
      { key: 'RoundWin', name: 'Round Win %', sortable:true },
      { key: 'KillsRound', name: 'Kills/Round', sortable:true },
      { key: 'AssistsRound', name: 'Assists/Round', sortable:true },
      { key: 'DeathsRound', name: 'Deaths/Round', sortable:true },
      { key: 'GamesPlayed', name: 'Games Played', sortable:true },
      { key: 'GamesWon', name: 'Games Won', sortable:true },
      { key: 'GameWin', name: 'Game Win %', sortable:true },
      ];

    let originalRows = this.createRows(10);
    let rows = originalRows.slice(0);
    this.state = { originalRows, rows };
  }


  
  createRows = () => {
    let rows = [];
    for (let i = 1; i <= 10; i++) {
      rows.push({
        Player: i,
        Kills: i,
        Assists: i,
        Deaths: i,
        KDA: i,
        RoundsPlayed: i,
        RoundsWon: i,
        RoundWin: i,
        KillsRound: i,
        AssistsRound: i,
        DeathsRound: i,
        GamesPlayed: i,
        GamesWon: i,
        GameWin: i,
      });
    }

    return rows;
  };

  handleGridSort = (sortColumn, sortDirection) => {
    const comparer = (a, b) => {
      if (sortDirection === 'ASC') {
        return (a[sortColumn] > b[sortColumn]) ? 1 : -1;
      } else if (sortDirection === 'DESC') {
        return (a[sortColumn] < b[sortColumn]) ? 1 : -1;
      }
    };

    const rows = sortDirection === 'NONE' ? this.state.originalRows.slice(0) : this.state.rows.sort(comparer);

    this.setState({ rows });
  };
  
  rowGetter = (i) => {
    return this.state.rows[i];
  };

  render() {
    return  (
    <div>
      <h1>Player Stats</h1>
      <p><a href="..">Home Page</a></p>
      <p><a href="../gameData">Enter Game Data</a></p>
      
      <ReactDataGrid
        onGridSort={this.handleGridSort}
        columns={this._columns}
        rowGetter={this.rowGetter}
        rowsCount={this.state.rows.length}
        minHeight={500} />
    </div>
    )
  }
}

export default Stats;