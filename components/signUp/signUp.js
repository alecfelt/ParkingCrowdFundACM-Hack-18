import React, { Component } from 'react'
import Stylesheet from '../stylesheet.js'
import sheet from './signUp.scss'
import * as firebase from 'firebase'

class SignUp extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      email: '',
      password: ''
    }
    this.signUp = this.signUp.bind(this)
    this.handleEmail = this.handleEmail.bind(this)
    this.handlePassword = this.handlePassword.bind(this)
  }

  signUp = () => {
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.error("ERROR! code: "+errorCode+" message: "+errorMessage)
    });
  }

  handleEmail(event) {
    this.setState({email: event.target.value});
  }

  handlePassword(event) {
    this.setState({password: event.target.value});
  }

  render () {
    return (
      <div className="signUp">
        <form>
          User name:<br/>
          <input type="text" value={this.state.email} onChange={this.handleEmail} /><br/>
          <br/>User password:<br/>
          <input type="text" value={this.state.password} onChange={this.handlePassword} /><br/>
          <br/><br/>
          <div className="submitButton" onClick={this.signUp}>
            sign up
          </div>
          <Stylesheet sheet={sheet} />
        </form>
        <Stylesheet sheet={sheet} />
      </div>
    )
  }
}

export default SignUp;
