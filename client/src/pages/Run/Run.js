import React from "react";
import Map from "../../components/map/Map";
import "../Run/style.scss"
import Timer from "../../components/timer/Timer";

// Possible ideas: user should be able to switch between long distance runnig and sprints/intervals

function Run() {
    // console.log(process.env.REACT_APP_GOOGLE_KEY);
    // console.log(`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_KEY}&callback=initMap`)
    return (
        <div className="container">
            <div className="timer">
                <Timer />
            </div>
            <Map />
        </div>
    )
}

export default Run;
