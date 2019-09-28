import React, { Component } from "react";
import { NumbericInput, NameInput, FormBtn } from "../components/Form";
import API from "../util/API";
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
    IncreaseBtn = event => {
        var name = event.target.name;
        var value = this.state[name]
        if (name === "weight") {
            this.value += 5;
            this.setState({
                name: value
            });
        } else {
            this.value += 1;
            this.setState({
                name: value
            });
        }
        document.getElementById(name).value = value;
    };
    DecreaseBtn = event => {
        var name = event.target.name;
        var value = this.state[name]
        this.setState({ name: name })
        if (name === "weight") {
            this.value += 5;
            this.setState({
                name: value
            });
        } else {
            this.value += 1;
            this.setState({
                name: value
            });
        }
        document.getElementById(name).value = value;
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
                    <div name="weight" className="NumBtn" onClick={this.DecreaseBtn}>-</div>
                    <NumbericInput
                        value={this.state.weight}
                        onChange={this.handleInputChange}
                        id="weight"
                    />
                    <div name="weight" className="NumBtn" onClick={this.IncreaseBtn}>+</div>
                    <p>rep</p>
                    <div name="rep" className="NumBtn" onClick={this.DecreaseBtn}>-</div>
                    <NumbericInput
                        value={this.state.rep}
                        onChange={this.handleInputChange}
                        id="rep"
                    />
                    <div name="rep" className="NumBtn" onClick={this.IncreaseBtn}>+</div>
                    <p>set</p>
                    <div name="set" className="NumBtn" onClick={this.DecreaseBtn}>-</div>
                    <NumbericInput
                        value={this.state.set}
                        onChange={this.handleInputChange}
                        id="set"
                    />
                    <div name="set" className="NumBtn" onClick={this.IncreaseBtn}>+</div>
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

