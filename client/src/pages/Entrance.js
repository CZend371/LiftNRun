import React, { Component } from "react";


class Entrance extends Component {

    toMenu = event => {
        var a = event.target;
        a.href = prop.topLink;
    };

    render() {
        return (
            <div>
                <img href = "/MenuWorkoutProfile" src="asset/logo.jpg" />
                <div href = "/MenuWorkoutProfile">
                    Lift N Run
                </div>
            </div>
        );
    }
}

export default Entrance;
