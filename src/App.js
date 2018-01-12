import React, { Component } from "react";
import { Route } from "react-router-dom";

import HomePage from "./HomePage";
import SerialPage from "./SerialPage";

class App extends Component {
  state = {
    allSerials: [],
    page: "",
    selectedSerialId: null
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

  addComment = (id, commentText) => {
    const newAllSerials = this.state.allSerials.map(serial => {
      if (serial.id === id) {
        return {
          ...serial,
          comments: [...serial.comments, { text: commentText, id: Date.now() }]
        };
      }
      return serial;
    });

    this.setState({ allSerials: newAllSerials });
  };

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
              addComment={this.addComment}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
