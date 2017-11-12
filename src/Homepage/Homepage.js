import React, {Component} from 'react'
import Bosskills from './Bosskills/Bosskills.js'
import Recruitment from './Recruitment/Recruitment.js'

class Homepage extends Component {
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

				<Recruitment currentTeam={this.state.currentTeam}/>
				{this.state.currentTeam !== 'RBG' ? <Bosskills currentTeam={this.state.currentTeam}/> : null}
			</div>
		);
	}
}

export default Homepage