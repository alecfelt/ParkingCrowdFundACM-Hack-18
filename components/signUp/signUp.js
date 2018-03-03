import React, { Component } from 'react'
import Stylesheet from '../stylesheet.js'
import sheet from './signUp.scss'

class SignUp extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {

    }
    this.signUp = this.signUp.bind(this)
  }

  signUp = (email, password) => {
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.error("ERROR! code: "+errorCode+" message: "+errorMessage)
    });
  }

  handleEmail(event) {
    this.setState({email: event.target.value});
  }

  render () {
    return (
      <div className="signUp">
        <form>
          User name:<br/>
          <input type="text" value={this.state.email} onChange={this.handleEmail} /><br/>
          <br/>User password:<br/>
          <input type="password" name="psw"/>
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
