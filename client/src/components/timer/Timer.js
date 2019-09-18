import React from "react";
import ReactStopwatch from "react-stopwatch";
import "../timer/style.scss"

// handleStart(){

// }

// handleStop() {

// }
// handlePause() {

// }
const Timer = () => (
    <ReactStopwatch
        seconds={0}
        minutes={0}
        hours={0}
        limit="60:60:60"
        onChange={({ hours, minutes, seconds }) => {
            // do something
        }}
        onCallback={() => console.log('Finish')}
        render={({ formatted, hours, minutes, seconds }) => {
            return (
                <div>
                    <p>
                        Time: {formatted}
                    </p>
                </div>
            );
        }}
    />
);

export default Timer;

