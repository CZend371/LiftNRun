import React, { Component } from "react";
import { NumbericInput, NameInput, FormBtn } from "../components/Form";
import API from "../util/API";
// import "./style.css";
import "../style/main.scss";


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
            type: "weight",
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
        const { name, id } = event.target.id;
        this.setState({
            [name]: id
        });
        document.getElementById("bodyMap1").classList.add('bodyMapHide ');
        document.getElementById("bodyMap1 ").classList.remove('bodyMapShow');
        document.getElementById("bodyMap2").classList.add('bodyMapHide ');
        document.getElementById("bodyMap2 ").classList.remove('bodyMapShow');
    }
    flipBodyPart = event => {
        var check = document.getElementById("bodyFlip").getAttribute('isfront');
        if (check === true) {
            document.getElementById("bodyFlip").setAttribute('isfront', false);
            document.getElementById("bodyMap1").classList.add('bodyMapHide ');
            document.getElementById("bodyMap2 ").classList.remove('bodyMapShow');

        } else {
            document.getElementById("bodyFlip").setAttribute('isfront', true);
            document.getElementById("bodyMap1").classList.add('bodyMapShow ');
            document.getElementById("bodyMap2 ").classList.remove('bodyMapHide');
        }
    }
    updateBodyPart = event => {
        document.getElementById("bodyMap1").classList.add('bodyMapShow ');
        document.getElementById("bodyMap1 ").classList.remove('bodyMapHide');
    }
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    render() {
        return (
            <div>
                <div id="bodyMap1" className="bodyMapHide">
                    <div id="arms" name="bodyType" className="bodyPartBtn" src="assets/arm.jpg" onClick={this.chooseBodyPart}></div>
                    <div id="chest" name="bodyType" className="bodyPartBtn" src="assets/chest.jpg" onClick={this.chooseBodyPart}></div>
                    <div id="abs" name="bodyType" className="bodyPartBtn" src="assets/arm.jpg" onClick={this.chooseBodyPart}></div>
                </div>
                <div id="bodyFlip" className="flipBtn" onClick={this.FlipBodyPart} isfront="true"></div>
                <div id="bodyMap2" name="bodyType" className="bodyMapHide">
                    <div id="back" name="bodyType" className="bodyPartBtn" src="assets/back.jpg" onClick={this.chooseBodyPart}></div>
                    <div id="legs" name="bodyType" className="bodyPartBtn" src="assets/thigh.jpg" onClick={this.chooseBodyPart}></div>
                </div>
                <form id="form">
                    <p>workoutType</p>
                    <NameInput
                        value={this.state.name}
                        onChange={this.handleInputChange}
                        name="workoutType"
                    />
                    <p>bodypart</p>
                    <div className="bodypartSelect"
                        name="bodypart"
                        onClick={this.updateBodyPart}>
                    </div>
                    <p>weight</p>
                    <NumbericInput
                        value={this.state.weight}
                        // onChange={this.handleInputChange}
                        name="weight"
                    />
                    <p>rep</p>
                    <NumbericInput
                        value={this.state.rep}
                        onChange={this.handleInputChange}
                        name="rep"
                    />
                    <p>set</p>
                    <NumbericInput
                        value={this.state.set}
                        onChange={this.handleInputChange}
                        name="set"
                    />
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

