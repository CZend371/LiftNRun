import React, { Component } from "react";
import BinarySeletion from "../components/BinarySeletion";
import "../style/main.scss";

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