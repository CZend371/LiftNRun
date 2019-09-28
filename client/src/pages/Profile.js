import React, { Component } from "react";
import History from "../components/History";
import API from "../utils/API";
// import "./style.css";
import "../style/main.scss";


class Profile extends Component {
    state = {
        name: "",
        intro: "",
        location: "",
        savedWorkout: []
    };
    componentDidMount() {
        API.getWorkout()
            .then(res => this.setState({ savedWorkout: res.data }))
            .catch(err => console.log(err))
    }
    ExpandHistory = event => {
        var check = document.getElementById("expandHiistory").getAttribute('isExpanded');
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
            <div>
                <div id="profileGroup">
                    <div id="profileName">{this.state.name}</div>
                    <div id="profileIntro">{this.state.intro}</div>
                    <div id="profileLocation">{this.state.location}</div>
                </div>
                <div id="expandHiistory" className="expandBtn" onClick={this.ExpandHistory} isExpanded="true"></div>
                <div id="HistoryGroup" className="historyGroupHide">
                    <div fluid className="container">
                        <div>
                            <History savedWorkout={this.state.savedWorkout} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Profile;