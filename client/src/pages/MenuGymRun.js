import React, { Component } from "react";
import BinarySelection from "../components/BinarySelection";
import "../style/main.scss";

class MenuGymRun extends Component {
    state = {
        topTitle: "Gym",
        botTitle: "Run",
        topLink: "/MenuWeightCardio",
        botLink: "/Run"
        backLink: "/MenuWorkoutProfile"
    };
    render() {
        return (
            <BinarySelection {...this.state} />
        );
    }
}

export default MenuGymRun;