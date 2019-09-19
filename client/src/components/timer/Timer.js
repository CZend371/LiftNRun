import React, { Component } from "react";
import moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";
import "../timer/style.scss"




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


    render() {
        const { timerTime } = this.state;
        let centiseconds = ("0" + (Math.floor(timerTime / 10) % 100)).slice(-2);
        let seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
        let minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);
        let hours = ("0" + Math.floor(timerTime / 3600000)).slice(-2);
        return (
            <div className="timer-container">
                <div className="display">{hours}:{minutes}:{seconds}:{centiseconds}</div>
                {this.state.isRunning === false && this.state.timerTime === 0 && (
                    <button type="button" className="btn btn-success" id="start" onClick={this.handleStart}>Start</button>
                )}
                {this.state.isRunning === true && (
                    <button type="button" className="btn btn-secondary" id="stop" onClick={this.handleStop}>Stop</button>
                )}
                {this.state.isRunning === false && this.state.timerTime > 0 && (
                    <button type="button" className="btn btn-success" id="resue" onClick={this.handleStart}>Resume</button>
                )}
                {this.state.isRunning === false && this.state.timerTime > 0 && (
                    <button type="button" className="btn btn-danger" id="reset" onClick={this.handleReset}>Reset</button>
                )}
            </div>
        )
    }
}

export default Timer;

