import React, { Component } from "react";
import TimerMachine from "react-timer-machine"
import moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";
import "../timer/style.scss"


{/* <button type="button" className="btn btn-success" id="start">Start</button>
    <button type="button" className="btn btn-secondary" id="pause">Pause</button>
    <button type="button" className="btn btn-danger" id="stop">Stop</button> */}

momentDurationFormatSetup(moment);

class Timer extends Component {
    render() {
        return (
            <TimerMachine
                timeStart={10 * 1000} // start at 10 seconds
                timeEnd={20 * 1000} // end at 20 seconds
                started={true}
                paused={false}
                countdown={false} // use as stopwatch
                interval={1000} // tick every 1 second
                formatTimer={(time, ms) =>
                    moment.duration(ms, "milliseconds").format("h:mm:ss.SSS")
                }
                onStart={time =>
                    console.info(`Timer started: ${JSON.stringify(time)}`)
                }
                onStop={time =>
                    console.info(`Timer stopped: ${JSON.stringify(time)}`)
                }
                onTick={time =>
                    console.info(`Timer ticked: ${JSON.stringify(time)}`)
                }
                onPause={time =>
                    console.info(`Timer paused: ${JSON.stringify(time)}`)
                }
                onResume={time =>
                    console.info(`Timer resumed: ${JSON.stringify(time)}`)
                }
                onComplete={time =>
                    console.info(`Timer completed: ${JSON.stringify(time)}`)
                }
            />
        )
    }
}

export default Timer;

