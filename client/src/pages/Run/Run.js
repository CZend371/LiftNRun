import React, { Component } from "react";
import Map from "../../components/map/Map";
import "../Run/style.scss"
import Timer from "../../components/timer/Timer";
// import API from "../../util/API";
import mapStyles from "../../mapStyles";

// Possible ideas: user should be able to switch between long distance runnig and sprints/intervals

class Run extends Component {
    static defaultProps = {
        center: {
            lat: 44.9837359,
            lng: -93.18048850000001
        },
        zoom: 10
    };
    state = {
        location: [],
        distance: 0
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
        var testRun = [
            { lat: this.props.center.lat, lng: this.props.center.lng },
            { lat: 44.984383, lng: -93.180177 },
            { lat: 44.984383, lng: -93.181905 },
            { lat: 44.984413, lng: -93.184071 },
            { lat: 44.984439, lng: -93.186418 },
            { lat: 44.984457, lng: -93.187154 },
            { lat: 44.983331, lng: -93.187154 },
            { lat: 44.981996, lng: -93.187202 }
        ];

        return (
            <div className="container">
                <div className="timer">
                    <Timer />
                </div>
                <div className="display">
                    Distance: {this.state.distance}
                </div>
                <Map
                    id="myMap"
                    options={{
                        center: this.props.center,
                        zoom: this.props.zoom,
                        styles: mapStyles
                    }}
                    onMapLoad={map => {
                        var image = new window.google.maps.MarkerImage(
                            "../runicon.png",
                            null, /* size is determined at runtime */
                            null, /* origin is 0,0 */
                            null, /* anchor is bottom center of the scaled image */
                            new window.google.maps.Size(40, 40)
                        );
                        var marker = new window.google.maps.Marker({
                            position: { lat: this.state.location[0].lat, lng: this.state.location[0].lng },
                            map: map,
                            icon: image,
                            title: "RUN",
                        });
                        var testPath = new window.google.maps.Polyline({
                            path: testRun,
                            geodesic: false,
                            strokeColor: "#475dff",
                            strokeOpacity: 1.0,
                            strokeWeight: 2
                        });
                        testPath.setMap(map);

                        var origin1 = new window.google.maps.LatLng(44.9837359, -93.18048850000001);
                        var origin2 = "Saint Paul, MN";
                        var destinationA = "Saint Paul, MN";
                        var destinationB = new window.google.maps.LatLng(44.981996, -93.187202);
                        // var prevDistance= this.state.distance;
                        var service = new window.google.maps.DistanceMatrixService();
                        let self = this;
                        service.getDistanceMatrix(
                            {
                                origins: [origin1, origin2],
                                destinations: [destinationA, destinationB],
                                travelMode: "WALKING",
                                unitSystem: window.google.maps.UnitSystem.IMPERIAL,
                            }, callback);
                        function callback(response, status) {

                            if (status == 'OK') {
                                var origins = response.originAddresses;
                                var destinations = response.destinationAddresses;

                                for (var i = 0; i < origins.length; i++) {
                                    var results = response.rows[i].elements;
                                    for (var j = 0; j < results.length; j++) {
                                        var element = results[j];
                                        var distance = element.distance.text;
                                        var duration = element.duration.text;
                                        var from = origins[i];
                                        var to = destinations[j];
                                    }
                                    self.setState({
                                        distance: distance
                                    })
                                }
                                console.log(distance);
                            }
                        }
                    }
                    }
                />
            </div>
        )
    }
}

export default Run;
