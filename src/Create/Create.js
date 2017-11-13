import React, {Component} from 'react'
import Guild from './Guild/Guild.js'
import Team from './Team/Team.js'

class Create extends Component {
	constructor(){
		super()
		this.state = {
			guild_id: '',
			guild_region: ''
		}
	}
	setGuildRegion = (region) =>{
		const state = this.state;
		state.guild_region = region;
		this.setState(state)
	}
	render(){
		return(
			<div>
				{!this.state.guild_id ? <Guild setGuildRegion={this.setGuildRegion}/> : <Team guild_id={this.state.guild_id}/>}
			</div>
		)
	}
}

export default Create;