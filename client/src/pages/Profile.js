import React, { Component } from "react";
import "./style.css";

class MenuWorkoutProfile extends Component {
    // get user info and input to state


    //////
    state = {
        Name: "",
        Intro: "",
        Location: ""
    };

    /// get history




    /////
    expandHistory = event => {
        var check = document.getElementById("bodyFlip").getAttribute('isFront');
        if (check === true) {
            document.getElementById("bodyFlip").setAttribute('isFront', false);
            document.getElementById("profileGroup").classList.add('bodyMapHide ');
            document.getElementById("bodyMap2 ").classList.remove('bodyMapShow');

        } else {
            document.getElementById("bodyFlip").setAttribute('isFront', true);
            document.getElementById("bodyMap1").classList.add('bodyMapShow ');
            document.getElementById("bodyMap2 ").classList.remove('bodyMapHide');
        }
    }
    render() {
        return (
            <div>
                <div id="profileGroup">
                    <div id="profileName">{this.state.Name}</div>
                    <div id="profileIntro">{this.state.Name}</div>
                    <div id="profileLocation">{this.state.Name}</div>
                </div>
                <div id="expandHiistory" onClick={this.FlipBodyPart} isFront="true"></div>
                <div id="profileGroup">
                    <div id="profileName">{this.state.Name}</div>
                    <div id="profileIntro">{this.state.Name}</div>
                    <div id="profileLocation">{this.state.Name}</div>
                </div>
            </div>
        );
    }
}

export default MenuWorkoutProfile;