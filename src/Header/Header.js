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
							<Link to="/">
								<li className="nav-item">Tribe of the Ascended</li>
							</Link>
							<Link to="/roster">
								<li className="nav-item">Roster</li>
							</Link>
							<Link to="/contact">
								<li className="nav-item">Contact</li>
							</Link>
							<Link to="/create">
								<li className="nav-item">Create New</li>
							</Link>
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