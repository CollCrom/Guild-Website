import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
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
  		state.guildId = e.currentTarget.value;
  		state.guildName = state.guilds[e.currentTarget.value - 1].name;
  		this.setState(state);
  	}

	render(){

		const guildList = this.state.guilds.map((guild)=>{
			return(
				<option key={guild.id} value={guild.id}>{guild.name}</option>
			)
		})

		return (
			<Router>
				<div>
					<nav>
						<ul className="nav justify-content-center nav-fill">
							<Link to="/">
								<li className="nav-item">Tribe of the Ascended</li>
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
							<select name='guild' onChange={this.handleSelectChange}>
								{guildList}
							</select>
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