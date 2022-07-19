
import React from 'react';
import ReactDOM from 'react-dom/client';

class SideMenu extends React.Component {
	constructor(props) {
		super(props);
		this.state = { time: 0 };
		this.update_time = this.update_time.bind(this);
		this.start_time = new Date();
	}

	update_time() {
		setInterval( () => {
			var now = new Date();
			var hours = parseInt(Math.abs(now - this.start_time) / (1000 * 60 * 60) % 24);
			var min = parseInt(Math.abs(now.getTime() - this.start_time.getTime()) / (1000 * 60) % 60);
			var sec = parseInt(Math.abs(now.getTime() - this.start_time.getTime()) / (1000) % 60); 
			var time = String(min + " . " + sec);
			this.setState({ time: time});
			}, 500);
	}

	render() {
		return (
			<div className="side-menu">
				{this.update_time()}
				<p className='side-menu__move'>{ this.props.move }</p>


				<div className='score'>

					<p className='size-menu__time'>{this.state.time}</p>

					<div className= { (this.props.move%2===0) ? "player-score" : "player-score__selected player-score"}>
						<img src='../assets/dot_black.svg' alt='black player icon' />
						<p>Captured: 0</p>
					</div>

					<div className= { (this.props.move%2!=0) ? "player-score" : "player-score__selected player-score"}>
						<img src='../assets/dot_white.svg' alt='white player icon' />
						<p>Captured: 0</p>
					</div>
				</div>
			</div>
		)
	}
}

export default SideMenu;
