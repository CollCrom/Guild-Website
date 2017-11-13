import React, {Component} from 'react'
import Guild from './Guild/Guild.js'
import Team from './Team/Team.js'

class Create extends Component {
	constructor(){
		super()
		this.state = {
			guild_id: '',
		}
	}
	render(){
		return(
			<div>
				{this.state.guild_id ? <Guild/> : <Team guild_id={this.state.guild_id}/>}
			</div>
		)
	}
}

export default Create;