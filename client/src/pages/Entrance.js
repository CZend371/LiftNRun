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
                <img className="logo" href="/Login" src={image} alt="dumbbell running" />
                <br />
                <br />
                <a href="/login">
                    <div class="mainTitleEntrance" >
                        Lift N Run </div>
                </a>
            </div>
        );
    }
}

export default Entrance;
