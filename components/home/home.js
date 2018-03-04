import React, { Component } from 'react'
import Stylesheet from '../stylesheet.js'
import sheet from './home.scss'
import * as firebase from 'firebase'

import GoogleMaps from '../googleMaps/googleMaps.js'

class Home extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      citationNum: '',
      licenseNum: '',
      lng: '',
      lat: '',
      places: [],
      citations: []
    }
    this.signOut = this.signOut.bind(this);
    this.addPlace = this.addPlace.bind(this);
    this.addCitation = this.addCitation.bind(this);
    this.handleCite = this.handleCite.bind(this);
    this.handleLicense = this.handleLicense.bind(this);
    this.retrieveCitations = this.retrieveCitations.bind(this);
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

  handleCite = (event) => {
    this.setState({citationNum: event.target.value});
  }

  handleLicense = (event) => {
    this.setState({licenseNum: event.target.value});
  }

  handleLat = (event) => {
    this.setState({lat: event.target.value});
  }

  handleLong = (event) => {
    this.setState({lng: event.target.value});
  }

  addCitation = () => {
    firebase.database().ref(firebase.auth().currentUser.uid + "/" + this.state.citationNum).set({
      citationNum: this.state.citationNum,
      licenseNum: this.state.licenseNum
    });
  }

  componentDidMount = () => {
    this.retrieveCitations()
  }

  retrieveCitations = () => {
    var that = this;
    firebase.database().ref(firebase.auth().currentUser.uid).once('value').then(function(snapshot) {
      snapshot.forEach((snap) => {
        console.dir("snap: "+snap.value)
      })
      console.dir("snapshot: "+snapshot.value)
      that.setState({citations: snapshot});
      // ...
    });
  }

  addPlace = () => {
    console.log("add places")
    this.setState({places: this.state.places.concat([ {id: "!!!", lat: this.state.lat, long: this.state.lng} ])});
    this.render();
    console.dir(this.state.places)
  }

  render () {
    return (
      <div className="home">
        <div className="contentWrapper">
          <div className="leftHome">
            <div className="signOutButton" onClick={this.signOut}>
              sign out
            </div>
            <div className="addLocation">
              <div>Longitude</div>
              <input type="text" value={this.state.lng} onChange={this.handleLong} />
              <div>Latitude</div>
              <input type="text" value={this.state.lat} onChange={this.handleLat} />
              <div className="enterLocation" onClick={this.addPlace}>
                track
              </div>
            </div>
          </div>
          <div className="rightHome">
            <div className="addCitation">
              <div>Citation Number</div>
              <input type="text" value={this.state.citationNum} onChange={this.handleCite} />
              <div>License Number</div>
              <input type="text" value={this.state.licenseNum} onChange={this.handleLicense} />
              <div className="addCitationButton" onClick={this.addCitation}>
                add citation
              </div>
            </div>
            <div className="citationList">
              <div style={{margin: '10px'}}>Citations</div>
              <div className="citation">
                citation
              </div>
            </div>
          </div>
        </div>
        <GoogleMaps places={this.state.places} />
        <Stylesheet sheet={sheet} />
      </div>
    )
  }
}

export default Home
