import React, {Component} from 'react'
import Select from 'react-styled-select'
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
  	if(e === 'US' || e === 'EU'){
  		state.guild.region = e;
  		this.props.realmListApiCall(state.guild.region);
  	}
  	else{
  		state.guild.realm = e;
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
      this.props.changeScreen('team')
      this.clearState(state);
  }

  clearState = (state) =>{
  	for(let el in state.guild)
  		state.guild[el] = '';
  	this.setState(state)
  }

  postGuild = (guild) => {
  	fetch('http://localhost:9292/create/guild', {
			method: 'POST',
			body: JSON.stringify({
				name: this.state.guild.name,
				about: this.state.guild.about,
				realm: this.state.guild.realm,
				region: this.state.guild.region
			})
		})
  		.then((response)=>(response.json()))
		.then((response)=>{
			this.props.setGuildId(response.id);
		})
  }


	render(){
		const realmOptions = this.props.realms.map((realm, i)=>{
			return(
				{label: realm.name, value: realm.slug}
			)
		})
		const regionOptions = [
      { label: "EU", value: 'EU'},
      { label: 'US', value: 'US'},
    ]
		return(
			<div className="container">
				<div className="row">
					<div className="col-sm">
						<div className='guildName'>
							<input onChange={this.handleChange} type='text' name='name' placeholder='Guild Name' value={this.state.guild.name} maxLength="24"/>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-sm">
						<div className='guildAbout'>
							<textarea onChange={this.handleChange} type='text' name='about' placeholder='About your Guild' value={this.state.guild.about}/>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-sm">
						<Select
							className='region select'
							options={regionOptions}
							placeholder='Select your Region'
							value={this.state.guild.region} 
							onChange={this.handleSelectChange}
						/>
						{this.state.guild.region ? 
							<Select
								className='realm select'
								options={realmOptions}
								placeholder='Select your Realm'
								value={this.state.guild.realm} 
								onChange={this.handleSelectChange}
								searchable
							/> : null
						}
					</div>
				</div>
				<div className="row">
					<div className="col-sm">
						<button className='btn btn-primary' onClick={this.handleSubmit}>Next</button>
					</div>
				</div>
			</div>
		)
	}
}

export default Guild;