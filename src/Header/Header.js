import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Homepage from '../Homepage/Homepage.js'
import Contact from '../Contact/Contact.js'
import Roster from '../Roster/Roster.js'
import Create from '../Create/Create.js'

class Header extends Component {
	render(){
		return (
			<Router>
				<div>

					<ul>
						<li><Link to="/">Tribe of the Ascended</Link></li>
						<li><Link to="/roster">Roster</Link></li>
						<li><Link to="/contact">Contact</Link></li>
						<li><Link to="/create">Create New</Link></li>
					</ul>

					<Route exact path="/" component={() => (<Homepage currentTeam={this.props.currentTeam} changeTeamInfo={this.props.changeTeamInfo}/>)}/>
	      	<Route path="/roster" component={() => (<Roster currentTeam={this.props.currentTeam} changeTeamInfo={this.props.changeTeamInfo} />)}/>
	      	<Route path="/contact" component={Contact}/>
	      	<Route path="/create" component={Create}/>
	      </div>
			</Router>
		);
	}
}

export default Header;