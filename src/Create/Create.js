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
		console.log(this.state, ' in Create')
		this.setState(state)
	}
	render(){
		return(
			<div>
				<Guild setGuildRegion={this.setGuildRegion}/>
				<Team guild_id={this.state.guild_id} guild_region={this.state.guild_region}/>
			</div>
		)
	}
}

export default Create;