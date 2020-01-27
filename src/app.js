import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import SideBar from './containers/Sidebar/SideBar';
import Main from './containers/Main/Main';

class App extends React.Component{
    constructor(props) {
        super(props);
        // activeChild changes on click in left sidebar
        this.state={
        	activeChild : 'Introduction'
        }
        this.handleChild = this.handleChild.bind(this)
    }

    handleChild(child){
    	this.setState({activeChild: child})
    }

    render(){
        return( 
            <div className="home-container">
                {/*navigator*/}
        		<SideBar handleChild={this.handleChild}/>
                {/*changes child as the sidebar is changed*/}
        		<Main activeChild={this.state.activeChild}/>
            </div>
        )
    }
}

ReactDOM.render(<App/>,  document.getElementById("app"));
