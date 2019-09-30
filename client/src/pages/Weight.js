import React, { Component } from "react";
import { NumbericInput, NameInput, FormBtn } from "../components/Form";
import API from "../util/API";
import "../style/main.scss";
import bodyImage1 from "../style/image/body-front.png"
import bodyImage2 from "../style/image/body-back.png"



export default class GymForm extends Component {
    state = {
        workoutType: "",
        bodypart: "Choose Body Part",
        weight: 5,
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
        })
            .catch(err => console.log(err));
    };

    chooseBodyPart = event => {
        var name = event.target.getAttribute("name");
        var id = event.target.getAttribute("id");
        this.setState({
            [name]: id
        });
        document.getElementById("bodyMap1").classList.add('bodyMapHide');
        document.getElementById("bodyMap1").classList.remove('bodyMapShow');
        document.getElementById("bodyMap2").classList.add('bodyMapHide');
        document.getElementById("bodyMap2").classList.remove('bodyMapShow');
    }
    flipBodyPart = event => {
        var check = event.target.getAttribute('isfront');
        console.log(check);
        if (check === "true") {
            document.getElementById("bodyMap1").classList.add('bodyMapHide');
            document.getElementById("bodyMap1").classList.remove('bodyMapShow');
            document.getElementById("bodyMap2").classList.add('bodyMapShow');
            document.getElementById("bodyMap2").classList.remove('bodyMapHide');

        } else {
            document.getElementById("bodyMap1").classList.remove('bodyMapHide');
            document.getElementById("bodyMap1").classList.add('bodyMapShow');
            document.getElementById("bodyMap2").classList.remove('bodyMapShow');
            document.getElementById("bodyMap2").classList.add('bodyMapHide');
        }
    }
    updateBodyPart = event => {
        document.getElementById("bodyMap1").classList.add('bodyMapShow');
        document.getElementById("bodyMap1").classList.remove('bodyMapHide');
        document.getElementById("bodyMap1").classList.add('bodyMapShow');
        document.getElementById("bodyMap1").classList.remove('bodyMapHide');
    }
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };
    IncreaseBtn = event => {
        var name = event.target.getAttribute("name");
        console.log(name);
        var value = this.state[name]
        console.log(value);
        if (name === "weight") {
            value += 5;
            this.setState({
                weight: value
            });
        } else {
            value += 1;
            this.setState({
                [name]: value
            });
        }
        document.getElementById(name).value = value;
    };
    DecreaseBtn = event => {
        var name = event.target.getAttribute("name");
        var value = this.state[name]
        if (name === "weight") {
            value -= 5;
            this.setState({
                weight: value
            });
        } else {
            value = 1;
            this.setState({
                [name]: value
            });
        }
        document.getElementById(name).value = value;
    };


    render() {
        return (
            <div className="mobileWrapper">
                <div id="bodyMap1" className="bodyMapHide">
                    <img className="imageWrapper" src={bodyImage1} />
                    <div id="arms" name="bodypart" className="arm bodyPartBtn" onClick={this.chooseBodyPart}></div>
                    <div id="chest" name="bodypart" className="chest bodyPartBtn" onClick={this.chooseBodyPart}></div>
                    <div id="abs" name="bodypart" className="abs bodyPartBtn" onClick={this.chooseBodyPart}></div>
                    <div id="legs" name="bodypart" className="legs bodyPartBtn" onClick={this.chooseBodyPart}></div>
                    <div id="bodyFlip" className="flipBtn" onClick={this.flipBodyPart} isfront="true">Go to Back</div>
                </div>                
                <div id="bodyMap2" className="bodyMapHide">
                    <img className="imageWrapper" src={bodyImage2} />
                    <div id="arms" name="bodypart" className="arm bodyPartBtn" onClick={this.chooseBodyPart}></div>
                    <div id="back" name="bodypart" className="back bodyPartBtn" onClick={this.chooseBodyPart}></div>
                    <div id="legs" name="bodypart" className="legs bodyPartBtn" onClick={this.chooseBodyPart}></div>
                    <div id="bodyFlip" className="flipBtn" onClick={this.flipBodyPart} isfront="false">Go to Front</div>
                </div>
                <form id="form">
                    <div className="weightTag">workoutType</div>
                    <NameInput
                        className="Name"
                        value={this.state.workoutType}
                        onChange={this.handleInputChange}
                        name="workoutType"
                    />
                    <br/>
                    <div className="bodypartSelect"
                        value=""
                        name="bodypart"
                        onClick={this.updateBodyPart}>{this.state.bodypart}
                    </div>
                    <div className="weightTag">weight</div>
                    <div name="weight" className="NumBtn" onClick={this.DecreaseBtn}>-</div>
                    <NumbericInput
                        className="Num"
                        value={this.state.weight}
                        onChange={this.handleInputChange}
                        id="weight"
                    />
                    <div name="weight" className="NumBtn" onClick={this.IncreaseBtn}>+</div>
                    <br/>
                    <div className="weightTag">rep</div>
                    <div name="rep" className="NumBtn" onClick={this.DecreaseBtn}>-</div>
                    <NumbericInput
                        className="Num"
                        value={this.state.rep}
                        onChange={this.handleInputChange}
                        id="rep"
                    />
                    <div name="rep" className="NumBtn" onClick={this.IncreaseBtn}>+</div>
                    <br/>        
                    <div className="weightTag">Set</div>
                    <div name="set" className="NumBtn" onClick={this.DecreaseBtn}>-</div>
                    <NumbericInput
                        className="Num"
                        value={this.state.set}
                        onChange={this.handleInputChange}
                        id="set"
                    />
                    <div name="set" className="NumBtn" onClick={this.IncreaseBtn}>+</div>
                    <br/>
                    <div className="weightTag">timer</div>
                    <NameInput
                        className="Num"
                        value={this.state.timer}
                        onChange={this.handleInputChange}
                        name="timer"
                    />
                    <br/>
                    <FormBtn onClick={this.handleFormSubmit}>
                        Submit
                    </FormBtn>
                </form>
            </div>
        )
    }
}

