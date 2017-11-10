import React, {Component} from 'react'
import About from './About/About.js'
import LookingFor from './LookingFor/LookingFor.js'

class Recruitment extends Component {
	render(){
		return(
			<div>
				Recruitment
				<About/>
				<LookingFor/>
			</div>
		);
	}
}

export default Recruitment