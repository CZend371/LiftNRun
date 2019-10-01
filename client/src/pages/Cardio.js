import React, { Component } from "react";
import { NumbericInput, NameInput, FormBtn } from "../components/Form";
import Timer from "../components/timer/Timer";
import API from "../util/API";
import "../style/main.scss";

export default class GymForm extends Component {
    state = {
        workoutType: "Pick Equipment",
        timer: "",
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
        document.getElementById("workoutMap").classList.add('workoutMapHide ');
        document.getElementById("workoutMap ").classList.remove('workoutMapShow');
    }
    updateWorkoutPart = event => {
        console.log("clicked");
        document.getElementById("workoutMap").classList.add('bodyMapShow');
        document.getElementById("workoutMap").classList.remove('bodyMapHide');
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
                    <div id="elliptical" name="workoutType" className="workoutPartBtn" src="assets/arm.jpg" onClick={this.chooseWorkoutPart}>Elliptical</div>
                    <div id="treadmill" name="workoutType" className="workoutPartBtn" src="assets/chest.jpg" onClick={this.chooseWorkoutPart}>Treadmill</div>
                    <div id="stairmaster" name="workoutType" className="workoutPartBtn" src="assets/arm.jpg" onClick={this.chooseWorkoutPart}>Stairmaster</div>
                </div>
                <div className="timerLoc">
                <Timer></Timer></div>
                <form id="form">
                    <div className="bodypartSelect"
                        name="workoutType"
                        onClick={this.updateWorkoutPart}>{this.state.workoutType}
                    </div>
                    <p>timer</p>
                    <NameInput
                        value={this.state.timer}
                        onChange={this.handleInputChange}
                        name="timer"
                    />
                    <FormBtn onClick={this.handleFormSubmit}>
                        Submit
                </FormBtn>
                </form>
            </div>
        )
    }
}
