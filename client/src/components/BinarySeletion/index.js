import React from "react";
import "./style.css";

// pass topTitle botTitle topLink botLink

export default class BinarySelection extends Component(props) {
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
            var a = document.getElementById('botBtn');
            a.href = this.props.botLink;
        } else {
            this.setState({ top: false, bot: true });
            document.getElementById("topBtn").style.height = "812px";
            document.getElementById("botBtn").style.height = "162px";
        }
    }
    render() {
        return (
            <BinarySelection>
                <a id = "topLink" href="#"><BinaryBtn id="topBtn" className="binaryBtn" onclick={this.clickTop}>{prop.topTitle}</BinaryBtn></a>
                <a id = "bopLink"href="#"><BinaryBtn id="botBtn" class="binaryBtn" onclick={this.clickBot}>{prop.botTitle}</BinaryBtn></a>

            </BinarySelection>
        )
    }

}


