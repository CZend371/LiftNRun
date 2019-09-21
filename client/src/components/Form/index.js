import React from "react";
import "./style.css";

// pass bodypart repnum setnum weight time
//<Inputvalue = { this.state.title }onChange = { this.handleInputChange } name = "title"placeholder = "Title (required)"   />




export class NumbericInput extends Component(prop) {
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
                <DecreaseBtn name={prop.name} class="NumBtn" onclick={this.DecreaseBtn}></DecreaseBtn>
                <input {...props} />
                <IncreaseBtn name={prop.name} class="NumBtn" onclick={this.IncreaseBtn}></IncreaseBtn>
            </div>
        )
    }
}

export class NameInput extends Component(prop) {
    handleInputChange = event => {
        var { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };
    render() {
        return (
            <div className="Input">
                <DecreaseBtn name={prop.name} class="NumBtn" onclick={this.DecreaseBtn}></DecreaseBtn>
                <input {...props} />
                <IncreaseBtn name={prop.name} class="NumBtn" onclick={this.IncreaseBtn}></IncreaseBtn>
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