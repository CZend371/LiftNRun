import React from "react";
import "./style.css";



export default class History extends Component(props) {
    ShowHistory =  event =>{
        const id = event.target.id;
        document.getElementById(id).classList.add('showDetail ');
        document.getElementById(id).classList.remove('hideDetail');
    }
    HideHistory =  event =>{
        const id = event.target.id;
        document.getElementById(id).classList.add('hideDetail ');
        document.getElementById(id).classList.remove('showDetail');
    }
    render() {
        let detail;
        if (props.type === "weight") {
            detail = <div>
                <div>Type</div>
                <div>{props.workoutType}</div>
                <div>{props.bodypart}</div>
                <div>{props.weight}</div>
                <div>{props.set} sets for {props.rep} </div>
                <div>Rest time {props.timer} </div>
            </div>
        } else {
            detail = <div>
                <div>Running Time {props.timer} </div>
            </div>
        }
        <History>
            <div class="historyTitle" onclick={this.ShowHistory}>
                {props.date}{props.type}
            </div>
            <div class="history" id={props.id} class="hideDetail">
                {detail}
                <div class="HideHistory" onclick={this.HideHistory}>
                </div>
            </div>
        </History>
    }
}
