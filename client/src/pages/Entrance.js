import React, { Component } from "react";


class Entrance extends Component {

    toMenu = event => {
        this.props.history.push('/*****')

    };

    render() {
        return (
            <div>
                <img onClick={this.toMenu} src="asset/logo.jpg" />
                <div onClick={this.toMenu}>
                    Lift N Run
              </div>
            </div>
        );
    }
}

export default Entrance;
