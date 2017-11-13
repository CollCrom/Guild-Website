import React, {Component} from 'react'

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
			realms: [],
			region: '',
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
      console.log(this.state)
  }

  handleSelectChange = (e) =>{
  	const state = this.state;
  	const name = e.currentTarget.name;
  	if(name === 'region'){
  		state[name] = e.currentTarget.value;
  		this.realmListApiCall(state[name]);
  		state.guild[name] = e.currentTarget.value;
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
      console.log(this.state)
      this.postGuild(this.state.guild);
      const state = this.state;
      this.props.setGuildRegion(state.guild.region);
      this.clearState(state);
  }

  clearState = (state) =>{
  	for(let el in state.guild)
  		state.guild[el] = '';
  	this.setState(state)
  }

  realmListApiCall = (region) => {
  	let theURI;
  	if (region === 'US') {
  		theURI = 'https://us.api.battle.net/wow/realm/status?locale=en_US&apikey=7hbm4m47wu8hh68uh3j8zsfps37xtvb2';
  	}else if (region === 'EU') {
  		theURI = 'https://eu.api.battle.net/wow/realm/status?locale=en_GB&apikey=7hbm4m47wu8hh68uh3j8zsfps37xtvb2';
  	}
  	else if (region === '')
  		return;
  	fetch(theURI)
		.then((response)=>(response.json()))
		.then((data)=>{
			const state = this.state;
			state.realms = [];
			for (let i = 0; i < data.realms.length; i++) {
				state.realms.push({name: data.realms[i].name, slug: data.realms[i].slug});
			}
			this.setState(state);
		});
  }

  postGuild = (guild) => {
  	console.log(this.state.guild.name);
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
		.then((response)=>(console.log(response)))
  }


	render(){
		const realmList = this.state.realms.map((realm, i)=>{
			return(
				<option key={i} value={realm.slug}>{realm.name}</option>
			)
		})
		return(
			<div>
				<form onSubmit={this.handleSubmit}>
					<input onChange={this.handleChange} type='text' name='name' placeholder='Guild Name' value={this.state.guild.name}/>
					<input onChange={this.handleChange} type='text' name='about' placeholder='About your Guild' value={this.state.guild.about}/>
					<select name='region' value={this.state.region} onChange={this.handleSelectChange}>
						<option value=''>Select your region</option>
						<option value='EU'>EU</option>
						<option value='US'>US</option>
					</select>
					<select name='realm' value={this.state.realm} onChange={this.handleSelectChange}>
						<option value=''>Select your realm</option>
						{realmList}
					</select>
					<input type="checkbox" id="mythicCheck" onChange={this.handleCheckboxChange}/>
					<label htmlFor="Mythic">Mythic</label>
					{this.state.mythicCheck ?
							<div>
								<input onChange={this.handleChange} type='text' name='lf_mythic' placeholder='Looking for players for Mythic' value={this.state.guild.lf_mythic}/>
								<input onChange={this.handleChange} type='text' name='about_mythic' placeholder='About your Mythic team' value={this.state.guild.about_mythic}/>
							</div> : null
					}
					<input type="checkbox" id="heroicCheck" onChange={this.handleCheckboxChange}/>
					<label htmlFor="Heroic">Heroic</label>
					{this.state.heroicCheck ?
						<div>
							<input onChange={this.handleChange} type='text' name='lf_heroic' placeholder='Looking for players for Heroic' value={this.state.guild.lf_heroic}/>
							<input onChange={this.handleChange} type='text' name='about_heroic' placeholder='About your Heroic team' value={this.state.guild.about_heroic}/>
						</div> : null
					}	
					<input type="checkbox" id="rbgCheck" onChange={this.handleCheckboxChange}/>
					<label htmlFor="RBG">RBG</label>
					{this.state.rbgCheck ?
						<div>
							<input onChange={this.handleChange} type='text' name='lf_rbg' placeholder='Looking for RBGs' value={this.state.guild.lf_rbg}/>
							<input onChange={this.handleChange} type='text' name='about_rbg' placeholder='About your RBG team' value={this.state.guild.about_rbg}/>
						</div> : null
					}
					<input type="submit" value="Submit" />
				</form>
			</div>
		)
	}
}

export default Guild;