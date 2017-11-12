import React, {Component} from 'react'

class About extends Component {
	render(){
		return(
			<div>
				{this.props.currentTeam} team About
			</div>
		);
	}
}

export default About