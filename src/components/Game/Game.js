import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Game extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			earthTypes: ['water','land', 'grass', 'hills']
		}
	}

	render(){
		return(
			// Game component
			<div className="game-container">
				{
					terrain_linear.map((child,i) =>
						<Earth key={i} id={i} earthType={this.state.earthTypes[child]}/>
					)
				}
			</div>	
			// Game component ends
		)		
	}
}

const Earth = (props) => {
	return (
		<div className={props.earthType}>
		</div>
	);
}

const TERRAIN = [
	[0,0,0,0,1,1,1,1,2,3,3,2,2,1,1,1,1,1,1,1,2,2,2,2],
	[0,0,0,1,1,1,1,1,1,2,2,2,2,2,1,1,1,1,1,1,1,2,2,2],
	[0,0,0,1,1,1,1,1,1,2,2,1,1,1,1,1,1,1,1,1,1,1,1,2],
	[0,0,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1],
	[0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1],
	[0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,2,1,1,1],
	[1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,2,2,2,2,2,1,1],
	[1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,2,2,2,2,2,2,2,1],
	[1,1,1,1,2,1,1,1,1,1,0,0,0,1,1,2,2,2,3,3,3,2,2,1],
	[1,1,1,2,2,2,2,1,1,1,1,1,1,1,2,2,2,3,3,3,3,3,2,1],
	[1,2,2,2,2,2,2,2,1,1,1,1,1,1,2,2,2,3,3,3,3,3,2,2],
	[2,2,2,2,2,2,2,2,1,1,1,1,1,2,2,2,2,2,3,3,2,2,2,2]
]

const terrain_linear = [].concat(...TERRAIN)

export default Game;