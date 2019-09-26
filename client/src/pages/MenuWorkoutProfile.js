import React, { Component } from "react";
import BinarySeletion from "../components/BinarySeletion";

class MenuWorkoutProfile extends Component {
    state = {
        topTitle: "Work Out",
        botTitle: "Profile",
        topLink: "/MenuGymRun",
        botLink: "/Profile"
      };
    render() {
        return (
                <BinarySeletion {...this.state}/>
        );
    }
}

export default MenuWorkoutProfile;