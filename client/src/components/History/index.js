<<<<<<< Updated upstream
import React , { Component } from "react";
import "./../../assets/main";


=======
import React, { Component } from "react";
import "../../style/main.scss";
>>>>>>> Stashed changes

export default class History extends Component {
  ShowHistory = event => {
    const id = event.target.id;
    document.getElementById(id).classList.add("showDetail ");
    document.getElementById(id).classList.remove("hideDetail");
  };
  HideHistory = event => {
    const id = event.target.id;
    document.getElementById(id).classList.add("hideDetail ");
    document.getElementById(id).classList.remove("showDetail");
  };
  render() {
    return (
      <div>
        {this.props.savedWorkout.length === 0 && (
          <div class="container">
            <div className="titleClass">No Workout Saved</div>
          </div>
        )}
        {this.props.type === "weight" && (
          <div class="container">
            <div className="titleClass">Type</div>
            <div className="contentClass">{this.props.workoutType}</div>
            <div className="titleClass">Body </div>
            <div className="contentClass">{this.props.bodypart}</div>
            <div className="titleClass">Type</div>
            <div className="contentClass">{this.props.weight}</div>
            <div className="contentClass">
              {this.props.set} sets for {this.props.rep}{" "}
            </div>
            <div className="titleClass">Type</div>
            <div className="contentClass">Rest time {this.props.timer} </div>
          </div>
        )}
        {!(this.props.type === "weight") && (
          <div class="container">
            <div className="titleClass">Running Time {this.props.timer} </div>
          </div>
        )}
        <div>
          <div className="historyTitle" onclick={this.ShowHistory}>
            {this.props.date}
            {this.props.type}
          </div>
          <div className="history" id={this.props.id}>
            {detail}
            <div className="hideHistory" onclick={this.HideHistory}></div>
          </div>
        </div>
      </div>
    );
  }
}
