import React, {Component} from 'react'
import ClassList from '../ClassList/ClassList.js';

class Guild extends Component {
	constructor(){
		super()
		this.state = {
			mythicCheck: false,
			heroicCheck: false,
			rbgCheck: false,
			lf_mythic: '',
			lf_heroic: '',
			lf_rbg: '',
			about_mythic: '',
			about_heroic: '',
			about_rbg: ''
		}
	}
	handleChange = (e) => {
      const state = this.state;
      const name = e.currentTarget.name;
      state.guild[name] = e.currentTarget.value;
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
      this.postTeam(this.state.guild);
      const state = this.state;
      this.clearState(state);
  }

  clearState = (state) =>{
  	for(let el in state.guild)
  		state.guild[el] = '';
  	this.setState(state)
  }

  postTeam = () => {
  	fetch('http://localhost:9292/create', {
			method: 'POST',
			body: JSON.stringify({
				lf_mythic: this.state.lf_mythic,
				lf_heroic: this.state.lf_heroic,
				lf_rbg: this.state.lf_rbg,
				about_mythic: this.state.about_mythic,
				about_heroic: this.state.about_heroic,
				about_rbg: this.state.about_rbg
			})
		})
  		.then((response)=>(response.json()))
		.then((response)=>(()=>{
			this.props.guild(response);
		}))
  }

	condenseCheckBoxes = (state) => {
		let trueS = '';
		for(let t in state){
			if(state[t])
			trueS += t + ',';
		}
	}


	render(){
		return(
			<div>
				<input type="checkbox" id="mythicCheck" onChange={this.handleCheckboxChange}/>
				<label htmlFor="Mythic">Mythic</label>
				{this.state.mythicCheck ?
						<div>
							<ClassList/>
							<textarea onChange={this.handleChange} type='text' name='about_mythic' placeholder='About your Mythic team' value={this.state.about_mythic}/>
						</div> : null
				}

				<input type="checkbox" id="heroicCheck" onChange={this.handleCheckboxChange}/>
				<label htmlFor="Heroic">Heroic</label>
				{this.state.heroicCheck ?
					<div>
						<ClassList/>
						<textarea onChange={this.handleChange} type='text' name='about_heroic' placeholder='About your Heroic team' value={this.state.about_heroic}/>
					</div> : null
				}	
				
				<input type="checkbox" id="rbgCheck" onChange={this.handleCheckboxChange}/>
				<label htmlFor="RBG">RBG</label>
				{this.state.rbgCheck ?
					<div>
						<ClassList/>
						<textarea onChange={this.handleChange} type='text' name='about_rbg' placeholder='About your RBG team' value={this.state.about_rbg}/>
					</div> : null
				}
				<button onClick={this.handleSubmit}>Next</button>
			</div>
		)
	}
}

export default Guild;









