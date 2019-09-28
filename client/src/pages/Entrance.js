import React, { Component } from "react";
import "../style/main.scss";
import image from "../style/image/logo.png"


class Entrance extends Component {

    toMenu = event => {
        var a = event.target;
        a.href = this.props.topLink;
    };

    render() {
        return (
            <div className="mobileWrapper">
                <img href="/Login" src={image} />
                <a className="mainTitle" href="/login">
                    Lift N Run
                </a>
            </div>
        );
    }
}

export default Entrance;
