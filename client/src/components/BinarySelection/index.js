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
            var a = document.getElementById('topLink');
            a.href = this.props.topLink;
            var b = document.getElementById('botLink');
            b.href = "#";
            this.setState({ top: true, bot: false });
            document.getElementById("topBtn").style.height = "530px";
            document.getElementById("botBtn").style.height = "262px";
        }
    }
    clickBot = event => {
        if (this.state.bot === false){

            document.getElementById("topLink").href = "#";
            document.getElementById("botLink").href = this.props.botLink;
            this.setState({ top: false, bot: true });
            document.getElementById("topBtn").style.height = "262px";
            document.getElementById("botBtn").style.height = "530px";
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


