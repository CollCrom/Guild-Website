import React, {Component} from 'react'
import About from './About/About.js'
import LookingFor from './LookingFor/LookingFor.js'

class Recruitment extends Component {
	constructor(props) {
		super(props);
		this.state = {
			lfMythic: [],
			lfHeroic: [],
			lfRBG: [],
			aboutMythic: '',
			aboutHeroic: '',
			aboutRBG: ''
		}
	}

	componentDidMount() {
		fetch('https://guildy.herokuapp.com/view/guild/' + this.props.guildId)
			.then((response)=>(response.json()))
			.then((response)=>{
				const state = this.state;
				if (response.lfMythic) {
					state.lfMythic = response.lfMythic.split(',');
					state.lfMythic.pop();
				}else {
					state.lfMythic = '';
				}
				if (response.lfHeroic) {
					state.lfHeroic = response.lfHeroic.split(',');
					state.lfHeroic.pop();
				}else {
					state.lfHeroic = '';
				}
				if (response.lfRBG) {
					state.lfRBG = response.lfRBG.split(',');
					state.lfRBG.pop();
				}else {
					state.lfRBG = '';
				}
				state.aboutMythic = response.aboutMythic;
				state.aboutHeroic = response.aboutHeroic;
				state.aboutRBG = response.aboutRBG;
				this.setState(state);
			})
	}

	render(){
		return(
			<div className="bigContainer">
				<About currentTeam={this.props.currentTeam} data={this.state}/>
				<LookingFor currentTeam={this.props.currentTeam} data={this.state}/>
			</div>
		);
	}
}

export default Recruitment