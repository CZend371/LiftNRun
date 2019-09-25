import React, { Component } from "react";
import GoogleMapReact from 'google-map-react';
import mapStyles from "../../mapStyles";
import "./map.scss";

class Map extends Component {
    static defaultProps = {
        center: {
            lat: 44.9837359,
            lng: -93.18048850000001
        },
        zoom: 10
    };
    state = {
        location: [{
            lat: "",
            lng: "",
        }]
    }

    componentDidMount() {
        this.currentLocation();
        setInterval(this.currentLocation, 10000);
    };

    currentLocation = () => {
        let self = this;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                self.setState({
                    location: [{
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    }]
                })
                console.log(position.coords.latitude + "," + position.coords.longitude)
                console.log(self.state)
            }, function (err) {
                console.log(err);
            });
        }
    };

    render() {
        const Marker = ({ icon }) => <img src={icon} alt="run icon"></img>;


        return (
            <div className="map" >
                <div style={{ width: "985px", height: "500px" }}>
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: "AIzaSyBC4ILqEm-u_NZ3_kPFLGXDxhtlbVAFSdA" }}
                        defaultCenter={this.props.center}
                        defaultZoom={this.props.zoom}
                        styles={{ mapStyles }}
                    >
                        <Marker
                            lat={this.state.location[0].lat}
                            lng={this.state.location[0].lng}
                            icon={"../runicon.png"}
                        />
                    </GoogleMapReact>
                </div>
            </div>
        );
    }
};

export default Map;