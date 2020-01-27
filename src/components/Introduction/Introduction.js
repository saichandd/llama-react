import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Introduction extends React.Component{
	constructor(props) {
		super(props);
	}

	render(){
		return(
			// Introduction component
			<div className="introduction-container">
				<header>
					<h1 className="child-h1">What are Llamas</h1>
				</header>
				<ul>
					<li>
						<p className="para">
							The llama is a South American relative of the camel, though the llama does not have a hump.
						</p>
					</li>
					<li>
						<h4 className="child-h2">Pack animals</h4>
						<p className="para">
							These sturdy creatures are domestic animals used by the peoples of the Andes Mountains. (Their wild relatives are guanacos and vicuñas). Native peoples have used llamas as pack animals for centuries. Typically, they are saddled with loads of 50 to 75 pounds. Under such weight they can cover up to 20 miles in a single day. Pack trains of llamas, which can include several hundred animals, move large amounts of goods over even the very rough terrain of the Andes.
							<br/>
							Llamas are willing pack animals but only to a point. An overloaded llama will simply refuse to move. These animals often lie down on the ground and they may spit, hiss, or even kick at their owners until their burden is lessened.
						</p>
					</li>
					<li>
						<h4 className="child-h2">What do they Eat</h4>
						<p className="para">
							Llamas graze on grass and, like cows, regurgitate their food and chew it as cud. They chomp on such wads for some time before swallowing them for complete digestion. Llamas can survive by eating many different kinds of plants, and they need little water. These attributes make them durable and dependable even in sparse mountainous terrain.
						</p>
					</li>
					<li>
						<h4 className="child-h2">Relationship With Humans</h4>
						<p className="para">
							Llamas contribute much more than transportation to the human communities in which they live. Leather is made from their hides, and their wool is crafted into ropes, rugs, and fabrics. Llama excrement is dried and burned for fuel. Even in death, llamas can serve their human owners, some people slaughter them and eat their meat.
						</p>
					</li>
				</ul>
			</div>	
			// introduction component ends
		)
		
	}
}

export default Introduction;