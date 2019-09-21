import React, { Component } from "react";
import GoogleMapReact from 'google-map-react';
import mapStyles from "../../mapStyles";
import "./map.scss";
// import Polyline from "../polyline/Polyline";

class Map extends Component {
    static defaultProps = {
        markers: [
            { lat: 53.42728, lng: -6.24357 },
            { lat: 43.681583, lng: -79.61146 }
        ],
        center: {
            lat: 44.9837359,
            lng: -93.18048850000001
        },
        zoom: 10
    };
    state = {
        location: [{
            lat: "",
            lng: ""
        }]
    }

    componentDidMount() {
        this.currentLocation();
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
    renderPolylines(map) {
        var test = [
            { lat: 44.9837359, lng: -93.18048850000001 },
            { lat: 44.9530, lng: 92.9952 },
        ];
        /** Example of rendering non geodesic polyline (straight line) */
        let nonGeodesicPolyline = new map.Polyline({
            path: test,
            geodesic: false,
            strokeColor: '#e4e4e4',
            strokeOpacity: 0.7,
            strokeWeight: 3
        })
        nonGeodesicPolyline.setMap(map)

        // this.fitBounds(maps)
    }

    // fitBounds(map, maps) {
    //     var bounds = new maps.LatLngBounds()
    //     for (let marker of this.props.markers) {
    //         bounds.extend(
    //             new maps.LatLng(marker.lat, marker.lng)
    //         )
    //     }
    //     map.fitBounds(bounds)
    // }

    render() {


        const Marker = ({ icon }) => <img src={icon}></img>;

        // 44.9530, 92.9952

        return (
            <div className="map" >
                <div style={{ width: "985px", height: "500px" }}>
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: "AIzaSyBC4ILqEm-u_NZ3_kPFLGXDxhtlbVAFSdA" }}
                        defaultCenter={this.props.center}
                        defaultZoom={this.props.zoom}
                    // yesIWantToUseGoogleMapApiInternals={true}
                    // onGoogleApiLoaded={({ maps }) => this.renderPolylines(test)}>
                    >
                        <Marker
                            // Need to figure out why integers cause icon to stay in exact location while feeding it JSX causes it to move with zoom
                            lat={this.state.location.lat}
                            lng={this.state.location.lng}
                            icon={"../runicon.png"}
                        />
                    </GoogleMapReact>
                </div>
            </div>
        );
    }
};

export default Map;