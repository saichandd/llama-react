import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Game extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			earthTypes: ['water','land', 'grass', 'hills'],
			position: [0,9],
			score: 0,
			apple_position:[5,0],
			gameEnd: false,
			energy: 100
		}

		this.moveUp = this.moveUp.bind(this);
		this.moveRight = this.moveRight.bind(this);
		this.moveDown = this.moveDown.bind(this);
		this.moveLeft = this.moveLeft.bind(this);
		this.restartGame = this.restartGame.bind(this);
		// this.handleKeyPress = this.handleKeyPress.bind(this, 'myllama');
	}

	// handleKeyPress(refName, e) {
        
 //    }
	componentDidMount() {
		document.addEventListener('keydown', event => {

			if (event.keyCode === 38){
				this.moveUp();
			}
			else if(event.keyCode === 40){
				this.moveDown();
			}
			else if(event.keyCode === 39){
				this.moveRight();	
			}
			else if(event.keyCode === 37){
				this.moveLeft();	
			}
		})
	
		this.appleInterval = setInterval(() => {
			this.setState({ 
				apple_position: LAND_COORDINATES[Math.floor(Math.random()*LAND_COORDINATES.length)]
			})
		}, 7500);
	}

	componentWillUnmount() {
	  clearInterval(this.appleInterval);
	}

	componentDidUpdate(){

		if(this.state.position[0] === this.state.apple_position[0] && this.state.position[1] === this.state.apple_position[1]){
			this.setState({
				score: this.state.score+1,
				energy: this.state.energy+32,
				apple_position: LAND_COORDINATES[Math.floor(Math.random()*LAND_COORDINATES.length)]
			})
		}
		else if(isWater(TERRAIN, this.state.position)){
			this.resetGame();
		}
		else if(this.state.energy === -1){
			this.resetGame();	
		}
	}

	randomInRange(start,end){
		return Math.floor(Math.random() * (end - start + 1) + start);
	}

 	moveUp(){
 		if(this.state.position[1] !== 0){
 			this.setState({
 				position: [this.state.position[0], this.state.position[1]-1],
 				energy: this.state.energy-1
 			})
 		}
 	}
 	moveRight(){
 		if(this.state.position[0] !== 49){
 			this.setState({
 				position: [this.state.position[0]+1, this.state.position[1]],
 				energy: this.state.energy-1
 			})
 		}
 	}
 	moveDown(){
 		if(this.state.position[1] !== 24){
 			this.setState({
 				position: [this.state.position[0], this.state.position[1]+1],
 				energy: this.state.energy-1
 			})
 		}
 	}
 	moveLeft(){
 		if(this.state.position[0] !== 0){
 			this.setState({
 				position: [this.state.position[0]-1, this.state.position[1]],
 				energy: this.state.energy-1
 			})
 		}
 	}

    earthWidth(){
    	if(window.innerWidth < 768){
    		return window.innerWidth*0.9
    	}
    	return window.innerWidth*0.6
    	
    }
    earthHeight(){
    	if(window.innerWidth < 768){
    		return window.innerWidth*0.5*0.9
    	}
    	return window.innerWidth*0.3
    }


    resetGame(){
    	this.setState({
    		position: [0,9],
    		energy: 0,
			gameEnd: true
    	})
    }

    restartGame(){
    	this.setState({
    		score: 0,
    		energy: 40,
			gameEnd: false
    	})	
    }

	render(){

		let drowned = 'Looks like you took a nose dive!';
		let energy = 'Easy there, slow down!';
		return(
			// Game component
			<div className="game-container-parent">
				<header>
					<h1 className="child-h1">Eat the apples!</h1>
				</header>
				<h2 className="medium-head">Rules of the game</h2>
				<ul>
					<li>
						Each apple gets you an.. apple, duh. And increases your score.
					</li>
					<li>
						The apple disspears in some time if you dont eat it quick enough
					</li>
					<li>
						Every step you take, consumes energy! Step wisely!
					</li>
					<li>
						Every apple gets you an energy of 32.
					</li>
					<li>
						And, don't drown in the water!
					</li>
				</ul>
				<h2 className="medium-head">Controls</h2>
				<ul>
					<li>
						You can use your keyboard arrows or the buttons given.
					</li>
					<li>
						Play the game in landscape on mobile for better control.
					</li>
				</ul>
				<div className="game-container">
					{
						this.state.gameEnd && 
						<div className="game-end">
							Oops!
							<br/><br/>
							<b>YOUR SCORE:</b> {this.state.score}
							<br/>
							<b>ENERGY REMAINING:</b> {this.state.energy}
							<br/><br/>
							<button onClick={this.restartGame}>Restart</button>
						</div>
					}
					{
						!this.state.gameEnd && 
						<img 
							// onKeyPress={this.handleKeyPress} 
							// ref='myllama'
							src='./src/static/img/llama.png'
							style={{
								transform: `translate(${this.state.position[0]*this.earthWidth()/50}px,${this.state.position[1]*this.earthHeight()/25}px)`,
								transition: 'transform ease-out 0.2s'}}
						/>
					}
					
					<img 
						src='./src/static/icons/apple.svg'
						style={{
							transform: `translate(${this.state.apple_position[0]*this.earthWidth()/50}px,${this.state.apple_position[1]*this.earthHeight()/25}px)`
						}}
					/>
					<p className="score">score: {this.state.score}</p>
					<p className="energy">energy: {this.state.energy}</p>
					<div className="motion-controls">
						<img onClick={this.moveUp} src='./src/static/icons/up-button.svg'/>
						<img onClick={this.moveRight} src='./src/static/icons/right-button.svg'/>
						<img onClick={this.moveDown} src='./src/static/icons/down-button.svg'/>
						<img onClick={this.moveLeft} src='./src/static/icons/left-button.svg'/>
					</div>
					<div className="earth">
						{
							TERRAIN_LINEAR.map((child,i) =>
								<Earth key={i} id={i} earthType={this.state.earthTypes[child]}/>
							)
						}
					</div>
				</div>	
			</div>
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
	[0,0,0,0,1,1,1,2,2,3,3,2,2,1,1,1,1,1,1,1,2,2,2,2,3,3,3,3,3,3,3,2,2,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1],
	[0,0,0,1,1,1,1,1,2,2,2,2,2,2,1,1,1,1,1,1,1,2,2,2,2,3,3,3,3,2,2,2,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1],
	[0,0,0,1,1,1,1,1,1,2,2,1,1,1,1,1,1,1,1,1,1,1,1,2,2,3,3,3,3,2,2,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1],
	[0,0,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,2,2,3,3,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
	[0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
	[0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,2,2,1,1,1,1,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
	[1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
	[1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2],
	[1,1,1,1,2,1,1,1,1,1,0,0,0,1,1,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2],
	[1,1,1,2,2,2,2,1,1,1,1,1,1,1,2,2,2,2,2,2,3,3,2,2,2,2,1,1,1,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2],
	[1,2,2,2,2,2,2,2,1,1,1,1,1,1,2,2,2,2,2,3,3,3,2,2,2,2,1,1,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,2,2,2],
	[2,2,2,2,2,2,2,2,1,1,1,1,1,2,2,2,2,3,3,3,3,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,2,2],
	[2,2,2,2,2,2,2,2,2,1,1,1,2,2,2,2,3,3,3,3,3,3,3,2,2,2,2,2,2,2,2,0,0,0,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1],
	[2,2,2,2,2,2,2,2,2,2,1,1,2,2,2,3,3,3,3,3,3,3,3,3,3,3,2,2,2,2,0,0,0,0,0,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1],
	[2,2,2,2,2,2,2,2,2,2,1,1,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3,2,2,2,2,0,0,0,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1],
	[2,2,2,2,2,2,2,2,2,1,1,1,1,2,2,2,2,2,3,3,3,3,3,3,3,3,3,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1],
	[2,2,2,2,2,2,2,2,1,1,1,1,1,1,2,2,2,2,3,3,3,2,2,3,3,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,0,0,0,1,1,1,1,1,1],
	[2,2,2,2,2,2,1,1,1,1,1,1,1,1,2,2,2,2,3,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,0,0,0,0,1,1,1,1,1],
	[2,2,2,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,2,2,2,2,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1],
	[2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1],
	[2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1],
	[2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1],
	[2,2,2,2,2,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1],
	[2,2,2,2,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1],
	[2,2,2,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1]
];

const TERRAIN_LINEAR = [].concat(...TERRAIN)

var land_coordinates = (TERRAIN, earth) => {
	let arr = []
	for(let i=0; i < TERRAIN.length; i++){
		for(let j=0; j < TERRAIN[0].length; j++){
			if(TERRAIN[i][j] === earth){
				arr.push([j,i])
			}
		}
	}
	return arr;
}

var isWater = (TERRAIN, pos) => {
	if(TERRAIN[pos[1]][pos[0]] === 0){
		return true;
	}
	return false;
}

const LAND_COORDINATES = land_coordinates(TERRAIN,1);


export default Game;