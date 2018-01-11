import React, {Component} from 'react'
import ClassList from '../ClassList/ClassList.js';
import './Team.css'

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
  	state.mythicCheck = false;
    state.heroicCheck = false;
    state.rbgCheck = false;
  	state[name] = e.currentTarget.checked
  	this.setState(state)
  }

  handleSubmit = (e) =>{
      e.preventDefault();
      this.postTeam();
      const state = this.state;
      this.props.changeScreen('player')
      this.clearState(state);
  }

  clearState = (state) =>{
  	for(let el in state)
  		state[el] = '';
  	this.setState(state)
  }

  postTeam = () => {
  	fetch('https://guildy.herokuapp.com/create/team', {
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
			<div className='Team'>
				<div className='container'>
					<div className='row'>
						<div className='col-sm title'>
							What class your recruiting and for what team
						</div>
					</div>
					<div className='row'>
						<div className="col-sm">
							<input type="checkbox" id="mythicCheck" onChange={this.handleCheckboxChange} checked={this.state.mythicCheck}/>
							<label htmlFor="Mythic">Mythic</label>
						</div>
						<div className="col-sm">
							<input type="checkbox" id="heroicCheck" onChange={this.handleCheckboxChange} checked={this.state.heroicCheck}/>
							<label htmlFor="Heroic">Heroic</label>
						</div>
						<div className="col-sm">
							<input type="checkbox" id="rbgCheck" onChange={this.handleCheckboxChange} checked={this.state.rbgCheck}/>
							<label htmlFor="RBG">RBG</label>
						</div>
					</div>
					<div className='row'>
						<div className="col-sm">
							<div className={this.state.mythicCheck ? 'show' : 'hide'}>
								<ClassList condense={this.condenseCheckBoxes} whichTeam={'lfMythic'}/>
							</div>
							<div className={this.state.heroicCheck ? 'show' : 'hide'}>
								<ClassList condense={this.condenseCheckBoxes} whichTeam={'lfHeroic'}/>
							</div>
							<div className={this.state.rbgCheck ? 'show' : 'hide'}>
								<ClassList condense={this.condenseCheckBoxes} whichTeam={'lfRbg'}/>
							</div>
						</div>
					</div>
					<div className='row'>
						<div className='col-sm'>
							<div className={this.state.mythicCheck ? 'show' : 'hide'}>
								<textarea onChange={this.handleChange} type='text' name='aboutMythic' placeholder='About your Mythic team' value={this.state.aboutMythic}/>
							</div>
							<div className={this.state.heroicCheck ? 'show' : 'hide'}>
								<textarea onChange={this.handleChange} type='text' name='aboutHeroic' placeholder='About your Heroic team' value={this.state.aboutHeroic}/>
							</div>
							<div className={this.state.rbgCheck ? 'show' : 'hide'}>
								<textarea onChange={this.handleChange} type='text' name='aboutRbg' placeholder='About your RBG team' value={this.state.aboutRbg}/>
							</div>
						</div>
					</div>
					<div className='row'>
						<div className='col-sm'>
							<button className='btn' onClick={this.handleSubmit}>Next</button>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Guild;









