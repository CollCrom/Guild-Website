import React, {Component} from 'react'
import './Guild.css'

class Guild extends Component {
	constructor(){
		super()
		this.state = {
			guild: {
				name: '',
				about: '',
				realm: '',
				region: ''
			},
			mythicCheck: false,
			heroicCheck: false,
			rbgCheck: false
		}
	}
	handleChange = (e) => {
      const state = this.state;
      const name = e.currentTarget.name;
      state.guild[name] = e.currentTarget.value;
      this.setState(state);
  }

  handleSelectChange = (e) =>{
  	const state = this.state;
  	const name = e.currentTarget.name;
  	if(name === 'region'){
  		state.guild[name] = e.currentTarget.value;
  		this.props.realmListApiCall(state.guild[name]);
  	}
  	else{
  		state.guild[name] = e.currentTarget.value;
			this.setState(state);
  	}
  }

  handleCheckboxChange = (e) =>{
  	const state = this.state;
  	const name = e.currentTarget.id
  	state[name] = e.currentTarget.checked
  	this.setState(state)
  }

  handleSubmit = (e) =>{
      e.preventDefault();
      this.postGuild(this.state.guild);
      const state = this.state;
      this.props.setGuildInfo(state.guild.region, state.guild.realm);
      this.props.changeScreen('player')
      this.clearState(state);
  }

  clearState = (state) =>{
  	for(let el in state.guild)
  		state.guild[el] = '';
  	this.setState(state)
  }

  postGuild = (guild) => {
  	fetch('http://localhost:9292/create', {
			method: 'POST',
			body: JSON.stringify({
				name: this.state.guild.name,
				about: this.state.guild.about,
				realm: this.state.guild.realm,
				region: this.state.guild.region
			})
		})
  		.then((response)=>(response.json()))
		.then((response)=>(()=>{
			this.props.guild(response);
		}))
  }


	render(){
		const realmList = this.props.realms.map((realm, i)=>{
			return(
				<option key={i} value={realm.slug}>{realm.name}</option>
			)
		})
		return(
			<div>
				<input onChange={this.handleChange} type='text' name='name' placeholder='Guild Name' value={this.state.guild.name}/>

				<textarea onChange={this.handleChange} type='text' name='about' placeholder='About your Guild' value={this.state.guild.about}/>

				<select name='region' value={this.state.guild.region} onChange={this.handleSelectChange}>
					<option value=''>Select your region</option>
					<option value='EU'>EU</option>
					<option value='US'>US</option>
				</select>

				<select name='realm' value={this.state.guild.realm} onChange={this.handleSelectChange}>
					<option value=''>Select your realm</option>
					{realmList}
				</select>

				<button className='btn' onClick={this.handleSubmit}>Next</button>					
			</div>
		)
	}
}

export default Guild;