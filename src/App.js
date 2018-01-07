import React, { Component } from "react";

class App extends Component {
  state = {
    allSerials: [],
    page: ""
  };

  componentDidMount = () => {
    this.fetchSerials();
  };

  fetchSerials = () => {
    fetch("https://www.episodate.com/api/most-popular?page=1")
      .then(response => response.json())
      .then(response => this.setState({ allSerials: response.tv_shows }));
  };

  render() {
    return (
      <div className="app">
        {this.state.allSerials.map(serial => (
          <div className="serialWrapper" key={serial.id}>
            <div className="imageWrapper">
              <figure>
                <img
                  className="image"
                  src={serial.image_thumbnail_path}
                  alt=""
                />
              </figure>
            </div>
            <span>{serial.name}</span>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
