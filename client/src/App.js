import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Entrance from "./pages/Entrance";
import Login from "./pages/Login";
import MenuWorkoutProfile from "./pages/MenuWorkoutProfile";
import MenuGymRun from "./pages/MenuGymRun";
import MenuWeightCardio from "./pages/MenuWeightCardio.js";
import Gym from "./pages/Gym";
import Cardio from "./pages/Cardio";
import Search from "./pages/ProfileMain";
import Search from "./pages/ProfileHistory";

import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={Entrance} />
          <Route exact path="/MenuWorkoutProfile" component={MenuWorkoutProfile} />
          <Route exact path="/Profile" component={Profile} />
          <Route exact path="/MenuGymRun" component={MenuGymRun} />
          <Route exact path="/Run" component={Run} />
          <Route exact path="/MenuWeightCardio" component={MenuWeightCardio} />
          <Route exact path="/Weight" component={Weight} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

