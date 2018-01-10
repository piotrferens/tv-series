import React, { Component } from "react";
import { Route } from "react-router-dom";

import HomePage from "./HomePage";
import SerialPage from "./SerialPage";

class App extends Component {
  state = {
    allSerials: [],
    page: "",
    selectedSerialId: null,
    comment: ""
  };

  componentDidMount() {
    this.fetchSerials();
  }

  fetchSerials = () => {
    fetch("https://www.episodate.com/api/most-popular?page=1")
      .then(response => response.json())
      .then(response => {
        this.setState({
          allSerials: response.tv_shows.map(serial => ({
            ...serial,
            likes: 0,
            comments: []
          }))
        });
      });
  };

  selectSerial = id => {
    this.setState({
      selectedSerialId: id
    });
  };

  handelLike = (id, value) => {
    const allSerials = this.state.allSerials.map(e => {
      if (e.id === id) {
        return { ...e, likes: e.likes + value };
      }
      return e;
    });

    this.setState({
      allSerials: allSerials
    });
  };
  onComment = event => {
    const { value } = event.target;
    this.setState({ comment: value });
  };
  addComments = id => {};

  render() {
    const selectedSerial = this.state.allSerials.find(
      s => s.id === this.state.selectedSerialId
    );
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={props => (
            <HomePage
              {...props}
              selectSerial={this.selectSerial}
              allSerials={this.state.allSerials}
            />
          )}
        />
        <Route
          exact
          path="/:serial"
          render={props => (
            <SerialPage
              {...props}
              selectSerial={this.selectSerial}
              selectedSerial={selectedSerial}
              handelLike={this.handelLike}
              onComment={this.onComment}
              comment={this.state.comment}
              // addComments={this.addComments}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
