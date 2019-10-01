import React, { Component } from "react";
import moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";
import "../../style/main.scss";
import API from "../../util/API"
// import "../timer/style.scss"



momentDurationFormatSetup(moment);

class Timer extends Component {
    state = {
        timerStart: 0,
        timerTime: 0,
        isRunning: false
    };

    handleStart = () => {
        this.setState({
            isRunning: true,
            timerTime: this.state.timerTime,
            timerStart: Date.now() - this.state.timerTime
        });
        this.timer = setInterval(() => {
            this.setState({
                timerTime: Date.now() - this.state.timerStart
            });
        }, 10);
    };

    handleStop = () => {
        this.setState({ isRunning: false });
        clearInterval(this.timer);
    };

    handleReset = () => {
        this.setState({
            timerStart: 0,
            timerTime: 0
        })
    }

    handleSave = (props) => {
        // api call to save time displayed on timer
        API.saveRun({
            type: "Run",
            timer: this.state.timerTime,
            distance: props.distance
        })
            .catch(err => console.log(err));
    }


    render() {
        const { timerTime } = this.state;
        let centiseconds = ("0" + (Math.floor(timerTime / 10) % 100)).slice(-2);
        let seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
        let minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);
        let hours = ("0" + Math.floor(timerTime / 3600000)).slice(-2);
        return (
            <div className="timer-container">
                <div id="currentTime" className="display">{hours}:{minutes}:{seconds}:{centiseconds}</div>
                <div className="timerLoc">
                {this.state.isRunning === false && this.state.timerTime === 0 && (
                    <div type="button" className="bigBtn  btn-success" id="start" onClick={this.handleStart}>Start</div>
                )}
                {this.state.isRunning === true && (
                    <div type="button" className="bigBtn  btn-secondary" id="stop" onClick={this.handleStop}>Stop</div>
                )}
                {this.state.isRunning === false && this.state.timerTime > 0 && (
                    <div type="button" className="smallBtn  btn-success" id="resume" onClick={this.handleStart}>Resume</div>
                )}
                {this.state.isRunning === false && this.state.timerTime > 0 && (
                    <div type="button" className="smallBtn btn-danger" id="reset" onClick={this.handleReset}>Reset</div>
                )}
                {this.state.isRunning === false && this.state.timerTime > 0 && (
                    <div type="button" className="smallBtn btn-success" id="save" onClick={this.handleSave}>Save</div>
                )}</div>
            </div>
        )
    }
}

export default Timer;

