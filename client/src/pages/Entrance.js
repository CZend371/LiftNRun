import React, { Component } from "react";


class Entrance extends Component {

    toMenu = event => {
        var a = event.target;
        a.href = this.props.topLink;
    };

    render() {
        return (
            <div>
                <img href="/Login" src="asset/logo.jpg" />
                <div href="/Login">
                    Lift N Run
                </div>
            </div>
        );
    }
}

export default Entrance;
