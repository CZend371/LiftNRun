import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Entrance from "./pages/Entrance";
import LoginPage from "./pages/Login/LoginPage/LoginPage.js";
import MenuWorkoutProfile from "./pages/MenuWorkoutProfile";
import MenuGymRun from "./pages/MenuGymRun";
import MenuWeightCardio from "./pages/MenuWeightCardio";
import Weight from "./pages/Weight";
import Run from "./pages/Run/Run";
//import Cardio from "./pages/Cardio";
//import ProfileMain from "./pages/ProfileMain";
//import ProfileHistory from "./pages/ProfileHistory";

// import Navbar from "./components/Navbar";
// import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Router>
      <div>
        {/* <Navbar /> */}
        {/* <Wrapper> */}
        <Route exact path="/" component={Entrance} />
        <Route exact path="/Entrance" component={Entrance} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/MenuWorkoutProfile" component={MenuWorkoutProfile} />
        {/* <Route exact path="/Profile" component={Profile} /> */}
        <Route exact path="/MenuGymRun" component={MenuGymRun} />
        <Route exact path="/Run" component={Run} />
        <Route exact path="/MenuWeightCardio" component={MenuWeightCardio} />
        <Route exact path="/Weight" component={Weight} />
        {/* </Wrapper> */}
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;

