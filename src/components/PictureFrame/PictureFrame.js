import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class PictureFrame extends React.Component{
	constructor(props) {
		super(props);
	}

	render(){
		return(
			// PictureFrame component
			<li className="picture-frame-container">
				<div style={{ backgroundImage: `url(${this.props.img_src})` }}></div>
				<p className="para">{this.props.text}</p>
			</li>	
			// picture-frame component ends
		)
		
	}
}

export default PictureFrame;