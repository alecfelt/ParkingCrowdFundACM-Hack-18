import React, { Component } from 'react'
import Stylesheet from '../stylesheet.js'
import sheet from './home.scss'
import * as firebase from 'firebase'

import GoogleMaps from '../googleMaps/googleMaps.js'

class Home extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {

    }
    this.signOut = this.signOut.bind(this)
  }

  signOut = () => {
    firebase.auth().signOut()
      .then(() => {
        console.log("signed out")
      })
      .catch((err) => {
        console.error(err)
      });
  }

  render () {
    return (
      <div className="homeContainer">
        <div className="signOutButton" onClick={this.signOut}>
          sign out
        </div>
        <Stylesheet sheet={sheet} />
      </div>
    )
  }
}

export default Home
