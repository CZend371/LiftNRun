import React, { Component } from "react";
import { FormBtn } from "../components/Form";
import Timer from "../components/timer/Timer";
import API from "../util/API";
import "../style/main.scss";

export default class GymForm extends Component {
    state = {
        workoutType: "Pick Equipment",
        timer: "00:00:00:00",
        name: ""
    };
    handleFormSubmit = event => {
        event.preventDefault();
        API.saveWorkout({
            type: "cardio",
            workoutType: this.state.workoutType,
            timer: this.state.timer,
            //date:""
        })
            .catch(err => console.log(err));
    };


    chooseWorkoutPart = event => {
        var name = event.target.getAttribute("name");
        var id = event.target.getAttribute("id");
        this.setState({
            [name]: id
        });
        document.getElementById("workoutMap").classList.add('workoutMapHide');
        document.getElementById("workoutMap").classList.remove('workoutMapShow');
    }
    updateWorkoutPart = event => {
        console.log("clicked");
        document.getElementById("workoutMap").classList.add('workoutMapShow');
        document.getElementById("workoutMap").classList.remove('workoutMapHide');
    }
    getTime = event => {
        var name = event.target.getAttribute("name");
        var timerDiv = document.getElementById('currentTime');
        var timer = timerDiv.innerHTML;
        this.setState({
            [name]: timer
        });
    }
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            name: value
        });
    };

    render() {
        return (
            <div className="mobileWrapper">
                <div id="workoutMap" className="workoutMapHide">
                    <div id="Elliptical" name="workoutType" className="workoutPartBtn" src="assets/arm.jpg" onClick={this.chooseWorkoutPart}>Elliptical</div>
                    <div id="Treadmill" name="workoutType" className="workoutPartBtn" src="assets/chest.jpg" onClick={this.chooseWorkoutPart}>Treadmill</div>
                    <div id="Stairmaster" name="workoutType" className="workoutPartBtn" src="assets/arm.jpg" onClick={this.chooseWorkoutPart}>Stairmaster</div>
                </div>

                <Timer></Timer>
                <form id="form">
                    <div className="WorkoutSelect"
                        name="workoutType"
                        onClick={this.updateWorkoutPart}>{this.state.workoutType}
                    </div>
                    {/* <div className="weightTag">Record Time</div>
                    <div className="WorkoutSelect"
                        name="timer"
                        onClick={this.getTime}>{this.state.timer}
                    </div> */}
                    <FormBtn className="submitTag" onClick={this.handleFormSubmit}>
                        Submit
                </FormBtn>
                </form>
            </div>
        )
    }
}
