import React, {Component} from 'react'
import Select from 'react-styled-select'
import './Player.css'

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
      if(!e.currentTarget){
      	const index = e.value
	      if(e === 'Melee' || e === 'Ranged' || e === 'Healer' || e === 'Tank')
	      	state.role[index] = e;
	      else
	      	state.realm[index] = e;
	    }
	    else{
	    	const index = e.currentTarget.id;
	    	const name = e.currentTarget.name
	    	state[name][index] = e.currentTarget.value
	    }
      this.setState(state);
  }
	handleSubmit = (e) =>{
      e.preventDefault();
      const state = this.state;
      state.region = this.props.region;
      state.guildId = this.props.guildId;
      state.playerArr.forEach((player, i)=>{
      	this.setPlayerImage(i)
      })
      this.postPlayers();
      console.log(this.state.img, 'img state')
  }

  setPlayerImage = (index) =>{
  	const URI = `https://raider.io/api/v1/characters/profile?region=${this.state.region}&realm=${this.state.realm[index]}&name=${this.state.name[index]}`;
  	console.log(URI, 'URI')
  	fetch(URI)
		.then((response)=>(response.json()))
		.then((data)=>{
			const state = this.state;
			if(data.statusCode > 400)
				state.img[index] = '';
			else
				state.img[index] = data.thumbnail_url;
			this.setState(state)
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
		const realmOptions = this.props.crossRealms.map((realm, i)=>{
			return(
				{label: realm, value: realm}
			)
		})
		const roleOptions = [
			{label: 'Tank', value: 'Tank'},
			{label: 'Healer', value: 'Healer'},
			{label: 'Melee', value: 'Melee'},
			{label: 'Ranged', value: 'Ranged'}
		]
		const teamOptions = [
			{label: 'Mythic', value: 'Mythic'},
			{label: 'Heroic', value: 'Heroic'},
			{label: 'RBG', value: 'RBG'}
		]


		const players = this.state.playerArr.map((player, i)=>{
			return(
				<div key={i} className='card'>
		  		<input id={i} type='text' name='name' placeholder='Player Name' value={this.state.name[i]} onChange={this.handleChange} maxLength="12"/>

					<Select 
						options={roleOptions} 
						placeholder='Role' 
						onChange={this.handleChange}
						value={i}
					/>
					<Select
						options={teamOptions}
						placeholder='Team'
						onChange={this.handleChange}
						value={i}
					/>
					<Select
						options={realmOptions}
						placeholder='Select Realm'
						onChange={this.handleChange}
						value={i}
					/>
				</div>
			)
		})

		return(
			<div className='Player'>
				<div className='container'>
					<div className='row'>
						<button className='btn' onClick={this.addNewPlayer}>Add Player</button>
					</div>
					<div className='row'>
						<button className='btn' onClick={this.handleSubmit}>Submit</button>
					</div>
					<div className='row'>
						{players}
					</div>
				</div>
			</div>
		)
	}
}

export default Player;