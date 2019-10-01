import React, { Component } from "react";
import "../../style/main.scss";

// pass topTitle botTitle topLink botLink

export default class BinarySelection extends Component {
    state = {
        top: true,
        bot: false,
    }
    clickTop = event => {
        if (this.state.top === true) {
            var a = document.getElementById('topLink');
            a.href = this.props.topLink;
        } else {
            this.setState({ top: true, bot: false });
            document.getElementById("topBtn").style.height = "812px";
            document.getElementById("botBtn").style.height = "162px";
        }
    }
    clickBot = event => {
        if (this.state.bot === true) {
            var a = document.getElementById('botLink');
            a.href = this.props.botLink;
        } else {
            this.setState({ top: false, bot: true });
            document.getElementById("topBtn").style.height = "812px";
            document.getElementById("botBtn").style.height = "162px";
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


