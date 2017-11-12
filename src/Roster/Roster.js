import React, {Component} from 'react'
import TeamInfo from './TeamInfo/TeamInfo.js'

class Roster extends Component {
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
	render(){
		return(
			<div>
				<a href='/' onClick={this.changeTeamInfo}>Mythic</a>
				|
				<a href='/' onClick={this.changeTeamInfo}>Heroic</a>
				|
				<a href='/' onClick={this.changeTeamInfo}>RBG</a>
				
				<TeamInfo currentTeam={this.state.currentTeam}/>
			</div>
		);
	}
}

export default Roster;