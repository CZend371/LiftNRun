import React from "react";
import "./style.css";

// pass topTitle botTitle topLink botLink

export default class BinarySelection extends Component(prop) {
    state = {
        top: true,
        bot: false,
    }
    clickTop = event => {
        if (this.state.top === true) {
            var a = document.getElementById('topBtn');
            a.href = prop.topLink;
        } else {
            this.setState({ top: true, bot: false });
            document.getElementById("topBtn").classList.add('clicked1 ');
            document.getElementById("topBtn ").classList.remove('clicked0');
            document.getElementById("botBtn").classList.add('clicked0 ');
            document.getElementById("botBtn ").classList.remove('clicked1');
        }
    }
    clickBot = event => {
        if (this.state.bot === true) {
            var a = document.getElementById('botBtn');
            a.href = prop.botLink;
        } else {
            this.setState({ top: false, bot: true });
            document.getElementById("topBtn").classList.add('clicked0 ');
            document.getElementById("topBtn ").classList.remove('clicked1');
            document.getElementById("botBtn").classList.add('clicked1 ');
            document.getElementById("botBtn ").classList.remove('clicked0');
        }
    }
    render() {
        return (
            <BinarySelection>
                <BinaryBtn id="topBtn" class="clicked1" onclick={this.clickTop}>{prop.topTitle}</BinaryBtn>
                <BinaryBtn id="botBtn" class="clicked0" onclick={this.clickBot}>{prop.botTitle}</BinaryBtn>
            </BinarySelection>
        )
    }

}


