import React, { Component } from "react";
import BinarySelection from "../components/BinarySelection";
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
            <BinarySelection {...this.state} />
        );
    }
}

export default MenuWeightCario;