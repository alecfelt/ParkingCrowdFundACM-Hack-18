import React, { Component } from 'react'
import Stylesheet from '../stylesheet.js'
import sheet from './signUp.scss'
import * as firebase from 'firebase'

class SignUp extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      email: '',
      password: '',
      passwordConfirm: '',
      signUp: false
    }
    this.signUp = this.signUp.bind(this)
    this.handleEmail = this.handleEmail.bind(this)
    this.handlePassword = this.handlePassword.bind(this)
    this.handlePasswordConfirm = this.handlePasswordConfirm.bind(this)
    this.handleSwitch = this.handleSwitch.bind(this)
  }

  signUp = () => {
    if(this.state.password == this.state.passwordConfirm) {
      firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.error("ERROR! code: "+errorCode+" message: "+errorMessage)
        alert(errorMessage)
      });
    } else {
      alert("Passwords do not match!")
    }
  }

  logIn = () => {
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.error("ERROR! code: "+errorCode+" message: "+errorMessage)
      alert(errorMessage)
    });
  }

  handleEmail(event) {
    this.setState({email: event.target.value});
  }

  handlePassword(event) {
    this.setState({password: event.target.value});
  }

  handlePasswordConfirm(event) {
    this.setState({passwordConfirm: event.target.value});
  }

  handleSwitch(event) {
    console.log("switch")
    this.setState({signUp: !this.state.signUp})
  }

  render () {
    if(this.state.signUp) {
      return (
        <div className="signUp">
          <form>
            <div>User name:</div>
            <input type="text" value={this.state.email} onChange={this.handleEmail} />
            <div>User password:</div>
            <input type="text" value={this.state.password} onChange={this.handlePassword} />
            <div>Confirm Password:</div>
            <input type="text" value={this.state.confirmPassword} onChange={this.handlePasswordConfirm} />
            <div className="submitButton" onClick={this.signUp}>sign up</div>
            <div className="switch" onClick={this.handleSwitch}>log in</div>
          </form>
          <Stylesheet sheet={sheet} />
        </div>
      )
    }
    return (
      <div className="signUp">
        <form>
          <div>User name:</div>
          <input type="text" value={this.state.email} onChange={this.handleEmail} />
          <div>User password:</div>
          <input type="text" value={this.state.password} onChange={this.handlePassword} />
          <div className="submitButton" onClick={this.logIn}>log in</div>
          <div className="switch" onClick={this.handleSwitch}>sign up</div>
        </form>
        <Stylesheet sheet={sheet} />
      </div>
    )
  }
}

export default SignUp;
