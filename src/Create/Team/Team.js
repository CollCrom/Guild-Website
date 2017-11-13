import React, {Component} from 'react'

class Team extends Component {
	constructor(props){
		super(props);
		this.state = {
			player_name: '',
			player_realm: '',
			img_link: '',
			role: '',
			guild_region: this.props.guild_region.toLowerCase(),
			guild_id: this.props.guild_id
		}
	}
	handleChange = (e) => {
      const state = this.state;
      const name = e.currentTarget.name;
      state[name] = e.currentTarget.value;
      this.setState(state);
  }
	handleSelectChange = (e) =>{
		const state = this.state;
		state.role = e.currentTarget.value;
		this.setState(state)
	}
	handleSubmit = (e) =>{
      e.preventDefault();
      const state = this.state;
      this.getPlayerImage(state.player_name)
  		state.player_name = '';
  		state.img_link = '';
  		state.role = '';
      this.setState(state);
  }

  getPlayerImage = (player) =>{
  	let URI;
  	if(this.state.guild_region === 'us'){
  		URI = `https://us.api.battle.net/wow/character/Burning%20Legion/Hewhosmites?locale=en_US&apikey=7hbm4m47wu8hh68uh3j8zsfps37xtvb2`;
  	}
  	fetch(URI)
		.then((response)=>(response.json()))
		.then((data)=>{
			const state = this.state;
			state.img_link = data.thumbnail
			this.setState(state)
			console.log(this.state.img_link)
		});
  }

	render(){
		return(
			<div>
				<form onSubmit={this.handleSubmit}>
					<input type='text' name='player_name' placeholder='Player Name' value={this.state.player_name} onChange={this.handleChange}/>
					<select name='role' value={this.state.role} onChange={this.handleSelectChange}>
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