import React, {Component} from 'react'
import TeamInfo from './TeamInfo/TeamInfo.js'

class Roster extends Component {
	render(){
		return(
			<div>
				Roster
				<TeamInfo/>
			</div>
		);
	}
}

export default Roster;