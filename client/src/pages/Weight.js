import React, { Component } from "react";
import { NumbericInput, NameInput, FormBtn } from "../components/Form";
import "./style.css";

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
            type:"weight",
            workoutType: this.state.workoutType,
            bodypart: this.state.bodypart,
            weight: this.state.weight,
            rep: this.state.rep,
            set: this.state.set,
            timer: this.state.timer,
            //date:""
        })
            .catch(err => console.log(err));
    };

    chooseBodyPart = event => {
        const id = event.target.id;
        this.setState({
            [bodypart]: id
        });
        document.getElementById("bodyMap1").classList.add('bodyMapHide ');
        document.getElementById("bodyMap1 ").classList.remove('bodyMapShow');
        document.getElementById("bodyMap2").classList.add('bodyMapHide ');
        document.getElementById("bodyMap2 ").classList.remove('bodyMapShow');
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
    updateBodyPart = event => {
        var check = document.getElementById("bodyFlip");
        document.getElementById("bodyMap1").classList.add('bodyMapShow ');
        document.getElementById("bodyMap1 ").classList.remove('bodyMapHide');
        }
    render() {
        <div>
<<<<<<< HEAD
            <div id="bodyMap1" className="bodyMapHide">
                <div id="arm" className="bodyPartBtnArm" src="assets/arm.jpg" onClick={this.chooseBodyPart}></div>
                <div id="chest" className="bodyPartBtnChest" src="assets/chest.jpg" onClick={this.chooseBodyPart}></div>
                <div id="abs" className="bodyPartBtnAbs" src="assets/arm.jpg" onClick={this.chooseBodyPart}></div>
            </div>
            <div id="bodyFlip" className="flipBtn" onClick={this.FlipBodyPart} isFront="true"></div>
            <div id="bodyMap2" className="bodyMapHide">
                <div id="back" className="bodyPartBtnBack" src="assets/back.jpg" onClick={this.chooseBodyPart}></div>
                <div id="thigh" className="bodyPartBtnThigh" src="assets/thigh.jpg" onClick={this.chooseBodyPart}></div>
=======
            <div id="bodyMap1" class="bodyMapHide">
                <BodyBtn id="arm" class="bodyPartBtnArm" src="assets/arm.jpg" onClick={this.chooseBodyPart}></BodyBtn>
                <BodyBtn id="chest" class="bodyPartBtnChest" src="assets/chest.jpg" onClick={this.chooseBodyPart}></BodyBtn>
                <BodyBtn id="abs" class="bodyPartBtnAbs" src="assets/arm.jpg" onClick={this.chooseBodyPart}></BodyBtn>
            </div>
            <div id="bodyFlip" class="flipBtn" onClick={this.FlipBodyPart} isFront="true"></div>
            <div id="bodyMap2" class="bodyMapHide">
                <BodyBtn id="back" class="bodyPartBtnBack" src="assets/back.jpg" onClick={this.chooseBodyPart}></BodyBtn>
                <BodyBtn id="thigh" class="bodyPartBtnThigh" src="assets/thigh.jpg" onClick={this.chooseBodyPart}></BodyBtn>
>>>>>>> parent of 7717059... form style
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

