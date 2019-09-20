import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Discover from "./pages/Entrance";
import About from "./pages/Login";
import Search from "./pages/MenuWorkoutProfile";
import Search from "./pages/MenuGymRun";
import Search from "./pages/MenuWeightCardio";
import Search from "./pages/GymMain";
import Search from "./pages/GymBody";
import Search from "./pages/Cardio";
import Search from "./pages/ProfileMain";
import Search from "./pages/ProfileHistory";

import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import MenuWorkoutProfile from "./pages/MenuWorkoutProfile";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={Entrance} />
          <Route exact path="/MenuWorkoutProfile" component={MenuWorkoutProfile} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

