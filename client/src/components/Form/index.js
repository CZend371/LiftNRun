import React, { Component } from "react";
import "../../style/main.scss";


// pass bodypart workoutname repnum setnum weight time
//<Inputvalue = { this.state.title }onChange = { this.handleInputChange } name = "title"placeholder = "Title (required)"   />

export class NumbericInput extends Component {
    state = {
        value: 0,
    }
    ///Method: Increase, Decrease, Input
    IncreaseBtn = event => {
        var { name, value } = event.target;
        console.log(event.target);
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
        document.getElementById(this.props.name).value = value;
    };
    DecreaseBtn = event => {
        var { name, value } = event.target;
        console.log(event.target);
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
        console.log(this.state.value);
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
                {this.props.name}
                <div name={this.props.name} className="NumBtn" onClick={this.DecreaseBtn}>-</div>
                <input id={this.props.name} value={this.state.value} />
                <div name={this.props.name} className="NumBtn" onClick={this.IncreaseBtn}>+</div>
            </div>
        )
    }
}

export class NameInput extends Component {
    // handleInputChange = event => {
    //     var { name, value } = event.target;
    //     this.setState({
    //         [name]: value
    //     });
    // };
    render() {
        return (
            <div className="Input">
                <input {...this.props} />
            </div>
        )
    }
}

export function FormBtn() {
    return (
        <div className="FormBtn">
            Submit
        </div>
    );
}