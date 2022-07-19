
import React from 'react';
import ReactDOM from 'react-dom/client';
import Board from './Board.jsx';
import SideMenu from './SideMenu.jsx';



class App extends React.Component {
	constructor(props){
		super(props);
		this.state = { move: 0 };
		this._increment_move = this._increment_move.bind(this);
	}

	_increment_move() {
		this.setState({ move: ++this.state.move});
	}

	render() {
		return(
			<div>
				<Board callback={this._increment_move} />
				<SideMenu move={this.state.move} />
			</div>
		)
	}
}

const root = ReactDOM.createRoot(
	document.getElementById('root')
);

root.render(<App />);
