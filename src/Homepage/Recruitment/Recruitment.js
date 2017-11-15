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
		fetch('http://localhost:9292/view/guild/' + this.props.guildId)
			.then((response)=>(response.json()))
			.then((response)=>{
				const state = this.state;
				state.lfMythic = response.lfMythic.split(',');
				state.lfHeroic = response.lfHeroic.split(',');
				state.lfRBG = response.lfRBG.split(',');
				state.lfMythic.pop();
				state.lfHeroic.pop();
				state.lfRBG.pop();
				state.aboutMythic = response.aboutMythic;
				state.aboutHeroic = response.aboutHeroic;
				state.aboutRBG = response.aboutRBG;
				this.setState(state);
			})
	}

	render(){
		return(
			<div>
				<About currentTeam={this.props.currentTeam} data={this.state}/>
				<LookingFor currentTeam={this.props.currentTeam} data={this.state}/>
			</div>
		);
	}
}

export default Recruitment