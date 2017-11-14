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
				<form onSubmit={this.handleSubmit}>
					<input onChange={this.handleChange} type='text' name='name' placeholder='Guild Name' value={this.state.guild.name}/>
					<input onChange={this.handleChange} type='text' name='about' placeholder='About your Guild' value={this.state.guild.about}/>

					<select name='region' value={this.state.guild.region} onChange={this.handleSelectChange}>
						<option value=''>Select your region</option>
						<option value='EU'>EU</option>
						<option value='US'>US</option>
					</select>

					<select name='realm' value={this.state.guild.realm} onChange={this.handleSelectChange}>
						<option value=''>Select your realm</option>
						{realmList}
					</select>

					<input type="checkbox" id="mythicCheck" onChange={this.handleCheckboxChange}/>
					<label htmlFor="Mythic">Mythic</label>
					{this.state.mythicCheck ?
							<div>
								<input onChange={this.handleChange} type='text' name='lf_mythic' placeholder='Looking for players for Mythic' value={this.state.guild.lf_mythic}/>
								<div>
									<div>
										<div>
											<input type="checkbox" id="protectionWarrior" />
			      					<label htmlFor="protectionWarrior">Protection Warrior</label>
			      				</div>
			      				<div>
											<input type="checkbox" id="armsWarrior" />
			      						<label htmlFor="armsWarrior">Arms Warrior</label>
			      				</div>
			      				<div>
											<input type="checkbox" id="furyWarrior" />
			      					<label htmlFor="furyWarrior">Fury Warrior</label>
			      				</div>
			      			</div>
			      			<div>
										<div>
											<input type="checkbox" id="protectionPaladin" />
			      					<label htmlFor="protectionPaladin">Protection Paladin</label>
			      				</div>
			      				<div>
											<input type="checkbox" id="holyPaladin" />
			      					<label htmlFor="holyPaladin">Holy Paladin</label>
			      				</div>
			      				<div>
											<input type="checkbox" id="retributionPaladin" />
				      				<label htmlFor="retributionPaladin">Retribution Paladin</label>
			      				</div>
			      			</div>
			      			<div>
										<div>
											<input type="checkbox" id="marksmanHunter" />
			      					<label htmlFor="marksmanHunter">Marksman Hunter</label>
			      				</div>
			      				<div>
											<input type="checkbox" id="survivalHunter" />
			      					<label htmlFor="survivalHunter">Survival Hunter</label>
			      				</div>
			      				<div>
											<input type="checkbox" id="bmHunter" />
			      					<label htmlFor="bmHunter">Beast Mastery Hunter</label>
			      				</div>
			      			</div>
			      			<div>
										<div>
											<input type="checkbox" id="assassinationRogue" />
			      					<label htmlFor="assassinationRogue">Assassination Rogue</label>
			      				</div>
			      				<div>
											<input type="checkbox" id="outlawRogue" />
			      					<label htmlFor="outlawRogue">Outlaw Rogue</label>
			      				</div>
			      				<div>
											<input type="checkbox" id="subtletyRogue" />
			      					<label htmlFor="subtletyRogue">Subtlety Rogue</label>
			      				</div>
			      			</div>
			      			<div>
										<div>
											<input type="checkbox" id="disciplinePriest" />
			      					<label htmlFor="disciplinePriest">Discipline Priest</label>
			      				</div>
			      				<div>
											<input type="checkbox" id="holyPriest" />
			      					<label htmlFor="holyPriest">Holy Priest</label>
			      				</div>
			      				<div>
											<input type="checkbox" id="shadowPriest" />
			      					<label htmlFor="shadowPriest">Shadow Priest</label>
			      				</div>
			      			</div>
			      			<div>
										<div>
											<input type="checkbox" id="frostDeathKnight" />
			      					<label htmlFor="frostDeathKnight">Frost Death Knight</label>
			      				</div>
			      				<div>
											<input type="checkbox" id="bloodDeathKnight" />
			      					<label htmlFor="bloodDeathKnight">Blood Death Knight</label>
			      				</div>
			      				<div>
											<input type="checkbox" id="unholyDeathKnight" />
			      					<label htmlFor="unholyDeathKnight">Unholy Death Knight</label>
			      				</div>
			     				</div>
			      			<div>
										<div>
											<input type="checkbox" id="slementalShaman" />
			      					<label htmlFor="elementalShaman">Elemental Shaman</label>
			      				</div>
			      				<div>
											<input type="checkbox" id="enhancementShaman" />
			      					<label htmlFor="enhancementShaman">Enhancement Shaman</label>
			      				</div>
			   						<div>
											<input type="checkbox" id="restorationShaman" />
			   							<label htmlFor="restorationShaman">Restoration Shaman</label>
	      						</div>
	       					</div>
			      			<div>
										<div>
											<input type="checkbox" id="arcaneMage" />
			      					<label htmlFor="arcaneMage">Arcane Mage</label>
			     					</div>
			   						<div>
											<input type="checkbox" id="fireMage" />
		    							<label htmlFor="fireMage">Fire Mage</label>
		     						</div>
		     						<div>
											<input type="checkbox" id="frostMage" />
		    							<label htmlFor="frostMage">Frost Mage</label>
		    						</div>
			     				</div>
			     				<div>
										<div>
											<input type="checkbox" id="afflictionWarlock" />
			      					<label htmlFor="afflictionWarlock">Affliction Warlock</label>
			      				</div>
			      				<div>
											<input type="checkbox" id="demonologyWarlock" />
			   							<label htmlFor="demonologyWarlock">Demonology Warlock</label>
			   						</div>
			      				<div>
											<input type="checkbox" id="destructionWarlock" />
			   							<label htmlFor="destructionWarlock">Destruction Warlock</label>
			   						</div>
			   					</div>
			      			<div>
										<div>
											<input type="checkbox" id="brewmasterMonk" />
			      					<label htmlFor="brewmasterMonk">Brewmaster Monk</label>
			   						</div>
			   						<div>
											<input type="checkbox" id="mistweaverMonk" />
			      					<label htmlFor="mistweaverMonk">Mistweaver Monk</label>
			      				</div>
			      				<div>
											<input type="checkbox" id="windwalkerMonk" />
			      					<label htmlFor="windwalkerMonk">Windwalker Monk</label>
			   						</div>
			   					</div>
			      			<div>
										<div>
											<input type="checkbox" id="guardianDruid" />
			      					<label htmlFor="guardianDruid">Guardian Druid</label>
			      				</div>
			      				<div>
											<input type="checkbox" id="feralDruid" />
			   							<label htmlFor="feralDruid">Feral Druid</label>
			      				</div>
			      				<div>
											<input type="checkbox" id="balanceDruid" />
			      					<label htmlFor="balanceDruid">Balance Druid</label>
			      				</div>
			      				<div>
											<input type="checkbox" id="restorationDruid" />
			      					<label htmlFor="restorationDruid">Restoration Druid</label>
			      				</div>
			      			</div>
	      					<div>
										<div>
											<input type="checkbox" id="vengeanceDemonHunter" />
	      							<label htmlFor="vengeanceDemonHunter">Vengeance Demon Hunter</label>
	      						</div>
	      						<div>
											<input type="checkbox" id="havocDemonHunter" />
	      							<label htmlFor="havocDemonHunter">Havoc Demon Hunter</label>
	      						</div>
	      					</div>
								</div>
								<input onChange={this.handleChange} type='text' name='about_mythic' placeholder='About your Mythic team' value={this.state.guild.about_mythic}/> </div>: null
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