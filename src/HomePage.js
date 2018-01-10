import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import SerialPage from "./SerialPage";

export default class HomePage extends React.Component {
  render() {
    return (
      <div className="allSerials">
        {this.props.allSerials.map(serial => (
          <Link
            to={`${serial.id}`}
            className="serialWrapper"
            key={serial.id}
            onClick={() => this.props.selectSerial(serial.id)}
          >
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
          </Link>
        ))}
      </div>
    );
  }
}
