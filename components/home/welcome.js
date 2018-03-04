import React, { Component } from 'react'
import Stylesheet from '../stylesheet.js'
import sheet from './welcome.scss'

class Welcome extends Component{
	constructor(props, context){
		super(props,context);

		this.state = {
      		signIn: false
      		signUp: false
    	}
	}


	render(){
		return(
			<div className="w3-display-middle w3-text-white content box_textshadow">
    		<img src = "TPsmall.png" className="logo" width="100" height= "100">
    		<h1 className="w3-jumbo">Welcome to TicketPool </h1>
    		<p className = "w3-xxlarge w3-center" >Parking lot chronicles</p>

    		<div align="left">
      			<button className = "button buttonblack" align="left">Login</button>
      			<button className = "button buttonblack" align="left">Register</button>
    		</div>

  		</div>

  		)
  	}
}

export default Welcome;