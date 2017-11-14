import React, {Component} from 'react'

class Team extends Component {
	constructor(props){
		super(props);
		this.state = {
			name: '',
			realm: '',
			img: '',
			role: '',
			region: '',
			guildId: ''
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
		const name = e.currentTarget.name;
		state[name] = e.currentTarget.value;
		this.setState(state)
	}
	handleSubmit = (e) =>{
      e.preventDefault();
      const state = this.state;
      state.region = this.props.region;
      state.guildId = this.props.guildId;
      this.setPlayerImage()
  }

  setPlayerImage = () =>{
  	const state = this.state;
  	console.log(this.state)
  	const URI = `https://raider.io/api/v1/characters/profile?region=${state.region}&realm=${state.realm}&name=${state.name}`;
  	fetch(URI)
		.then((response)=>(response.json()))
		.then((data)=>{
			if(data.statusCode > 400)
				return;
			console.log(data)
			state.img = data.thumbnail_url;
		})
		.then(()=>{
			console.log(state.img)
			// DOESNT SET THE STATE YET FOR SOME FUCKING REASON
			this.setState(state)
		});
  }

	render(){
		const realms = this.props.crossRealms.map((realm, i)=>{
			return(
				<option key={i} value={realm}>{realm}</option>
			)
		})
		return(
			<div>
				<form onSubmit={this.handleSubmit}>
					<input type='text' name='name' placeholder='Player Name' value={this.state.player_name} onChange={this.handleChange}/>

					<select name='role' value={this.state.role} onChange={this.handleSelectChange}>
						<option value=''>Role</option>
						<option value='Tank'>Tank</option>
						<option value='Healer'>Healer</option>
						<option value='Melee'>Melee</option>
						<option value='Ranged'>Ranged</option>
					</select>

					<select name='realm' value={this.state.realm} onChange={this.handleSelectChange}>
						<option value=''>Select your realm</option>
						{realms}
					</select>

					<input type="submit" value="Submit" />
				</form>
			</div>
		)
	}
}

export default Team;