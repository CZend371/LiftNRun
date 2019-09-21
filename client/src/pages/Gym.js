import React, { Component } from "react";
import { NumbericInput, NameInput, FormBtn } from "../components/Form";
import BodyBtn from "../components/BodyBtn";

export default class GymForm extends Component {
    state = {
        workoutType: "",
        bodypart: "",
        weight: 10,
        rep: 0,
        set: 0,
        timer: "",
    };
    handleFormSubmit = event => {
        event.preventDefault();
        API.saveWorkout({
            workoutType: this.state.workoutType,
            bodypart: this.state.bodypart,
            weight: this.state.weight,
            rep: this.state.rep,
            set: this.state.set,
            timer: this.state.timer,
        })
            .catch(err => console.log(err));
    };

    chooseBodyPart = event =>{
        const name = event.target;
        this.setState({
            [bodypart]: name
        })

    }
    render() {
        <div id="bodyMap_1" class="bodyMap_1">
            <BodyBtn name="arm" class = "" src = "assets/arm.jpg" onClick={this.chooseBodyPart}></BodyBtn>
            <BodyBtn name="chest" class = "" src = "assets/chest.jpg" onClick={this.chooseBodyPart}></BodyBtn>
            <BodyBtn name="abs" class = "" src = "assets/arm.jpg" onClick={this.chooseBodyPart}></BodyBtn>
        </div>
        <div id="bodyMap_2" class="bodyMap_2">
            <BodyBtn name="back" class = "" src = "assets/back.jpg" onClick={this.chooseBodyPart}></BodyBtn>
            <BodyBtn name="thigh" class = "" src = "assets/thigh.jpg" onClick={this.chooseBodyPart}></BodyBtn>
        </div>
            <form id="form">
                <p>workoutType</p>
                <NameInput
                    value={this.state.name}
                    name="workoutType"
                />
                <p>bodypart</p>
                <BodyInput
                    value={this.state.bodypart}
                    name="bodypart"
                    onClick={this.updateBodyPart}
                />
                <p>weight</p>
                <NumbericInput
                    value={this.state.weight}
                    name="weight"
                />
                <p>rep</p>
                <NumbericInput
                    value={this.state.rep}
                    name="rep"
                />
                <p>set</p>
                <NumbericInput
                    value={this.state.set}
                    name="set"
                />
                <p>timer</p>
                <NameInput
                    value={this.state.timer}
                    name="timer"
                />
                <FormBtn onClick={this.handleFormSubmit}>
                    Submit
            </FormBtn>
            </form>
    }
}

