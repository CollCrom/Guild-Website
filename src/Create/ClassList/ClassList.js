import React, {Component} from 'react'

class ClassList extends Component {
	constructor(props){
		super(props);
		this.state = {
			protectionWarrior: false,
			armsWarrior: false,
			furyWarrior: false,
			protectionPaladin: false,
			holyPaladin: false,
			retributionPaladin: false,
			marksmanHunter: false,
			survivalHunter: false,
			bmHunter: false,
			assassinationRogue: false,
			outlawRogue: false,
			subtletyRogue: false,
			disciplinePriest: false,
			holyPriest: false,
			shadowPriest: false,
			frostDeathKnight: false,
			bloodDeathKnight: false,
			unholyDeathKnight: false,
			slementalShaman: false,
			enhancementShaman: false,
			restorationShaman: false,
			arcaneMage: false,
			fireMage: false,
			frostMage: false,
			afflictionWarlock: false,
			demonologyWarlock: false,
			destructionWarlock: false,
			brewmasterMonk: false,
			mistweaverMonk: false,
			windwalkerMonk: false,
			guardianDruid: false,
			feralDruid: false,
			balanceDruid: false,
			restorationDruid: false,
			vengeanceDemonHunter: false,
			havocDemonHunter: false
		}
	}

	onCheckBox = (e) => {
		const state = this.state;
		const name = e.currentTarget.id;
		state[name] = e.currentTarget.checked;
		this.setState(state);
		console.log(this.state);
	}

