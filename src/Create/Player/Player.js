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
			playerArr: [true],
			counter: 0
		}
	}

	handleSelectChange = (e, value) => {
		const state = this.state;
		const index = e;
		if(value === 'Healer' || value === 'Melee' || value === 'Ranged' || value === 'Tank')
			state.role[index] = value;
		else if (value === 'RBG' || value === 'Mythic' || value === 'Heroic')
			state.team[index] = value
		else
			state.realm[index] = value;
		this.setState(state);
		console.log(this.state)
	}
	handleChange = (e) =>{
		const state = this.state;
		const index = e.currentTarget.id
		const name = e.currentTarget.name;
		state[name][index] = e.currentTarget.value;
		this.setState(state)
	}

	handleSubmit = (e) =>{
    e.preventDefault();
    const state = this.state;
    state.region = this.props.region;
    state.guildId = this.props.guildId;
    this.setState(state);
    state.playerArr.forEach((player, i)=>{
    	this.setPlayerImage(i)
    }) 
  }

  setPlayerImage = (index) =>{
  	console.log(this.state, 'getting image')
  	const URI = `https://raider.io/api/v1/characters/profile?region=${this.state.region}&realm=${this.state.realm[index]}&name=${this.state.name[index]}`;
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
		.then((data)=>{
			const state = this.state;
			state.counter++;
			this.setState(state);
			if (this.state.counter === this.state.playerArr.length){
        		this.postPlayers();
      		}
		})
  }

  postPlayers = () => {
  	fetch('http://guildy.herokuapp.com/', {
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
			console.log(this.state.img)
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
						onChange={this.handleSelectChange.bind(this,i)}
					/>
					<Select
						options={teamOptions}
						placeholder='Team'
						onChange={this.handleSelectChange.bind(this,i)}
					/>
					<Select
						options={realmOptions}
						placeholder='Select Realm'
						onChange={this.handleSelectChange.bind(this,i)}
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
					<div className='row flex'>
						{players}
					</div>
				</div>
			</div>
		)
	}
}

export default Player;