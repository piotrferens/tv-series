import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import HomePage from "./HomePage";
import SerialPage from "./SerialPage";

class App extends Component {
  state = {
    allSerials: [],
    page: "",
    selectedSerial: null
  };

  componentDidMount = () => {
    this.fetchSerials();
  };

  fetchSerials = () => {
    fetch("https://www.episodate.com/api/most-popular?page=1")
      .then(response => response.json())
      .then(response => this.setState({ allSerials: response.tv_shows }));
  };

  selectSerial = id => {
    const correspondig = this.state.allSerials.find(s => s.id === id);
    this.setState({ selectedSerial: correspondig });
  };

  render() {
    const serialName = this.state.allSerials.map(e => e.name);
    console.log(serialName);

    const serialName1 = this.state.allSerials[0];
    console.log(serialName1);

    return (
      <Router>
        <div className="app">
          <Route
            exact
            path="/"
            render={props => (
              <HomePage
                selectSerial={this.selectSerial}
                allSerials={this.state.allSerials}
              />
            )}
          />
          <Route
            exact
            path="/:serial"
            render={props => (
              <SerialPage selectedSerial={this.state.selectedSerial} />
            )}
          />
        </div>
      </Router>
    );
  }
}

export default App;
