import React, { Component } from "react";
import "../style/main.scss";
import BinarySelection from "../components/BinarySelection";

class MenuWorkoutProfile extends Component {
    state = {
        topTitle: "Work Out",
        botTitle: "Profile",
        topLink: "/MenuGymRun",
        botLink: "/Profile",
        backLink: "/"
    };
    render() {
        return (
            <BinarySelection {...this.state} />
        );
    }
}

export default MenuWorkoutProfile;