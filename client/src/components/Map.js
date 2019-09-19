import React, { Component } from "react";
import { GoogleMap, Marker, withScriptjs, withGoogleMap } from "react-google-maps";
import mapStyles from "../mapStyles";

class Map extends Component {
    state = {
        lat: "",
        lng: "",
        startLocation: {}
    }
    // figure out why I'm getting undefined when trying to setState of starting location
    componentDidMount() {
        this.currentLocation();
        this.setState({
            startLocation: {
                lat: this.state.lat,
                lng: this.state.lng
            }
        })
    }

    currentLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                this.setState({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                })
            }, function (err) {
                console.log(err);
            });
        }
    };

    circlePoint = (time) => {
        var radius = 0.01;
        var x = Math.cos(time) * radius;
        var y = Math.sin(time) * radius;
        return { lat: window.lat + y, lng: window.lng + x };
    };

    render() {
        return (
            <div>
                <GoogleMap
                    defaultZoom={10}
                    defaultCenter={this.state.startLocation}
                    style={mapStyles}

                />
                <Marker
                    position={this.state.startLocation}
                />
            </div>
        );
    }

};

const WrappedMap = withScriptjs(withGoogleMap(Map))

export default WrappedMap;