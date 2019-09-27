import React, { Component } from "react";
import { NumbericInput, NameInput, FormBtn } from "../components/Form";
import Timer from "../components/Timer";
import API from "../utils/API";
import "../style/main.scss";
// import "./style.css";

export default class GymForm extends Component {
    state = {
        workoutType: "",
        timer: "",
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
        const id = event.target.id;
        this.setState({
            [name]: id
        });
        document.getElementById("workoutMap").classList.add('workoutMapHide ');
        document.getElementById("workoutMap ").classList.remove('workoutMapShow');
    }
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };
    render() {
        <div>
            <div id="workoutMap" className="workoutMapHide">
                <div id="elliptical" name="workoutType" className="workoutPartBtn" src="assets/arm.jpg" onClick={this.chooseWorkoutPart}></div>
                <div id="treadmill" name="workoutType" className="workoutPartBtn" src="assets/chest.jpg" onClick={this.chooseWorkoutPart}></div>
                <div id="stairmaster" name="workoutType" className="workoutPartBtn" src="assets/arm.jpg" onClick={this.chooseWorkoutPart}></div>
            </div>
            <Timer></Timer>
            <form id="form">
            <p>Workout Type</p>
                <div className="workoutInput"
                    name="workoutType"
                    onClick={this.updateworkoutPart}>
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
    }
}