	render(){
		return(
			<div>
				<div>
					<div>
						<div>
							<input type="checkbox" id="protectionWarrior" onChange={this.onCheckBox}/>
							<label htmlFor="protectionWarrior">Protection Warrior</label>
						</div>
						<div>
							<input type="checkbox" id="armsWarrior" onChange={this.onCheckBox}/>
							<label htmlFor="armsWarrior">Arms Warrior</label>
						</div>
						<div>
							<input type="checkbox" id="furyWarrior" onChange={this.onCheckBox}/>
							<label htmlFor="furyWarrior">Fury Warrior</label>
						</div>
					</div>
					<div>
						<div>
							<input type="checkbox" id="protectionPaladin" onChange={this.onCheckBox}/>
							<label htmlFor="protectionPaladin">Protection Paladin</label>
						</div>
						<div>
							<input type="checkbox" id="holyPaladin" onChange={this.onCheckBox}/>
							<label htmlFor="holyPaladin">Holy Paladin</label>
						</div>
						<div>
							<input type="checkbox" id="retributionPaladin" onChange={this.onCheckBox}/>
							<label htmlFor="retributionPaladin">Retribution Paladin</label>
						</div>
					</div>
					<div>
						<div>
							<input type="checkbox" id="marksmanHunter" onChange={this.onCheckBox}/>
							<label htmlFor="marksmanHunter">Marksman Hunter</label>
						</div>
						<div>
							<input type="checkbox" id="survivalHunter" onChange={this.onCheckBox}/>
							<label htmlFor="survivalHunter">Survival Hunter</label>
						</div>
						<div>
							<input type="checkbox" id="bmHunter" onChange={this.onCheckBox}/>
							<label htmlFor="bmHunter">Beast Mastery Hunter</label>
						</div>
					</div>
					<div>
						<div>
							<input type="checkbox" id="assassinationRogue" onChange={this.onCheckBox}/>
							<label htmlFor="assassinationRogue">Assassination Rogue</label>
						</div>
						<div>
							<input type="checkbox" id="outlawRogue" onChange={this.onCheckBox}/>
							<label htmlFor="outlawRogue">Outlaw Rogue</label>
						</div>
						<div>
							<input type="checkbox" id="subtletyRogue" onChange={this.onCheckBox}/>
							<label htmlFor="subtletyRogue">Subtlety Rogue</label>
						</div>	
					</div>
					<div>
						<div>
							<input type="checkbox" id="disciplinePriest" onChange={this.onCheckBox}/>
							<label htmlFor="disciplinePriest">Discipline Priest</label>
						</div>
						<div>
							<input type="checkbox" id="holyPriest" onChange={this.onCheckBox}/>
							<label htmlFor="holyPriest">Holy Priest</label>
						</div>
						<div>
							<input type="checkbox" id="shadowPriest" onChange={this.onCheckBox}/>
							<label htmlFor="shadowPriest">Shadow Priest</label>
						</div>
					</div>
					<div>
						<div>
							<input type="checkbox" id="frostDeathKnight" onChange={this.onCheckBox}/>
							<label htmlFor="frostDeathKnight">Frost Death Knight</label>
						</div>
						<div>
							<input type="checkbox" id="bloodDeathKnight" onChange={this.onCheckBox}/>
							<label htmlFor="bloodDeathKnight">Blood Death Knight</label>
						</div>
						<div>
							<input type="checkbox" id="unholyDeathKnight" onChange={this.onCheckBox}/>
							<label htmlFor="unholyDeathKnight">Unholy Death Knight</label>
						</div>
					</div>
					<div>
						<div>
							<input type="checkbox" id="slementalShaman" onChange={this.onCheckBox}/>
							<label htmlFor="elementalShaman">Elemental Shaman</label>
						</div>
						<div>
							<input type="checkbox" id="enhancementShaman" onChange={this.onCheckBox}/>
							<label htmlFor="enhancementShaman">Enhancement Shaman</label>
						</div>
						<div>
							<input type="checkbox" id="restorationShaman" onChange={this.onCheckBox}/>
							<label htmlFor="restorationShaman">Restoration Shaman</label>
						</div>
					</div>
					<div>
						<div>
							<input type="checkbox" id="arcaneMage" onChange={this.onCheckBox}/>
							<label htmlFor="arcaneMage">Arcane Mage</label>
						</div>
						<div>
							<input type="checkbox" id="fireMage" onChange={this.onCheckBox}/>
							<label htmlFor="fireMage">Fire Mage</label>
						</div>
						<div>
							<input type="checkbox" id="frostMage" onChange={this.onCheckBox}/>
							<label htmlFor="frostMage">Frost Mage</label>
						</div>
					</div>
					<div>
						<div>
							<input type="checkbox" id="afflictionWarlock" onChange={this.onCheckBox}/>
							<label htmlFor="afflictionWarlock">Affliction Warlock</label>
						</div>
						<div>
							<input type="checkbox" id="demonologyWarlock" onChange={this.onCheckBox}/>
							<label htmlFor="demonologyWarlock">Demonology Warlock</label>
						</div>
						<div>
							<input type="checkbox" id="destructionWarlock" onChange={this.onCheckBox}/>
							<label htmlFor="destructionWarlock">Destruction Warlock</label>
						</div>
					</div>
					<div>
						<div>
							<input type="checkbox" id="brewmasterMonk" onChange={this.onCheckBox}/>
							<label htmlFor="brewmasterMonk">Brewmaster Monk</label>
						</div>
						<div>
							<input type="checkbox" id="mistweaverMonk" onChange={this.onCheckBox}/>
							<label htmlFor="mistweaverMonk">Mistweaver Monk</label>
						</div>
						<div>
							<input type="checkbox" id="windwalkerMonk" onChange={this.onCheckBox}/>
							<label htmlFor="windwalkerMonk">Windwalker Monk</label>
						</div>
					</div>
					<div>
						<div>
							<input type="checkbox" id="guardianDruid" onChange={this.onCheckBox}/>
							<label htmlFor="guardianDruid">Guardian Druid</label>
						</div>
						<div>
							<input type="checkbox" id="feralDruid" onChange={this.onCheckBox}/>
							<label htmlFor="feralDruid">Feral Druid</label>
						</div>
						<div>
							<input type="checkbox" id="balanceDruid" onChange={this.onCheckBox}/>
							<label htmlFor="balanceDruid">Balance Druid</label>
						</div>
						<div>
							<input type="checkbox" id="restorationDruid" onChange={this.onCheckBox}/>
							<label htmlFor="restorationDruid">Restoration Druid</label>
						</div>
					</div>
					<div>
						<div>
							<input type="checkbox" id="vengeanceDemonHunter" onChange={this.onCheckBox}/>
							<label htmlFor="vengeanceDemonHunter">Vengeance Demon Hunter</label>
						</div>
						<div>
							<input type="checkbox" id="havocDemonHunter" onChange={this.onCheckBox}/>
							<label htmlFor="havocDemonHunter">Havoc Demon Hunter</label>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default ClassList;