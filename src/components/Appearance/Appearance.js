import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import PictureFrame from '../PictureFrame/PictureFrame';

class Appearance extends React.Component{
	constructor(props) {
		super(props);
	}

	render(){
		return(
			// Logo component
			<div className="appearance-container">
				<header>
					<h1 className="child-h1">Appearance</h1>
				</header>
				<h3 className="small-head">Baby Llama</h3>
				<img className="main-pictures" src='./src/static/img/baby-llama.jpg'/>
				<h3 className="small-head">Big Llama</h3>
				<img className="main-pictures" src='./src/static/img/big-llama.jpg'/>
				<h3 className="small-head">More pictures</h3>
				<ul className="picture-frames">
					<PictureFrame img_src='./src/static/img/llama-1.jpg' text="having lunch"/>
					<PictureFrame img_src='./src/static/img/llama-2.jpg' text="relaxing"/>
					<PictureFrame img_src='./src/static/img/llama-3.jpg' text="posing"/>
					<PictureFrame img_src='./src/static/img/llama-4.jpg' text="having fun"/>
					<PictureFrame img_src='./src/static/img/llama-5.jpg' text="annoyed"/>
				</ul>

			</div>

			// Logo component ends
		)
	}
}

export default Appearance;