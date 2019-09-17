import React from "react";
import WrappedMap from "../components/Map";
// import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";


// Need to add a timer and buttons for start,pause,stop
// Possible ideas: user should be able to switch between long distance runnig and sprints/intervals

function Run() {
    return (
        <div style={{ width: "100vw", height: "100vh" }}>
            <WrappedMap googleMapURL={`https://maps.googleapis.com/maps/api/js?&key=${process.env.REACT_APP_GOOGLE_KEY}`}
                loadingElement={<div style={{ height: "50%" }} />}
                containerElement={<div style={{ height: "50%" }} />}
                mapElement={<div style={{ height: "50%" }} />}
            />
        </div>
    )
}


export default Run;
