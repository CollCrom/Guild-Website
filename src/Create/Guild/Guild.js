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
			}
			realms: [],
			region: ''
		}
	}
	componentDidMount = () =>{

	}
	handleChange = (e) => {
      const state = this.state;
      const name = e.currentTarget.name;
      state.guild[name] = e.currentTarget.value;
      this.setState(state);
  }

  handleSubmit = (e) =>{
      e.preventDefault();
      const state = this.state;
      for(el in state.guild){
      	state.guild[el] = '';
      }
      this.setState(state);
  }

  realmListApiCall = (region) => {
  	if (region === 'US') {
  		const theURI = 'https://us.api.battle.net/wow/realm/status?locale=en_US&apikey=7hbm4m47wu8hh68uh3j8zsfps37xtvb2';
  	}else if (region === 'EU') {
  		const theURI = 'https://eu.api.battle.net/wow/realm/status?locale=en_GB&apikey=7hbm4m47wu8hh68uh3j8zsfps37xtvb2';
  	}
  	fetch(theURI)
		.then((response)=>(response.json()))
		.then((data)=>{
			const state = this.state;
			state.realms = [];
			for (let i = 0; i < data.length; i++) {
				state.realms.push({name: data[i].name, slug: data[i].slug});
			}
			this.setState(state);
		});
  }


	render(){
		return
			<div>
				<form>
					<input onChange={this.handleChange} type='text' name='name' placeholder='Guild Name' value={this.state.name}>
					<input onChange={this.handleChange} type='text' name='about' placeholder='About your Guidl' value={this.state.about}>
					<select>
						<option value='EU'>EU</option>
						<option value='US'>US</option>
						<option value='KR'>KR</option>
						<option value='TW'>Oceanic</option>
					</select>
					<input onChange={this.handleChange} type='text' name='lf_mythic' placeholder='Looking for players for Mythic' value={this.state.lf_mythic}>
					<input onChange={this.handleChange} type='text' name='about_mythic' placeholder='About your Mythic team' value={this.state.about_mythic}>
					<input onChange={this.handleChange} type='text' name='lf_heroic' placeholder='Looking for players for Heroic' value={this.state.lf_heroic}>
					<input onChange={this.handleChange} type='text' name='about_heroic' placeholder='About your Heroic team' value={this.state.about_heroic}>
					<input onChange={this.handleChange} type='text' name='lf_rbg' placeholder='Looking for RBGs' value={this.state.lf_rbg}>
					<input onChange={this.handleChange} type='text' name='about_rbg' placeholder='About your RBG team' value={this.state.about_rbg}>
					<input type="submit" value="Submit" />
				</form>
			</div>
	}
}

export default Guild;