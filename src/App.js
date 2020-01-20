import React, { Component } from 'react';
import './App.css';
import Fixture from './Fixture/Fixture';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';

class App extends Component {
  state = {
    fixtures: [
      { team: 'Manchester City', points: 45 },
      { team: 'Manchester United', points: 36},
      { team: 'Aston Villa', points: 28}
    ],
    username: "ERMZ"
  }
  
  switchTeamHandler = (newTeam) => {
    this.setState({
      fixtures: [
        { team: newTeam, points: 45 },
        { team: 'Manchester United', points: 36},
        { team: 'Aston Villa', points: 28}
      ]
  
    })
  }

  nameChangeHandler = (event) => {
    this.setState({
      fixtures: [
        { team: 'Manchester City', points: 45 },
        { team: 'Manchester United', points: 36},
        { team: event.target.value, points: 28}
      ]
    })
  }

  outputNameHandler = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  render () {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button 
          style={style}
          onClick={() => this.switchTeamHandler('Basura')}>Switch Fixture</button>
        <Fixture
          team={this.state.fixtures[0].team}
          points={this.state.fixtures[0].points}
          click={this.switchTeamHandler.bind(this, 'le trash')} >Trash team</Fixture>
        <Fixture
          team={this.state.fixtures[1].team}
          points={this.state.fixtures[1].points} />
        <Fixture
          team={this.state.fixtures[2].team}
          points={this.state.fixtures[2].points}
          click={this.switchTeamHandler.bind(this, 'Trashy')}
          changed={this.nameChangeHandler} />

        <UserOutput
          username={this.state.username} />
        <UserOutput 
          username={this.state.username} />
        <UserOutput 
          username={this.state.username} />

        <UserInput
          newname={this.outputNameHandler}/>
      </div>
    );
  }
  
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'hello yay'));
}

export default App;

// const [ fixturesState, setFixturesState ] = useState({
//   fixtures: [
//     { team: 'Manchester City', points: 45 },
//     { team: 'Manchester United', points: 36},
//     { team: 'Aston Villa', points: 28}
//   ]
// });

// const [ otherState, setOtherState ] = useState('some other value');

// console.log(fixturesState, otherState);

// const switchTeamHandler = () => {
// setFixturesState({
//   fixtures: [
//     { team: 'Trash', points: 45 },
//     { team: 'Manchester United', points: 36},
//     { team: 'Aston Villa', points: 28}
//   ]
// });
// };