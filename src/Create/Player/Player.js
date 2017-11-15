import React, {Component} from 'react'

class Player extends Component {
	constructor(props){
		super(props);
		this.state = {
			name: [''],
			realm: [''],
			img: [''],
			role: [''],
			team: [''],
			region: '',
			guildId: '',
			playerArr: [true]
		}
	}
	handleChange = (e) => {
      const state = this.state;
      const name = e.currentTarget.name;
      const index = e.currentTarget.id;
      state[name][index] = e.currentTarget.value;
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
      state.playerArr.forEach((player, i)=>{
      	this.setPlayerImage(i)
      })
      this.setState(state);
      this.postPlayers();
      console.log(this.state.img, 'img state')
  }

  setPlayerImage = (index) =>{
  	const URI = `https://raider.io/api/v1/characters/profile?region=${this.state.region}&realm=${this.state.realm[index]}&name=${this.state.name[index]}`;
  	console.log(URI, 'URI')
  	fetch(URI)
		.then((response)=>(response.json()))
		.then((data)=>{
			const thisState = this.state;
			if(data.statusCode > 400)
				thisState.img[index] = '';
			else
				thisState.img[index] = data.thumbnail_url;
			this.setState(thisState)
		})
  }

  postPlayers = () => {
  	fetch('http://localhost:9292/create/players', {
			method: 'POST',
			body: JSON.stringify({
				name: this.state.name,
				img: this.state.img,
				role: this.state.role,
				team: this.state.team,
				guildId: this.state.guildId,
			})
		})
  		.then((response)=>(response.json()))
  		.then((response)=>{
  			this.props.changeScreen('guild');
  		})
  }

  addNewPlayer = () =>{
  	const state = this.state;
  	state.playerArr.push(true);
  	state.name.push('');
  	state.realm.push('');
  	state.img.push('');
  	state.role.push('');
  	state.team.push('');
   	this.setState(state)
  }

	render(){
		const realms = this.props.crossRealms.map((realm, i)=>{
			return(
				<option key={i} value={realm}>{realm}</option>
			)
		})


		const players = this.state.playerArr.map((player, i)=>{
			return(
				<div key={i}>
		  		<input id={i} type='text' name='name' placeholder='Player Name' value={this.state.name[i]} onChange={this.handleChange}/>

					<select id={i} name='role' value={this.state.role[i]} onChange={this.handleChange}>
						<option value=''>Role</option>
						<option value='Tank'>Tank</option>
						<option value='Healer'>Healer</option>
						<option value='Melee'>Melee</option>
						<option value='Ranged'>Ranged</option>
					</select>

					<select id={i} name='team' value={this.state.team[i]} onChange={this.handleChange}>
						<option value=''>Team</option>
						<option value='Mythic'>Mythic</option>
						<option value='Heroic'>Heroic</option>
						<option value='RBG'>RBG</option>
					</select>


					<select id={i} name='realm' value={this.state.realm[i]} onChange={this.handleChange}>
						<option value=''>Select the realm</option>
						{realms}
					</select>
				</div>
			)
		})

		return(
			<div>
				{players}
				<button onClick={this.addNewPlayer}>Add Player</button>
				<button onClick={this.handleSubmit}>Submit</button>
			</div>
		)
	}
}

export default Player;