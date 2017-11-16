import React, {Component} from 'react'
import TeamInfo from './TeamInfo/TeamInfo.js'
import PlayerRoster from './PlayerRoster/PlayerRoster.js'


class Roster extends Component {
	constructor(props) {
		super(props);
		this.state = {
			aboutMythic: '',
			aboutHeroic: '',
			aboutRBG: '',
			mythicPlayers: '',
			heroicPlayers: '',
			rbgPlayers: ''
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
				state.mythicPlayers = response.mythicPlayers;
				state.heroicPlayers = response.heroicPlayers;
				state.rbgPlayers = response.rbgPlayers;
				this.setState(state);
			})
	}


	render(){
		return(
			<div>
				<div>
					<a href='/' onClick={this.props.changeTeamInfo}>Mythic</a>
					|
					<a href='/' onClick={this.props.changeTeamInfo}>Heroic</a>
					|
					<a href='/' onClick={this.props.changeTeamInfo}>RBG</a>

					<TeamInfo currentTeam={this.props.currentTeam} data={this.state}/>
				</div>
			</div>
		);
	}
}

export default Roster;