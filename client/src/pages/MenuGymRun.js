import React, { Component } from "react";
import BinarySeletion from "../components/BinarySeletion";
import "../style/main.scss";

class MenuGymRun extends Component {
    state = {
        topTitle: "Gym",
        botTitle: "Run",
        topLink: "/MenuWeightCardio",
        botLink: "/Run"
      };
    render() {
        return (
                <BinarySeletion {...this.state}/>
        );
    }
}

export default MenuGymRun;