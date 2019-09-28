import React, { Component } from "react";
import { Route, Switch } from 'react-router-dom'
import Entrance from "./pages/Entrance";
// import LoginPage from "./pages/Login/LoginPage/LoginPage.js";
import MenuWorkoutProfile from "./pages/MenuWorkoutProfile";
import MenuGymRun from "./pages/MenuGymRun";
import MenuWeightCardio from "./pages/MenuWeightCardio";
import Weight from "./pages/Weight";
import Run from "./pages/Run/Run";
import Navbar from "./pages/Login/LoginPage/NavBar";
import Signup from "./pages/Login/LoginPage/SignUp";
import axios from "axios";
import Cardio from "./pages/Cardio";
import Profile from "./pages/Profile";

class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      username: null
    }

    this.getUser = this.getUser.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.updateUser = this.updateUser.bind(this)
  }

  componentDidMount() {
    this.getUser()
  }

  updateUser(userObject) {
    this.setState(userObject)
  }

  getUser() {
    axios.get('/user/').then(response => {
      console.log('Get user response: ')
      console.log(response.data)
      if (response.data.user) {
        console.log('Get User: There is a user saved in the server session: ')

        this.setState({
          loggedIn: true,
          username: response.data.user.username
        })
      } else {
        console.log('Get user: no user');
        this.setState({
          loggedIn: false,
          username: null
        })
      }
    })
  };

  render() {
    return (
      <div className="App">
        <Navbar updateUser={this.updateUser} loggedIn={this.state.loggedIn} />
        {/* {!this.state.loggedIn ?
          (<Switch>
            <Route
              path="/signup"
              render={() =>
                <Signup />}
            />

            <Route  //no path on this route means it is a catch-all
              render={() =>
                <LoginPage
                  updateUser={this.updateUser}
                />
              }
            />

          </Switch>) : */}
        <Switch>
          <Route exact path="/Entrance" component={Entrance} />
          {/* <Route exact path="/login" component={LoginPage} /> */}
          <Route exact path="/MenuWorkoutProfile" component={MenuWorkoutProfile} />
          <Route exact path="/Profile" component={Profile} />
          <Route exact path="/MenuGymRun" component={MenuGymRun} />
          <Route exact path="/Run" component={Run} />
          <Route exact path="/MenuWeightCardio" component={MenuWeightCardio} />
          <Route exact path="/Cardio" component={Cardio} />
          <Route exact path="/Weight" component={Weight} />
          <Route component={Entrance} />
        </Switch>
        }
        }
      </div>
    );
  };
}
export default App;