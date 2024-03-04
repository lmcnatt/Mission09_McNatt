import React from 'react';
import teams from '../src/CollegeBasketballTeams.json';
import './App.css';

interface TeamProps {
  tid: number;
  cid: number;
  did: number;
  school: string;
  name: string;
  abbrev: string;
  pop: number;
  city: string;
  state: string;
  latitude: number;
  longitude: number;
}

const teamsData = teams.teams;

function Welcome() {
  return <h1>NCAA Teams for March Madness!</h1>;
}

class Team extends React.Component<TeamProps> {
  render() {
    const oneTeam = this.props;

    return (
      <div>
        <h2>{oneTeam.school}</h2>
        <h3>{oneTeam.name}</h3>
        <h4>
          {oneTeam.city}, {oneTeam.state}
        </h4>
      </div>
    );
  }
}

function TeamList() {
  return (
    <div>
      {teamsData.map((teamNum) => (
        <Team {...teamNum} />
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Welcome />
      <TeamList />
    </div>
  );
}

export default App;
