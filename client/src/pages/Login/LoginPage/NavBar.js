import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'

class Navbar extends Component {
  constructor() {
    super();
    this.logout = this.logout.bind(this);
  }

  logout(event) {
    event.preventDefault();
    console.log("logging out");
    axios
      .post("/user/logout")
      .then(response => {
        console.log(response.data);
        if (response.status === 200) {
          this.props.updateUser({
            loggedIn: false,
            username: null
          });
        }
      })
      .catch(error => {
        console.log("Logout error");
      });
  }

  render() {
    const loggedIn = this.props.loggedIn;
    console.log("navbar render, props: ");
    console.log(this.props);

    return (
      <div>
        <header className="navbar App-header" id="nav-container">
          <div className="col-4">
            {loggedIn ? (
              <section className="navbar-section">
                <Link
                  to="#"
                  className="btn btn-link text-secondary"
                  onClick={this.logout}
                >
                  <span className="text-secondary">logout</span>
                </Link>
              </section>
            ) : (
              <section className="navbar-section">
                <Link to="/" className="btn btn-link text-secondary">
                  <span className="text-secondary">Home</span>
                </Link>
                <Link to="/Login" className="btn btn-link text-secondary">
                  <span className="text-secondary">Login</span>
                </Link>
                <Link to="/Signup" className="btn btn-link">
                  <span className="text-secondary">Sign up</span>
                </Link>
                <Link to="/MenuWorkoutProfile" className="btn btn-link">
                  <span className="text-secondary">Main Profile</span>
                </Link>
                <Link to="/MenuGymRun" className="btn btn-link">
                  <span className="text-secondary">Gym/run</span>
                </Link>
                <Link to="/MenuWeightCardio" className="btn btn-link">
                  <span className="text-secondary">Weight/Cardio</span>
                </Link>
                {/* <Link to="/Weight" className="btn btn-link">
                  <span className="text-secondary">Weightlifting</span>
                </Link> */}
                {/* <Link to="/Run" className="btn btn-link">
                  <span className="text-secondary">Run</span>
                </Link> */}
              </section>
            )}
          </div>
          {/* <div className="col-4 col-mr-auto">
                    <div id="top-filler"></div>
                        <img src={logo} className="App-logo" alt="logo" />
                        <h1 className="App-title">MERN Passport</h1>
                    </div> */}
        </header>
      </div>
    );
  }
}

export default Navbar;
