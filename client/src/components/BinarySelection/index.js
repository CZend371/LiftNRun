import React, { Component } from "react";
import "../../style/main.scss";

// pass topTitle botTitle topLink botLink

export default class BinarySelection extends Component {
    state = {
        top: true,
        bot: false,
    }
    clickTop = event => {
        if (this.state.top === false) {
            event.preventDefault();
            document.getElementById("botLink").href = "#";
            document.getElementById("topLink").href = this.props.topLink;
            document.getElementById("topBtn").style.height = "530px";
            document.getElementById("botBtn").style.height = "262px";
            this.setState({ top: true, bot: false });
        }
    }
    clickBot = event => {
        if (this.state.bot === false){
            event.preventDefault();
            document.getElementById("topLink").href = "#";
            document.getElementById("botLink").href = this.props.botLink;
            document.getElementById("topBtn").style.height = "262px";
            document.getElementById("botBtn").style.height = "530px";
            this.setState({ top: false, bot: true });
        }
    }
    render() {
        return (
            <div className="mobileWrapper">
                <a id="topLink" href={this.props.topLink}>
                    <div id="topBtn" className="topBtn binaryBtn" onClick={this.clickTop}>{this.props.topTitle}</div></a>
                <a id="botLink" href="#">
                    <div id="botBtn" className="botBtn binaryBtn" onClick={this.clickBot}>{this.props.botTitle}</div></a>
            </div>
        )
    }

}


