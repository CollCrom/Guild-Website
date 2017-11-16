import React, {Component} from 'react'
import Guild from './Guild/Guild.js'
import Player from './Player/Player.js'
import Team from './Team/Team.js'

class Create extends Component {
	constructor(){
		super()
		this.state = {
			guildId: '',
			region: '',
			realm: '',
			realms: [],
			crossRealms: [],
			screen: 'guild'
		}
	}

	setGuildInfo = (region, realm) =>{
		const state = this.state;
		state.region = region;
		state.realm = realm;
		this.setState(state)
	}

	setGuildId = (id) =>{
		const state = this.state;
		state.guildId = id;
		this.setState(state);
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
			state.crossRealms = [];
			for (let i = 0; i < data.realms.length; i++) {
				state.realms.push({name: data.realms[i].name, slug: data.realms[i].slug});
			}
			this.setState(state);
			this.crossRealmListApiCall(this.state.region)
		});
  }

  crossRealmListApiCall = (region) =>{
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
			state.crossRealms = [];
			for (let i = 0; i < data.realms.length; i++) {
				if(data.realms[i].slug === state.realm){
					data.realms[i].connected_realms.forEach((realm)=>{
						state.crossRealms.push(realm)
					})
				}
			}
			this.setState(state);
		});
  }

  chooseScreen = () => {
  	if (this.state.screen === 'guild'){
  		return (<Guild changeScreen={this.changeScreen} setGuildInfo={this.setGuildInfo} setGuildId={this.setGuildId} realmListApiCall={this.realmListApiCall} realms={this.state.realms}/>)
  	}
  	else if (this.state.screen === 'team'){
  		return (<Team changeScreen={this.changeScreen} guildId={this.state.guildId}/>)
  	}
  	else if (this.state.screen === 'player'){
  		return (<Player changeScreen={this.changeScreen} guildId={this.state.guildId} region={this.state.region} crossRealms={this.state.crossRealms}/>)
  	}
  }

  changeScreen = (screen) => {
  	const state = this.state;
  	state.screen = screen;
  	this.setState(state)
  }

	render(){
		return(
			this.chooseScreen()
		)
	}
}

export default Create;