import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class SideBar extends React.Component{
	constructor(props) {
		super(props);
		this.state={
			children: ['Game','Introduction', 'Appearance', 'Fun Facts'],
			// current active component is activeChild
			activeChild: 'Game',
			phoneNav: false
		}

		this.toggleMenu = this.toggleMenu.bind(this);
	}

	// on child click
	toggleMenu(){
		console.log('toggled');
		this.setState({phoneNav: !this.state.phoneNav});
	}

	// on child click
	handleClick(child){
		this.setState({activeChild: child})
		this.setState({phoneNav: !this.state.phoneNav});	
		// triggers parent
		this.props.handleChild(child);
	}


	render(){

		let {children} = this.state;
		// const tablet_viewport = 768
		// let viewport = window.innerWidth

		return(
			<div>
				<header className='hamburger'>
					<img onClick={this.toggleMenu} src='./src/static/icons/hamburger.svg'/>
					<h4 className="medium-head">LLAMA HOUSE</h4>
				</header>
				
				<div className={'nav-bar ' + (this.state.phoneNav ? 'nav-active' : 'nav-not-active')}>
					<img className="close-hamburger" onClick={this.toggleMenu} src='./src/static/icons/close.svg'/>
					<header>
						<h4 className="medium-head">LLAMA HOUSE</h4>
					</header>
					<nav>
						<ul className="children-list">
							{	
								// map to render all in left side bar
								children.map((child, i) => 
									<li className={this.state.activeChild === child ? 'active' : ''} key={i} id={i} onClick={(e) => this.handleClick(child, e) }>{child}</li>
								)
							}
						</ul>
					</nav>
					<img src='./src/static/img/llama-logo.png' className='llama-img'/>
				</div>
			</div>
		)
		
	}

}

export default SideBar;