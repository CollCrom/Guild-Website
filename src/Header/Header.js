import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

class Head extends Component {
	render(){
		return (
			<div>
				<div>
					<a href='test'>Tribe of the Ascended</a>
					<a href='test'>Roster</a>
					<a href='test'>Contact</a>
				</div>
			</div>
		);
	}
}

export default Head;