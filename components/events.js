import React, { Component } from 'react'; 
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'; 

export default class EventsExample extends Component {
    state = {
        hasLocation: false, 
        latlng: {
            lat: 37.7749,
            lng: -122.4194,
        }
    }

    handleClick = () => {
        this.refs.map.leafletElement.locate(); 
    }

    handleLocationFound = e => {
        this.setState({
            hasLocation: true, 
            latlng: e.latlng, 
        })
    }

    render() {
        const marker = this.state.hasLocation ? (
            <Marker position={this.state.latlng }>
                <Popup>
                    <span>You are here</span> 
                </Popup>
            </Marker>

        ) : null 

        return (
            <Map 
                center={this.state.latlng}
                length={4}
                onClick={this.handleClick}
                onLocationFound={this.handleLocationFound}
                ref="map"
                zoom={13}>
                <TileLayer
          attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {marker}
      </Map>
        )
    }
}