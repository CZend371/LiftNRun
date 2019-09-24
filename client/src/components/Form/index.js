import React from "react";
import "./style.css";

// pass bodypart workoutname repnum setnum weight time
//<Inputvalue = { this.state.title }onChange = { this.handleInputChange } name = "title"placeholder = "Title (required)"   />

export class NumbericInput extends Component(props) {
    ///Method: Increase, Decrease, Input
    IncreaseBtn = event => {
        var { name, value } = event.target;
        if (name === "weight") {
            value += 5;
            this.setState({
                [name]: value
            });
        } else {
            value += 1;
            this.setState({
                [name]: value
            });
        }
    };
    DecreaseBtn = event => {
        var { name, value } = event.target;
        if (name === "weight") {
            value -= 5;
            this.setState({
                [name]: value
            });
        } else {
            value -= 1;
            this.setState({
                [name]: value
            });
        }
    };
    handleInputChange = event => {
        var { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };
    render() {
        return (
            <div className="Input">
                <div name={this.props.name} class="NumBtn" onclick={this.DecreaseBtn}></div>
                <input {...props} />
                <div name={this.props.name} class="NumBtn" onclick={this.IncreaseBtn}></div>
            </div>
        )
    }
}

export class NameInput extends Component(props) {
    handleInputChange = event => {
        var { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };
    render() {
        return (
            <div className="Input">
                <div name={prop.name} class="NumBtn" onclick={this.DecreaseBtn}></div>
                <input {...props} />
                <div name={prop.name} class="NumBtn" onclick={this.IncreaseBtn}></div>
            </div>
        )
    }
}

export function FormBtn(props) {
    return (
        <button {...props}>
            {props.children}
        </button>
    );
}