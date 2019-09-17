import React from "react";
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";

function Map() {
    return (
        <GoogleMap
            defaultZoom={10}
            defaultCenter={{ lat: 46.010521, lng: -95.681717 }}
        />
    );
}

const WrappedMap = withScriptjs(withGoogleMap(Map))

export default WrappedMap;