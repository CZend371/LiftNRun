import React from "react";
import WrappedMap from "../../components/Map";
import "../Run/style.scss"
import Timer from "../../components/timer/Timer";


// Need to add a timer and buttons for start,pause,stop
// Possible ideas: user should be able to switch between long distance runnig and sprints/intervals

function Run() {
    // console.log(process.env.REACT_APP_GOOGLE_KEY);
    // console.log(`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_KEY}&callback=initMap`)
    return (
        <div className="container">
            <div className="timer">
                <Timer />
            </div>
            <div className="map-container">
                <div style={{ width: "985px", height: "500px" }}>
                    <WrappedMap googleMapURL={"https://maps.googleapis.com/maps/api/js?&key=AIzaSyAsh_FqlodCd1Kid-SEkq80YG-CAob0CTc&callback=initMap"}
                        loadingElement={<div style={{ height: "100%" }} />}
                        containerElement={<div style={{ height: "100%" }} />}
                        mapElement={<div style={{ height: "100%" }} />}
                    />
                </div>
            </div >
        </div>
    )
}

export default Run;
