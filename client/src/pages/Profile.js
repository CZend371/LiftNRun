import React, { Component } from "react";
import History from "../components/History";
import API from "../util/API";
import "../style/main.scss";

class Profile extends Component {
    state = {
        name: "Cristian",
        intro: "asdfsd",
        location: "stp",
        savedWorkout: [],
        savedRun: []
    };
    componentDidMount() {
        API.getWorkout()
            .then(res => this.setState({
                savedWorkout: res.data
            }))
            .catch(err => console.log(err))
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
                    <div id="profileName">Name: {this.state.name}</div>
                    <div id="profileIntro">Intro: {this.state.intro}</div>
                    <div id="profileLocation">Location: {this.state.location}</div>
                </div>
                <div id="expandHiistory" className="expandBtn" onClick={this.ExpandHistory} isexpanded="true"></div>
                <div id="HistoryGroup" className="historyGroupHide">
                    <div className="container">
                        <div>
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