
import React from 'react';
import ReactDOM from 'react-dom/client';


class App extends React.Component {
	constructor(props){
		super(props);
	}

	render() {
		return(
			<div className="DICK"></div>
		)
	}
}

const root = ReactDOM.createRoot(
	document.getElementById('root')
);

root.render(<App />);
