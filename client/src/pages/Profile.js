import React, { Component } from "react";
import History from "../components/ProfileHistory";
import API from "../utils/API";
import "./style.css";

class MenuWorkoutProfile extends Component {
    // get user info and input to state


    //////
    state = {
        Name: "",
        Intro: "",
        Location: "",
        ///
        type: "",
        workoutType: "",
        bodypart: "",
        weight: "",
        rep: "",
        set: "",
        timer: "",
        date: ""
    };





    /////
    ExpandHistory = event => {
        var check = document.getElementById("bodyFlip").getAttribute('isFront');
        if (check === true) {
            document.getElementById("bodyFlip").setAttribute('isFront', false);
            document.getElementById("profileGroup").classList.add('bodyMapHide ');
            document.getElementById("bodyMap2 ").classList.remove('bodyMapShow');

        } else {
            document.getElementById("bodyFlip").setAttribute('isFront', true);
            document.getElementById("bodyMap1").classList.add('bodyMapShow ');
            document.getElementById("bodyMap2 ").classList.remove('bodyMapHide');
        }
    }
    render() {
        /// get history 
        let workoutList = API.getWorkout().then(res => this.setState({
            type: res.data.type,
            workoutType: res.data.workoutType,
            bodypart: res.data.bodypart,
            weight: res.data.weight,
            rep: res.data.rep,
            set: res.data.set,
            timer: res.data.timer
            //date:""
        }))
        // get list of workout
        return (
            <div>
                <div id="profileGroup">
                    <div id="profileName">{this.state.Name}</div>
                    <div id="profileIntro">{this.state.Name}</div>
                    <div id="profileLocation">{this.state.Name}</div>
                </div>
                <div id="expandHiistory" class="expandBtn" onClick={this.ExpandHistory} isExpanded="true"></div>
                <div id="HistoryGroup">
                {this.state.books.map(book => (
                     <History {...props}></History>
                  )}




                    {this.state.books.length ? (
                        <List>
                            {this.state.books.map(book => (
                                <ListItem key={book._id}>
                                    <Link to={"/books/" + book._id}>
                                        <strong>
                                            {book.title} by {book.author}
                                        </strong>
                                    </Link>
                                    <DeleteBtn onClick={() => this.deleteBook(book._id)} />
                                </ListItem>
                            ))}
                        </List>)
                        : (
                            <h3>No Results to Display</h3>
                        )}
                </div>
            </div>
        );
    }
}

export default MenuWorkoutProfile;