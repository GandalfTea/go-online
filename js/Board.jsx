
import React from 'react';
import ReactDOM from 'react-dom/client';

class Board extends React.Component {
	constructor(props) {
		super(props);

		// Store information on played pieces
		// N - NULL, B - BLACK, W - WHITE
		this.cache = {};
		for(var i=0; i < 19; i++) {
			var row = {};
			for(var j = 0; j < 19; j++) {
				row[j] = "N";
			}
			this.cache[i] = row;
		}
		this.state = { counter: 0 };
		this.increment = this.props.callback;
	}

	// This should function with an API too
	place_stone( color, pos ) {

		// Position already played
		if(this.cache[pos.x][pos.y]!='N') {
			console.log("Position already played");
			return;
		}

		if(color==="W" || color==="B"){
			//this.setState({ cache[pos.x][pos.y]: (color==="B") ? "B" : "W" });
			this.cache[pos.x][pos.y] = (color==="B") ? "B" : "W";
			this.setState({ counter: ++this.state.counter})
			this.increment();	// increment move in parent
		} else {
			console.log("WRONG_COLOR_VALUE: place_stone received an illegal color argument");
		}
	}

	render() {

		var positions = [];
		for(var i=0; i < 19; i++) {
			var row = [];
			for(var j=0; j < 19; j++) {
				const pos = {};
				pos.x = i;
				pos.y = j;
				row.push( <div className= { (this.cache[i][j] === "N") ? 'board-empty' : 
																															   (this.cache[i][j] === 'W') ? 'board-white' : 'board-black'} 
											 onClick={ () => this.place_stone( (this.state.counter %2==0) ? "W" : 'B', pos)} key={j}>
										<img src= { (this.cache[i][j]==='W') ? '../assets/dot_white.svg' : '../assets/dot_black.svg'} alt='board position' />
									</div>);
			}
			positions.push( <div className='board-row' key={i}> { row } </div>);
			row = [];
		}

		//console.log(positions);

		return(
			<div className="board">
				{positions}
			</div>
		)
	}
}

export default Board;
