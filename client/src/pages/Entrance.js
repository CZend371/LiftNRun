import React, { Component } from "react";
import "../style/main.scss";


class Entrance extends Component {

    toMenu = event => {
        var a = event.target;
        a.href = this.props.topLink;
    };

    render() {
        return (
            <div>
                <img href="/Login" src="asset/logo.jpg" />
                <a href="/login">
                    Lift N Run
                </a>
            </div>
        );
    }
}

export default Entrance;
