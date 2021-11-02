import React, { Component} from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import Loader from '../assets/Loader.gif'
export class MapContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
        isCurrentLocation : this.props.isCurrentLocation,
        isCountry : this.props.isCountry,
        selectionKey: this.props.selectionKey,
        lat: this.props.lat,
        long: this.props.long, 
        isLoading : true,
        zoom : 5
    };
    this.setCurrentLocation = this.setCurrentLocation.bind(this);
  } 

  componentDidMount() {
    if(this.state.isCurrentLocation) {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.setCurrentLocation);
          } 
          else {
            alert ("Geolocation is not supported by this browser.");
          }
    }
    else {
      if(this.state.isCountry){
        fetch("https://restcountries.com/v3.1/name/" + this.state.selectionKey)
        .then(res => res.json()).then((result) => {
          this.setState({lat: result[0].latlng[0], long : result[0].latlng[1]});   
        }) 
        .catch(() => {
          alert('Unable to find selected location');
        });
    }
    else {
        if(this.state.lat !== null && this.state.long !== null) {
          this.setState({zoom : 10, isLoading: false})
        }
    }
  }
}

setCurrentLocation(location) {
 this.setState({lat : location.coords.latitude, long : location.coords.longitude, zoom : 15, isLoading : false});
}

    render() {

      const style = {
        height: '475px',
        position: 'relative'
      }

        return (
          <Map initialCenter={{lat:this.state.lat, lng: this.state.long}} containerStyle={style} google={this.props.google} zoom={this.state.zoom}>
            <Marker position={{ lat: this.state.lat, lng: this.state.long }}  name={'Current location'} />
          </Map>
        );

      

    }
  }

  export default GoogleApiWrapper({
    apiKey: 'AIzaSyA1LFMQffm6nsZ7VHCsSYjaVtDxhBoxN2M'
  })(MapContainer)