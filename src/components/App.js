import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
		super(props);
		this.state={click:false};
		this.handleclick=()=>{
			this.setState({click:true});
		}
	};
    render() {
    	return(
    		<div id="main">
				<button id="click" onClick={()=>this.handleclick()}></button>
				{this.state.click&&(<pre id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</pre>)}
    		</div>
    	);
    }
}


export default App;

