import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Slideshow from '../Slideshow/Slideshow';

class FunFacts extends React.Component{
	constructor(props) {
		super(props);
	}

	render(){
		return(
			// FunFacts component
			<div className="funfacts-container">
				<header>
					<h1 className="child-h1">Fun Facts</h1>
				</header>
				<Slideshow/>
			</div>	
			// FunFacts component ends
		)
		
	}
}

export default FunFacts;