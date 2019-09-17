import React from "react";
import WrappedMap from "../components/Map";
// import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";


// Need to add a timer and buttons for start,pause,stop
// Possible ideas: user should be able to switch between long distance runnig and sprints/intervals


function Run() {
    return (
        <div style={{ width: "75vw", height: "75vh" }}>
            <WrappedMap googleMapURL={`https://maps.googleapis.com/maps/api/js?&key=${process.env.REACT_APP_GOOGLE_KEY}&callback=initMap`}
                loadingElement={<div style={{ height: "100%" }} />}
                containerElement={<div style={{ height: "100%" }} />}
                mapElement={<div style={{ height: "100%" }} />}
            />
        </div>
    )
}


export default Run;
