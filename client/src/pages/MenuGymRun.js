import React, { Component } from "react";
import BinarySeletion from "../components/BinarySeletion";

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