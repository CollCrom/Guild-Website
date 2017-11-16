import React, {Component} from 'react'
import TeamInfo from './TeamInfo/TeamInfo.js'
import PlayerRoster from './PlayerRoster/PlayerRoster.js'


class Roster extends Component {
	constructor() {
		super();
		this.state = {
			
		}
	}

	componentDidMount() {
		fetch('http://localhost:9292/view/guild/' + this.props.guildId)
			.then((response)=>(response.json()))
			.then((response)=>{
				const state = this.state;
				state.aboutMythic = response.aboutMythic;
				state.aboutHeroic = response.aboutHeroic;
				state.aboutRBG = response.aboutRBG;
				this.setState(state);
			})
	}


	render(){
		return(
			<div>
				<div id="playerPic">


				</div>
				<div>
					<a href='/' onClick={this.props.changeTeamInfo}>Mythic</a>
					|
					<a href='/' onClick={this.props.changeTeamInfo}>Heroic</a>
					|
					<a href='/' onClick={this.props.changeTeamInfo}>RBG</a>

					<TeamInfo currentTeam={this.props.currentTeam}/>
				</div>
			</div>
		);
	}
}

export default Roster;