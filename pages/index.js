import React, { Component } from 'react'

import Stylesheet from '../components/stylesheet.js'
import sheetSignUp from '../components/signUpIndex.scss'

import SignUp from '../components/signUp/signUp.js'
import Home from '../components/home/home.js'
import GoogleMaps from '../components/googleMaps/googleMaps.js'

import * as firebase from 'firebase'
var config = {
    apiKey: "AIzaSyCVEEwbgwXp2kpDD9-u72atE8o7u5_Ux0s",
    authDomain: "acmhacks18.firebaseapp.com",
    databaseURL: "https://acmhacks18.firebaseio.com",
    projectId: "acmhacks18",
    storageBucket: "acmhacks18.appspot.com",
    messagingSenderId: "308002604476"
};
if (!firebase.apps.length) {
  console.log(
    '%cCreating a new firebase instance...',
    'color: grey; font-style: italic'
  )

  firebase.initializeApp(config)
}

export class Index extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      loading: true,
      error: '',
      auth: false,
      authChecked: false,
      // Data from Firebase
      data: {}
    }
  }

  componentDidMount () {
    this.setState({ loading: false })
    this.setState({ auth: firebase.auth().currentUser })
    var that = this
    firebase.auth().onAuthStateChanged(function(user) {
      console.log("firebase state has changed!")
      if (user) {
        that.setState({ auth: true, authChecked: true })
      } else {
        that.setState({ auth: false, authChecked: true })
      }
    });
  }

  render () {
    if (this.state.loading || !this.state.authChecked) {
      return (
        <main>
          Just a second...
          <Stylesheet sheet={sheetSignUp} />
        </main>
      )
    } else if (this.state.error) {
      return (
        <main>
          <h1>That is bad. The following error occurred:</h1>
          <div className='error'>{this.state.error}</div>
          <Stylesheet sheet={sheetSignUp} />
        </main>
      )
    } else if (!this.state.auth) {
      return (
        <SignUp />
      )
    }
    return (
      <div style={{width: '100%', height: '1000px'}}>
        <Home />
        <GoogleMaps />
      </div>
    )
  }
}

export default Index
