import React, {Component} from 'react'

class Guild extends Component {
	constructor(){
		super()
		this.state = {
			guild: {
				name: '',
				about: '',
				realm: '',
				region: '',
				lf_mythic: '',
				lf_heroic: '',
				lf_rbg: '',
				about_mythic: '',
				about_heroic: '',
				about_rbg: ''
			},
			realms: [],
			region: ''
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
  		state[name] = e.currentTarget.value;
  		this.realmListApiCall(state[name]);
  	}
  	else{
  		state.guild[name] = e.currentTarget.value;
			this.setState(state);
  	}
  }
  handleSubmit = (e) =>{
      e.preventDefault();
      const state = this.state;
      for(let el in state.guild){
      	state.guild[el] = '';
      }
      this.setState(state);
  }

  realmListApiCall = (region) => {
  	let theURI;
  	if (region === 'US') {
  		theURI = 'https://us.api.battle.net/wow/realm/status?locale=en_US&apikey=7hbm4m47wu8hh68uh3j8zsfps37xtvb2';
  	}else if (region === 'EU') {
  		theURI = 'https://eu.api.battle.net/wow/realm/status?locale=en_GB&apikey=7hbm4m47wu8hh68uh3j8zsfps37xtvb2';
  	}
  	fetch(theURI)
		.then((response)=>(response.json()))
		.then((data)=>{
			console.log(data.realms)
			const state = this.state;
			state.realms = [];
			for (let i = 0; i < data.realms.length; i++) {
				state.realms.push({name: data.realms[i].name, slug: data.realms[i].slug});
			}
			this.setState(state);
		});
  }


	render(){
		const realmList = this.state.realms.map((realm, i)=>{
			return(
				<option key={i} value={realm.slug}>{realm.name}</option>
			)
		})
		return(<div>
				<form onSubmit={this.handleSubmit}>
					<input onChange={this.handleChange} type='text' name='name' placeholder='Guild Name' value={this.state.guild.name}/>
					<input onChange={this.handleChange} type='text' name='about' placeholder='About your Guidl' value={this.state.guild.about}/>
					<select name='region' value={this.state.region} onChange={this.handleSelectChange}>
						<option value=''>Select your region</option>
						<option value='EU'>EU</option>
						<option value='US'>US</option>
					</select>
					<select name='realm' value={this.state.realm} onChange={this.handleSelectChange}>
						<option value=''>Select your realm</option>
						{realmList}
					</select>
					<input onChange={this.handleChange} type='text' name='lf_mythic' placeholder='Looking for players for Mythic' value={this.state.guild.lf_mythic}/>
					<input onChange={this.handleChange} type='text' name='about_mythic' placeholder='About your Mythic team' value={this.state.guild.about_mythic}/>
					<input onChange={this.handleChange} type='text' name='lf_heroic' placeholder='Looking for players for Heroic' value={this.state.guild.lf_heroic}/>
					<input onChange={this.handleChange} type='text' name='about_heroic' placeholder='About your Heroic team' value={this.state.guild.about_heroic}/>
					<input onChange={this.handleChange} type='text' name='lf_rbg' placeholder='Looking for RBGs' value={this.state.guild.lf_rbg}/>
					<input onChange={this.handleChange} type='text' name='about_rbg' placeholder='About your RBG team' value={this.state.guild.about_rbg}/>
					<input type="submit" value="Submit" />
				</form>
			</div>)
	}
}

export default Guild;