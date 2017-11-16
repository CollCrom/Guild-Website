import React, {Component} from 'react'

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


	render(){
		const tanks = this.state.tanks.map((player, i)=>{
			return (<div key={i}><img src={(player.img_link ? player.img_link : '')})
		})

		return(
			<div id="playerPic">


			</div>

		);
	}
}

export default PlayerRoster;