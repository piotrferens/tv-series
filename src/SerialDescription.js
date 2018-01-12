import React from "react";

export default class SerialDescription extends React.Component {
  render() {
    return (
      <div className="serialDescription">
        <span>{this.props.selectedSerial.name} </span>
        <span>{this.props.selectedSerial.country} </span>
        <span>{this.props.selectedSerial.network} </span>
        <span>Likes: {this.props.selectedSerial.likes}</span>
      </div>
    );
  }
}
