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
            <div className="">
                No Workout Saved
            </div>;
        } else {
            var detail;
            if (props.type === "weight") {
                detail = <div class ="container">
                    <div class="titleClass">Type</div>
                    <div class="contentClass">{props.workoutType}</div>
                    <div class="titleClass">Body </div>
                    <div class="contentClass">{props.bodypart}</div>
                    <div class="titleClass">Type</div>
                    <div class="contentClass">{props.weight}</div>
                    <div class="contentClass">{props.set} sets for {props.rep} </div>
                    <div class="titleClass">Type</div>
                    <div class="contentClass">Rest time {props.timer} </div>
                </div>
            } else {
                detail = <div>
                    <div>Running Time {props.timer} </div>
                </div>
            }
        }
        <div>
            <div class="historyTitle" onclick={this.ShowHistory}>
                {props.date}{props.type}
            </div>
            <div class="history" id={props.id} class="hideDetail">
                {detail}
                <div class="hideHistory" onclick={this.HideHistory}>
                </div>
            </div>
        </div>

    }
}
