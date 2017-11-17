import React, {Component} from 'react'
import TeamInfo from './TeamInfo/TeamInfo.js'
import PlayerRoster from './PlayerRoster/PlayerRoster.js'
import './Roster.css'

class Roster extends Component {
	constructor(props) {
		super(props);
		this.state = {
			aboutMythic: '',
			aboutHeroic: '',
			aboutRBG: '',
			playersMythic: '',
			playersHeroic: '',
			playersRBG: ''
		}
	}

	componentDidMount() {
		fetch('http://localhost:9292/view/players/' + this.props.guildId)
			.then((response)=>(response.json()))
			.then((response)=>{
				const state = this.state;
				state.aboutMythic = response.aboutMythic;
				state.aboutHeroic = response.aboutHeroic;
				state.aboutRBG = response.aboutRBG;
				state.playersMythic = response.mythicPlayers;
				state.playersHeroic = response.heroicPlayers;
				state.playersRBG = response.rbgPlayers;
				this.setState(state);
			})
	}


	render(){
		return(
			<div className='Roster'>
				<div className="centered">
					<a href='/' onClick={this.props.changeTeamInfo}>Mythic</a>
					|
					<a href='/' onClick={this.props.changeTeamInfo}>Heroic</a>
					|
					<a href='/' onClick={this.props.changeTeamInfo}>RBG</a>


					<TeamInfo currentTeam={this.props.currentTeam} data={this.state}/>
					<PlayerRoster currentTeam={this.props.currentTeam} data={this.state}/>
				</div>
			</div>
		);
	}
}

export default Roster;