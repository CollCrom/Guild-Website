import React, {Component} from 'react'
import './PlayerRoster.css'

class PlayerRoster extends Component {
	constructor(props) {
		super(props);
		this.state = {
			players: [],
			currentPlayer: '',
			currentPlayerPic: '',
			tanks: [],
			healers: [],
			ranged: [],
			melee: []
		}
	}

	componentWillReceiveProps(props) {
		const state = this.state;
		state.players = this.props.data['players' + this.props.currentTeam];
		this.setState(state);
		this.filterRoles();
		console.log(this.state)
	}

	filterRoles = () => {
		const state = this.state;
		for (let i = 0; i < state.players.length; i++) {
			if (state.players[i].role === 'Tank') {
				state.tanks.push(state.players[i]);
			}else if (state.players[i].role === 'Healer') {
				state.healers.push(state.players[i]);
			}else if (state.players[i].role === 'Ranged') {
				state.ranged.push(state.players[i]);
			}else if (state.players[i].role === 'Melee') {
				state.melee.push(state.players[i]);
			};
		}
		this.setState(state);
	}

	setChosenPlayer = (player) => {
		console.log(player.currentTarget);
	}


	render(){
		const tanks = this.state.tanks.map((player, i)=>{
			return (<div className="player" key={i} onClick={this.setChosenPlayer}><img src={ player.img_link ? player.img_link : '' } /><h5>{player.player_name}</h5></div>)
		})
		const healers = this.state.healers.map((player, i)=>{
			return (<div className="player" key={i} onClick={this.setChosenPlayer}><img src={ player.img_link ? player.img_link : '' } /><h5>{player.player_name}</h5></div>)
		})
		const melee = this.state.melee.map((player, i)=>{
			return (<div className="player" key={i} onClick={this.setChosenPlayer}><img src={ player.img_link ? player.img_link : '' } /><h5>{player.player_name}</h5></div>)
		})
		const ranged = this.state.ranged.map((player, i)=>{
			return (<div className="player" key={i} onClick={this.setChosenPlayer}><img src={ player.img_link ? player.img_link : '' } /><h5>{player.player_name}</h5></div>)
		})

		return(
			<div id="players">
				<h2>Tanks</h2>
				{tanks}
				<h2>Healers</h2>
				{healers}
				<h2>Melee DPS</h2>
				{melee}
				<h2>Ranged DPS</h2>
				{ranged}
			</div>

		);
	}
}

export default PlayerRoster;