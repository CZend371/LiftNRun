import React, { Component } from "react";
import "../../style/main.scss";


// pass bodypart workoutname repnum setnum weight time
//<Inputvalue = { this.state.title }onChange = { this.handleInputChange } name = "title"placeholder = "Title (required)"   />

export class NumbericInput extends Component {
    render() {
        return (
            <input className="Input" {...this.props} />
        )
    }
}

export class NameInput extends Component {
    render() {
        return (
            <input className="Input" {...this.props} />
        )
    }
}

export function FormBtn() {
    return (
        <button {...this.props} className="FormBtn">
            Submit
        </button>
    );
}