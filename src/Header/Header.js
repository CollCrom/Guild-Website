import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Homepage from '../Homepage/Homepage.js'
import Contact from '../Contact/Contact.js'
import Roster from '../Roster/Roster.js'
import Create from '../Create/Create.js'
import './Header.css'

class Header extends Component {
	render(){
		return (
			<Router>
				<div>
					<nav>
						<ul className="nav justify-content-center nav-fill">
							<li className="nav-item"><Link to="/">Tribe of the Ascended</Link></li>
							<li className="nav-item"><Link to="/roster">Roster</Link></li>
							<li className="nav-item"><Link to="/contact">Contact</Link></li>
							<li className="nav-item"><Link to="/create">Create New</Link></li>
						</ul>
		      </nav>
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