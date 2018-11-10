import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

class GoogleMap extends Component {
    style = {
        width: '100%',
        height: '100%'
    }
    render() {
        const {lat, lng} = this.props;
        return (
            <Map 
                google={this.props.google} 
                zoom={17}
                style={this.style}
                initialCenter={{
                    lat: lat,
                    lng: lng
                  }}
            >
                <Marker name={'Current location'} />
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyDKfU3TL1Ke34CS4Q9RpzLwEILwK9Jp0FQ'
})(GoogleMap);