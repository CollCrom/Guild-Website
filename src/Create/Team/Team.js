import React, {Component} from 'react'

class Team extends Component {
	constructor(props){
		super(props);
		this.state = {
			name: '',
			realm: '',
			img: '',
			role: '',
			region: this.props.region.toLowerCase(),
			guildId: this.props.guildId
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
      this.getPlayerImage(state.player_name)
  		state.player_name = '';
  		state.img_link = '';
  		state.role = '';
      this.setState(state);
  }

  getPlayerImage = (player) =>{
  	let URI;
  	if(this.state.region === 'us')
  		console.log('blah')
  	else if(this.state.region === 'eu')
  		console.log('poop')
  	else
  		return;
  	console.log(URI)
  	fetch(URI)
  	.then((response)=>(response.json()))
		.then((data)=>{
			const state = this.state;
			state.img = data.thumbnail
			this.setState(state)
		});
  }

	render(){
		this.props.crossRealmListApiCall(this.props.region)
		const realms = this.props.crossRealms.map((realm, i)=>{
			return(
				<option key={i} value={realm}>{realm}</option>
			)
		})
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