import React from "react";
import "./style.css";



export default class History extends Component(props) {
    ShowHistory = event => {
        const id = event.target.id;
        document.getElementById(id).classList.add('showDetail ');
        document.getElementById(id).classList.remove('hideDetail');
    }
    HideHistory = event => {
        const id = event.target.id;
        document.getElementById(id).classList.add('hideDetail ');
        document.getElementById(id).classList.remove('showDetail');
    }
    render() {
        if (props.savedWorkout.length === 0) {
            <div class="container">
                <div className="titleClass">
                    No Workout Saved
                </div>
            </div>;
        } else {
            var detail;
            if (props.type === "weight") {
                detail = <div class="container">
                    <div className="titleClass">Type</div>
                    <div className="contentClass">{props.workoutType}</div>
                    <div className="titleClass">Body </div>
                    <div className="contentClass">{props.bodypart}</div>
                    <div className="titleClass">Type</div>
                    <div className="contentClass">{props.weight}</div>
                    <div className="contentClass">{props.set} sets for {props.rep} </div>
                    <div className="titleClass">Type</div>
                    <div className="contentClass">Rest time {props.timer} </div>
                </div>
            } else {
                detail =
                    <div class="container">
                        <div className="titleClass">Running Time {props.timer} </div>
                    </div>
            }
        }
        <div>
            <div className="historyTitle" onclick={this.ShowHistory}>
                {props.date}{props.type}
            </div>
            <div className="history" id={props.id}>
                {detail}
                <div className="hideHistory" onclick={this.HideHistory}>
                </div>
            </div>
        </div>

    }
}
