import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const textWidth = {
    width: 25,
}

class GameData extends Component {
    constructor(props) {
    super(props);
    this.state = {
            GameNumber: 0,
            GameDate: '',
            Map: '',
            Winner: '',
            TeamOneScore: '',
            TeamTwoScore: '',
            TeamOne: [],
            TeamTwo: [],
        };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
   
    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        
        console.log('Event name:  ' + name);
        console.log('Event value: ' + value);

        this.setState({
            [name]: value
        });
  }
   
    handleSubmit(event) {       

        
    
        console.log(this.state);
        //alert('Results Submitted');
        event.preventDefault();
    }
    
    render() {
        return (
          <div>
            <h1> Enter Game Data</h1>
            <p><a href="..">Home Page</a></p>
            <p><a href="../stats">Player Stats</a></p>
            <hr></hr>
            <p></p>
            
            <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
            Map: <select name="Map" >
                    <option disabled selected></option>
                    <option>Dust 2</option>
                    <option>Mirage</option>
                    <option>Cache</option>
                    <option>Overpass</option>
                    <option>Inferno</option>
                    <option>Nuke</option>
                    <option>Cobblestone</option>
                    <option>Train</option>
                 </select>
            
            <p>Team One Score: <input name="TeamOneScore" value={this.state.TeamOneScore} style={textWidth} maxlength={2} /></p>
            <p>Team Two Score: <input name="TeamTwoScore" value={this.state.TeamTwoScore} style={textWidth} maxlength={2} /></p>
            <p>Winner:  <select name="Winner" value={this.state.Winner}>
                            <option disabled selected></option>
                            <option>Team One</option>
                            <option>Team Two</option>
                        </select></p>
            <p></p>
            <table>
                <fieldset>
                    <legend> Team One </legend>
                        <table>
                            <tr>
                                <td>
                                    <label>Name: </label>
                                    <select>
                                        <option disabled selected></option>
                                        <option>Brendan</option>
                                        <option>Brett</option>
                                        <option>Danny</option>
                                        <option>Drew</option>
                                        <option>Dubble</option>
                                        <option>Joe</option>
                                        <option>Kochan</option>
                                        <option>Matt</option>
                                        <option>Ryan</option>
                                        <option>Sam</option>
                                        <option>Tommy</option>
                                        <option>William</option>
                                        <option>Zach</option>
                                    </select>
                                </td>
                                <td>Kills: <input style={textWidth} maxlength={2} /></td>
                                <td>Assists: <input style={textWidth} maxlength={2} /></td>
                                <td>Deaths: <input style={textWidth} maxlength={2} /></td>
                            </tr>
                            <tr>
                                <td>
                                    <label>Name: </label>
                                    <select >
                                        <option disabled selected></option>
                                        <option>Brendan</option>
                                        <option>Brett</option>
                                        <option>Danny</option>
                                        <option>Drew</option>
                                        <option>Dubble</option>
                                        <option>Joe</option>
                                        <option>Kochan</option>
                                        <option>Matt</option>
                                        <option>Ryan</option>
                                        <option>Sam</option>
                                        <option>Tommy</option>
                                        <option>William</option>
                                        <option>Zach</option>
                                    </select>
                                </td>
                                <td>Kills: <input style={textWidth} maxlength={2} /></td>
                                <td>Assists: <input style={textWidth} maxlength={2} /></td>
                                <td>Deaths: <input style={textWidth} maxlength={2} /></td>
                            </tr>
                            <tr>
                                <td>
                                    <label>Name: </label>
                                    <select >
                                        <option disabled selected></option>
                                        <option>Brendan</option>
                                        <option>Brett</option>
                                        <option>Danny</option>
                                        <option>Drew</option>
                                        <option>Dubble</option>
                                        <option>Joe</option>
                                        <option>Kochan</option>
                                        <option>Matt</option>
                                        <option>Ryan</option>
                                        <option>Sam</option>
                                        <option>Tommy</option>
                                        <option>William</option>
                                        <option>Zach</option>
                                    </select>
                                </td>
                                <td>Kills: <input style={textWidth} maxlength={2} /></td>
                                <td>Assists: <input style={textWidth} maxlength={2} /></td>
                                <td>Deaths: <input style={textWidth} maxlength={2} /></td>
                            </tr>
                            <tr>
                                <td>
                                    <label>Name: </label>
                                    <select >
                                        <option disabled selected></option>
                                        <option>Brendan</option>
                                        <option>Brett</option>
                                        <option>Danny</option>
                                        <option>Drew</option>
                                        <option>Dubble</option>
                                        <option>Joe</option>
                                        <option>Kochan</option>
                                        <option>Matt</option>
                                        <option>Ryan</option>
                                        <option>Sam</option>
                                        <option>Tommy</option>
                                        <option>William</option>
                                        <option>Zach</option>
                                    </select>
                                </td>
                                <td>Kills: <input style={textWidth} maxlength={2} /></td>
                                <td>Assists: <input style={textWidth} maxlength={2} /></td>
                                <td>Deaths: <input style={textWidth} maxlength={2} /></td>
                            </tr>
                            <tr>
                                <td>
                                    <label>Name: </label>
                                    <select >
                                        <option disabled selected></option>
                                        <option>Brendan</option>
                                        <option>Brett</option>
                                        <option>Danny</option>
                                        <option>Drew</option>
                                        <option>Dubble</option>
                                        <option>Joe</option>
                                        <option>Kochan</option>
                                        <option>Matt</option>
                                        <option>Ryan</option>
                                        <option>Sam</option>
                                        <option>Tommy</option>
                                        <option>William</option>
                                        <option>Zach</option>
                                    </select>
                                </td>
                                <td>Kills: <input style={textWidth} maxlength={2} /></td>
                                <td>Assists: <input style={textWidth} maxlength={2} /></td>
                                <td>Deaths: <input style={textWidth} maxlength={2} /></td>
                            </tr>
                        </table>
                    </fieldset>
                </table>
                <p></p>
                <table>
                <fieldset>
                    <legend> Team Two </legend>
                        <table>
                            <tr>
                                <td>
                                    <label>Name: </label>
                                    <select >
                                        <option disabled selected></option>
                                        <option>Brendan</option>
                                        <option>Brett</option>
                                        <option>Danny</option>
                                        <option>Drew</option>
                                        <option>Dubble</option>
                                        <option>Joe</option>
                                        <option>Kochan</option>
                                        <option>Matt</option>
                                        <option>Ryan</option>
                                        <option>Sam</option>
                                        <option>Tommy</option>
                                        <option>William</option>
                                        <option>Zach</option>
                                    </select>
                                </td>
                                <td>Kills: <input style={textWidth} maxlength={2} /></td>
                                <td>Assists: <input style={textWidth} maxlength={2} /></td>
                                <td>Deaths: <input style={textWidth} maxlength={2} /></td>
                            </tr>
                            <tr>
                                <td>
                                    <label>Name: </label>
                                    <select >
                                        <option disabled selected></option>
                                        <option>Brendan</option>
                                        <option>Brett</option>
                                        <option>Danny</option>
                                        <option>Drew</option>
                                        <option>Dubble</option>
                                        <option>Joe</option>
                                        <option>Kochan</option>
                                        <option>Matt</option>
                                        <option>Ryan</option>
                                        <option>Sam</option>
                                        <option>Tommy</option>
                                        <option>William</option>
                                        <option>Zach</option>
                                    </select>
                                </td>
                                <td>Kills: <input style={textWidth} maxlength={2} /></td>
                                <td>Assists: <input style={textWidth} maxlength={2} /></td>
                                <td>Deaths: <input style={textWidth} maxlength={2} /></td>
                            </tr>
                            <tr>
                                <td>
                                    <label>Name: </label>
                                    <select >
                                        <option disabled selected></option>
                                        <option>Brendan</option>
                                        <option>Brett</option>
                                        <option>Danny</option>
                                        <option>Drew</option>
                                        <option>Dubble</option>
                                        <option>Joe</option>
                                        <option>Kochan</option>
                                        <option>Matt</option>
                                        <option>Ryan</option>
                                        <option>Sam</option>
                                        <option>Tommy</option>
                                        <option>William</option>
                                        <option>Zach</option>
                                    </select>
                                </td>
                                <td>Kills: <input style={textWidth} maxlength={2} /></td>
                                <td>Assists: <input style={textWidth} maxlength={2} /></td>
                                <td>Deaths: <input style={textWidth} maxlength={2} /></td>
                            </tr>
                            <tr>
                                <td>
                                    <label>Name: </label>
                                    <select >
                                        <option disabled selected></option>
                                        <option>Brendan</option>
                                        <option>Brett</option>
                                        <option>Danny</option>
                                        <option>Drew</option>
                                        <option>Dubble</option>
                                        <option>Joe</option>
                                        <option>Kochan</option>
                                        <option>Matt</option>
                                        <option>Ryan</option>
                                        <option>Sam</option>
                                        <option>Tommy</option>
                                        <option>William</option>
                                        <option>Zach</option>
                                    </select>
                                </td>
                                <td>Kills: <input style={textWidth} maxlength={2} /></td>
                                <td>Assists: <input style={textWidth} maxlength={2} /></td>
                                <td>Deaths: <input style={textWidth} maxlength={2} /></td>
                            </tr>
                            <tr>
                                <td>
                                    <label>Name: </label>
                                    <select >
                                        <option disabled selected></option>
                                        <option>Brendan</option>
                                        <option>Brett</option>
                                        <option>Danny</option>
                                        <option>Drew</option>
                                        <option>Dubble</option>
                                        <option>Joe</option>
                                        <option>Kochan</option>
                                        <option>Matt</option>
                                        <option>Ryan</option>
                                        <option>Sam</option>
                                        <option>Tommy</option>
                                        <option>William</option>
                                        <option>Zach</option>
                                    </select>
                                </td>
                                <td>Kills: <input style={textWidth} maxlength={2} /></td>
                                <td>Assists: <input style={textWidth} maxlength={2} /></td>
                                <td>Deaths: <input style={textWidth} maxlength={2} /></td>
                            </tr>
                        </table>
                    </fieldset>
                </table>
                <p></p>
                <input type="submit" value="Submit"/>
            </form>
          </div>
        );
  }
}

export default GameData;