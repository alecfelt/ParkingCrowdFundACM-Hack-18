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

  handleCite = () => {

  }

  handleLicense = () => {

  }

  render () {
    return (
      <div className="home">
        <div className="leftHome">
          <div className="signOutButton" onClick={this.signOut}>
            sign out
          </div>
          <div className="addLocation">
            <div className="locationSearch">
              search
            </div>
            <div className="enterLocation">
              enter
            </div>
          </div>
        </div>
        <div className="rightHome">
          <div className="addCitation">
            <input type="text" value={this.state.citationNum} onChange={this.handleCite} />
            <input type="text" value={this.state.license} onChange={this.handleLicense} />
          </div>
          <div className="citationList">

          </div>
        </div>
        <Stylesheet sheet={sheet} />
      </div>
    )
  }
}

export default Home
