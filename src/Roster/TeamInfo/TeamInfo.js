import React, {Component} from 'react'

class TeamInfo extends Component {
	render(){
		return(
			<div>
				{this.props.currentTeam} TeamInfo
			</div>
		);
	}
}

export default TeamInfo;