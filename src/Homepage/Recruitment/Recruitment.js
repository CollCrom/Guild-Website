import React, {Component} from 'react'
import About from './About/About.js'
import LookingFor from './LookingFor/LookingFor.js'

class Recruitment extends Component {
	render(){
		return(
			<div>
				<About currentTeam={this.props.currentTeam}/>
				<LookingFor currentTeam={this.props.currentTeam}/>
			</div>
		);
	}
}

export default Recruitment