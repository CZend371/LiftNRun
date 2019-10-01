import React, { Component } from "react";
import History from "../components/History";
import API from "../util/API";
import "../style/main.scss";

class Profile extends Component {
    state = {
        name: "Cristian",
        intro: "Lorem ipsum dolor sit amet, te quis alii admodum usu, nam posse iracundia te.",
        location: "Saint Paul, MN",
        savedWorkout: [{
            date: "9/25/19",
            workoutType: "Bench Press",
            bodypart: "Chest",
            sets: 4,
            reps: 8,
            weight: "185 lb",
            restTime: "20 seconds"
        }],
        savedRun: [{
            time: "",
            distance: ""
        }]
    };
    componentDidMount() {
        // API.getWorkout()
        //     .then(res => this.setState({
        //         savedWorkout: res.data
        //     }))
        //     .catch(err => console.log(err))
        API.getRun()
            .then(res => this.setState({
                savedRun: res.data
            }))
            .catch(err => console.log(err))
    }
    ExpandHistory = event => {
        var check = document.getElementById("expandHiistory").getAttribute('isexpanded');
        if (check === true) {
            document.getElementById("expandHiistory").setAttribute('isfront', false);
            document.getElementById("HistoryGroup").classList.add('historyGroupShow');
            document.getElementById("HistoryGroup ").classList.remove('historyGroupHide');

        } else {
            document.getElementById("expandHiistory").setAttribute('isfront', true);
            document.getElementById("HistoryGroup").classList.add('historyGroupHide');
            document.getElementById("HistoryGroup ").classList.remove('historyGroupShow');
        }
    }
    render() {
        return (
            <div className="mobileWrapper">
                <div id="profileGroup">
                    <div id="profileName"><u>Name:</u> {this.state.name}</div>
                    <div id="profileIntro"><u>Bio:<br></br></u> {this.state.intro}</div>
                    <div id="profileLocation"><u>Location:</u> {this.state.location}</div>
                    <div className="container">
                        <div id="workout-history"><u>Previous Workouts</u>
                            <ul id="workout-list">
                                <ul>Workout Type: {this.state.savedWorkout[0].workoutType},</ul>
                                <ul>Body part: {this.state.savedWorkout[0].bodypart},</ul>
                                <ul>Sets: {this.state.savedWorkout[0].sets},</ul>
                                <ul>Reps: {this.state.savedWorkout[0].reps},</ul>
                                <ul>Weight: {this.state.savedWorkout[0].weight},</ul>
                                <ul>Rest Time: {this.state.savedWorkout[0].restTime}</ul>
                            </ul>
                        </div>
                        <div id="run-history"><u>Previous Runs</u>
                            <ul id="run-list">
                                <ul>Time: {this.state.savedRun[0].time},</ul>
                                <ul>Distance: {this.state.savedRun[0].distance}</ul>
                            </ul>
                        </div>
                    </div>
                </div>
                <div id="expandHiistory" className="expandBtn" onClick={this.ExpandHistory} isexpanded="true"></div>
                <div id="HistoryGroup" className="historyGroupHide">
                    <div className="container">
                        <div>
                            workoutType: {this.state.savedWorkout[0].workoutType},
                            bodypart: {this.state.savedWorkout[0].bodypart},
                            sets: {this.state.savedWorkout[0].sets},
                            reps: {this.state.savedWorkout[0].reps},
                            weight: {this.state.savedWorkout[0].weight},
                            restTime: {this.state.savedWorkout[0].restTime}
                            <History
                                savedWorkout={this.state.savedWorkout}
                                savedRun={this.state.savedRun}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Profile;