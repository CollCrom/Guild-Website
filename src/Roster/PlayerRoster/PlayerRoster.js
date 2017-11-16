import React, {Component} from 'react'

class PlayerRoster extends Component {
	render(){
		return(
			<div>
				{this.props.currentTeam} TeamInfo
			</div>
		);
	}
}

export default PlayerRoster;