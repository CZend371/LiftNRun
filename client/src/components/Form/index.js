import React, { Component } from "react";
import "../../style/main.scss";


// pass bodypart workoutname repnum setnum weight time
//<Inputvalue = { this.state.title }onChange = { this.handleInputChange } name = "title"placeholder = "Title (required)"   />

export class NumbericInput extends Component {
    render() {
        return (
            <div className="Input">
                <input {...this.props} />
            </div>
        )
    }
}

export class NameInput extends Component {
    render() {
        return (
            <div className="Input">
                <input {...this.props} />
            </div>
        )
    }
}

export function FormBtn(props) {
    return (
        <div className="FormBtn">
            Submit
        </div>
    );
}