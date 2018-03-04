import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react';

import Stylesheet from '../stylesheet.js'
import sheet from './googleMaps.scss'

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class GoogleMaps extends Component {
  constructor(props, context) {
    super(props, context)
    this.setState = {

    }
  }

  static defaultProps = {
    center: {lng: -122.0595, lat: 36.9945},
    zoom: 16
  };

  render() {
    console.log(this.props.center)
    console.log(this.props.zoom)
    return (
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyBNA9umVCXSI4JqpJJNWhNt-eoRm98lsvI' }}
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
      >
        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text={'Kreyser Avrora'}
        />
      </GoogleMapReact>
    );
  }

}

export default GoogleMaps
