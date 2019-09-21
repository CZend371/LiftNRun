import React, { Component } from "react";
import BinarySeletion from "../components/BinarySeletion";

class MenuWeightCario extends Component {
    state = {
        topTitle: "Weight",
        botTitle: "Cardio",
        topLink: "/Weight",
        botLink: "/Cardio"
      };
    render() {
        return (
                <BinarySeletion {...this.state}/>
        );
    }
}

export default MenuWeightCario;