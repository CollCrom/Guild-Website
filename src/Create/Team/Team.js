import React, {Component} from 'react'
import ClassList from '../ClassList/ClassList.js';

class Guild extends Component {
	constructor(){
		super()
		this.state = {
			mythicCheck: false,
			heroicCheck: false,
			rbgCheck: false,
			lfMythic: '',
			lfHeroic: '',
			lfRbg: '',
			aboutMythic: '',
			aboutHeroic: '',
			aboutRbg: ''
		}
	}
	handleChange = (e) => {
      const state = this.state;
      const name = e.currentTarget.name;
      state[name] = e.currentTarget.value;
      this.setState(state);
  }

  handleCheckboxChange = (e) =>{
  	const state = this.state;
  	const name = e.currentTarget.id
  	state[name] = e.currentTarget.checked
  	this.setState(state)
  }

  handleSubmit = (e) =>{
      e.preventDefault();
      this.postTeam();
      const state = this.state;
      this.clearState(state);
  }

  clearState = (state) =>{
  	for(let el in state)
  		state[el] = '';
  	this.setState(state)
  }

  postTeam = () => {
  	fetch('http://localhost:9292/create/team', {
			method: 'POST',
			body: JSON.stringify({
				lfMythic: this.state.lfMythic,
				lfHeroic: this.state.lfHeroic,
				lfRbg: this.state.lfRbg,
				aboutMythic: this.state.aboutMythic,
				aboutHeroic: this.state.aboutHeroic,
				aboutRbg: this.state.aboutRbg,
				guildId: this.props.guildId
			})
		})
  		.then((response)=>(response.json()))
  		.then((response)=>{
  			this.props.changeScreen('player');
  		})
  }

	condenseCheckBoxes = (state, team) => {
		let trueS = '';
		for(let t in state){
			if(state[t])
			trueS += t + ',';
		}
		const theState = this.state;
		theState[team] = trueS;
		this.setState(theState);
	}


	render(){
		return(
			<div>
				<input type="checkbox" id="mythicCheck" onChange={this.handleCheckboxChange}/>
				<label htmlFor="Mythic">Mythic</label>
				{this.state.mythicCheck ?
					<div>
						<ClassList condense={this.condenseCheckBoxes} whichTeam={'lfMythic'}/>
						<input onChange={this.handleChange} type='text' name='aboutMythic' placeholder='About your Mythic team' value={this.state.aboutMythic}/>
					</div> : null
				}

				<input type="checkbox" id="heroicCheck" onChange={this.handleCheckboxChange}/>
				<label htmlFor="Heroic">Heroic</label>
				{this.state.heroicCheck ?
					<div>
						<ClassList condense={this.condenseCheckBoxes} whichTeam={'lfHeroic'}/>
						<input onChange={this.handleChange} type='text' name='aboutHeroic' placeholder='About your Heroic team' value={this.state.aboutHeroic}/>
					</div> : null
				}	
				
				<input type="checkbox" id="rbgCheck" onChange={this.handleCheckboxChange}/>
				<label htmlFor="RBG">RBG</label>
				{this.state.rbgCheck ?
					<div>
						<ClassList condense={this.condenseCheckBoxes} whichTeam={'lfRbg'}/>
						<input onChange={this.handleChange} type='text' name='aboutRbg' placeholder='About your RBG team' value={this.state.aboutRbg}/>
					</div> : null
				}
				<button onClick={this.handleSubmit}>Next</button>
			</div>
		)
	}
}

export default Guild;









