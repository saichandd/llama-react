import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Slideshow extends React.Component{
	constructor(props) {
		super(props);

		this.state = {
			facts: [
				"Llamas are hardy and well suited to harsh environments. They are quite sure-footed, easily navigating rocky terrain at high altitudes.",
				"Llamas are smart and easy to train.",
				"Llamas have been used as guard animals for livestock like sheep or even alpacas in North America since the '80s. They require almost no training to be an effective guard.",
				"Llamas don't bite. They spit when they're agitated, but that's mostly at each other. Llamas also kick and neck wrestle each other when agitated.",
				"Llamas are vegetarians and have very efficient digestive systems.",
				"A llama's stomach has three compartments. They are called the rumen, omasum, and abomasum. A cow's stomach has four compartments. Like cows, llamas must regurgitate and re-chew their food to digest it completely.",
				"Llama poop has almost no odor. Llama farmers refer to llama manure as 'llama beans.' It makes for a great, eco-friendly fertilizer. Historically, the Incas in Peru burned dried llama poop for fuel.",
				"Llamas live to be about 20 years old. Though some only live for 15 years and others live to be 30 years old."
			],
			currentIndex: 0,
			translateValue: 0
		}

		this.goToPrevSlide = this.goToPrevSlide.bind(this);
		this.goToNextSlide = this.goToNextSlide.bind(this);
	}

	goToPrevSlide(){
		console.log('called prevslide')
		if(this.state.currentIndex === 0)
			return;

		this.setState(prevState => ({
			currentIndex: prevState.currentIndex - 1,
			translateValue: prevState.translateValue + this.slideWidth()
		}))
	}

	goToNextSlide(){
	// Exiting the method early if we are at the end of the facts array.
	// We also want to reset currentIndex and translateValue, so we return
	// to the first image in the array.
		if(this.state.currentIndex === this.state.facts.length - 1) {
			return this.setState({
				currentIndex: 0,
				translateValue: 0
			})
		}
			// This will not run if we met the if condition above
		this.setState(prevState => ({
			currentIndex: prevState.currentIndex + 1,
			translateValue: prevState.translateValue + -(this.slideWidth())
		}));
    }

 	slideWidth(){
		return document.querySelector('.slide-text-box').clientWidth
	}

	render() {

		let href = "https://twitter.com/intent/tweet?text=" + this.state.facts[this.state.currentIndex];
		return (
			<div className="slideshow">
				<div className="slideshow-wrapper" style={{
						transform: `translateX(${this.state.translateValue}px)`,
						transition: 'transform ease-out 0.4s'}}>
					{this.state.facts.map((text, i) => (<Slide key={i} text={text} />))}
				</div>
				<a title="tweet this fact" href={href} target="_blank">
			        <img src='./src/static/icons/twitter.svg'/>
			    </a>
				<LeftArrow goToPrevSlide={this.goToPrevSlide}/>
				<RightArrow goToNextSlide={this.goToNextSlide}/>
			</div>
		);
	}
}


const Slide = (props) => {
	return (
		<div className="slide-text-box">
			<p>
				{props.text}<br/>
			</p>
			
		</div>
	);
}

const LeftArrow = (props) => {
  return (
    <div onClick={props.goToPrevSlide}>
      <img className="back-arrow" src='./src/static/icons/back.svg'/>
    </div>
  );
}


const RightArrow = (props) => {
  return (
    <div onClick={props.goToNextSlide}>
    	<img className="forward-arrow" src='./src/static/icons/forward.svg'/>
    </div>
  );
}

export default Slideshow;