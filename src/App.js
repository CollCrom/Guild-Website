import React, { Component } from 'react';
import Header from './Header/Header.js'
import './App.css'

class App extends Component {
  constructor(){
    super()
    this.state = {
      currentTeam: 'Mythic'
    }
  }
  changeTeamInfo = (e) =>{
    e.preventDefault();
    const state = this.state;
    state.currentTeam = e.currentTarget.innerText;
    this.setState(state)
  }
  render() {
    return (
      <div>
        <Header changeTeamInfo={this.changeTeamInfo} currentTeam={this.state.currentTeam}/>
      </div>
    );
  }
}

export default App;
