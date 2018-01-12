import React, { Component } from "react";
import { Route } from "react-router-dom";

import HomePage from "./HomePage";
import SerialPage from "./SerialPage";

class App extends Component {
  state = {
    serials: [],
    selectedSerialId: null,
    comments: {}
  };

  componentDidMount() {
    this.fetchSerials();
  }

  fetchSerials = () => {
    fetch("https://www.episodate.com/api/most-popular?page=1")
      .then(response => response.json())
      .then(response => {
        this.setState({
          serials: response.tv_shows.map(serial => ({
            ...serial,
            likes: 0
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
    const serials = this.state.serials.map(serial => {
      if (serial.id === id) {
        return { ...serial, likes: serial.likes + value };
      }
      return serial;
    });

    this.setState({
      serials: serials
    });
  };

  addComment = commentText => {
    const { selectedSerialId, comments } = this.state;

    this.setState({
      comments: {
        ...comments,
        [selectedSerialId]: [
          ...(comments[selectedSerialId] || []),
          { text: commentText, id: Date.now(), liked: false }
        ]
      }
    });
  };

  commentLikes = id => {
    const serialComments = this.state.comments[this.state.selectedSerialId].map(
      comment => {
        if (comment.id === id) {
          return {
            ...comment,
            liked: !comment.liked
          };
        }
        return comment;
      }
    );

    this.setState({
      comments: {
        ...this.state.comments,
        [this.state.selectedSerialId]: serialComments
      }
    });
  };

  render() {
    const selectedSerial = this.state.serials.find(
      s => s.id === this.state.selectedSerialId
    );
    const comments = this.state.comments[this.state.selectedSerialId] || [];
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={props => (
            <HomePage
              {...props}
              selectSerial={this.selectSerial}
              serials={this.state.serials}
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
              commentLikes={this.commentLikes}
              comments={comments}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
