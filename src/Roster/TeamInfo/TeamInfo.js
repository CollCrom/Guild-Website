import React, {Component} from 'react'

class TeamInfo extends Component {
	constructor(props) {
		super(props);
	}
	render(){
		return(
			<div className="centered">
				{this.props.currentTeam}<br/>
				{this.props.data['about' + this.props.currentTeam]}
			</div>
		);
	}
}

export default TeamInfo;