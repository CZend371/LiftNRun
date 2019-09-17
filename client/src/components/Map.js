import React from "react";
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";
import mapStyles from "../mapStyles";
function Map() {
    return (
        <GoogleMap
            defaultZoom={10}
            defaultCenter={{ lat: 46.010521, lng: -95.681717 }}
            defaultOptions={{ styles: mapStyles }}
        />
    );
}

const WrappedMap = withScriptjs(withGoogleMap(Map))

export default WrappedMap;