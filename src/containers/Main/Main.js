import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import FunFacts from '../../components/FunFacts/FunFacts';
import Appearance from '../../components/Appearance/Appearance';
import Introduction from '../../components/Introduction/Introduction';
import Game from '../../components/Game/Game';

class Main extends React.Component{
	constructor(props) {
		super(props);
	}

	render(){
		// child is the content to display on right side
		//set it to clicked one
		let child;
		const ac = this.props.activeChild;

		// if active child is pressed display it
		if(ac === 'Fun Facts')
			child = <FunFacts/>
		else if(ac === 'Appearance')
			child = <Appearance/>
		else if(ac === 'Introduction')
			child = <Introduction/>
		else if(ac === 'Game')
			child = <Game/>
		else
			child = <div>Error: some shit happened</div>
		
		return(
			// right side content
			<div className={"main-content"} >
				{child}
			</div>
		)
	}
}

export default Main;