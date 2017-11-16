import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Select from 'react-styled-select'
import Homepage from '../Homepage/Homepage.js'
import About from '../About/About.js'
import Roster from '../Roster/Roster.js'
import Create from '../Create/Create.js'
import './Header.css'

class Header extends Component {
	constructor() {
		super();
		this.state = {
			guildId: 1,
			guildName: '',
			guilds: []
		}
	}

	componentDidMount() {
		fetch('http://localhost:9292/view/guilds')
			.then((response)=>(response.json()))
			.then((response)=>{
				const state = this.state;
				for (let i = 0; i < response.array.length; i++){
					state.guilds.push(response.array[i])
				}
				state.guildName = response.array[0].name;
				this.setState(state);
			})
	}

	handleSelectChange = (e) =>{
  	const state = this.state;
		state.guildId = e;
		state.guildName = state.guilds[e-1].name
		this.setState(state);
		console.log(state)
  }

	render(){

		const guildList = this.state.guilds.map((guild)=>{
			return(
				{label: guild.name, value: guild.id}
			)
		})

		return (
			<Router>
				<div>
					<nav>
						<ul className="nav justify-content-center nav-fill">
							<Link to="/">
								<li className="nav-item">{this.state.guildName}</li>
							</Link>
							<Link to="/roster">
								<li className="nav-item">Roster</li>
							</Link>
							<Link to="/about">
								<li className="nav-item">About</li>
							</Link>
							<Link to="/create">
								<li className="nav-item">Create New</li>
							</Link>
							<Select
								className='select'
								options={guildList}
								placeholder='Select your Guild'
								value={this.state.guildId}
								onChange={this.handleSelectChange}
								searchable
							/>

						</ul>
		      </nav>
			<Route exact path="/" component={() => (<Homepage guildId={this.state.guildId} currentTeam={this.props.currentTeam} changeTeamInfo={this.props.changeTeamInfo}/>)}/>
	      	<Route path="/roster" component={() => (<Roster guildId={this.state.guildId} currentTeam={this.props.currentTeam} changeTeamInfo={this.props.changeTeamInfo} />)}/>
	      	<Route path="/about" component={About}/>
	      	<Route path="/create" component={Create}/>
      	</div>
			</Router>
		);
	}
}

export default Header;