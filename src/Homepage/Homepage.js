import React, {Component} from 'react'
import Bosskills from './Bosskills/Bosskills.js'
import Recruitment from './Recruitment/Recruitment.js'

class Homepage extends Component {
	render(){
		return(
			<div>
				Homepage
				<Bosskills/>
				<Recruitment/>
			</div>
		);
	}
}

export default Homepage