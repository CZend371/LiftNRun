import React, { Component } from "react";
import { NumbericInput, NameInput, FormBtn } from "../components/Form";

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

    chooseBodyPart = event => {
        const id = event.target.id;
        this.setState({
            [bodypart]: id
        })
    }
    flipBodyPart = event => {
        var check = document.getElementById("bodyFlip").getAttribute('isFront');
        if (check === true) {
            document.getElementById("bodyFlip").setAttribute('isFront', false);
            document.getElementById("bodyMap1").classList.add('bodyMapHide ');
            document.getElementById("bodyMap2 ").classList.remove('bodyMapShow');

        } else {
            document.getElementById("bodyFlip").setAttribute('isFront', true);
            document.getElementById("bodyMap1").classList.add('bodyMapShow ');
            document.getElementById("bodyMap2 ").classList.remove('bodyMapHide');
        }
    }
    render() {
        <div>
            <div id="bodyMap1" class="bodyMapShow">
                <BodyBtn id="arm" class="" src="assets/arm.jpg" onClick={this.chooseBodyPart}></BodyBtn>
                <BodyBtn id="chest" class="" src="assets/chest.jpg" onClick={this.chooseBodyPart}></BodyBtn>
                <BodyBtn id="abs" class="" src="assets/arm.jpg" onClick={this.chooseBodyPart}></BodyBtn>
            </div>
            <div id="bodyFlip" class="" onClick={this.FlipBodyPart} isFront="true"></div>
            <div id="bodyMap2" class="bodyMapHide">
                <BodyBtn id="back" class="" src="assets/back.jpg" onClick={this.chooseBodyPart}></BodyBtn>
                <BodyBtn id="thigh" class="" src="assets/thigh.jpg" onClick={this.chooseBodyPart}></BodyBtn>
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
        </div>
    }
}

