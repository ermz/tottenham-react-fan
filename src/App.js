import React, { Component } from 'react';
import './App.css';
import Fixture from './Fixture/Fixture'

class App extends Component {
  state = {
    fixtures: [
      { team: 'Manchester City', points: 45 },
      { team: 'Manchester United', points: 36},
      { team: 'Aston Villa', points: 28}
    ]
  }

  switchTeamHandler = () => {
    this.setState({
      fixtures: [
        { team: 'Trash', points: 45 },
        { team: 'Manchester United', points: 36},
        { team: 'Aston Villa', points: 28}
      ]

    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={this.switchTeamHandler}>Switch Fixture</button>
        <Fixture team={this.state.fixtures[0].team} points={this.state.fixtures[0].points} >Trash team</Fixture>
        <Fixture team={this.state.fixtures[1].team} points={this.state.fixtures[1].points} />
        <Fixture team={this.state.fixtures[2].team} points={this.state.fixtures[2].points} />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'hello yay'));
  }
}

export default App;
