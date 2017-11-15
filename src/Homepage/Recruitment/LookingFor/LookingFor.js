import React, {Component} from 'react'

class LookingFor extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
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
			elementalShaman: false,
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

	componentWillReceiveProps(props) {
		console.log(this.props.data)
		const state = this.state;
		state.data = this.props.data['lf' + this.props.currentTeam];
		this.setState(state);
		this.filterThrough();
	}

	filterThrough = () => {
		const state = this.state;
		for (let i = 0; i < state.data.length; i++){
			state[state.data[i]] = true;
		}
		this.setState(state);
	}

	render(){
		return(
			<div>
				{this.props.currentTeam}<br/>
				<div>
					<div>
						<img alt="spec" src="http://wow.zamimg.com/images/wow/icons/large/ability_warrior_defensivestance.jpg" id="protectionWarrior" className={this.state.protectionWarrior ? 'filter' : 'noFilter'}/>
					</div>
					<div>
						<img alt="spec" src="http://wow.zamimg.com/images/wow/icons/large/ability_warrior_savageblow.jpg" id="armsWarrior" className={this.state.armsWarrior ? 'filter' : 'noFilter'}/>
					</div>
					<div>
						<img alt="spec" src="http://wow.zamimg.com/images/wow/icons/large/ability_warrior_innerrage.jpg" id="furyWarrior" className={this.state.furyWarrior ? 'filter' : 'noFilter'}/>
					</div>
				</div>
				<div>
					<div>
						<img alt="spec" src="http://wow.zamimg.com/images/wow/icons/large/ability_paladin_shieldofthetemplar.jpg" id="protectionPaladin" className={this.state.protectionPaladin ? 'filter' : 'noFilter'}/>
					</div>
					<div>
						<img alt="spec" src="http://wow.zamimg.com/images/wow/icons/large/spell_holy_holybolt.jpg" id="holyPaladin" className={this.state.holyPaladin ? 'filter' : 'noFilter'}/>
					</div>
					<div>
						<img alt="spec" src="http://wow.zamimg.com/images/wow/icons/large/spell_holy_auraoflight.jpg" id="retributionPaladin" className={this.state.retributionPaladin ? 'filter' : 'noFilter'}/>
					</div>
				</div>
				<div>
					<div>
						<img alt="spec" src="http://wow.zamimg.com/images/wow/icons/large/ability_hunter_focusedaim.jpg" id="marksmanHunter" className={this.state.marksmanHunter ? 'filter' : 'noFilter'}/>
					</div>
					<div>
						<img alt="spec" src="http://wow.zamimg.com/images/wow/icons/large/ability_hunter_camouflage.jpg" id="survivalHunter" className={this.state.survivalHunter ? 'filter' : 'noFilter'}/>
					</div>
					<div>
						<img alt="spec" src="http://wow.zamimg.com/images/wow/icons/large/ability_hunter_bestialdiscipline.jpg" id="bmHunter" className={this.state.bmHunter ? 'filter' : 'noFilter'}/>
					</div>
				</div>
				<div>
					<div>
						<img alt="spec" src="http://wow.zamimg.com/images/wow/icons/large/ability_rogue_deadlybrew.jpg" id="assassinationRogue" className={this.state.assassinationRogue ? 'filter' : 'noFilter'}/>
					</div>
					<div>
						<img alt="spec" src="http://wow.zamimg.com/images/wow/icons/large/inv_sword_30.jpg" id="outlawRogue" className={this.state.outlawRogue ? 'filter' : 'noFilter'}/>
					</div>
					<div>
						<img alt="spec" src="http://wow.zamimg.com/images/wow/icons/large/ability_stealth.jpg" id="subtletyRogue" className={this.state.subtletyRogue ? 'filter' : 'noFilter'}/>
					</div>	
				</div>
				<div>
					<div>
						<img alt="spec" src="http://wow.zamimg.com/images/wow/icons/large/spell_holy_powerwordshield.jpg" id="disciplinePriest" className={this.state.disciplinePriest ? 'filter' : 'noFilter'}/>
					</div>
					<div>
						<img alt="spec" src="http://wow.zamimg.com/images/wow/icons/large/spell_holy_guardianspirit.jpg" id="holyPriest" className={this.state.holyPriest ? 'filter' : 'noFilter'}/>
					</div>
					<div>
						<img alt="spec" src="http://wow.zamimg.com/images/wow/icons/large/spell_shadow_shadowwordpain.jpg" id="shadowPriest" className={this.state.shadowPriest ? 'filter' : 'noFilter'}/>
					</div>
				</div>
				<div>
					<div>
						<img alt="spec" src="http://wow.zamimg.com/images/wow/icons/large/spell_deathknight_frostpresence.jpg" id="frostDeathKnight" className={this.state.frostDeathKnight ? 'filter' : 'noFilter'}/>
					</div>
					<div>
						<img alt="spec" src="http://wow.zamimg.com/images/wow/icons/large/spell_deathknight_bloodpresence.jpg" id="bloodDeathKnight" className={this.state.bloodDeathKnight ? 'filter' : 'noFilter'}/>
					</div>
					<div>
						<img alt="spec" src="http://wow.zamimg.com/images/wow/icons/large/spell_deathknight_unholypresence.jpg" id="unholyDeathKnight" className={this.state.unholyDeathKnight ? 'filter' : 'noFilter'}/>
					</div>
				</div>
				<div>
					<div>
						<img alt="spec" src="http://wow.zamimg.com/images/wow/icons/large/spell_nature_lightning.jpg" id="elementalShaman" className={this.state.elementalShaman ? 'filter' : 'noFilter'}/>
					</div>
					<div>
						<img alt="spec" src="http://wow.zamimg.com/images/wow/icons/large/spell_shaman_improvedstormstrike.jpg" id="enhancementShaman" className={this.state.enhancementShaman ? 'filter' : 'noFilter'}/>
					</div>
					<div>
						<img alt="spec" src="http://wow.zamimg.com/images/wow/icons/large/spell_nature_magicimmunity.jpg" id="restorationShaman" className={this.state.restorationShaman ? 'filter' : 'noFilter'}/>
					</div>
				</div>
				<div>
					<div>
						<img alt="spec" src="http://wow.zamimg.com/images/wow/icons/large/spell_holy_magicalsentry.jpg" id="arcaneMage" className={this.state.arcaneMage ? 'filter' : 'noFilter'}/>
					</div>
					<div>
						<img alt="spec" src="http://wow.zamimg.com/images/wow/icons/large/spell_fire_firebolt02.jpg" id="fireMage" className={this.state.fireMage ? 'filter' : 'noFilter'}/>
					</div>
					<div>
						<img alt="spec" src="http://wow.zamimg.com/images/wow/icons/large/spell_frost_frostbolt02.jpg" id="frostMage" className={this.state.frostMage ? 'filter' : 'noFilter'}/>
					</div>
				</div>
				<div>
					<div>
						<img alt="spec" src="http://wow.zamimg.com/images/wow/icons/large/spell_shadow_deathcoil.jpg" id="afflictionWarlock" className={this.state.afflictionWarlock ? 'filter' : 'noFilter'}/>
					</div>
					<div>
						<img alt="spec" src="http://wow.zamimg.com/images/wow/icons/large/spell_shadow_metamorphosis.jpg" id="demonologyWarlock" className={this.state.demonologyWarlock ? 'filter' : 'noFilter'}/>
					</div>
					<div>
						<img alt="spec" src="http://wow.zamimg.com/images/wow/icons/large/spell_shadow_rainoffire.jpg" id="destructionWarlock" className={this.state.destructionWarlock ? 'filter' : 'noFilter'}/>
					</div>
				</div>
				<div>
					<div>
						<img alt="spec" src="http://wow.zamimg.com/images/wow/icons/large/spell_monk_brewmaster_spec.jpg" id="brewmasterMonk" className={this.state.brewmasterMonk ? 'filter' : 'noFilter'}/>
					</div>
					<div>
						<img alt="spec" src="http://wow.zamimg.com/images/wow/icons/large/spell_monk_mistweaver_spec.jpg" id="mistweaverMonk" className={this.state.mistweaverMonk ? 'filter' : 'noFilter'}/>
					</div>
					<div>
						<img alt="spec" src="http://wow.zamimg.com/images/wow/icons/large/spell_monk_windwalker_spec.jpg" id="windwalkerMonk" className={this.state.windwalkerMonk ? 'filter' : 'noFilter'}/>
					</div>
				</div>
				<div>
					<div>
						<img alt="spec" src="http://wow.zamimg.com/images/wow/icons/large/ability_racial_bearform.jpg" id="guardianDruid" className={this.state.guardianDruid ? 'filter' : 'noFilter'}/>
					</div>
					<div>
						<img alt="spec" src="http://wow.zamimg.com/images/wow/icons/large/ability_druid_catform.jpg" id="feralDruid" className={this.state.feralDruid ? 'filter' : 'noFilter'}/>
					</div>
					<div>
						<img alt="spec" src="http://wow.zamimg.com/images/wow/icons/large/spell_nature_starfall.jpg" id="balanceDruid" className={this.state.balanceDruid ? 'filter' : 'noFilter'}/>
					</div>
					<div>
						<img alt="spec" src="http://wow.zamimg.com/images/wow/icons/large/spell_nature_healingtouch.jpg" id="restorationDruid" className={this.state.restorationDruid ? 'filter' : 'noFilter'}/>
					</div>
				</div>
				<div>
					<div>
						<img alt="spec" src="http://wow.zamimg.com/images/wow/icons/large/ability_demonhunter_spectank.jpg" id="vengeanceDemonHunter" className={this.state.vengeanceDemonHunter ? 'filter' : 'noFilter'}/>
					</div>
					<div>
						<img alt="spec" src="http://wow.zamimg.com/images/wow/icons/large/ability_demonhunter_specdps.jpg" id="havocDemonHunter" className={this.state.havocDemonHunter ? 'filter' : 'noFilter'}/>
					</div>
				</div>
			</div>
		);
	}
}

export default LookingFor