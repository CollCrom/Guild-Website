import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Homepage from '../Homepage/Homepage.js'
import Contact from '../Contact/Contact.js'
import Roster from '../Roster/Roster.js'

class Header extends Component {
	render(){
		return (
			<Router>
				<div>
					<ul>
						<li><Link to="/">Tribe of the Ascended</Link></li>
						<li><Link to="/roster">Roster</Link></li>
						<li><Link to="/contact">Contact</Link></li>
					</ul>

					<Route exact path="/" component={Homepage}/>
	      	<Route path="/roster" component={Roster}/>
	      	<Route path="/contact" component={Contact}/>
	      </div>
			</Router>
		);
	}
}

export default Header;