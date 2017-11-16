import React, {Component} from 'react'
import Bosskills from './Bosskills/Bosskills.js'
import Recruitment from './Recruitment/Recruitment.js'

class Homepage extends Component {
	constructor(props){
		super(props);
	}
	render(){
		return(
			<div>
				<a href='/' onClick={this.props.changeTeamInfo}>Mythic</a>
				|
				<a href='/' onClick={this.props.changeTeamInfo}>Heroic</a>
				|
				<a href='/' onClick={this.props.changeTeamInfo}>RBG</a>

				<Recruitment currentTeam={this.props.currentTeam} guildId={this.props.guildId}/>
				{this.props.currentTeam !== 'RBG' ? <Bosskills currentTeam={this.props.currentTeam}/> : null}
			</div>
		);
	}
}

export default Homepage