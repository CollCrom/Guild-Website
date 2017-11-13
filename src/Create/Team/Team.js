import React, {Component} from 'react'

class Team extends Component {
	constructor(props){
		super(props);
		this.state = {
			player_name: '',
			player_realm: '',
			img_link: '',
			role: '',
			guild_id: this.props.guild_id
		}
	}
	handleSelectChange = (e) =>{
		const state = this.state;
		state.role = e.currentTarget.value;
		this.setState(state)
	}
	handleSubmit = (e) =>{
      e.preventDefault();
      const state = this.state;
  		state.player_name = '';
  		state.img_link = '';
  		state.role = '';
      this.setState(state);
  }

  getPlayerImage = (player) =>{
  	let URI;

  }

	render(){
		return(
			<div>
				<form onSubmit={this.handleSubmit}>
					<input type='text' name='player_name' placeholder='Player Name' value={this.state.player_name}/>
					<select name='role' value={this.state.role}>
						<option value=''>Role</option>
						<option value='Tank'>Tank</option>
						<option value='Healer'>Healer</option>
						<option value='Melee'>Melee</option>
						<option value='Ranged'>Ranged</option>
					</select>
					<input type="submit" value="Submit" />
				</form>
			</div>
		)
	}
}

export default Team;