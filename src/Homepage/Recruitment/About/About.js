import React, {Component} from 'react'

class About extends Component {
	constructor(props) {
		super(props);
	}
	render(){
		return(
			<div>
				{this.props.currentTeam}<br/>
				{this.props.data['about' + this.props.currentTeam]}
			</div>
		);
	}
}

export default About