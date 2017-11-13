import React, {Component} from 'react'
import TeamInfo from './TeamInfo/TeamInfo.js'

class Roster extends Component {
	render(){
		return(
			<div>
				<a href='/' onClick={this.props.changeTeamInfo}>Mythic</a>
				|
				<a href='/' onClick={this.props.changeTeamInfo}>Heroic</a>
				|
				<a href='/' onClick={this.props.changeTeamInfo}>RBG</a>

				<TeamInfo currentTeam={this.props.currentTeam}/>
			</div>
		);
	}
}

export default Roster;