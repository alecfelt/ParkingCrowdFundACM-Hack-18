import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react';

import Stylesheet from '../stylesheet.js'
import sheet from './googleMaps.scss'

const AnyReactComponent = ({ text }) => <div style={{fontSize: '30px'}}>{text}</div>;

class GoogleMaps extends Component {
  constructor(props, context) {
    super(props, context)
    this.setState = {

    }
    Object.entries(this.props).map((prop) => {
      console.dir("prop: "+prop);
    });
    console.dir("props: "+this.props.places);
  }

  componentDidMount = () => {
    console.dir("props: "+this.props.places);
  }

  static defaultProps = {
    center: {lng: -122.0595, lat: 36.9945},
    zoom: 16,
    greatPlaces: [
      {id: '!!!', lng: -122.0595, lat: 36.9945}
    ]
  };

  _onChildClick = (key, childProps) => {
    console.log("click");
    this.props.greatPlaces.push({id: '!!!', lat: childProps.lat, lng: childProps.lng});
  }

  render() {

    const places = this.props.greatPlaces
      .map(place => {
        const {id, lat, lng} = place;

        return (
          <AnyReactComponent
            key={id}
            lat={lat}
            lng={lng}
            text={id}
          />
        );
      });

    return (
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyBNA9umVCXSI4JqpJJNWhNt-eoRm98lsvI' }}
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
        onChildClick={this._onChildClick}
      >
        {places}
      </GoogleMapReact>
    );
  }

}

export default GoogleMaps
