import React, { Component } from "react";
import BinarySeletion from "../components/BinarySeletion";

class MenuWorkoutProfile extends Component {
    state = {
        topTitle: "Work Out",
        botTitle: "Profile",
        topLink: "/Link1",
        botLink: "/Link2"
      };
    render() {
        return (
                <BinarySeletion {...this.state}/>
        );
    }
}

export default MenuWorkoutProfile;